---
title: Signal/Slot Communication
layout: single
sidebar:
  nav: "manual"
toc: true
toc_sticky: true
---

## Introduction

ROOT supports its own version of the signal/slot communication mechanism originally featured in **Qt**, a C++ GUI application framework by [the Qt Company.](https://www.qt.io/) The ROOT implementation uses the ROOT type system. In addition to all features provided by Qt the ROOT version supports connecting slots to a class (as opposed to connecting to a specific object). These slots will be called whenever the specified signal is emitted by any object of the class. Also a slot can have default arguments and be either a class method or a stand-alone function (compiled or interpreted).

## Basic Concepts

Signals and slots are used for communication between objects.
Signals are emitted by objects when they change their state in a way that may be interesting to the outside world. This is all the object does to communicate. It does not know if anything is receiving the signal at the other end.
Slots can be used for receiving signals. A slot does not know if it has any signal(s) connected to it.
This is true information encapsulation, and ensures that the object can be used as a true software component.
Signals and slots can take any number of arguments of any type.
It is possible to connect as many signals as you want to a single slot, and a signal can be connected to as many slots as you desire.
It is possible to make a single connection from all objects of the same class.

## A Small Example

A minimal C++ class declaration might read:

{% highlight C++ %}
class A {
private:
   Int_t  fValue;
public:
   A() { fValue = 0; }
   Int_t  GetValue() const { return fValue; }
   void   SetValue(Int_t);
};
{% endhighlight %}

A small ROOT **interpreted** class might read:

{% highlight C++ %}
class A {
   RQ_OBJECT("A")
private:
   Int_t  fValue;
public:
   A() { fValue = 0; }
   Int_t  GetValue() const { return fValue; }
   void   SetValue(Int_t);      //*SIGNAL*
};
{% endhighlight %}

This class has the same internal state, and public methods to access the state, but in addition it has support for component programming using signals. This class can tell the outside world that its state has changed by emitting a signal, `SetValue(Int_t)`.

Here is a possible implementation of `A::SetValue()`:

{% highlight C++ %}
void A::SetValue(Int_t v)
{
   if (v != fValue) {
      fValue = v;
      Emit("SetValue(Int_t)", v);
   }
}
{% endhighlight %}

The line `Emit("SetValue(Int_t)", v)` emits the signal `SetValue(Int_t)` with argument `v` from the object. As you can see, you emit a signal by using `Emit("full_method_name",arguments)`.

Here is one of the ways to connect two of these objects together:

{% highlight C++ %}
A *a = new A();
A *b = new A();
a->Connect("SetValue(Int_t)", "A", b, "SetValue(Int_t)");
b->SetValue(11);
a->SetValue(79);
b->GetValue();          // this would now be 79, why?
{% endhighlight %}

The statement `a->Connect("SetValue(Int_t)", "A", b, "SetValue(Int_t)")`  denotes that object `a` connects its `"SetValue(Int_t)"` signal to `"A::SetValue(Int_t)"` method of object `b`.

Calling `a->SetValue(79)` will make `a` emit a signal, which `b` will receive, i.e. `b->SetValue(79)` is invoked. It is executed immediately, just like a normal function call. `b` will in turn emit the same signal, which nobody receives, since no slot has been connected to it, so it disappears into hyperspace.

This example illustrates that objects can work together without knowing about each other, as long as there is someone around to set up a connection between them.

## Features of the ROOT implementation

* The ROOT implementation **does not require the** *moc* preprocessor and the `signal:` and `slot:` keywords in the class declaration. Signals and slots are normal class methods.

* The class which corresponds to **Qt's** **QObject** is [TQObject](https://root.cern/doc/master/classTQObject.html). It reproduces the general features of the QObject class and has the `Connect()`, `Disconnect()` and `Emit()` methods. The [TQObject](https://root.cern/doc/master/classTQObject.html) class does not derive from any class which makes it possible to have multiple inheritance from [TObject](https://root.cern/doc/master/classTQObject.html) derived classes and [TQObject](https://root.cern/doc/master/classTQObject.html).

* By placing the [`RQ_OBJECT()`](https://root.cern/doc/master/RQ__OBJECT_8h.html#a354f044c490c8ff566736cf22fb1d024) macro inside a class body you can use signals and slots with classes not inheriting from [TQObject](https://root.cern/doc/master/classTQObject.html), like interpreted classes which can not derive from compiled classes. This makes it possible to apply the **Object Communication Mechanism** between compiled and interpreted classes in an interactive ROOT session.

* The ROOT implementation allows to make connections to any object known to the ROOT C++ interpreter. The following line makes a connection between signal `Pressed()` from `button` and method/slot `Draw()` from object `hist` of class (compiled or interpreted) `TH1`

    {% highlight C++ %}
    Connect(button, "Pressed()", "TH1", hist, "Draw()");
    {% endhighlight %}

    To connect to a stand-alone function (compiled or interpreted) the arguments corresponding to the name of the class and receiving object should be zero. For example

    {% highlight C++ %}
    Connect(button, "Pressed()", 0, 0, "printInfo()");
    {% endhighlight %}

* It is also possible to make a single connection from all objects of the same class. For example:

    {% highlight C++ %}
    TQObject::Connect("Channel", "AlarmOn()", "HandlerClass", handler, "HandleAlarm()");
    {% endhighlight %}

    where the class name is specified by the first argument. Signal `"AlarmOn()"` for any object of class `"Channel"` is now connected to the `"HandleAlarm()"` method of the `"handler"` object of the `"HandlerClass"`.

* It is possible to set default parameters values to a slot method while connecting to it. Such slot will be activated without passing parameters to it. To set default arguments to a slot an equal symbol '=' should be placed at the beginning of the prototype string. For example

     {% highlight C++ %}
     Connect(button, "Pressed()", "TH1", hist, "SetMaximum(=123)");
     Connect(button, "Pressed()", "TH1", hist, "Draw(=\"LEGO\")");
     {% endhighlight %}

## Signals

A signal is a normal class method. **The first requirement** is that it should call an `Emit()` method. The format of this method is the following:

{% highlight C++ %}
Emit("full_method_name"[,arguments]);
{% endhighlight %}

where `"full_method_name"` is the method name and prototype string of the signal method.
For example, for `SetValue(Int_t value)` the full method name will be `"SetValue(Int_t)"`, where `SetValue` is the method name and `Int_t` the prototype string. Note that typedefs will be resolved to facilitate matching of slots to signals. So the slot `"print(int)"` can be connected to the above signal which has an `Int_t` as argument.

**The second requirement** is that the method declaration should have the string `*SIGNAL*` in its comment field. Like:

{% highlight C++ %}
void SetValue(Int_t x);  //*SIGNAL*
{% endhighlight %}

This provides an explicit interface specification for the user (this requirement is currently not enforced at run-time).

**The third requirement**, only necessary if you want to have class signals (i.e. for all objects of a class), is that you have to replace the standard `ClassImp` macro by `ClassImpQ`.

Signals are currently implemented for several ROOT classes like [TTimer](https://root.cern/doc/master/classTTimer.html) and [TCanvas](https://root.cern/doc/master/classTCanvas.html) (to find quickly all defined signals do for example: `grep '*SIGNAL*' $ROOTSYS/include/*.h`).

