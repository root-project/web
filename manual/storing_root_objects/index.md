---
title: Storing ROOT objects
layout: single
sidebar:
  nav: "manual"
toc: true
toc_sticky: true
---


You can write instances of classes into a ROOT file, i.e. you can make the created objects "persistent". (more intro text needed here)

## Physical layout of a ROOT file

A ROOT file is like a UNIX file directory. It can contain directories and objects organized in unlimited number of levels. A ROOT file is stored in machine independent format (ASCII, IEEE floating point, Big Endian byte ordering).

The following sections describes how to

-   create a ROOT file

-   open and view a ROOT file

-   view the physical layout of a ROOT file

### Creating a ROOT file

For creating a ROOT file, call the [TFile](https://root.cern/doc/master/classTFile.html) constructor. A ROOT file uses the `.root` extension.

_**Example**_

This example creates 15 histograms, fills each histogram with 1000 entries from a Gaussian distribution, and writes them to a ROOT file.

{% highlight C++ %}
{
   char name[10], title[20];

// Create an array of histograms.

   TObjArray Hlist(0);

// Create a pointer to a histogram.

   TH1F* h;

// Make and fill 15 histograms and add them to the object array.

   for (Int_t i = 0; i < 15; i++) {
      sprintf(name,"h%d",i);
      sprintf(title,"histo nr:%d",i);
      h = new TH1F(name,title,100,-4,4);
      Hlist.Add(h);
      h->FillRandom("gaus",1000);
   }

// Open a ROOT file and write the array to the ROOT file.

   TFile f("demo.root","recreate");
   Hlist.Write();

//Closing the ROOT file.

   f.Close();
}
{% endhighlight %}

The ROOT file is saved by default in the current working directory.

### Opening and viewing a ROOT file

To view the contents of a ROOT file, you need to open it.

1. Create a [TBrowser](https://root.cern/doc/master/classTBrowser.html) object:

   ```
   root[0] TFile f("demo.root")
   root[1] TBrowser browser;
   ```

   The ROOT Object Browser is displayed.

   {% include figure_image
   img="root_object_browser.png"
   caption="ROOT Object Browser."
   %}


2. Click the ROOT file and the content of the ROOT file.

   {% include figure_image
   img="root_object_browser_content.png"
   caption="ROOT Object Browser displaying the content of a ROOT file."
   %}


> **Note**
>
> You can check if the file is correctly opened by:
>
> ```
>   TFile f("demo.root");
>   if (f.IsZombie()) {
>   cout << "Error opening file" << endl;
>   exit(-1);
>   } else {
>   ...
>   }
> ```

### Viewing the physical layout of a ROOT file

1.  Call the [TFile::Map()](https://root.cern/doc/master/classTFile.html#a5568f2f0a4a678ffaf769d0bf210610f) method to view the physical layout of a ROOT file.

The output prints the date/time, the start record address, the number of bytes in the record, the class name of the record and the compression factor.

_**Example**_

```
root[] f.Map()

20191010/122600    At:100     N=114    TFile
20191010/122600    At:214     N=429    TH1F           CX = 2.31
20191010/122600    At:643     N=424    TH1F           CX = 2.33
20191010/122600    At:1067    N=426    TH1F           CX = 2.32
20191010/122600    At:1493    N=425    TH1F           CX = 2.33
20191010/122600    At:1918    N=429    TH1F           CX = 2.31
20191010/122600    At:2347    N=424    TH1F           CX = 2.33
20191010/122600    At:2771    N=418    TH1F           CX = 2.37
20191010/122600    At:3189    N=428    TH1F           CX = 2.31
20191010/122600    At:3617    N=422    TH1F           CX = 2.34
20191010/122600    At:4039    N=421    TH1F           CX = 2.35
20191010/122600    At:4460    N=431    TH1F           CX = 2.30
20191010/122600    At:4891    N=424    TH1F           CX = 2.34
20191010/122600    At:5315    N=430    TH1F           CX = 2.31
20191010/122600    At:5745    N=426    TH1F           CX = 2.33
20191010/122600    At:6171    N=425    TH1F           CX = 2.34
20191010/122600    At:6596    N=3055   StreamerInfo   CX = 3.08
20191010/122600    At:9651    N=732    KeysList
20191010/122600    At:10383   N=53     FreeSegments
20191010/122600    At:10436   N=1      END
```

## Logical contents of a ROOT file

ROOT provides not only sequential access to the content of a ROOT file, but also random or direct access.

[TFile](https://root.cern/doc/master/classTFile.html) keeps a list of [TKey](https://root.cern/doc/master/classTKey.html)s, which is an index to the objects in the ROOT file.

The `TKey` class describes the record headers of objects in the ROOT file. With the `GetListOfKeys()` method you get the list of keys.

_**Example**_

Get the list of keys from the demo.root file and print them.
```
root[0] TFile f("demo.root")
root[1] f.GetListOfKeys()->Print()

TKey Name = h0,     Title = histo    nr:0,     Cycle = 1
TKey Name = h1,     Title = histo    nr:1,     Cycle = 1
TKey Name = h2,     Title = histo    nr:2,     Cycle = 1
TKey Name = h3,     Title = histo    nr:3,     Cycle = 1
TKey Name = h4,     Title = histo    nr:4,     Cycle = 1
TKey Name = h5,     Title = histo    nr:5,     Cycle = 1
TKey Name = h6,     Title = histo    nr:6,     Cycle = 1
TKey Name = h7,     Title = histo    nr:7,     Cycle = 1
TKey Name = h8,     Title = histo    nr:8,     Cycle = 1
TKey Name = h9,     Title = histo    nr:9,     Cycle = 1
TKey Name = h10,    Title = histo    nr:10,    Cycle = 1
TKey Name = h11,    Title = histo    nr:11,    Cycle = 1
TKey Name = h12,    Title = histo    nr:12,    Cycle = 1
TKey Name = h13,    Title = histo    nr:13,    Cycle = 1
TKey Name = h14,    Title = histo    nr:14,    Cycle = 1
```

### Finding TKey objects

With the `TFile::Get()` method, you can find [TKey](https://root.cern/doc/master/classTKey.html) objects.

_**Example**_

```
root[] TH1F *h9 = (TH1F*)f.Get("h9");
```

The `Get()` method finds the `TKey` object with name **h9.**

### Iterating over objects

Keys are available in a [TList](https://root.cern/doc/master/classTList.html) of [TKey](https://root.cern/doc/master/classTKey.html)s. Therefore, you can iterate over the list of keys.

_**Example**_

The `TKeys` of the `demo.root` (see example → [Creating a ROOT file](#creating-a-root-file) file are iterated.

{% highlight C++ %}
{
   TFile f("demo.root");
   TIter next(f.GetListOfKeys());
   TKey *key;
   while ((key=(TKey*)next())) {
      printf("key: %s points to an object of class: %s at %dn", key->GetName(),
      key->GetClassName(),key->GetSeekKey());
   }
}
{% endhighlight %}

The output is of the `iterate.C` ROOT macro is:

```
root[] .x iterate.C

key: h0 points to an object of class: TH1F at 150
key: h1 points to an object of class: TH1F at 503
key: h2 points to an object of class: TH1F at 854
key: h3 points to an object of class: TH1F at 1194
key: h4 points to an object of class: TH1F at 1539
key: h5 points to an object of class: TH1F at 1882
key: h6 points to an object of class: TH1F at 2240
key: h7 points to an object of class: TH1F at 2582
key: h8 points to an object of class: TH1F at 2937
key: h9 points to an object of class: TH1F at 3293
key: h10 points to an object of class: TH1F at 3639
key: h11 points to an object of class: TH1F at 3986
key: h12 points to an object of class: TH1F at 4339
key: h13 points to an object of class: TH1F at 4694
```

## Remotely accessing a ROOT file

You can remotely access ROOT files on the base of the protocol URL.

You can read and write a ROOT file over the net by using the [TFile::Open()](https://root.cern/doc/master/classTFile.html#aec5f3fae0774aabfc615ebb4b00fe5e0) method.

_**Example**_

Simple session:

```
root[] TFile *f1 = TFile::Open("local/file.root","update")

root[] TFile *f2 = TFile::Open("root://my.server.org/data/file.root","new")

root[] TFile *f3 = TFile::Open("http://root.cern.ch/files/hsimple.root")

root[] f3.ls()

TDavixFile**    http://root.cern.ch/files/hsimple.root
 TDavixFile*    http://root.cern.ch/files/hsimple.root
  KEY: TH1F     hpx;1 This is the px distribution
  KEY: TH2F     hpxpy;1 py vs px
  KEY: TProfile hprof;1 Profile of pz versus px
  KEY: TNtuple  ntuple;1 Demo ntuple

root[] hpx.Draw()
```