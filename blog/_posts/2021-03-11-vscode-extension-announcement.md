---
title: "View ROOT Files directly in VS Code!"
layout: archive
author: Alberto Pérez de Rada Fiol
---

As a heavy user of ROOT, many of the results of my data analysis are saved in ROOT Files and, honestly, I always found it a bit annoying to glance over them. The good news are that that isn't the case any longer! Let me present [ROOT File Viewer](https://marketplace.visualstudio.com/items?itemName=albertopdrf.root-file-viewer), an extension for [Visual Studio Code](https://code.visualstudio.com/) that makes use of the wonderful [JavaScript ROOT](https://github.com/root-project/jsroot) to display ROOT Files directly within VS Code, with just a click!

Before diving into the details, let us just quickly see the extension in action. Although the saying goes like:

> An image is worth a thousand words

I think that a GIF will serve us better this time:

![ROOT File Viewer in action]({{ '/assets/images/vscode_extension_announcement.gif' | relative_url }})

After seeing this, who would still want to open a terminal, launch ROOT, and create a `TBrowser` instead? And I haven't even mentioned yet that for this extension to work no local installation of ROOT is required!

If you just want to install the extension already and have a good time opening all your ROOT Files, you can do so by:

- Launching VS Code's `Quick Open` (`Ctrl + P`), pasting `ext install albertopdrf.root-file-viewer`, and pressing enter
- or searching `ROOT File Viewer` directly within VS Code's `Extensions` view (`Ctrl + Shift + X` or click on the `Extensions` icon in the `Activity Bar`)
- or running `code --install-extension albertopdrf.root-file-viewer` from the command line
- or... well, many other options!

And if you want to know more, just keep reading!

## Visual Studio Code

VS Code is a free, [open source](https://github.com/Microsoft/vscode/), and very popular code editor by developed by Microsoft with TypeScript, a superset of JavaScript. It runs on any operating system, supports many languages, has built in support for Git, and much more. Moreover, its functionality can easily be extended thanks to the [Extension API](https://code.visualstudio.com/api). This is where the fun begins!

In the case of the ROOT File Viewer extension, the [Custom Editor API](https://code.visualstudio.com/api/extension-guides/custom-editors) is leveraged to handle ROOT Files. The custom editor requires two parts: a view and a document model. The view of the file is implemented through the [Webview API](https://code.visualstudio.com/api/extension-guides/webview), and the document model is a custom `RootFileDocument` class which we will keep simple by implementing a `CustomReadonlyEditorProvider`, the `RootFileEditorProvider`. We could go deep into details here, but that is probably outside of the scope of this post.

## JavaScript ROOT

JavaScript ROOT brings ROOT to the browser. It is basically a drawing and I/O library that can be used to provide interactive plots and many other ROOT core functionalities, as can be seen on the [examples page](https://root.cern/js/).

ROOT File Viewer makes use of the `HierarchyPainter` object to do all the heavy lifting regarding the handling of the ROOT files and the drawing of the objects stored in it. It is configured with the `tabs` layout and it gets passed the user's VS Code theme background color so it integrates better with the editor.

## Implementation

The implementation of the extension boils down to how to glue the two awesome tools mentioned above together and, in all honesty, I tried to keep everything as simple as possible in order to have a proof of concept up and running quickly. All the magic happens on the `rootFileEditor.ts` file, which contains both the implementation of the custom document and the webview.

The `RootFileDocument` custom document is the object that gets created each time that a user opens a ROOT File document. For what it concerns us, it stores the path to the file that we want to create a view for.

The `RootFileEditorProvider` is were all the functionality is implemented, which can be summarized in:

- Letting VS Code know which view type is supporting
- Creating a custom document for each ROOT File that gets opened
- Managing all the webviews associated to a custom document
  - In our case, we only allow a webview per file
- Providing the actual content that is displayed on the webviews

This last point is where JavaScript ROOT comes into play, as all the custom editor provider does at this point is to create a template HTML document with an embedded script where JavaScript ROOT gets passed the ROOT File path and the customization options mentioned before. Everything else just *automagically* works!

If you would like, you can check out (and even contribute to) the source code on [ROOT File Viewer's GitHub repository](https://github.com/AlbertoPdRF/root-file-viewer). And, of course, you also can (and are encouraged to) open an issue if a bug arises or you have a feature suggestion!

## Updates

VS Code extensions receive automatic updates, so rest assured that you won't miss any cool future features that may come!

## Summary

To wrap everything up, with ROOT File Viewer I wanted to solve a pain point that I believe exists for more people than just me. I hope that glancing over the contents of a ROOT File is quicker and more practical now that this extension exists.

Working with such awesome tools as VS Code and JavaScript ROOT has been a ton of fun, and I would definitely recommend it to the geeks out there who enjoy getting to know new technologies and like to build things for people to interact with.

And, lastly, I would like to thank you for dedicating the time to read this post and everyone who has shown their support after the launch of ROOT File Viewer!
