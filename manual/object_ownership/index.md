---
title: Object ownership
layout: single
sidebar:
  nav: "manual"
toc: true
toc_sticky: true
---

An object has the ownership of another object if it has the permission to delete it.
To prevent memory leaks and multiple attempts to delete an object, you need to know which objects are owned by ROOT and which are owned by you.

The following cases are possible:

- Ownership by current directory (`gDirectory`).<br>
→ See [Ownership by current directory (gDirectory)](#ownership-by-current-directory-gdirectory).

- Ownership by the master [TROOT](https://root.cern/doc/master/classTROOT.html) object (`gROOT`).<br>
→ See [Ownership by the TROOT master object (gROOT)](#ownership-by-the-troot-master-object-groot).

- Ownership by other objects.<br>
→ See [Ownership by other objects](#ownership-by-other-objects).

- Ownership by the user.<br>
→ See [Ownership by the user](#ownership-by-the-user).

## Ownership by current directory (gDirectory)

When a [histogram](https://root.cern/doc/master/group__Hist.html), a [tree](https://root.cern/doc/master/group__tree.html) or an [event list](https://root.cern/doc/master/classTEventList.html) is created, it is added by default to the list of objects in the current directory (`gDirectory`).

You can get the list of objects in the current directory and retrieve a pointer to a specific object with the `GetList()` method.

_**Example**_

Retrieving a histogram:

{% highlight C++ %}
   TH1F *h = (TH1F*)gDirectory->GetList()->FindObject("myHist");
{% endhighlight %}

You can change the directory of a histogram, tree, or event list with the `SetDirectory()` method.

_**Example**_

Changing the directory of a histogram (same applies to trees and event lists):

{% highlight C++ %}
   h->SetDirectory(newDir);
{% endhighlight %}

You can remove a histogram from a directory by using `SetDirectory(nullptr)`. Once a histogram is removed from the directory, it will not be deleted when the directory is closed. You have to delete the histogram once you have finished with it.

To change the default that automatically adds the histogram to the current directory, you can call the static function.

_**Example**_

Changing the default that adds the histogram to the current directory:

{% highlight C++ %}
   TH1::AddDirectory(kFALSE);
{% endhighlight %}

Not all histograms created here after are added to the current directory. In this case, you own all histogram objects and you will need to delete them and clean up the references. You can still set the directory of a histogram by calling `SetDirectory()` once it has been created.

> **Note**
>
> When a file goes out of scope or is closed all objects on its object list are deleted.

## Ownership by the TROOT master object (gROOT)


The {% include ref class="TROOT" %} master object (`gROOT`) has several collections of objects. Objects that are members of these collections are owned by `gROOT`.

**Accessing the collection contents**

You can access the content with the `gROOT->GetListOf` method.

_**Example**_

{% highlight C++ %}
   gROOT->GetListOfCanvases
{% endhighlight %}

## Ownership by other objects

When an object creates another, the creating object is the owner of the created one.

_**Example**_

{% highlight C++ %}
   myHisto->Fit("gaus")
{% endhighlight %}

The call of `Fit()` copies the global {% include ref class="TF1" %} Gaussian function and attaches the copy to the histogram. When the histogram is deleted, the copy is deleted too.

## Ownership by the user

The user owns all objects not described in one of the above cases.

### Managing objects

{% include ref class="TObject" %} has two bits that influence how an object is managed (in `TObject::fBits()`:

-   `kCanDelete`, see → [kCanDelete](#kcandelete)

-   `kMustCleanup`, see → [kMustCleanup](#kmustcleanup)

#### Setting the bits

Use:

{% highlight C++ %}
   MyObject->SetBit(kCanDelete)
   MyObject->SetBit(kMustCleanup)
{% endhighlight %}

#### Resetting the bits

Use:

{% highlight C++ %}
   TObject::ResetBit()
{% endhighlight %}

#### Testing the bits

Use:

{% highlight C++ %}
   TObject::TestBit()
{% endhighlight %}

#### kCanDelete

The `kCanDelete` bit setting is displayed with [TObject::ls()](https://root.cern/doc/master/classTObject.html#ae1bc003ff9a558b3b3a60a14f16f1ae5). The last number is either 1 or 0 and is the `kCanDelete` bit.

**Collections**

The `gROOT `collections (see → [Ownership by the TROOT master object (gROOT)](#ownership-by-the-troot-master-object-groot)) own their members and will delete them regardless of the `kCanDelete` bit.

In all other collections, when the collection `Clear()` method is called (this is, [TList::Clear()](https://root.cern/doc/master/classTList.html#af4d5429298af281bdc7fe62b123f5385), members with the `kCanDelete` bit set, are deleted and removed from the collection.

If the `kCanDelete` bit is not set, the object is only removed from the collection but not deleted.

If the collection `Delete()` method (i.e. [TList::Delete()](https://root.cern/doc/master/classTList.html#abfc59852231e4c8050b581e890d05c36) is called, all objects in the collection are deleted without considering the `kCanDelete` bit.

> **Note**
>
> Deleting the collection, does not delete the members of the collection.

If you specify `MyCollection->SetOwner`,the collection owns the objects and deleting `MyCollection` will delete all its members.
Otherwise, you need to delete all member objects in the collection and delete the collection object itself:


{% highlight C++ %}
   MyCollection->Delete();

   delete MyCollection;
{% endhighlight %}

> **Note**
>
> `kCanDelete` is automatically set by the `DrawCopy()` method and the user can set it for any object.

_**Example**_

You must manage all graphic primitives. If you want {% include ref class="TCanvas" %} to delete the graphic primitives you created, you have to set the `kCanDelete` bit.

#### kMustCleanup

When the `kMustCleanup` bit is set, the object destructor will remove the object and its references from all collections in the cleanup collection (`gROOT::fCleanups`).
An object can be in several collections. If the `kMustCleanup `bit is set, it will be removed from the collections when the destructor of the object is called.

The kMustCleanup bit is set:

-   When an object is added to a pad (or canvas) in [TObject::AppendPad](https://root.cern/doc/master/classTObject.html#a9cf8906b9b46aac7b797383ac8ad3a64)

-   When an object is added to a `TBrowser` with [TBrowser::Add](https://root.cern/doc/master/classTBrowser.html#a2b9b0e4271172bd1418a2eb22f040226)

-   When an object is added to a `TFolder` with [TFolder::Add](https://root.cern/doc/master/classTFolder.html#a4849ea3ecb91ae280b0e641308ee9002)

-   When creating an inspector canvas with [TInspectCanvas::Inspector](https://root.cern/doc/master/classTInspectCanvas.html#a190ce0c893347c696abbb8ae00f80348).

-   When creating a {% include ref class="TCanvas" %}.

-   When painting a frame for a pad, the frame's `kMustCleanup` is set in [TPad::PaintPadFrame](https://root.cern/doc/master/classTPad.html#a11670f9166d33c0fde75b972badfeefe).

The user can add their own collection to the collection of clean ups, to take advantage of the automatic garbage collection.

_**Example**_

{% highlight C++ %}
//Create two lists:

	TList *myList1, *myList2;

//Add both lists to clean up:

	gROOT->GetListOfCleanUps()->Add(myList1);
	gROOT->GetListOfCleanUps()->Add(myList2);

//Assuming myObject is in myList1 and myList2, when calling:

	delete myObject;

// The object is deleted from both lists.
{% endhighlight %}