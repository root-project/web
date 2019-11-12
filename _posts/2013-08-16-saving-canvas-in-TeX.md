---
title: Saving Canvas as TeX
layout: archive
author: Olivier Couet
---

<img  src="{{'/assets/images/TTextDump.preview.png' | relative_url}}" style="float: right;" width="350" />



Being able to generate TeX graphics can be useful for several reasons:

  - To have an easy to modify the image, in particular the labels and titles (ASCII file).
  - To have the same font in all labels, legends, plot titles etc. as in the text body of
    a document.
  - Render Math formulae using TeX.

The TeX text engine is powerful and can render any complex math formulae. But more tricky
is the graphics rendering: lines, polygons, markers etc ... One possibility is to render
them using PDF or PostScript and render the text using TeX. But that’s not very practical
as two files are needed to render one picture. A better way is to use a dedicated environment
like PGF/TikZ.

_“ PGF ([A Portable Graphic Format for TeX](http://pgf.sourceforge.net/)) is a macro package
for creating graphics. It is platform- and format-independent and works together with the most
important TeX backend drivers, including pdftex and dvips. It comes with a user-friendly
syntax layer called TikZ. “_

The new class TTeXDump allows to generate PGF/TikZ files. To generate a such file in ROOT
it is enough to do:

{% highlight C++ %}
   gStyle->SetPaperSize(10.,10.);
   hpx->Draw();
   gPad->Print("hpx.tex");
{% endhighlight %}

Then, the generated file (`hpx.tex`) can be included in a LaTeX document (`simple.tex`) in
the following way:

{% highlight TeX %}
\documentclass{article}
\usepackage{tikz}
\usetikzlibrary{patterns}
\usetikzlibrary{plotmarks}
\title{A simple LaTeX example}
\date{July 2013}
\author{O.Couet}
\begin{document}
\maketitle
The following image as been generated using the TTeXDump class.
To include it in a LaTeX document it is enough to specify the following
three directives at the top of the LaTex document:
\begin{verbatim}
\usepackage{tikz}
\usetikzlibrary{patterns}
\usetikzlibrary{plotmarks}
\end{verbatim}
Then to include the picture ({\tt hpx.tex} in this case) in a LateX
 document it is done the usual way:
\begin{verbatim}
\scalebox{0.3}{\input{hpx.tex}}
\end{verbatim}
\par
\begin{figure}[htbp]
\begin{center}
\scalebox{0.5}{\input{hpx.tex}}
\caption{Image ({\tt hpx.tex}) generated thanks to {\tt TTeXDump}}
\end{center}
\end{figure}
\end{document}
{% endhighlight %}
