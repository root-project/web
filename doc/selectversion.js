/// (c) Axel Naumann, CERN; 2020-03-02
/// Later updated by giacomo.parolini@cern.ch.
/// IMPORTANT NOTE: this script needs `versions.js` to also be included in order to work!
'use strict';

/// Configurable section.
/// Note that some configuration is in versions.js (notably, the latest release number). It is separate because it
/// also needs to be included in 404.html.

// What the master is called. Leave untouched if master has no doc.
const master = 'master';

/// Pathname part of the URL containing the different versioned doxygen
/// subdirectories. Must be browsable.
const urlroot = '/doc';
const urlrootdirs = urlroot.split('/').length;

// Convert a url directory (e.g. "v620") to a version number displayed on the
// web page (e.g. "6.20").
function url2label(versdir) {
   return versdir.replace(/^v(\d)/, 'v$1.');
}

function url2version(patharr) {
   // Given the directory array of a URL (i.e. without domain), extract the
   // version corresponding to the URL.
   // E.g. for `https://example.com/doc/master/classX.html`, the directory array
   // becomes `["doc", "master, "classX.html"]. This function might return
   // the second element, `master`.
   return patharr[patharr.length - urlrootdirs];
}

///=============================================================================

// Redirect from latest-stable to the actual latest release
let patharr = window.location.pathname.replace(/\/+/g, '/').split('/');

let versions = ["master", "latest-stable"];
for (let i = LATEST_VERSION; i >= FIRST_VERSION; i -= 2) {
   versions.push(`v${i}`);
}

// Index of the "latest-stable" element in `versions`. Never changes.
const LATEST_STABLE_IDX = 1;
// Index of the actual version that latest-stable redirects to in `versions`.
// It's either the one immediately after latest-stable or 2 places after it (depending
// whether the latest release is stable or not).
const LATEST_STABLE_REDIRECT_IDX = LATEST_STABLE_IDX + 1 + !LATEST_VERSION_IS_STABLE;

let thisvers = url2version(patharr);
$('.dropbtn').html("Version " + url2label(thisvers));

let baseUrl = patharr.slice(0, urlrootdirs).join('/');
let dropdown = document.querySelector('.dropdown-content');
let latestStableLink;
for (let i = 0; i < versions.length; ++i) {
   let version = versions[i];
   let a = document.createElement('a');
   a.classList.add('verslink');
   a.innerText = url2label(version);
   dropdown.append(a);

   // latest-stable redirects to the actual latest stable version
   if (i === LATEST_STABLE_IDX) {
      // this gets checked already by the actual latest version, so don't waste
      // an AJAX request for it.
      latestStableLink = a;
      continue;
   }

   // Enable all links that are reachable by a HEAD request.
   let url = `${baseUrl}/${version}/${patharr[patharr.length-1]}`;
   let request = new XMLHttpRequest();
   request.open('HEAD', url, true);
   request.onreadystatechange = () => {
      let linksToChange = [a];

      // Normally we only enable the link relative to the HEAD request we just did, but in case this is
      // the latest stable version we also enable the "latest-stable" link.
      if (i === LATEST_STABLE_REDIRECT_IDX)
         linksToChange.push(latestStableLink);

      for (let link of linksToChange) {
         if (request.readyState === 4 && request.status === 404) {
            link.style['color'] = "gray";
            link.style['text-decoration'] = 'line-through';
            link.href = 'javascript:void(0)';
         } else {
            link.href = url;
         }
      }
   };
   request.send();
}
