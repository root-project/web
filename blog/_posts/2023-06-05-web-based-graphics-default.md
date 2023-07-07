---
title: "Interactive, web-based canvas is now the default in ROOT"
layout: archive
author: Sergey Linev
---

After a long period of development and testing we decided to switch to the web-based `TCanvas`
implementation by default in the ROOT master version. It has been present in the ROOT for a
while (since 2017) and used already in the web-based TBrowser, which you have probably seen already.

What has changed ? Now when starting a ROOT session and displaying any object in `TCanvas`,
the default system web browser will start and the object will be drawn there using the JavaScript
ROOT functionality. The look and feel for basic objects, like histograms and graphs, will not
change much – all the drawing options and styles are supported as in the original graphics.
You can compare the two following screen shots made with the same macro – one is original
ROOT graphics, other is web-based one.

<center>
<img src="{{'/assets/images/plain_canvas.png' | relative_url}}" alt="Plain Canvas" style="width: 80%" width="1600" height="749" />
<img src="{{'/assets/images/web_canvas.png' | relative_url}}" alt="Web Canvas" style="width: 80%" width="1600" height="749" />
</center>

What are the benefits of using the web-based canvas?
 1.  The painting is fully decoupled from the main program and runs asynchronously.
 2.  As the display is just normal web browser, the painting is the same on all platforms
     supported by ROOT natively as Linux/Mac/Windows, but also on many others where ROOT may
     not run at all – like all kinds of smartphones and tablets.
 3.  Threads safety - The object painting and the interactivity happen in the web browser and don't
     depend on the application state. With some little configuration efforts one can run different
     canvases from different threads.
 4.  Free from `gPad` problematic - lots of interactivity in original ROOT graphics were built
     around this global pointer. This made it difficult to use several canvases at the same time.
 5.  The Web is a very natural way for implementing remote displays. Instead of struggling with
     remote X11 one can just use a local web browser accessing remote applications through
     http. To ease configuration of `ssh` tunnels, we provide a simple `rootssh` utility which
     fully automates the configuration of such tunnels.
 6.  One can use QWebEngine (Qt5 and Qt6) to implement a fully local display without any http
     server in-between. This allows embedding any kind of ROOT web-based widgets into Qt
     applications on all platforms.

What about image production in batch?
For the moment we keep the old functionality, like when running ROOT with the `-b` flag, for image
production. Web-based canvas will be used for PNG/JPEG/SVG images creation by adding `--web`
flag when running ROOT. While image generation involves running web browsers in headless
mode, it takes time – approximately 1 second per image. We plan to provide a special API to
produce many images with one call – which should significantly improve performance.

What are drawbacks?
Probably you'll encounter minimal differences between drawing with native ROOT graphics and in
the web browsers. We do our best to make them similar as much as possible – and you can help
us by reporting the problems. Probably some very special usages of `TExec` objects (do you know about them?)
will not work as expected in web-based canvases. With a little help from us this can be
fixed and adjusted. For sophisticated use-cases with complex user-defined objects one could
consider implementing JavaScript-based painters for them.

We encourage all users to try this functionality and give us the feedback!