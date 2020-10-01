---
title: ROOT files
layout: single
sidebar:
  nav: "manual"
toc: true
toc_sticky: true
---

ROOT offers the possibility to write instances of classes into a ROOT file, this is, you can make the created objects "persistent". When reading the ROOT file back, the object is reconstructed in the memory.

ROOT files also often contain tress ({% include ref class="TTree" %}, see → [Trees]({{ '/manual/trees' | relative_url }})), a typical data container used for example by all LHC (Large Hadron Collider) experiments.

## Working with ROOT files

A ROOT file, this is a {% include ref class="TFile" %} object, is like a UNIX file directory. It can contain directories and objects organized in unlimited number of levels. A ROOT file is stored in machine independent format (ASCII, IEEE floating point, Big Endian byte ordering).

### Creating a ROOT file

- Use the {% include ref class="TFile" %} constructor for creating a ROOT file. A ROOT file uses the `.root` extension.

{% highlight C++ %}
   TFile *MyFile = new TFile("Event.root","OPTIONS");
{% endhighlight %}

The following options are available:

- `CREATE`: Creates a ROOT file.

- `NEW`: Same as `CREATE`.

- `RECREATE`: Replaces the ROOT file.

- `UPDATE`: Updates the ROOT file.

- `READ`: Opens an existing ROOT file for reading.

Once a {% include ref class="TFile" %} object has been created, it becomes the default file for all I/O. This default is held in the global variable `gFile` (see → [ROOT classes, data types and global variables]({{ '/manual/root_classes_data_types_and_global_variables#global-root-variables' | relative_url }})), which can be updated at any time to change the default.

{% highlight C++ %}
   gFile = MyFile;
{% endhighlight %}

**Current directory**

When you create a {% include ref class="TFile" %} object, it becomes the current directory. Therefore, the last ROOT file to be opened is always the current directory.<br>
Check the current directory as follows:

{% highlight C++ %}
   gDirectory->pwd()
   
   Rint:/
{% endhighlight %}

In this case the current directory is the ROOT session (`Rint`).

When you create a {% include ref class="TFile" %} object, the ROOT file becomes the current directory.

{% highlight C++ %}
   TFile f1("my.root");
   gDirectory->pwd()

   my.root:/
{% endhighlight %}

### Checking whether a ROOT file is open

- Use [TFile::IsOpen()](https://root.cern/doc/master/classTFile.html#a67dedbe56cfe4792cff78df129718c11){:target="_blank"} to check whether the ROOT file was successfully opened.

> **Note**
>
> You can also check whether the ROOT file is correctly opened by:

{% highlight C++ %}
   TFile f("demo.root");
   if (f.IsZombie()) {
      cout << "Error opening file" << endl;
      exit(-1);
      } else {
      ...
   }
{% endhighlight %}

### Writing ROOT files

To write objects to a ROOT file, they must be open.

- Use [TFile::Write()](https://root.cern/doc/master/classTFile.html#adc21e8868cd0938691cf794b4b20096b){:target="_blank"} to write objects into the ROOT file.

 _**Example**_

 A copy of `MyObject` is written to the current directory of the current ROOT file with the named key `MyObject_1`:

{% highlight C++ %}
   MyObject->Write("MyObject_1");
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

//Closing the ROOT file.
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


> **Crash while reading and writing the ROOT file**
>
> If ROOT is not properly terminated, the file directory may not be written at the end of the ROOT file.
> Next time this ROOT file is used, ROOT will automatically detect this abnormal termination and will recover the directory by scanning sequentially the list of keys in the ROOT file.
> If the ROOT file has been opened in UPDATE mode, the recovered directory will be automatically written to the ROOT file. This automatic recovery procedure is possible because of redundant information written to the ROOT file.<br>
> In case you write large {% include ref class="TTree" %}s (see also → [Trees]({{ '/manual/trees' | relative_url }})), you may have large buffers in memory. In case of a job crash, you may loose a lot of data. Therefore, it recommended to use the auto save method [TTree::AutoSave](https://root.cern/doc/master/classTTree.html#a76259576b0094536ad084cde665c13a8).

### Merging ROOT files

- Use the `hadd` utility in `$ROOTSYS/bin/hadd`, to merge ROOT files:

{% highlight C++ %}
   hadd result.root file1.root file2.root ... filen.root
{% endhighlight %}

### File system operations

A {% include ref class="TFile" %}, this is ROOT file, behaves like UNIX file system. Therefore, you can perform the usual operations for a file system.

_**Example**_

{% highlight C++ %}

// Create/open a ROOT file.
   TFile* f = TFile::Open("file.root", "NEW");

// Creating a directory.
   f->mkdir("dir");

// Changing a directory.
   f->cd("dir");
   
// Listing the contents of a ROOT file.
   f->ls();

{% endhighlight %}


## ROOT command line tools

With the ROOT command line tools you can quickly inspect and modify the contents of ROOT files.
There are ROOT command line tools for:
- simple file operations,
- automating common operations performed on ROOT classes,

**File operations**

- `rootls`: Lists the content of a ROOT file.
- `rootcp`: Copies objects stored in a ROOT file to another ROOT file.
- `rootrm`: Deletes objects contained in a ROOT file.
- `rootmv`: Moves objects stored in a ROOT file to another ROOT file.
- `rootmkdir`: Creates a "directory" inside a ROOT file.

**Operations on ROOT classes**

- `rootbrowse`: Opens a {% include ref class="TBrowser" %} directly on the content of a ROOT file.
- `rooteventselector`: Extracts a range of events of a tree contained in a ROOT file and put them as a new tree in another ROOT file.
- `rootprint`: Plots objects in an image ROOT file.
- `rootslimtree`: Copies trees with a subset of branches from source ROOT files.
- `genreflex`: Generates dictionary sources and related ROOT pcm starting from an header.
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

### Using folders

A {% include ref class="TFolder" %} is a collection of objects visible and expandable in the ROOT Object Browser. Folders have a name and a
title. They are identified in the folder hierarchy by an “UNIX-like” naming convention. New folders can be added and removed to/from a folder.

The base of all folders is the `//root` folder. It is visible at the top of the left panel in the ROOT Object Browser. 

   {% include figure_image
   img="root-folder.png"
   caption="root folder in the ROOT Object Browser."
   %}

With folders you can reduce class dependencies and improve modularity. Each set of data has a producer class and one or many consumer classes. When using folders, the producer class places a pointer to the data into a
folder, and the consumer class retrieves a reference to the folder. The consumer can access the objects in a folder by specifying the path name of the folder.

### Creating a folder hierarchy

To create a folder hierarchy, you add a top folder of your hierarchy to //root. Then you add a folder to an existing
folder with the [TFolder::AddFolder()](https://root.cern/doc/master/classTFolder.html#a2d3c9ab44d8b660d5c3c42693f745d00){:target="_blank"} method. The `AddFolder()` method takes two parameters: the name and title of the folder to be added. It returns a pointer of the newly created folder.

The following example creates a folder hierarchy shown in the ROOT Object Browser.

_**Example**_

{% highlight C++ %}
{
// Add the top folder of my hierarchy to //root.
   TFolder *aliroot=gROOT->GetRootFolder()->AddFolder("aliroot","aliroot top level folders");

// Add the hierarchy to the list of browsables
   gROOT->GetListOfBrowsables()->Add(aliroot,"aliroot");
   
// Create and add the constants folder.
   TFolder *constants=aliroot->AddFolder("Constants","Detector constants");

// Create and add the pdg folder to pdg.
   TFolder *pdg = constants->AddFolder("DatabasePDG","PDG database");

// Create and add the run folder.
   TFolder *run = aliroot->AddFolder("Run","Run dependent folders");

// Create and add the configuration folder to run.
   TFolder *configuration = run->AddFolder("Configuration","Run configuration");

// Create and add the run_mc folder.
   TFolder *run_mc = aliroot->AddFolder("RunMC","MonteCarlo run dependent folders");

// Create and add the configuration_mc folder to run_mc 
   TFolder *configuration_mc = run_mc->AddFolder("Configuration","MonteCarlo run configuration");
}
{% endhighlight %}

   {% include figure_image
   img="folder-hierarchy.png"
   caption="Folder hierarchy in the ROOT Object Browser."
   %}

### Reading data from a folder

- Use the [TROOT::FindObjectAny()](https://root.cern/doc/master/classTROOT.html#a9c9964aaea5c7cf333483240aa48b46f){:target="_blank"} method to search for a folder or an object in a folder. 

The `FindObjectAny()` method analyzes the string passed as its argument and searches in the hierarchy until it finds an object or folder matching the name. 

With `FindObjectAny()` you can give the full path name, or the name of the folder. If only the name of the folder is given, it will return the first instance of that name. 

A string-based search is time consuming. If the retrieved object is used frequently or inside a loop, save a pointer to the object as a class data member. 

By default, a folder does not own the object it contains. You can overwrite that with [TFolder::SetOwner()](https://root.cern/doc/master/classTFolder.html#aa9fb0db2a0692067380be4bb82bf0a8a){:target="_blank"}. Once
the folder is the owner of its contents, the contents are deleted when the folder is deleted.

_**Example**_ 

If a file `myFile.root` is added to the list of files, you can retrieve a pointer to the corresponding {% include ref class="TFile" %} object with the following statements:

{% highlight C++ %}
   TFile *myFile = (TFile*)gROOT->FindObjectAny("/ROOTFiles/myFile.root");

//or...

   TFile *myFile = (TFile*)gROOT->FindObjectAny("myFile.root");

{% endhighlight %}


## Viewing the contents of a ROOT file

### Physical layout of a ROOT file

- Call the [TFile::Map()](https://root.cern/doc/master/classTFile.html#a5568f2f0a4a678ffaf769d0bf210610f){:target="_blank"} method to view the physical layout of a ROOT file.

The output prints the date/time, the start record address, the number of bytes in the record, the class name of the record and the compression factor.

_**Example**_

{% highlight C++ %}
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
{% endhighlight %}

### Logical contents of a ROOT file

ROOT provides not only sequential access to the content of a ROOT file, but also random or direct access.

{% include ref class="TFile" %} keeps a list of {% include ref class="TKey" %}s, which is an index to the objects in the ROOT file.

The `TKey` class describes the record headers of objects in the ROOT file. With the `GetListOfKeys()` method you get the list of keys.

_**Example**_

Get the list of keys from the demo.root file and print them.

{% highlight C++ %}
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
{% endhighlight %}

#### Finding TKey objects

With the `TFile::Get()` method, you can find [TKey](https://root.cern/doc/master/classTKey.html){:target="_blank"} objects.

_**Example**_

{% highlight C++ %}
   root[] TH1F *h9 = (TH1F*)f.Get("h9");
{% endhighlight %}

The `Get()` method finds the `TKey` object with name **h9**.

#### Iterating over objects

Keys are available in a {% include ref class="TList" %} of {% include ref class="TKey" %}s. Therefore, you can iterate over the list of keys.

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

{% highlight C++ %}
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
{% endhighlight %}

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

`ls ()` lists what is in the ROOT file.

{% highlight C++ %}
root[] f3.ls()
TDavixFile**    https://root.cern/files/hsimple.root
 TDavixFile*    https://root.cern/files/hsimple.root
  KEY: TH1F     hpx;1 This is the px distribution
  KEY: TH2F     hpxpy;1 py vs px
  KEY: TProfile hprof;1 Profile of pz versus px
  KEY: TNtuple  ntuple;1 Demo ntuple
{% endhighlight %}