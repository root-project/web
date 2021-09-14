---
title: ROOT files
layout: single
sidebar:
  nav: "manual"
toc: true
toc_sticky: true
---

ROOT files contain C++ objects that are stored to disk.
You can open files when starting ROOT

{% highlight bash %}
$ root file.root
{% endhighlight %}

or within C++

{% highlight C++ %}
std::unique_ptr<TFile> myFile( TFile::Open("file.root") );
{% endhighlight %}

or Python code

{% highlight Python %}
myFile = ROOT.TFile.Open("file.root")
{% endhighlight %}


In ROOT you can save objects in ROOT files, making these objects "persistent".
Later on, you can read these objects back: the object is reconstructed in memory.

ROOT files often contain columnar data, used for instance by all LHC (Large Hadron Collider) experiments.

## Storing an object in a ROOT file and reading it back

Here we will create a new ROOT file, store a histogram, and read it back.

### Creating a ROOT file

Use the function `Open()` from {% include ref class="TFile" %} to create or open a ROOT file.

{% highlight C++ %}
std::unique_ptr<TFile> myFile( TFile::Open("file.root", "RECREATE") );
{% endhighlight %}
{% highlight Python %}
myFile = ROOT.TFile.Open("file.root", "RECREATE")
{% endhighlight %}

For the second argument, the following options are available:

- `"RECREATE"`: create a ROOT file, replacing it if it already exists.
- `"CREATE"` or `"NEW"`: create a ROOT file.
- `"UPDATE"`: updates the ROOT file.
- `"READ"`: opens an existing ROOT file for reading.

### Storing an object in a ROOT file

You can save any object, for instance canvases or histograms, into a ROOT file.
You can even store your own types.

<!-- For more information, see the → [I/O]({{ '/manual/io' | relative_url }}) section of the manual. -->

`TFile` derives from `TDirectory`; use [TDirectory::WriteObject()](https://root.cern/doc/master/classTDirectory.html#a67b115afae97366254dfd44a7f46f66f){:target="_blank"} to write an object to a ROOT file.

 _**Example**_

A copy of the object `myObject` is written to the file `myFile`.
In the file, it can be found back under the name `"MyObject"`.

{% highlight C++ %}
myFile->WriteObject(&myObject, "MyObject");
{% endhighlight %}
{% highlight Python %}
myFile.WriteObject(myObject, "MyObject")
{% endhighlight %}

### Closing a ROOT file

ROOT will automatically save and close any ROOT files still open when the session ends.
The ROOT file is also saved and closed when deleting / destructing the `TFile` object.

{% highlight C++ %}
void closeAtDestruct(TH1 *hist) {
   std::unique_ptr<TFile> myFile( TFile::Open("file.root", "RECREATE") );
   myFile->WriteObject(hist, "MyHist");
   // At the end of the function, the unique_ptr gets destructed.
   // It deletes the `TFile` object, which in turn saves and closes
   // the ROOT file.
}
{% endhighlight %}

{% highlight Python %}
def closeAtDestruct(hist):
   myFile = ROOT.TFile.Open("file.root", "RECREATE")
   myFile.WriteObject(hist, "MyHist")
   # At the end of the function, there are no more references to `file`.
   # The `TFile` object gets deleted, which in turn saves and closes
   # the ROOT file.
{% endhighlight %}


### Displaying the content of a ROOT file

Apart from [`rootls`]({{ '/manual/root_files/#root-command-line-tools' | relative_url }} ) and the [object browser]( {{ '/manual/root_files/#root-object-browser' | relative_url }} ) introduced below, `TFile::ls()` lists what is in the ROOT file.

{% highlight C++ %}
root [0] std::unique_ptr<TFile> myFile( TFile::Open("file.root", "RECREATE") );
root [1] myFile->ls()

TFile**    file.root
 TFile*    file.root
  KEY: TH1F     MyHist;1 This is a histogram
{% endhighlight %}


### Reading an object from a ROOT file

- Use the `GetObject()` method to retrieve the objects from a ROOT file.

_**Example**_

From the ROOT file `file.root`, the histogram `MyHist` is retrieved.

{% highlight C++ %}
std::unique_ptr<TFile> myFile( TFile::Open("file.root") );
std::unique_ptr<TH1> hist(myFile->Get<TH1>("MyHist"));
{% endhighlight %}

{% highlight Python %}
myFile = ROOT.TFile.Open("file.root")
hist = myFile.MyHist
{% endhighlight %}

## Storing columnar data in a ROOT file and reading it back

In addition to individual objects, ROOT files can also store tabular datasets,
formed by rows and columns. Such datasets are optimized for fast reading of
selected columns during an analysis (throughput in the order of GB/s) and
for low memory usage by keeping only a few rows in memory.

> **Note**
>
> Tabular datasets in ROOT are actually not just flat tables, but their columns can
> contain complex nested collections.
>
> In High-Energy Physics, more than one exabyte of data is stored in ROOT's tabular
> format.

The easiest way to process ROOT columnar datasets is {% include ref class="RDataFrame" namespace="ROOT" %}.
A more thorough introduction to RDataFrame can be found → [here]({{ '/manual/data_frame' | relative_url }}).

### Writing a columnar dataset with ROOT

RDataFrame provides a method called [Snapshot](https://root.cern/doc/master/classROOT_1_1RDF_1_1RInterface.html#ac5903d3acec8c52f13cbd405371f7fb7)
to write a columnar dataset to a ROOT file.

The example below creates a new dataset with 100 rows, with one column `x` that contains random numbers, and stores that dataset in a file
called `output.root`.

{% highlight C++ %}
ROOT::RDataFrame rdf(100);
rdf_x = rdf.Define("x", [](){ return gRandom->Rndm(); });
rdf_x.Snapshot("my_dataset", "output.root");
{% endhighlight %}

{% highlight Python %}
rdf = ROOT.RDataFrame(100)
rdf_x = rdf.Define("x", "gRandom->Rndm()")
rdf_x.Snapshot("my_dataset", "output.root")
{% endhighlight %}

### Reading a columnar dataset with ROOT

Let's see now how to read and process the dataset we just wrote, creating a 1D histogram
of column `x`.

{% highlight C++ %}
ROOT::RDataFrame rdf("my_dataset", "output.root");
auto h = rdf.Histo1D("x");
h->Draw();
{% endhighlight %}

{% highlight Python %}
rdf = ROOT.RDataFrame("my_dataset", "output.root")
h = rdf.Histo1D("x")
h.Draw()
{% endhighlight %}

Besides ROOT files, RDataFrame can also read from other data sources, for example CSV files:

{% highlight C++ %}
auto rdf = ROOT::RDF::MakeCsvDataFrame("myfile.csv");
auto h = rdf.Histo1D("x");
h->Draw();
{% endhighlight %}

## Merging ROOT files with `hadd`

Use the `hadd` utility in `$ROOTSYS/bin/hadd` to merge ROOT files:

{% highlight bash %}
$ hadd output.root input1.root input2.root ...
{% endhighlight %}

## ROOT command line tools

With the ROOT command line tools you can quickly inspect and modify the contents of ROOT files.
The most commonly used ones are:
- `rootls`: Lists the content of a ROOT file.
- `rootcp`: Copies objects stored in a ROOT file to another ROOT file.
- `rootrm`: Deletes objects contained in a ROOT file.
- `rootmv`: Moves objects stored in a ROOT file to another ROOT file.
- `rootmkdir`: Creates a "directory" inside a ROOT file.
- `rootbrowse`: Opens a {% include ref class="TBrowser" %} directly with the contents of a ROOT file.
- `rooteventselector`: Extracts a range of events of a tree contained in a ROOT file and put them as a new tree in another ROOT file.
- `rootprint`: Plots objects in an image ROOT file.
- `rootslimtree`: Copies trees with a subset of branches from source ROOT files.

Use the `-h` option to get more information on the available options for the specific ROOT command line tool.

_**Example**_

On the system prompt, you can use the ROOT command line tool `rootls` to list the contents of a ROOT file.

{% highlight bash %}
$ rootls hsimple.root
hprof  hpx  hpxpy  ntuple
{% endhighlight %}


## ROOT Object Browser

With a {% include ref class="TBrowser" %} you can browse all ROOT objects within a ROOT file.
You can create it with `rootbrowse` or for instance as part of a ROOT session:

{% highlight bash %}
   $ root file.root
   root[0] TBrowser b
{% endhighlight %}

The ROOT Object Browser is displayed.

   {% include figure_image
   img="root_object_browser.png"
   caption="ROOT Object Browser."
   %}

Double-click the ROOT file to inspect its content.

   {% include figure_image
   img="root_object_browser_content.png"
   caption="ROOT Object Browser displaying the content of a ROOT file."
   %}

Double-clicking graphical objects displays them in a canvas tab.
Double-clicking files that end with `.C` displays them in an editor tab.

## Accessing a remote ROOT file

You can read and write a remote ROOT file by specifying its URL to [TFile::Open()](https://root.cern/doc/master/classTFile.html#aec5f3fae0774aabfc615ebb4b00fe5e0){:target="_blank"}.

Depending on the features of your ROOT installation, the following protocols will be available:

|URI Scheme  |Protocol          |
|------------|------------------|
|`http://`   | unencrypted HTTP |
|`https://`  | encrypted HTTP   |
|`root://`   | [Xrootd](https://root.cern/doc/master/classTXNetFile.html) |
|`s3://`     | [S3](https://root.cern/doc/master/classTDavixFile.html) |

[Xrootd](https://xrootd.slac.stanford.edu/) is a high-performance, authenticated data transfer protocol.
[S3](https://docs.aws.amazon.com/AmazonS3/latest/API/Welcome.html) is the standard API for object store data transfer.

_**Example**_

Simple session:

{% highlight C++ %}
std::unique_ptr<TFile> myFile( TFile::Open("https://root.cern/files/na49.root") );
{% endhighlight %}


