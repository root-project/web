---
layout: single
title: Access Data
sidebar:
  nav: "about"
toc: true
toc_sticky: true
---

Data saved into one or several ROOT files can be accessed from your PC, from the web and
from large-scale file delivery systems used, for example in the GRID. ROOT trees spread
over several files can be chained and accessed as a unique object, allowing for loops
over huge amounts of data.

## The ROOT Files
A ROOT file is a compressed binary file in which we can save objects of any type.
Actually, one ROOT file can look quite similar to the file system provided by your
operative system, because it can be internally structured in different folders
(or " directories "), each of them containing your data or other folders.  Hence,
you can navigate through an open ROOT file practically in the same way you can browse
your files by moving from a folder to another one.

A ROOT file can also contain the "dictionary" of all classes used to create the objects
saved into the file.  The dictionary provides a description of all class attributes
and of the inheritance tree, so that it is possible to generate the corresponding
C++ code and read back objects from the file.  Indeed, when the user does not have
the application that was used to save data into his ROOT file, he can generate this
code on-fly and the result is automatically compiled and loaded in memory as a shared
library.  Of course, this is only valid for class attributes (the only things needed
to fetch the data from the file): class methods can not automatically generated.

Having the dictionary saved together with the data is an invaluable resource for the
end user, because it allows fetching data also when the original application changed
or disappeared.  In addition, future class versions not backward compatible will not
prevent the user from reading old data: ROOT has been written having in mind the needs
of high-energy physics experiments, that have a life cycle of 10-20 years, and whose
data are going to be re-analyzed for many years after their conclusion, despite of
possible changes in their format.

Because your data may need any sort of auxiliary information, for example the voltage
settings of your detector or the filter used to select the people for the census data,
one can save such information in each ROOT file too.  However, in case this information
rarely changes, this would be a waste of space.  A common solution to this problem is
to store such information somewhere else.  A quite common choice is to use a database,
so that ROOT also provides interfaces for the most widespread database applications.

Finally, because data are written in compressed form and are usually split in basic
blocks, reading data from ROOT files is really fast, removing one of the bottlenecks
of large-scale data analysis.  Physicists usually make data analysis on their laptops
or on relatively cheap PCs, still having the option to fully exploit parallel farms
when running over huge amounts of data.

## The ROOT Chains
The most general data structure available in ROOT is a "tree", that is a ramified data
structure in which a "branch" can be an object of any class, including another tree.
Again, this is quite similar to the file system provided by your operative system, so
that one can navigate through the branches looking for a variable, for example.
A plain object like a variable is always the terminating part of a sequence of
branches, and it is called a "leaf" in the ROOT jargon.

ROOT trees can span over a number of ROOT files.  Suppose your data structure is meant
to record the details of your "events", for example the results of a measurement or
the census data of your employees.  If there are many, many events (say few millions),
it could be better to split them in several files, rather than having a single, huge
file.  This is always the case, if you want to minimize read/write or transmission
errors and/or if you need to make backup copies in several disks.  Provided you have
the very same tree definition in each ROOT file, as in our (very common) example, you
can "concatenate" all trees saved in your ROOT files into a single entity, called
a "chain".

Because a ROOT chain inherits from the ROOT tree, it behaves exactly the same way.
This means that, after having created (with a single command!) your chain, you can
forget about having many files and navigate through your chain as it were a single tree.

Actually, a ROOT chain can do much more than this.  It is possible to fetch your files
from your local disk, from a remote disk server (ROOT files are machine-independent),
or from the Internet, concatenate them into a single chain, and finally operate with
this single entity as it were a normal ROOT tree.

## ROOT Memory Handling
In addition to the ROOT files, also the memory used by ROOT is structured in different
directories.  When opening a ROOT file, the current directory automatically becomes
the top-level directory contained in this file, but at any time it is possible to
change the current directory by issuing a command accepting the relative or absolute
path to the new directory, exactly as it happens when moving from a folder to a
different one in your file system.

All ROOT objects, including all user classes inheriting from the ROOT common base class,
must have a unique name (a C string).  This name is used to identify them and to look
for them, when browsing the current directory.  Of course, it is possible to have
different objects with the same name, provided they "live" in different directories,
exactly as is it possible to have different files with the same name in different
folders.  A frequent situation is when the user first needs to look at the content of
a file (or directory), then realizes that he needs a certain object, like a histogram
with name "hSalary", and finally fetches it by asking the directory to get the object
with the given name.  It is also possible to perform all these steps in a graphical
way, by using the ROOT browser.