#!/usr/bin/python3

# Invoke as
#    make-release-page.py _releases/release-Mmmpp.md
# axel@cern.ch, 2020-06-25

import sys
import re
import os
import subprocess
import datetime
import time
from inspect import currentframe, getframeinfo
import urllib.request
from html.parser import HTMLParser

class Version:
    """
    A class representing the ROOT version, with different formatting.
    All formats skip a potential leading 'v'!
    """
    def __init__(self, versionstr):
        """
        Expects versionstr like "62202".
        """
        regexVersion = re.compile(r"^(\d{5})(-.*)?$")
        match = regexVersion.match(versionstr)
        if not match:
            raise ValueError(F'Invalid version string "{versionstr}" format, expected "62212" or "62212-rc1".')
        if len(match.groups()) != 2:
            raise ValueError(F'Cannot parse version string "{versionstr}" ({match.groups()}), expected "62212".')
        versionstrNoExt = match.groups()[0]
        versionExt = match.groups()[1]
        if len(versionstrNoExt) != 5:
            raise ValueError(F'Invalid version number part "{versionstr}" length, expected format "62212".')
        try:
            int(versionstrNoExt)
        except:
            raise ValueError(F'Invalid version number part "{versionstrNoExt}", expected format "62212".')
        self.major = versionstrNoExt[0]
        self.minor = versionstrNoExt[1:3]
        self.patch = versionstrNoExt[3:]
        if versionExt:
            self.suff = versionExt
        else:
            self.suff = ''

    def forDiagnostic(self):
        """
        Name as shown to users: 6.22/00-rc1
        """
        return F'{self.major}.{self.minor}/{self.patch}{self.suff}'

    def forTag(self):
        """
        Name as used in tags: 6-22-00-rc1
        """
        return F'{self.major}-{self.minor}-{self.patch}{self.suff}'

    def forFilename(self):
        """
        Name as used in tags: 6.22.00-rc1
        """
        return F'{self.major}.{self.minor}.{self.patch}{self.suff}'

    def forDoxygen(self):
        """
        Name as used by https://root.cern/doc/v622/: 622
        """
        return F'{self.major}{self.minor}'

    def forAnchor(self):
        """
        Name as used by html anchor: 6.2200
        """
        return F'{self.major}.{self.minor}{self.patch}'

    def branchName(self):
        """
        Relevant branch name: 6-22-00-patches
        """
        return F'{self.major}-{self.minor}-00-patches'


def parseVersion(outfileName):
    """
    Given the output file name, determine which version the page is generated for.
    """
    regexVersion = re.compile(r"^(_releases/)?release-(\d{5}(-rc.)?).md")
    match = regexVersion.match(outfileName)
    if not match:
        raise ValueError(F'Cannot parse version from filename "{outfileName}", expected format `release-Mmmpp.md` (with "Mmmpp" being digits)!')
    if len(match.groups()) != 3:
        raise ValueError(F'Cannot parse version from filename "{outfileName}", matching error ({match.groups()})!')
    return Version(match.groups()[1])

def checkOutputFile(outfileName):
    """
    Check that the output filename does not yet exist.
    """
    if os.path.exists(outfileName):
        raise FileExistsError(F"Output file {outfileName} already exists; refusing to overwrite!")

def getCvmfsInfo(version):
    """
    Return parent path and the existing artifact subdirs in /cvmfs for the specified version.
    """
    path = F"/cvmfs/sft.cern.ch/lcg/app/releases/ROOT/{version.forFilename()}"
    if not os.path.exists(path):
        raise FileNotFound(F'Cannot find directory ${path} - did you deploy to cvmfs already?')
    artifacts = []
    for dirname in os.listdir(path):
        if os.path.isdir(os.path.join(path, dirname)):
            if dirname[0] == '.':
                continue
            if dirname == 'src':
                continue
            artifacts.append(dirname)
    artifacts.sort()
    return [path, artifacts]

def getDownloadInfo(version):
    """
    Collect available binaries on https://root.cern.
    """
    class DownloadParser(HTMLParser):
        def __init__(self, version):
            HTMLParser.__init__(self)
            self.version = 'root_v' + version.forFilename()
            self._most_recent_binary = None
            self.binaries = []
            self.source = None

        def handle_starttag(self, tag, attrs):
            if tag != 'a':
                return
            for k,v in attrs:
                if k == 'href':
                    if v.startswith(self.version):
                        self._most_recent_binary = v
                    break

        def handle_data(self, data):
            if self._most_recent_binary and data[-1] in 'kMG':
                try:
                    size = int(data[:-1]) # make sure it's a number
                except:
                    return
                if self._most_recent_binary.endswith('.source.tar.gz'):
                    self.source = (self._most_recent_binary, data)
                else:
                    self.binaries.append((self._most_recent_binary, data))
                self._most_recent_binary = None

    urlbase = 'https://root.cern/download/'
    with urllib.request.urlopen(urlbase) as response:
        html = response.read()
        parser = DownloadParser(version)
        parser.feed(html.decode('utf-8'))
        return (urlbase, parser.source, parser.binaries)


def generateHeader(outfile, version):
    """
    Write the header of the release page, excluding download links.
    """
    outfile.write(F"""\
---
layout: releases
version: {version.forDiagnostic()}
release_date: {datetime.date.fromtimestamp(time.time()).isoformat()}
state:

toc: true
toc_sticky: true
sidebar:
  nav: "releases"
---


## Release Notes

The release notes for this release can be found [here](https://root.cern/doc/v{version.forDoxygen()}/release-notes.html#release-{version.forAnchor()}).
""")

def binaryNameToTitle(filename):
    """
    Convert "root_v6.20.04.Linux-centos7-x86_64-gcc4.8.tar.gz" to "CentOS 7"
    """
    regexName = re.compile(r'^root_v[0-9.]+(-[^.]+)?(.*)[.](tar.gz|pkg|zip|exe|deb|rpm)$')
    match = regexName.match(filename)
    if not match:
        print(F'ERROR: cannot parse platform name for {filename}')
        return filename
    platformCompiler = match.groups()[1]
    if not platformCompiler:
        print(F'ERROR: cannot extract platform name for {filename}')
        return filename
    if platformCompiler.startswith('Linux'):
        regexLinux = re.compile(r'^Linux-([^-]+)-([^-]+)-(.+)$')
        matchLinux = regexLinux.match(platformCompiler)
        if not matchLinux:
            print(F'ERROR: cannot parse Linux distro for {filename}')
            return filename
        (distro, arch, comp) = matchLinux.groups()
        if not distro:
            print(F'ERROR: cannot extract Linux distro for {filename}')
            return filename
        if not arch:
            print(F'ERROR: cannot extract Linux architecture for {filename}')
            return filename
        if not comp:
            print(F'ERROR: cannot extract Linux compiler for {filename}')
            return filename
        regexDistroVers = re.compile(r'^([^0-9]+)([0-9.]+)$')
        matchDistroVers = regexDistroVers.match(distro)
        if not matchDistroVers:
            print(F'ERROR: cannot extract Linux distro version for {filename}')
            return filename
        (distroName, distroVersion) = matchDistroVers.groups()
        if arch == 'x86_64':
            arch = ''
        else:
            arch = ' ' + arch
        distroName = distroName.capitalize()
        if distroName == 'Centos':
            distroName = 'CentOS'
        return F"{distroName} {distroVersion}{arch}"
    elif platformCompiler.startswith('macosx64'):
        regexMacOSVers = re.compile('^macosx64-([^-]+)-clang([0-9]+).*$')
        matchMacOSVers = regexMacOSVers.match(platformCompiler)
        if not matchMacOSVers:
            print(F'ERROR: cannot parse macOS distro for {filename}')
            return filename
        (macOSVers, comp) = matchMacOSVers.groups()
        if not macOSVers:
            print(F'ERROR: cannot extract macOS version for {filename}')
            return filename
        if not comp:
            print(F'ERROR: cannot extract macOS compiler for {filename}')
            return filename
        # see also https://gist.github.com/yamaya/2924292
        xcodeVers = int(comp[:-1])

        return F"macOS {macOSVers} Xcode {xcodeVers}"
    elif platformCompiler.startswith('win32'):
        regexWin = re.compile(r'^win32[.](vc[0-9]+)(.debug)?')
        matchWin = regexWin.match(platformCompiler)
        if not matchWin:
            print(F'ERROR: cannot parse Win32 MSVC version for {filename}')
            return filename
        (vcVers, debug) = matchWin.groups()
        if not debug:
            debug = ''
        else:
            debug = ' (debug)'
        # see https://en.wikipedia.org/wiki/Microsoft_Visual_C%2B%2B#Internal_version_numbering
        vcVersYear = {
            'vc16': 2019,
            'vc15': 2017,
            'vc14': 2015
        }
        frameinfo = getframeinfo(currentframe())
        try:
            versYear = vcVersYear[vcVers]
        except:
            print(F'ERROR: unhandled MSVC version {vcVers}.')
            print(F'       check https://en.wikipedia.org/wiki/Microsoft_Visual_C%2B%2B#Internal_version_numbering')
            print(F'       and add the appropriate Visual Studio year / version here: {frameinfo.filename}:{frameinfo.lineno}')
            return filename

        return F"**preview** Windows Visual Studio {versYear}{debug}"
    else:
        frameinfo = getframeinfo(currentframe())
        print(F'ERROR: unknown platform for {filename}. Please edit {frameinfo.filename}:{frameinfo.lineno}')
        return filename


def generateDownloadInfo(outfile, version, downloadInfo):
    """
    Write out source and binary download links.
    """
    if not downloadInfo[1]:
        print(F"ERROR: cannot find source tarball for version {version.forDiagnostic()}")
    else:
        (name, size) = downloadInfo[1]
        outfile.write(F"""
## Source distribution

| Platform       | Files | Size |
|-----------|-------|-----|
| source | [{name}]({downloadInfo[0]}{name}) | {size} |

""")
    outfile.write(F"""
## Binary distributions

| Platform       | Files | Size |
|-----------|-------|-----|
""")
    for binary, size in downloadInfo[2]:
        outfile.write(F"""\
| {binaryNameToTitle(binary)} | [{binary}]({downloadInfo[0]}{binary}) | {size} |
""")

def generateCvmfsInfo(outfile, version, cvmfsInfo):
    """
    Write out location on cvmfs.
    """
    outfile.write(F"""
## Installations in CVMFS

Standalone installations with minimal external dependencies are available at:
~~~
""")
    (path, artifacts) = cvmfsInfo
    for artifact in artifacts:
        outfile.write(F"""\
{path}/{artifact}
""")
    centos7Artifact = None
    for artifact in artifacts:
        if 'centos7' in artifact:
            outfile.write(F"""\
~~~


## Example for setting up ROOT from CVMFS

~~~
. {path}/{artifact}/bin/thisroot.sh
~~~
""")
            break

def generateFooter(outfile, version):
    """
    Write out git and Windows info
    """
    outfile.write(F"""
## Git

The entire ROOT source can be obtained from our public Git repository:

~~~
git clone https://github.com/root-project/root.git
~~~
The release specific tag can be obtained using:
~~~
cd root
git checkout -b v{version.forTag()} v{version.forTag()}
~~~


## Windows

Windows 10/7/... are supported. We offer two packaging types:

 * **exe**: a regular Windows installer package also setting up the required environment variables. With uninstall via "Control Panel" / "Add or Remove Programs". Simply download and start. You can double-click ROOT to run it; ROOT files get registered with Windows.
 * **tar**: unpack e.g. with [7zip](https://www.7-zip.org). Start ROOT in a Microsoft Visual Studio Prompt (in Start / Programs / Microsoft Visual Studio / Tools). If you installed ROOT to C:\\root then call C:\\root\\bin\\thisroot.bat before using ROOT to set up required environment variables.

### Important installation notes

 * You must download the binary built with the exact same version of Visual Studio than the one installed on your system.
 * Do not untar in a directory with a name containing blank characters.
 * Take the release version if performance matters.
 * If you want to debug your code you need the ROOT debug build (you cannot mix release / debug builds due to a Microsoft restriction).
""")

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print(F"USAGE: {sys.argv[0]} _releases/release-Mmmpp.md")
        exit(1)
    outfileName = sys.argv[1]
    checkOutputFile(outfileName)
    version = parseVersion(outfileName)
    print(F"INFO: generating release page for version {version.forDiagnostic()}")
    with open(outfileName, "w") as outfile:
        cvmfsInfo = getCvmfsInfo(version)
        downloadInfo = getDownloadInfo(version)
        generateHeader(outfile, version)
        generateDownloadInfo(outfile, version, downloadInfo)
        generateCvmfsInfo(outfile, version, cvmfsInfo)
        generateFooter(outfile, version)
