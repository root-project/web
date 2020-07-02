---
title: "Requested Cling Features"
layout: single
sidebar:
  nav: "cling"
---

There are several features that we were unable to implement in cling's predecessor called CINT - both for time and design reasons. Most of them have been addressed by moving to cilng!

<ul>
<li>bug 89308: <a href="https://savannah.cern.ch/bugs/?89308">CINT: #include broken for code fragments</a></li>
<li>bug 89263: <a href="https://savannah.cern.ch/bugs/?89263">CINT does not handle array of pointers to const char correctly</a></li>
<li>bug 86253: <a href="https://savannah.cern.ch/bugs/?86253">Request for standard format for templated constructors of templated classes in LinkDef</a></li>
<li>bug 82336: <a href="https://savannah.cern.ch/bugs/?82336">TH2D::ProjectionX() using TH1::AddDirectory(false) is dependent on drawing</a></li>
<li>bug 82110: <a href="https://savannah.cern.ch/bugs/?82110">rootcint forgets about defined classes while generating a dictionary</a></li>
<li>bug 80996: <a href="https://savannah.cern.ch/bugs/?80996">ROOT::Cintex::Cintex::Enable() fails</a></li>
<li>bug 78562: <a href="https://savannah.cern.ch/bugs/?78562">weird warning for dereference of const pointer</a></li>
<li>bug 74668: <a href="https://savannah.cern.ch/bugs/?74668">Dictionary for templates with STL arguments or typedefs</a></li>
<li>bug 72655: <a href="https://savannah.cern.ch/bugs/?72655">const_iterator cannot be set after declaration</a></li>
<li>bug 70542: <a href="https://savannah.cern.ch/bugs/?70542">CINT segfaults during compilation on Linux ppc64</a></li>
<li>bug 70136: <a href="https://savannah.cern.ch/bugs/?70136">CINT Array Initialization and continue Statement </a></li>
<li>bug 68675: <a href="https://savannah.cern.ch/bugs/?68675">Confusion with the 'new' operator</a></li>
<li>bug 67392: <a href="https://savannah.cern.ch/bugs/?67392">problems with indexing of dynamic vector</a></li>
<li>bug 63550: <a href="https://savannah.cern.ch/bugs/?63550">Failure to compile a simple macro</a></li>
<li>bug 59099: <a href="https://savannah.cern.ch/bugs/?59099">Segv with CINT, while compiled code runs fine</a></li>
<li>bug 59016: <a href="https://savannah.cern.ch/bugs/?59016">PyROOT fails to call overloaded method of base class</a></li>
<li>bug 58870: <a href="https://savannah.cern.ch/bugs/?58870">CINTEX fails at run-time with GNU/Linux on SPARC due to wrong offset detection code</a></li>
<li>bug 58453: <a href="https://savannah.cern.ch/bugs/?58453">ROOT/CINT implicitly unloads more shared libraries than are requested.</a></li>
<li>bug 58236: <a href="https://savannah.cern.ch/bugs/?58236">Initialization of array in loop after operator "continue" </a></li>
<li>bug 55823: <a href="https://savannah.cern.ch/bugs/?55823">ACLIC fails for certain template typedefs</a></li>
<li>bug 55109: <a href="https://savannah.cern.ch/bugs/?55109">the custom "abs" method hides the "standard" abs</a></li>
<li>bug 53872: <a href="https://savannah.cern.ch/bugs/?53872">Lack of original C/C++ standard code</a></li>
<li>bug 53270: <a href="https://savannah.cern.ch/bugs/?53270">CINT hangs when pasting &gt; 1202 characters from clipboard</a></li>
<li>bug 52064: <a href="https://savannah.cern.ch/bugs/?52064">enumeration used as template argument do not expand properly in generated code</a></li>
<li>bug 51671: <a href="https://savannah.cern.ch/bugs/?51671">Using Reflex, the dictionary entry for std::string shows inconsistent behaviour</a></li>
<li>bug 48820: <a href="https://savannah.cern.ch/bugs/?48820">make fails on compiling cint/cint/src/pragma.cxx at line 198 (internal compiler error)</a></li>
<li>bug 44738: <a href="https://savannah.cern.ch/bugs/?44738">Some cint dictionary generation problems with templates</a></li>
<li>bug 43353: <a href="https://savannah.cern.ch/bugs/?43353">Friendly template functions do not get access to private data</a></li>
<li>bug 43328: <a href="https://savannah.cern.ch/bugs/?43328">Integral of histogram read from file not evaluated</a></li>
<li>bug 42218: <a href="https://savannah.cern.ch/bugs/?42218">A method of a class is not recognized when a #define constant is used</a></li>
<li>bug 41608: <a href="https://savannah.cern.ch/bugs/?41608">#define involving { or } seems to fail</a></li>
<li>bug 38724: <a href="https://savannah.cern.ch/bugs/?38724">A using clause fails in a class in another namespace</a></li>
<li>bug 37786: <a href="https://savannah.cern.ch/bugs/?37786">rootcint segfault with 4-fold map</a></li>
<li>bug 35969: <a href="https://savannah.cern.ch/bugs/?35969">TString ReplaceAll then convert to string</a></li>
<li>bug 35699: <a href="https://savannah.cern.ch/bugs/?35699">4 dimensional array of classes do not work</a></li>
<li>bug 35268: <a href="https://savannah.cern.ch/bugs/?35268">TH1 can not take dynamics parameters for "Scale"</a></li>
<li>bug 35103: <a href="https://savannah.cern.ch/bugs/?35103">vector<t> in interpreted mode doesn't work when a compiled class with function returning vector<t> is loaded</t></t></a></li>
<li>bug 34770: <a href="https://savannah.cern.ch/bugs/?34770">Strange loop behaviour with initialized arrays</a></li>
<li>bug 34481: <a href="https://savannah.cern.ch/bugs/?34481">Many problems with vector<t>::resize(int) and vector<t>::resize(int,value) in CINT.</t></t></a></li>
<li>bug 34002: <a href="https://savannah.cern.ch/bugs/?34002">Corrupted object pointer array passing in CINT 5.18/00a</a></li>
<li>bug 33108: <a href="https://savannah.cern.ch/bugs/?33108">TString::Data() + Loop + CINT =&gt; Problem</a></li>
<li>bug 32403: <a href="https://savannah.cern.ch/bugs/?32403">CINT fails to call operator()</a></li>
<li>bug 32287: <a href="https://savannah.cern.ch/bugs/?32287">CINT methods on temp objects</a></li>
<li>bug 32153: <a href="https://savannah.cern.ch/bugs/?32153">White space causes a problem when a constructor is called as an argument</a></li>
<li>bug 32047: <a href="https://savannah.cern.ch/bugs/?32047">Reflex::Properties lookup from Reflex::Type</a></li>
<li>bug 31838: <a href="https://savannah.cern.ch/bugs/?31838">Problems with genreflex on MacOS</a></li>
<li>bug 31591: <a href="https://savannah.cern.ch/bugs/?31591">Argument of templated return type used without namespace </a></li>
<li>bug 31555: <a href="https://savannah.cern.ch/bugs/?31555">ACLiC doesn't know about vector in file generated by TTree::MakeClass()</a></li>
<li>bug 30681: <a href="https://savannah.cern.ch/bugs/?30681">default argument evaluation for overridden function</a></li>
<li>bug 30604: <a href="https://savannah.cern.ch/bugs/?30604">A class with a private destructor seems to be deleted.</a></li>
<li>bug 30600: <a href="https://savannah.cern.ch/bugs/?30600">A "using" statement is not preperly interpreted.</a></li>
<li>bug 30008: <a href="https://savannah.cern.ch/bugs/?30008">peculiar CINT crash on windows / ROOT head</a></li>
<li>bug 27874: <a href="https://savannah.cern.ch/bugs/?27874">[reflex] generating dictionary for mi diamond causes compile pb</a></li>
<li>bug 27594: <a href="https://savannah.cern.ch/bugs/?27594">Scoping troubles in Cint</a></li>
<li>bug 26297: <a href="https://savannah.cern.ch/bugs/?26297">Redirect stdout and stderr to memory</a></li>
<li>bug 26077: <a href="https://savannah.cern.ch/bugs/?26077">#define + for + sprintf</a></li>
<li>bug 24270: <a href="https://savannah.cern.ch/bugs/?24270">std::map emulation (no dictionary) backward incompatible with Reflex dictionary.</a></li>
<li>bug 24118: <a href="https://savannah.cern.ch/bugs/?24118">genreflex does not work for member datatypes of a typdef class</a></li>
<li>bug 20422: <a href="https://savannah.cern.ch/bugs/?20422">rootmap.* file does not work properly in CMS</a></li>
<li>bug 18282: <a href="https://savannah.cern.ch/bugs/?18282">parse error in method call</a></li>
<li>bug 17285: <a href="https://savannah.cern.ch/bugs/?17285">Namespace and class with the same name causes I/O problem</a></li>
<li>bug 14587: <a href="https://savannah.cern.ch/bugs/?14587">Incorrect scope interpretation</a></li>
<li>bug 14502: <a href="https://savannah.cern.ch/bugs/?14502">pointers of histogram in cint become mysteriously the same</a></li>
<li>bug 14400: <a href="https://savannah.cern.ch/bugs/?14400">Problems with operators in nested classes</a></li>
<li>bug 12165: <a href="https://savannah.cern.ch/bugs/?12165">The CINT built-in C functions become hiden </a></li>
<li>bug 11297: <a href="https://savannah.cern.ch/bugs/?11297">STL: vector of pair works if compiled, but not if interpreted</a></li>
</ul>

This list was generated by exporting all CINT and Dictionary bugs that got tagged as "WONTFIX" from Savannah. If you want to add something, please tell us at the forum or at <a href="mailto:roottalk@cern.ch">roottalk@cern.ch</a>.