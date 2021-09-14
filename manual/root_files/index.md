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
   auto myFile = TFile::Open("file.root");
{% endhighlight %}

or Python code

{% highlight Python %}
   myFile = ROOT.TFile.Open("file.root")
{% endhighlight %}


In ROOT you can save objects in ROOT files, making these objects "persistent".
Later on, you can read these objects back: the object is reconstructed in memory.

ROOT files often contain columnar data, used for instance by all LHC (Large Hadron Collider) experiments.

## Storing objects in ROOT files and reading them back

Here we will create a new ROOT file, store a histogram, and read it back.

### Creating a ROOT file

Use the function `Open()` from {% include ref class="TFile" %} to create or open a ROOT file.

{% highlight C++ %}
   auto myFile = TFile::Open("file.root", "RECREATE");
{% endhighlight %}
{% highlight Python %}
   myFile = ROOT.TFile.Open("file.root", "RECREATE")
{% endhighlight %}

For the second argument, the following options are available:

- `"RECREATE"`: create a ROOT file, replacing it if it already exists.
- `"CREATE"` or `"NEW"`: create a ROOT file.
- `"UPDATE"`: updates the ROOT file.
- `"READ"`: opens an existing ROOT file for reading.

### Storing objects to ROOT files

You can save any object, for instance canvases or histograms, into a ROOT file.
You can even store your own types.
For more information, see the → [I/O]({{ '/manual/io' | relative_url }}) section of the manual.

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

If `MyObject` does not inherit from {% include ref class="TClass" %}, you can use

{% highlight C++ %}
   gDirectory->WriteObject(MyObject,"MyObject_1");
{% endhighlight %}

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
   TFile f("demo.root","RECREATE");
   Hlist.Write();

// Closing the ROOT file.
   f.Close();
}
{% endhighlight %}

The ROOT file is saved by default in the current working directory.

### Closing a ROOT file

- Use [TFile::Close()](https://root.cern/doc/master/classTFile.html#ae312f07848b4b30679409e5e785991a6){:target="_blank"} to close a ROOT file:

{% highlight C++ %}
   MyFile->Close();
{% endhighlight %}

ROOT will automatically close any ROOT files still open when the session ends.

- Use `delete` to delete the {% include ref class="TFile" %} object.

{% highlight C++ %}
   delete MyFile;
{% endhighlight %}

### Retrieving objects from a ROOT file

- Use the `GetObject()` method to retrieve the objects from a ROOT file.

_**Example**_

From the ROOT file `hsimple.root` (see → [First steps with ROOT]({{ '/manual/first_steps_with_root#starting-with-hsimplec' | relative_url }})), the histogram `hpx;1` is retrieved.

{% highlight C++ %}
   TFile f("hsimple.root");
   TH1F *hpx;
   f.GetObject("hpx;1",hpx);

//The retrieved histogram is drawn.
   hpx->Draw();
{% endhighlight %}

In detail, the following happens when executing `GetObject()`:

- The key with name `hpx;1` is found in the list of keys.

- A {% include ref class="TBuffer" %}object is created.

- The buffer is read from the ROOT file.

- An empty object is created by calling the default constructor for the class referenced in {% include ref class="TKey" %}.

- The [Streamer()](https://root.cern/doc/master/classTClass.html#ac1c95f1787550ebc5367590aedacbd67){:target="_blank"} method is called for this new object.

In case there is an object with multiple cycles, you can pick a particular cycle with a name like `hpx;` (for example `hpx;2`).

 You can also directly access the keys, for example when the names of the objects contained in the ROOT file are not known or when a long series of objects needs to be read sequentially.

 _**Example**_

This example illustrates how to loop over all keys of a ROOT file.

{% highlight C++ %}
for (TObject* keyAsObj : *inputFile.GetListOfKeys()){
    auto key = dynamic_cast<TKey*>(keyAsObj);
    std::cout << "Key name: " << key->GetName() << " Type: " << key->GetClassName() << std::endl;
}
{% endhighlight %}

### Merging ROOT files with hadd

- Use the `hadd` utility in `$ROOTSYS/bin/hadd`, to merge ROOT files:

{% highlight C++ %}
   hadd result.root file1.root file2.root ... filen.root
{% endhighlight %}

## ROOT command line tools

With the ROOT command line tools you can quickly inspect and modify the contents of ROOT files.
There are ROOT command line tools for:
- simple file operations
- automating common operations performed on ROOT classes

**File operations**

- `rootls`: Lists the content of a ROOT file.
- `rootcp`: Copies objects stored in a ROOT file to another ROOT file.
- `rootrm`: Deletes objects contained in a ROOT file.
- `rootmv`: Moves objects stored in a ROOT file to another ROOT file.
- `rootmkdir`: Creates a "directory" inside a ROOT file.

_**Example**_

On the system prompt, you can use the ROOT command line tool `rootls` to list the contents of a ROOT file.

{% highlight C++ %}
$ rootls hsimple.root
hprof  hpx  hpxpy  ntuple
{% endhighlight %}

**Operations on ROOT classes**

- `rootbrowse`: Opens a {% include ref class="TBrowser" %} directly with the contents of a ROOT file.
- `rooteventselector`: Extracts a range of events of a tree contained in a ROOT file and put them as a new tree in another ROOT file.
- `rootprint`: Plots objects in an image ROOT file.
- `rootslimtree`: Copies trees with a subset of branches from source ROOT files.
- `genreflex`: Generates dictionary sources and related ROOT pcm, starting from an header.
- `hadd`: Adds histograms from a list of ROOT files and writes them to a target ROOT file.

Use the `-h` option to get more information on the available options for the specific ROOT command line tool.


## ROOT Object Browser

With a {% include ref class="TBrowser" %}, this is the ROOT Object Browser, you can browse all ROOT objects within a ROOT file.

- Create a {% include ref class="TBrowser" %} object:

{% highlight C++ %}
   root[0] TFile f("demo.root")
   root[1] TBrowser browser
{% endhighlight %}

The ROOT Object Browser is displayed.

   {% include figure_image
   img="root_object_browser.png"
   caption="ROOT Object Browser."
   %}

- Click the ROOT file and the content of the ROOT file.

   {% include figure_image
   img="root_object_browser_content.png"
   caption="ROOT Object Browser displaying the content of a ROOT file."
   %}

Graphical objects are displayed in the `Canvas_1` tab. Files that end with `.C` or `.root` are displayed in the `Editor 1` tab.

## Remotely accessing a ROOT file

You can remotely access ROOT files on the base of the protocol URL.

You can read and write a ROOT file over the net by using the [TFile::Open()](https://root.cern/doc/master/classTFile.html#aec5f3fae0774aabfc615ebb4b00fe5e0){:target="_blank"} method.

_**Example**_

Simple session:

{% highlight C++ %}
root[] TFile *f1 = TFile::Open("local/file.root","update")
root[] TFile *f2 = TFile::Open("root://my.server.org/data/file.root","new")
root[] TFile *f3 = TFile::Open("https://root.cern/files/hsimple.root")
{% endhighlight %}

`ls()` lists what is in the ROOT file.

{% highlight C++ %}
root[] f3.ls()
TDavixFile**    https://root.cern/files/hsimple.root
 TDavixFile*    https://root.cern/files/hsimple.root
  KEY: TH1F     hpx;1 This is the px distribution
  KEY: TH2F     hpxpy;1 py vs px
  KEY: TProfile hprof;1 Profile of pz versus px
  KEY: TNtuple  ntuple;1 Demo ntuple
{% endhighlight %}


