---
title: Object ownership
layout: single
sidebar:
  nav: "manual"
toc: true
toc_sticky: true
---

With "owning" an object, we mean being responsible for its lifetime, that is,  taking care of deleting it when it's no longer in use.
For new code, we advise to use objects on the stack or smart pointers like `std::unique_ptr`; but some of ROOT's types historically were managed differently.
To prevent memory leaks and multiple attempts to delete an object, you need to know which objects are owned by ROOT and which are owned by the user.

By the end of this page you will know why
{% highlight C++ %}
void ownership() {
   TFile file("file.root");
   auto hist = new TH1F("hist", "hist", 10, 0., 1.);
   hist->Draw();
}
{% endhighlight %}
shows an empty canvas in ROOT 6 after calling `ownership()`.

## ROOT 6: Ownership by the current directory `gDirectory`

When a [histogram](https://root.cern/doc/master/group__Hist.html){:target="_blank"}, a {% include ref class="TTree" %} or a {% include ref class="TEventList" %} is created in ROOT 6, it registers itself to the current directory [`gDirectory`](https://root.cern/doc/master/classTDirectory.html).
In many cases that is the {% include ref class="TFile" %} that was opened most recently.
This directory now owns the object, and will take care of deleting it.

_**Example**_

In ROOT 6, when you create a {% include ref class="TFile" %} object, it becomes the current directory (`gDirectory`).
If you subsequently create a new histogram, this histogram is owned by the current directory:
the histogram is deleted when the {% include ref class="TFile" %} object is destructed.

In the following example, only an empty canvas is shown because the {% include ref class="TH1F" %} histogram is owned by the {% include ref class="TFile" %} object.
{% highlight C++ %}
void ownership() {
   TFile file("file.root");
   auto hist = new TH1F("hist", "hist", 10, 0., 1.);
   hist->Draw();
   // At the end of the function, `file` is destructed.
   // The destructor `~TFile` deletes `hist`: no histogram is left.
}
{% endhighlight %}

To change the directory of a histogram (same applies to trees and event lists), one can use `SetDirectory()`:

{% highlight C++ %}
h->SetDirectory(newDir);
{% endhighlight %}

One can remove a histogram from a directory by using `SetDirectory(nullptr)`. Once a histogram is removed from the directory, it will not be deleted when the directory is deleted. Instead, you have to delete the histogram yourself to prevent memory leaks.

## ROOT 7: Ownership by the user
In ROOT 7, the ownership model will be changed to explicitly hand ownership to the user, because objects such as histograms will not anymore register themselves to the current directory.
Users can still decide to pass the ownership to ROOT directories or ROOT files if they want these to manage an object using `SetDirectory(someDirectory)`.

The ROOT 7 behaviour can be tested already in ROOT 6 using [`DisableObjectAutoRegistration()`](https://root.cern/doc/master/namespaceROOT_1_1Experimental.html#a74fae8f88965b8c79dfbd25bebbce3a4).
Conversely, ROOT 7 can be switched to ROOT 6 behaviour using [`EnableObjectAutoRegistration()`](https://root.cern/doc/master/namespaceROOT_1_1Experimental.html#a15c715c36cf189a6d15ae366da307f23).

_**Example**_

In ROOT 7 mode, the canvas shows the histogram because it is owned by the `unique_ptr` which lives longer than the function `ownership()`:

{% highlight C++ %}
std::unique_ptr<TH1> hist;
void ownership() {
   ROOT::Experimental::DisableObjectAutoRegistration(); // Make ROOT 6 behave like ROOT 7
   TFile file("file.root");
   hist.reset(new TH1F("hist", "hist", 10, 0., 1.));
   hist->Draw();
}
{% endhighlight %}

### Permanently switching to ROOT 7 mode (ownership by the user)
In ROOT v6.40, ROOT can be permanently switched to use ROOT 7 mode using environment variables or by setting defaults in a .rootrc file.
For details, consult [`DisableObjectAutoRegistration()`](https://root.cern/doc/master/namespaceROOT_1_1Experimental.html#a74fae8f88965b8c79dfbd25bebbce3a4)

### `TH1::AddDirectory`

To prevent histograms from being added to the current directory, users could in the past call

{% highlight C++ %}
TH1::AddDirectory(false);
{% endhighlight %}

We advise to instead use `DisableObjectAutoRegistration()`, because it is thread local, and covers more objects such as TGraph2D, TEfficiency, RooPlot and similar.
For details, see the documentation of [`DisableObjectAutoRegistration()`](https://root.cern/doc/master/namespaceROOT_1_1Experimental.html#a74fae8f88965b8c79dfbd25bebbce3a4).

## Ownership by `gROOT`

The global [`gROOT`](https://root.cern/doc/master/classTROOT.html) object has several utility collections, for instance of all functions `gROOT->GetListOfFunction()`, canvases `gROOT->GetListOfCanvases()`, and files `gROOT->GetListOfFiles()`.
Objects that are members of these collections and are still "alive" during program tear-down are deleted by `gROOT`.
If they get deleted earlier, they de-register themselves from `TROOT`'s lists ("recursive remove") to prevent double deletions.

## Ownership by creating objects

When an object creates another, the creating object is often the owner of the created one.
This will be documented in the function creating the other object.

_**Example**_

{% highlight C++ %}
myHisto->Fit("gaus")
{% endhighlight %}

The call of `Fit()` copies the global {% include ref class="TF1" %} Gaussian function and attaches the copy to the histogram. When the histogram is deleted, the copy is deleted too.
