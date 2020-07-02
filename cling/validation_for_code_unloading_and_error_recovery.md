---
title: Validation for Code Unloading and Error Recovery
layout: single
sidebar:
  nav: "cling"
toc: true
toc_sticky: true
---


### INTRODUCTION

This project was part of CERN Summer Student Program 2013. It was completed by Jerome Beclin, under the supervision of Vassil Vassilev.

### THE PROJECT

I had to create a tool to make sure that the internal state of the compiler and interpreter was the same before and after introducing an error or unloading of code. To do so, we have to check that all data structures of the compiler state are the same.

<ul><li>Examples of those data structures would be:</li>
   <li>AST (Abstract Syntax Tree)</li>
   <li>Included Files</li>
   <li>Lookup tables</li>
   <li>Preprocessor macro definitions</li>
   <li>ID Resolving chain</li>
   <li>And many more</li>
</ul>During my three months at CERN, I had time to work on the AST, the included files and the lookup tables.

<ol><li>Definitions:</li>
   <li>AST (Abstract Syntax Tree) An abstract syntax tree (AST) is a tree representation of the abstract syntactic structure of source code written in a programming language. Each node of the tree denotes a construct occurring in the source code. The syntax is 'abstract' in not representing every detail appearing in the real syntax. Abstract syntax trees are a data structure widely used in compilers, due to their property of representing the structure of program code. An AST is usually the result of the syntax analysis phase of a compiler. It often serves as an intermediate representation of the program through several stages that the compiler requires, and has a strong impact on the final output of the compiler.</li>
   <li>Lookup tables These tables are the place where all the identifiers are stored.</li>
   <li>Included files When including a file to your code (using #include
   <header name="">), that file will be treated as if its contents were inserted into the original file. The include directive instructs the preprocessor to paste the text of the given file into the current file. Generally, it is necessary to tell the preprocessor where to look for header files if they are not placed in the current directory or a standard system directory.</header></li>
</ol>

### My implementation

I extended the existing functionalities in cling in order to validate the internal representations. I implemented “dot” commands, so I worked on the Interpreter, MetaSema and MetaParser files. The two commands I implemented are called .storeState and .compareState. These commands dump the internal compiler data structures (AST, included files and lookup tables). They are usable in Cling.

<ul><li>.storeState “stateName" That command store the current state of the internal data structures into files. It stores in three different files the AST, the included files and the lookup tables.</li>
   <li>.compareState “stateName" That command compare the current state of the data structures with the previous one stored, then make a diff between both states in order to create a file containing the differences between both states (if there are some).</li>
</ul>

### Details

<ul><li>When using .storeState “stateName“</li>
   <li>
   Those files are created in the current directory.

   <i>When using .compareState “stateName“</i>

   <ul><li>Creation of three files:</li>
      <li>stateNameAST.tmp (containing the current AST)</li>
      <li>stateName.lookup (containing the current lookup tables)</li>
      <li>stateName.includedFiles (containing the current included files)</li>
      <li>If stateName is already used, an error message is printed and Cling stops</li>
      <li>Creation of three files:
      <ul><li>stateNameASTcmp.tmp (containing the current AST)</li>
         <li>stateNamecmp.lookup (containing the current lookup tables)</li>
         <li>stateNamecmp.includedFiles (containing the current included files)</li>
      </ul></li>
      <li>A diff is made between:
      <ul><li>“stateNameAST.tmp” and “stateNamecmpAST.tmp”</li>
         <li>“stateName.lookup” and “stateNamecmp.lookup”</li>
         <li>“stateName.includedFiles” and “stateNamecmp.includedFiles”</li>
      </ul></li>
      <li>If there are differencies in the between those files, a new file is created:
      We then print on the screen a message of that kind: “File with AST differences stored in: stateName.diff”, followed by the path to the file.

### Skeleton of a test

      After implementing, I had to test that everything worked well. To do so, I used a test like the one below (this test was used to make sure that the differences in the AST were printed correctly).

      Screen Shot here...

      .storeState is introduced before the error.<br />
      .compareState is introduced after the error.<br />
      We then do a check to verify that we have the message expected printed on the screen.

      ### What is yet to implement

      With a bit more time, a few implementations would have been interesting. First of all, it would have been nice to be able to choose a concrete path as a name for both meta commands, instead of storing the created files in the current directory. Second of all, the verification of the lookup table is not fully ready yet, because a new source revision of llvm needs to be imported in ROOT mainline.

      <ul><li>stateNameAST.diff if there are differences in the AST</li>
         <li>stateNameLookup.diff if there are differences in the lookup tables</li>
         <li>stateNameIncludedFiles.diff if there are differences in the included files</li>
         <li>All the files previously created for the diff are then deleted</li>
      </ul></li>
   </ul></li>