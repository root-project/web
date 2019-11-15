---
layout: single
title: Save Data
sidebar:
  nav: "about"
toc: true
toc_sticky: true
---

You can save your data (and any C++ object) in a compressed binary form in a ROOT
file. A special description of the object format is also saved in the same file,
so that it is possible to automatically generate the code for the C++ classes
corresponding to all objects saved in the file. ROOT provides a tree-like data
structure that is extremely powerful for fast access of huge amounts of data - orders
of magnitude faster than accessing a normal file. ROOT files can have a
sub-structure: they can contain directories.

# The Safest Way to Save your Data

Today, a huge amount of data is stored into files present on our PC and on the
Internet. To achieve the maximum compression, binary formats are used, hence they
cannot simply be opened with a text editor to fetch their content. Rather, one
needs to use a program to decode the binary files. Quite often, the very same
program is used both to save and to fetch the data from those files, but it is
also possible (and advisable) that other programs are able to do the same. This
happens when the binary format is public and well documented, but may happen also
with proprietary formats that became a standard de facto.

One of the most important problems of the information era is that programs evolve
very rapidly, and may also disappear, so that it is not always trivial to correctly
decode a binary file. This is often the case for old files written in binary formats
that are not publicly documented, and is a really serious risk for the formats
implemented in custom applications. There are few ways to solve this problem.

The first is to create or adopt an "open format", that is a publicly available
and precisely documented binary format. This is probably the best solution for
very common applications, like word-processors, data-sheets, or graphics. However,
it also implies spending a considerable effort in keeping the specifications free
from errors and up to date. Finally, this effort could be wasted if the majority
of the users does not start using such format as their default.

The second way consists of saving in the same file both the information and some
description of the format itself. There are (at least) two approaches for doing so.

The most common solution is to save your data into some self-documented text format,
like XML, and then compress the resulting text file with a publicly available
compression library, like gzip, to obtain the final binary file. In this case,
the user needs first the compression library to convert back the binary file into
the text format, and then needs to read the description of the data structure from
this file and to implement a program to fetch the data. The hard points are that
the compression library is needed, that the user has to deal with a text file
(that is usually much larger than the compressed binary file), and that the user
needs to implement his own decoder for the data saved into the text file.

The other approach is the one used by ROOT. The file is in a machine-independent
compressed binary format, including both data and their description, and the
framework provides an open-source automated tool to generate the data description
(or "dictionary", in the ROOT jargon) when saving data, and to generate C++ classes
corresponding to this description when reading back the data. The dictionary is used
to build and load the C++ code to load the binary objects saved in the ROOT file and
to store them into instances of the automatically generated C++ classes. As in the
aforementioned approach, a library is needed to deal with the binary file (either
the compression library above, or the ROOT library) and this library is publicly
available and open-source. However, ROOT does not need the intermediate step making
use of a text file, so that it uses much less memory and disk space to save or
fetch the data. Finally, the user does not need to write his own decoder, because
ROOT automatically generates it from the dictionary.

ROOT files can be structured into "directories", exactly in the same way as your
operative system organizes the files into folders. ROOT directories may contain
other directories, so that a ROOT file is more similar to a file system than to
an ordinary file.

Finally, ROOT has been designed keeping in mind the requirements coming from the
enormous amount of data produced by high-energy physics experiments. This means
that ROOT allows to save and access terabytes of data in a highly optimized way.
ecause the total computing time for a given task depends both on the CPU speed
nd on the data access time (that includes accessing and caching information from
he main memory, and accessing and caching information from the disks), the quick
data access allowed by ROOT effectively improves the performance of data analysis.

# Data structures

Data can be organized in many different ways. However, most applications
(including database interfaces) adopt a simple model in which one has many
copies of the same linear data structure (often called a "record"), ending up
into a bidimensional data structure (often called a "table"). For example,
data-sheet applications offer a graphical representation of the table in which
the data structure is developed horizontally, across a number of columns, while
the records are stacked vertically, spanning many rows.

Of course, this widely adopted data organization is possible also in ROOT. The
tables are named "n-tuples", as in mathematics, the records are called "events",
as in physics, and the column headers are called "variables", as in computer
science. However, ROOT can save tables, or n-tuples, in two ways. The first one
is the usual way, in which a file contains a sequence of records, or events. When
the event data structure is quite larger than the subset on which the users normally
focus on, reading such file is not very fast, because one has to "jump" from a
subset of the current event to the corresponding subset of the next event, and so on,
 preventing any effective exploitation of the caching mechanisms implemented by the
 disk controllers and by the operative systems.

For this reason, instead of building a sequence of records, by default ROOT splits
each event into its pieces (the variables, or the "columns" of the table representation)
and builds a file by putting together all columns. This has two desirable side effects.
First, each column is a homogeneous sequence of the same variable, so that the internal
compression has maximum efficiency and the file size is much smaller than in the previous
case of "flat" tables. Second, when looping over few variables of each event, as it
is done most often, the time required to fetch all data is much smaller, because
caching mechanisms implemented in disk controllers and in the operative system are
fully exploited.

In addition, ROOT provides more than plain tables (i.e. n-tuples): the most powerful
data structure is a "tree", the same data structure that is used by your operative
system to save files into folders that may contain other folders. The structure of
a ROOT tree can be arbitrarily complex, because a tree can contain, as "branches",
simple variables or more complex objects, including other trees! A variable is always
the end point of a branch, so that it is called a "leaf" in the ROOT jargon. Usually,
trees are split into their branches when saved into a ROOT file, to benefit from the
caching mechanisms in the same way as explained before. Because the tree structure is
more complex than a table, the splitting level can be adjusted to match the user's
needs. For example, if the most common operation is a loop in which a whole branch
of the top-level tree is fetched, this is also the best granularity for the splitting.
On the other hand, if single leaves (i.e. variables) are only fetched in most loops,
the maximum splitting, in which each variable defines its own "column" on file, is
the best choice. In real life, the optimum may stay somewhat in the middle.

Finally, the user may want to save, together with his data and their dictionary,
also some summary information to be easily accessible without needing to browse
the entire file. For example, one may want to quickly fetch the distribution of
the few most important variables, to understand if the current file is interesting
or not. The best way to show summary information of numeric types is to produce a
"histogram", in which the number of times a variable had a value comprised into
some interval is counted, rather than remembering each single value. ROOT allows
the user to define, fill, manipulate and display histograms with 1, 2, or 3
dimensions (though 3D histograms are almost never needed in real life). Histograms
can be (and usually are) saved into the same ROOT file as the data, possibly in a
different directory from that containing the main tree or n-tuple.
