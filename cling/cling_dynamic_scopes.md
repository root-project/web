---
title: "Cling: Dynamic Scopes"
layout: single
sidebar:
  nav: "cling"
toc: true
toc_sticky: true
---

## The Problem
The objects from the current directory (gDirectory) are injected into a magic scope that is
available to CINT:

**Important constrain:** To not break old code we need to continue to support this. Of course
the code is invalid C++ and thus cannot be parsed by clang. Upon clang's Sema complaining about
undeclared identifiers we need to convert it into proper C++.

## Use Cases

### 1. Simple use case:

<pre> <div class="geshifilter"><pre class="cpp geshifilter-cpp" style="font-family:monospace;"> <span style="color: #0000ff;">void</span> macro<span style="color: #008000;">(</span><span style="color: #008000;">)</span> <span style="color: #008000;">{</span>
   TFile<span style="color: #008080;">::</span><span style="color: #007788;">Open</span><span style="color: #008000;">(</span><span style="color: #FF0000;">"f.root"</span><span style="color: #008000;">)</span><span style="color: #008080;">;</span>
   hpx<span style="color: #000040;">-</span><span style="color: #000080;">&gt;</span>Draw<span style="color: #008000;">(</span><span style="color: #008000;">)</span><span style="color: #008080;">;</span>
 <span style="color: #008000;">}</span></pre></div></pre>

### 2. Parameters

<pre> <div class="geshifilter"><pre class="cpp geshifilter-cpp" style="font-family:monospace;"><span style="color: #0000ff;">void</span> macro<span style="color: #008000;">(</span><span style="color: #008000;">)</span> <span style="color: #008000;">{</span>
  TFile<span style="color: #008080;">::</span><span style="color: #007788;">Open</span><span style="color: #008000;">(</span><span style="color: #FF0000;">"f.root"</span><span style="color: #008000;">)</span><span style="color: #008080;">;</span>
  <span style="color: #0000ff;">int</span> i <span style="color: #000080;">=</span> <span style="color: #0000dd;">12</span><span style="color: #008080;">;</span>
  obj<span style="color: #000040;">-</span><span style="color: #000080;">&gt;</span>Func<span style="color: #008000;">(</span>i<span style="color: #008000;">)</span><span style="color: #008080;">;</span>
<span style="color: #008000;">}</span></pre></div></pre>

### 3. Function Overloading

An additional complication is function overload resolution required in this example:

<pre> <div class="geshifilter"><pre class="cpp geshifilter-cpp" style="font-family:monospace;">  <span style="color: #0000ff;">void</span> Klass<span style="color: #008080;">::</span><span style="color: #007788;">Func</span><span style="color: #008000;">(</span>TTree<span style="color: #000040;">*</span><span style="color: #008000;">)</span><span style="color: #008080;">;</span>
  <span style="color: #0000ff;">void</span> NameSpace<span style="color: #008080;">::</span><span style="color: #007788;">Func</span><span style="color: #008000;">(</span>TH1<span style="color: #000040;">*</span><span style="color: #008000;">)</span><span style="color: #008080;">;</span>
  <span style="color: #0000ff;">void</span> Func<span style="color: #008000;">(</span>TObject<span style="color: #000040;">*</span><span style="color: #008000;">)</span><span style="color: #008080;">;</span>
  <span style="color: #0000ff;">using</span> <span style="color: #0000ff;">namespace</span> NameSpace<span style="color: #008080;">;</span>
 
  <span style="color: #0000ff;">void</span> Klass<span style="color: #008080;">::</span><span style="color: #007788;">Call</span><span style="color: #008000;">(</span><span style="color: #008000;">)</span> <span style="color: #008000;">{</span>
    TFile<span style="color: #008080;">::</span><span style="color: #007788;">Open</span><span style="color: #008000;">(</span><span style="color: #FF0000;">"f.root"</span><span style="color: #008000;">)</span><span style="color: #008080;">;</span>
    <span style="color: #0000ff;">int</span> i <span style="color: #000080;">=</span> <span style="color: #0000dd;">12</span><span style="color: #008080;">;</span>
    Func<span style="color: #008000;">(</span>obj<span style="color: #008000;">)</span><span style="color: #008080;">;</span>
  <span style="color: #008000;">}</span></pre></div></pre>


### n. Can we have smth else?

## Solutions

### Escaping to Late Evaluation
In use case 1: the code can be converted to:

<pre> <div class="geshifilter"><pre class="cpp geshifilter-cpp" style="font-family:monospace;"> <span style="color: #0000ff;">void</span> macro<span style="color: #008000;">(</span><span style="color: #008000;">)</span> <span style="color: #008000;">{</span>
   TFile<span style="color: #008080;">::</span><span style="color: #007788;">Open</span><span style="color: #008000;">(</span><span style="color: #FF0000;">"f.root"</span><span style="color: #008000;">)</span><span style="color: #008080;">;</span>
   Cling<span style="color: #008080;">::</span><span style="color: #007788;">Interpreter</span><span style="color: #008000;">(</span><span style="color: #008000;">)</span>.<span style="color: #007788;">Eval</span><span style="color: #008000;">(</span><span style="color: #FF0000;">"hpx-&gt;Draw()"</span><span style="color: #008000;">)</span><span style="color: #008080;">;</span>
 <span style="color: #008000;">}</span></pre></div></pre>

This is now valid C++; the code hpx-&gt;Draw() will be evaluated during runtime, when we know all
the necessary information. In this case we have:

In use case number 2: we need to pass the variable to the interpreter as well. We need to introduce a _Context_

<pre> <div class="geshifilter"><pre class="cpp geshifilter-cpp" style="font-family:monospace;">  <span style="color: #0000ff;">void</span> macro<span style="color: #008000;">(</span><span style="color: #008000;">)</span> <span style="color: #008000;">{</span>
    TFile<span style="color: #008080;">::</span><span style="color: #007788;">Open</span><span style="color: #008000;">(</span><span style="color: #FF0000;">"f.root"</span><span style="color: #008000;">)</span><span style="color: #008080;">;</span>
    <span style="color: #0000ff;">int</span> i <span style="color: #000080;">=</span> <span style="color: #0000dd;">12</span><span style="color: #008080;">;</span>
    <span style="color: #008000;">{</span>
      Cling<span style="color: #008080;">::</span><span style="color: #007788;">InterpreterContext</span> ctx<span style="color: #008080;">;</span>
      ctx.<span style="color: #007788;">add</span><span style="color: #008000;">(</span><span style="color: #FF0000;">"i"</span>, <span style="color: #000040;">&amp;</span>i<span style="color: #008000;">)</span><span style="color: #008080;">;</span>
      Cling<span style="color: #008080;">::</span><span style="color: #007788;">Interpreter</span><span style="color: #008000;">(</span><span style="color: #008000;">)</span>.<span style="color: #007788;">Eval</span><span style="color: #008000;">(</span><span style="color: #FF0000;">"obj-&gt;Func(i);"</span>, ctx<span style="color: #008000;">)</span><span style="color: #008080;">;</span>
    <span style="color: #008000;">}</span>
  <span style="color: #008000;">}</span></pre></div></pre>

In use case number 3: we don't know the type of obj at compile time, we don't know which overload of
Func() to use.

<ul> Here we have several options:
<li>_Let Cling decide which overload to use_ - We could pass the list of candidates that Sema found during overload resolution to the escaped interpreter, probably including a copy of the identifier table. This would require changes in Sema, because the escaped Sema needs to take an external identifier table and the candidates into account;</li>
<li>_Assume void*_ - One could argue that this is a rare case. We know that unknown identifiers have to be pointers; we could simply select the void* overload of Func(), i.e. claim that obj is a void*;</li>
<li>_Refuse the overloads_ - If we have problems determining the proper overload. By refusing to accept multiple overloads we can simplify the situation;</li>
<li>_Discontinue Support_ - We could detect the case of multiple overload candidates and issue an error. This should be in case no other options are possible.</li>
</ul>

<hr style="border-width: 1px medium medium; border-style: dashed none none; border-color: #ccc" /><p style="width: 100%; text-align: right; font-size: 0.8em;">
<i>The page is based on <a href="https://twiki.cern.ch/twiki/bin/view/Main/ClingDynamicScope" title="ClingDynamicScope">ClingDynamicScope</a> at tWiki </i>