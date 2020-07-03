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

{% highlight C++ %}
 void macro() {
   TFile::Open("f.root");
   hpx->Draw();
 }
{% endhighlight %}

### 2. Parameters

{% highlight C++ %}
void macro() {
  TFile::Open("f.root");
  int i = 12;
  obj->Func(i);
}
{% endhighlight %}

### 3. Function Overloading

An additional complication is function overload resolution required in this example:

{% highlight C++ %}
  void Klass::Func(TTree*);
  void NameSpace::Func(TH1*);
  void Func(TObject*);
  using namespace NameSpace;

  void Klass::Call() {
    TFile::Open("f.root");
    int i = 12;
    Func(obj);
  }
{% endhighlight %}


### N. Can we have smth else?

## Solutions

### Escaping to Late Evaluation

In use case 1: the code can be converted to:

{% highlight C++ %}
 void macro() {
   TFile::Open("f.root");
   Cling::Interpreter().Eval("hpx->Draw()");
 }
{% endhighlight %}

This is now valid C++; the code `hpx->Draw()` will be evaluated during runtime, when we
know all the necessary information. In this case we have:

In use case number 2: we need to pass the variable to the interpreter as well. We need to
introduce a _Context_

{% highlight C++ %}
  void macro() {
    TFile::Open("f.root");
    int i = 12;
    {
      Cling::InterpreterContext ctx;
      ctx.add("i", &i);
      Cling::Interpreter().Eval("obj->Func(i);", ctx);
    }
  }
{% endhighlight %}

In use case number 3: we don't know the type of obj at compile time, we don't know which
overload of `Func()` to use.

Here we have several options:

  * _Let Cling decide which overload to use_ - We could pass the list of candidates that
    Sema found during overload resolution to the escaped interpreter, probably including a
    copy of the identifier table. This would require changes in Sema, because the escaped
    Sema needs to take an external identifier table and the candidates into account;
  * _Assume void*_ - One could argue that this is a rare case. We know that unknown identifiers
    have to be pointers; we could simply select the void* overload of `Func()`, i.e. claim
    that obj is a `void*`;
  * _Refuse the overloads_ - If we have problems determining the proper overload. By refusing
    to accept multiple overloads we can simplify the situation;
  * _Discontinue Support_ - We could detect the case of multiple overload candidates and issue
    an error. This should be in case no other options are possible.


<hr style="border-width: 1px medium medium; border-style: dashed none none; border-color: #ccc" /><p style="width: 100%; text-align: right; font-size: 0.8em;">
<i>The page is based on <a href="https://twiki.cern.ch/twiki/bin/view/Main/ClingDynamicScope" title="ClingDynamicScope">ClingDynamicScope</a> at tWiki </i>