---
title: "Cling: Implementing Dynamic Scopes with clang"
layout: single
sidebar:
  nav: "cling"
toc: true
toc_sticky: true
---


### Current Progress


<b>This document is mostly here for historical reasons. Dynamic scopes are in cling;
they are used in production in ROOT.</b>


So here goes the history:

### Step 1:

One of the major concerns was: Is it possible to make LLVM and particularly Sema skip the
diagnostic errors and build a <i>pseudo-valid abstract syntax tree (AST)</i>. Pseudo-valid
AST, in the terms of Cling, means that there is an AST which is build successfully but
LLVM cannot generate code from it.


According to the advice of the Sebastian Redl (from the clang dev team), we needed to mark all
unknown symbols as of dependent type. The e-mail can be found
<a href="http://comments.gmane.org/gmane.comp.compilers.clang.devel/10463" title="clang, unknown identifiers, and ahead of time compilation">here</a>
.

In order to mark an unknown symbol as dependent we need to watch clang::Sema's lookup
facilities. We were able to patch Sema in less intrusive way than we did before. We provide last resort lookup, when a lookup fails in Sema. The patch was accepted in clang r126387 and r126648. Now we don't even need to patch clang, we just provide implementation for the existing hook in Sema!

### Step 2:

Next step is to transform the artificially dependent (marked by us) nodes in valid C++ code
to make Sema happy. We substitute h-&gt;Draw with specific template instantiation of:

{% highlight C++ %}
  template<typename T>
  T EvaluateProxyT(const char* expr, void* varaddr[], clang::DeclContext* DC );
{% endhighlight %}

where T is the expected type of the dependent expression. For example the case with "h-&gt;Draw();" will become EvaluateProxyT("h-&gt;Draw", {}, CurDC); CurDC is the declaration context in which the expression is used.
This can be seen by runnung cling with:

{% highlight C++ %}
  .printAST //Enabling AST printing
  .x test.cxx
{% endhighlight %}

text.cxx contains:

{% highlight C++ %}
  extern "C" int printf(const char* fmt,...);

  void AFUNCTION() {
    printf("HELLO\n");
  }

  void test () {
    AFUNCTION();
    h->Draw();
  }
{% endhighlight %}

Imagine we have more complex use-case

{% highlight C++ %}
  void test () {
    int a = 1;
    const char* b = "test"
    if (h->Draw(a,b))
      ...
  }
{% endhighlight %}

This will end up as:

{% highlight C++ %}
  void test () {
    int a = 1;
    const char* b = "test"
    if (EvaluateProxyT<bool>("h->Draw(@,@)", {&a, &b}, CurDC))
      ...
  }
{% endhighlight %}

The return type of EvaluateProxy is bool, because the expressions that are in if statement
are implicitly converted to bool. Note that we still don't know the runtime addresses of a
and b, so we need an array of their addresses, which are going to be known at runtime.

###  Step 3: (Work in progress)
During runtime h-&gt;Draw will not fail in lookup, because it will be provided by ROOT, all we need to do is to get the result and its type from the execution engine and return it through EvaluateProxy.
For that we need to create a wrapper during runtime and evaluate the expression.
It is not easy to evaluate this expression, because we need the hint what type is expected. In the example with h-&gt;Draw() and if (h-&gt;Draw(a,b)) we have hints, but there are few cases that we don't. They need to be investigated in details.
In order to get the result of the runtime execution of h-&gt;Draw(), we need to create a wrapper in the declaration context, in which the expression is used and execute it and return the result and get the type.