---
title: Object ownership
layout: single
sidebar:
  nav: "manual"
toc: true
toc_sticky: true
---

An object ownership means the permission to delete it.
Modern code should use local variables or `std::unique_ptr`; but some of ROOT's types are managed differently.
To prevent memory leaks and multiple attempts to delete an object, you need to know which objects are owned by ROOT and which are owned by you.

By the end of this page you will know why
{% highlight C++ %}
void ownership() {
   TFile file("file.root");
   auto hist = new TH1F("hist", "hist", 10, 0., 1.);
   hist->Draw();
}
{% endhighlight %}
shows an empty canvas after calling `ownership()`.

## Ownership by current directory `gDirectory`

When a [histogram](https://root.cern/doc/master/group__Hist.html){:target="_blank"}, a {% include ref class="TTree" %} or a {% include ref class="TEventList" %} is created, it is added by default to the list of objects in the current directory [`gDirectory`](https://root.cern/doc/master/classTDirectory.html).
In many cases that is the {% include ref class="TFile" %} that was opened most recently.

_**Example**_

Changing the directory of a histogram (same applies to trees and event lists):

{% highlight C++ %}
h->SetDirectory(newDir);
{% endhighlight %}

You can remove a histogram from a directory by using `SetDirectory(nullptr)`. Once a histogram is removed from the directory, it will not be deleted when the directory is deleted. Instead, you have to delete the histogram yourself to prevent memory leaks.

### Disabling ROOT's automatic ownership management for histograms

To prevent histograms from being added to the current directory, call the static function

{% highlight C++ %}
TH1::AddDirectory(kFALSE);
{% endhighlight %}

Now you own all histogram objects and you will need to delete them, for instance through the use of `std::unique_ptr`.
You can still set the directory of a histogram by calling `SetDirectory()` once it has been created.

_**Example**_

When you create a {% include ref class="TFile" %} object, it becomes the current directory (`gDirectory`).
If you subsequently create a new histogram, this histogram is now owned by the current directory:
the histogram is deleted when the {% include ref class="TFile" %} object destructed.

In the following example, only an empty canvas is shown because the {% include ref class="TH1F" %} histogram is owned by the current directory (`gDirectory`) corresponding to the {% include ref class="TFile" %} object.
{% highlight C++ %}
void ownership() {
   TFile file("file.root");
   auto hist = new TH1F("hist", "hist", 10, 0., 1.);
   hist->Draw();
   // At the end of the function, `file` is destructed.
   // The destructor `~TFile` deletes `hist`: no histogram is left.
}
{% endhighlight %}

In the following example, the canvas shows the histogram beause the {% include ref class="TH1F" %} histogram is created before the {% include ref class="TFile" %} is opened; the `TFile` does not own it.

{% highlight C++ %}
void ownership() {
   auto hist = new TH1F("hist", "hist", 10, 0., 1.);
   TFile file("file.root");
   hist->Draw();
}
{% endhighlight %}

Finally, this canvas shows the histogram because it is owned by a `unique_ptr` which lives longer than the function `ownership()`:

{% highlight C++ %}
std::unique_ptr<TH1> hist;
void ownership() {
   TH1::AddDirectory(false);
   TFile file("file.root");
   hist.reset(new TH1F("hist", "hist", 10, 0., 1.));
   // or, instead of TH1::AddDirectory(false):
   //   hist->SetDirectory(nullptr);
   hist->Draw();
}
{% endhighlight %}

## Ownership by `gROOT`

The global [`gROOT`](https://root.cern/doc/master/classTROOT.html) object has several utility collections, for instance of all functions `gROOT->GetListOfFunction()`, canvases `gROOT->GetListOfCanvases()`, and files `gROOT->GetListOfFiles()`.
Objects that are members of these collections and are still "alive" during program tear-down are deleted by `gROOT`.
If they get deleted eariler, they de-register themselves from `TROOT`'s lists ("recursive remove") to prevent double deletions.

## Ownership by creating objects

When an object creates another, the creating object is often the owner of the created one.
This will be documented in the function creating the other object.

_**Example**_

{% highlight C++ %}
myHisto->Fit("gaus")
{% endhighlight %}

The call of `Fit()` copies the global {% include ref class="TF1" %} Gaussian function and attaches the copy to the histogram. When the histogram is deleted, the copy is deleted too.
