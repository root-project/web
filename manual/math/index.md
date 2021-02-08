---
title: Mathematical libraries
layout: single
sidebar:
  nav: "manual"
toc: true
toc_sticky: true
---

The ROOT mathematical libraries consist of the following components:

- [MathCore library](#mathcore-library)

- [MathMore library](#mathmore-library)

- [Linear algebra packages](#linear-algebra-packages)

- [Minimization libraries and classes](#minimization-libraries-and-classes)

- [Physics vectors]({{ '/manual/physics_vectors' | relative_url }})

- [ROOT statistics classes](#root-statistics-classes)

- [UNU.RAN](#unuran)

- [FOAM](#foam)

- [FFTW](#fftw)

- [MLP](#mlp)

- [Quadp](#quadp)

## MathCore library

The [MathCore](https://root.cern/doc/master/group__MathCore.html){:target="_blank"} library provides a collection of functions, C++ classes and ROOT classes for HEP numerical computing. <br>
The `MathCore` is a self-consistent minimal set of tools needed for the basic numerical computing. More advanced mathematical functionalities are provided by the [MathMore](#mathmore-library) library.
The following is included in the `MathCore` library:

- [Special functions](https://root.cern/doc/master/group__SpecFunc.html){:target="_blank"}: Functions such as gamma, beta and error function used in HEP.

- [Statistical functions](https://root.cern/doc/master/group__StatFunc.html){:target="_blank"}: Functions used in statistics, such as the probability density functions and the cumulative distributions functions for continuous and discrete distributions.

- [Function classes and interfaces](https://root.cern/doc/master/group__CppFunctions.html){:target="_blank"}: Interfaces (abstract classes) and base classes, including helper classes to wrap free (static) and non-static member functions.

- Numerical algorithms: User classes with basic implementations for:
   - [Numerical integration](https://root.cern/doc/master/group__Integration.html){:target="_blank"}
   - [Numerical differentiation](https://root.cern/doc/master/group__Deriv.html){:target="_blank"}
   - [One-dimensional Root-Finding](https://root.cern/doc/master/group__RootFinders.html){:target="_blank"}
   - [One-dimensional minimization](https://root.cern/doc/master/group__Min1D.html){:target="_blank"} and [multi-dimensional minimization](https://root.cern/doc/master/group__MultiMin.html){:target="_blank"}

- [Fitting and parameter estimation](https://root.cern/doc/master/group__Fit.html){:target="_blank"}: ROOT classes for fitting and parameter estimation from a given data set.

In addition, the [MathCore](https://root.cern/doc/master/group__MathCore.html){:target="_blank"} library contains the following ROOT classes that were originally part of *libCore*:

- the namespaces for [TMath](https://root.cern/doc/master/namespaceTMath.html){:target="_blank"} and [ROOT::Math](https://root.cern/doc/master/namespaceROOT_1_1Math.html){:target="_blank"}.

- ROOT classes for pseudo-random number generators, {% include ref class="TRandom" %} and the derived classes {% include ref class="TRandom1" %}, {% include ref class="TRandom2" %} and {% include ref class="TRandom3" %}.

- ROOT class for complex numbers, {% include ref class="TComplex" %}.

- other ROOT classes such as:
   - [TKDTree](https://root.cern/doc/master/classTKDTree.html){:target="_blank"}: ROOT class implementing a kd-tree.
   - [ROOT::Math::GoFTest](https://root.cern/doc/master/classROOT_1_1Math_1_1GoFTest.html){:target="_blank"}: ROOT class for testing the for goodness of fit tests.


### TMath

The [TMath](https://root.cern/doc/master/namespaceTMath.html){:target="_blank"} namespace provides a collection of free functions:

- numerical constants (such as &#x03C0;, e, h, etc.)
- [trigonometric and elementary mathematical functions](#elementary-functions)
- functions to work with arrays and collections (e.g., functions to find the minimum and maximum of arrays)
- [statistic functions to work on array of data (e.g., mean and RMS of arrays)](#statistic-functions-operating-on-arrays)
- algorithms for binary search/hashing sorting
- [special mathematical functions such as `Bessel`, `Erf`, `Gamma`, etc.](#special-and-statistical-function)
- statistical functions, such as common probability and cumulative (quantile) distributions
- geometrical functions


<p><a name="elementary-functions"></a></p>
**Elementary functions**

Some of elementary mathematical functions refer to basic mathematical functions such as the square root, the power to a number of the calculus
of a logarithm, while others are used for number treatment, like rounding.

Although there are some functions that are not in the standard C math library (such as `Factorial`), most of the functionality
offered here is just a wrapper of the first ones. Nevertheless, some of them also offer some security checks or a
better precision, such as the trigonometrical functions `ASin(x)`, `ACos(x)` or `ATan(x)`.

_**Examples**_

{% highlight C++ %}
// Generate a vector with 10 random numbers.
   vector<double> v(10);
   std::generate(v.begin(), v.end(), rand);

// Find the minimum value of the vector (iterator version).
   vector<double>::iterator it;
   it = TMath::LocMin(v.begin(), v.end());
   std::cout << *it << std::endl;

// The same with the old-style version.
   int i;
   i = TMath::LocMin(10, &v[0]);
   std::cout << v[i] << std::endl;

{% endhighlight %}


<p><a name="statistic-functions-operating-on-arrays"></a></p>
**Statistic functions operating on arrays**

[TMath](https://root.cern/doc/master/namespaceTMath.html){:target="_blank"} provides functions that process arrays for calculation:

- mean
- median
- geometrical mean
- sample standard deviation (RMS)
- the kth smallest element

_**Example**_

{% highlight C++ %}
// Size of the array.
   const int n = 100;

// Vector v with random values.
   vector<double> v(n);
   std::generate(v.begin(), v.end(), rand);

// Weight vector w.
   vector<double> w(n);
   std::fill(w.begin(), w.end, 1);
   double mean;

// Calculate the mean of the vector with iterators.
   mean = TMath::Mean(v.begin(), v.end());
{% endhighlight %}


<p><a name="special-and-statistical-function"></a></p>
**Special and statistical functions**

[TMath](https://root.cern/doc/master/namespaceTMath.html){:target="_blank"} provides special functions such as `Bessel`, `error functions`, `Gamma` or similar statistical mathematical
functions, including probability density functions, cumulative distribution and its inverse.

The majority of the special functions and the statistical distributions are provided also as free functions in the [ROOT::Math](https://root.cern/doc/master/namespaceROOT_1_1Math.html){:target="_blank"} namespace.

Functions not present in the [ROOT::Math](https://root.cern/doc/master/namespaceROOT_1_1Math.html){:target="_blank"} name that are provided only by [TMath](https://root.cern/doc/master/namespaceTMath.html){:target="_blank"} are:
- Special functions:
   - DiLogarithm
   - Struve
- Statistical functions:
   - KolmogorovProb
   - Voigt function
   - LaplaceDist
   - Vavilov

### ROOT::Math

The [ROOT::Math](https://root.cern/doc/master/namespaceROOT_1_1Math.html){:target="_blank"} namespace provides a set of function interfaces to define the basic behaviour of a mathematical function:

- [One-dimensional function interfaces](#one-dimensional-function-interfaces)
- [Multi-dimensional function interfaces](#multi-dimensional-function-interfaces)
- [Parametric function interfaces](#parametric-function-interfaces)

In addition, helper classes, wrapping the user interfaces in the [ROOT::Math](https://root.cern/doc/master/namespaceROOT_1_1Math.html){:target="_blank"} function interfaces are provided. With [wrapper functions](#wrapper-functions) you can insert your own type of function in the needed function interface.

To use the self-defined functions, they must have inherited from one of the following classes:

{% include figure_image
img="function-hierarchy.png"
caption="ROOT::Math function interface structure."
%}

<p><a name="one-dimensional-function-interfaces"></a></p>
**One-dimensional function interfaces**

This interface is used for numerical algorithms operating only on one-dimensional functions. It cannot applied to multi-dimensional functions.

[ROOT::Math::IBaseFunctionOneDim](https://root.cern/doc/master/classROOT_1_1Math_1_1IBaseFunctionOneDim.html){:target="_blank"}<br>
This interface provides a method to evaluate the function given a value (simple double) by implementing `double operator()` (`const double`). The defined user class only needs to reimplement the purely abstract double `DoEval(double x)` method, which does the work of evaluating the function at point x.

_**Example**_

Example for the implementation of a class that represents a mathematical function.

{% highlight C++ %}
   #include "Math/IFunction.h"

   class MyFunction: public ROOT::Math::IBaseFunctionOneDim
   {
      double DoEval(double x) const
      {
      return x*x;
      }
   ROOT::Math::IBaseFunctionOneDim* Clone() const
      {
      return new MyFunction();
      }
   };
{% endhighlight %}

[ROOT::Math::IGradientFunctionOneDim](https://root.cern/doc/master/classROOT_1_1Math_1_1IGradientFunctionOneDim.html){:target="_blank"}<br>
This interface is needed by some numerical algorithms to calculate the derivatives of the function. It introduces the method double `Derivative(double x)`, which returns
the derivative of the function at point x. The class from which the user inherits must implement the abstract method `double DoDerivative(double x)`, leaving the rest of the class untouched.

_**Example**_

Example for the implementation of a gradient one-dimensional function.

{% highlight C++ %}
   #include "Math/IFunction.h"

   class MyGradientFunction: public ROOT::Math::IGradientFunctionOneDim
   {
   public:
   double DoEval(double x) const
      {
      return sin(x);
      }
   ROOT::Math::IBaseFunctionOneDim* Clone() const
      {
      return new MyGradientFunction();
      }
   double DoDerivative(double x) const
      {
      return -cos(x);
      }
   };
 {% endhighlight %}

<p><a name="multi-dimensional-function-interfaces"></a></p>
**Multi-dimensional function interfaces**

This interface is used for numerical algorithms operating on multi-dimensional functions.

[ROOT::Math::IBaseFunctionMultiDim](https://root.cern/doc/master/namespaceROOT_1_1Math.html#a12ea485a599dc09eb802bd98e15228b9){:target="_blank"}<br>
This interface provides the `double operator()` (`const double*`) that takes an array of doubles with all the values for the different dimensions. In this case, the user has to provide
the functionality for two different functions: `double DoEval(const double*)` and the unsigned `int NDim()`. The first evaluates the function given the array representing the multiple variables. The second returns the number of dimensions of the function.

_**Example**_

Example for the implementation of a basic multi-dimensional function.

{% highlight C++ %}
   #include "Math/IFunction.h"

   class MyFunction: public ROOT::Math::IBaseFunctionMultiDim
   {
   public:
   double DoEval(const double* x) const
      {
      return x[0] + sin(x[1]);
      }
   unsigned int NDim() const
      {
      return 2;
      }
   ROOT::Math::IBaseFunctionMultiDim* Clone() const
      {
      return new MyFunction();
      }
   };
{% endhighlight %}


[ROOT::Math::IGradientFunctionMultiDim](https://root.cern/doc/master/namespaceROOT_1_1Math.html#a5ea9b643efd905580803446b000aab44){:target="_blank"}<br>
This interface offers the same functionality as the base function and additionally the calculation of the derivative. It only adds the double `Derivative(double* x, uint ivar)` method for
the user to implement. This method must implement the derivative of the function with respect to the variable indicated with the second parameter.

_**Example**_

Example for the implementation of a multi-dimensional gradient function.

{% highlight C++ %}
   #include "Math/IFunction.h"

   class MyGradientFunction: public ROOT::Math::IGradientFunctionMultiDim
   {
   public:
   double DoEval(const double* x) const
      {
      return x[0] + sin(x[1]);
      }
   unsigned int NDim() const
      {
      return 2;
      }
   ROOT::Math::IGradientFunctionMultiDim* Clone() const
      {
      return new MyGradientFunction();
      }
   double DoDerivative(const double* x, unsigned int ipar) const
      {
      if ( ipar == 0 )
      return sin(x[1]);
      else
      return x[0] + x[1] * cos(x[1]);
      }
   };
{% endhighlight %}

<p><a name="parametric-function-interfaces"></a></p>
**Parametric function interfaces**

This interface is used for fitting after evaluating multi-dimensional functions.

[ROOT::Math::IParametricFunctionMultiDim](https://root.cern/doc/master/namespaceROOT_1_1Math.html#a285ff3c0500f74e5a5c0d8999d65525a){:target="_blank"}<br>
This interface describes a multi-dimensional parametric function. Similarly to the one dimensional version, the user needs to provide the `void SetParameters(double* p)` method as well
as the getter methods `const double * Parameters()` and `uint NPar()`.

_**Example**_

Example for the implementation of a parametric function.

{% highlight C++ %}
   #include "Math/IFunction.h"
   #include "Math/IParamFunction.h"

   class MyParametricFunction: public ROOT::Math::IParametricFunctionMultiDim
   {
   private:
   const double* pars;
   public:
   double DoEvalPar(const double* x, const double* p) const
      {
      return p[0] * x[0] + sin(x[1]) + p[1];
      }
   unsigned int NDim() const
      {
      return 2;
      }
   ROOT::Math::IParametricFunctionMultiDim* Clone() const
     {
     return new MyParametricFunction();
     }
   const double* Parameters() const
      {
      return pars;
      }
   void SetParameters(const double* p)
      {
      pars = p;
      }
   unsigned int NPar() const
      {
      return 2;
      }
   };
{% endhighlight %}

[ROOT::Math::IParametricGradFunctionMultiDim](https://root.cern/doc/master/namespaceROOT_1_1Math.html#a2e698159de0fa9c0bfb713f673464147){:target="_blank"}<br>
This interface provides an interface for parametric gradient multi-dimensional functions. In addition to function evaluation, it provides the gradient with respect to the parameters,
via the `ParameterGradient()` method. This interface is only used in case of some dedicated fitting algorithms, when is required or more efficient to provide derivatives with respect to the parameters.

_**Example**_

Example for the implementation of a parametric gradient function.

{% highlight C++ %}
   #include "Math/IFunction.h"
   #include "Math/IParamFunction.h"

   class MyParametricGradFunction:
   public ROOT::Math::IParametricGradFunctionMultiDim
   {
   private:
   const double* pars;
   public:
   double DoEvalPar(const double* x, const double* p) const
      {
      return p[0] * x[0] + sin(x[1]) + p[1];
      }
   unsigned int NDim() const
      {
      return 2;
      }
   ROOT::Math::IParametricGradFunctionMultiDim* Clone() const
      {
      return new MyParametricGradFunction();
      }
   const double* Parameters() const
      {
      return pars;
      }
   void SetParameters(const double* p)
      {
      pars = p;
      }
   unsigned int NPar() const
      {
      return 2;
      }
   double DoParameterDerivative(const double* x, const double* p,
   unsigned int ipar) const
      {
      if ( ipar == 0 )
      return sin(x[1]) + p[1];
      else
      return p[0] * x[0] + x[1] * cos(x[1]) + p[1];
      }
      };
{% endhighlight %}

<p><a name="wrapper-functions"></a></p>
**Wrapper functions**

To insert your own type of function in the needed function interface, helper classes, wrapping the user interface in the [ROOT::Math](https://root.cern/doc/master/namespaceROOT_1_1Math.html){:target="_blank"} function interfaces are provided.

There is one possible wrapper for every interface.

<table width="100%" border="0">
  <tbody>
    <tr>
      <th scope="col">Interface</th>
      <th scope="col">Wrapper</th>
      <th scope="col">Description</th>
    </tr>
    <tr>
      <td>ROOT::Math::IBaseFunctionOneDim</td>
      <td>ROOT::Math::Functor1D</td>
      <td>See → Wrapping one-dimensional functions</td>
    </tr>
  <tr>
      <td>ROOT::Math::IGradientFunctionOneDim</td>
      <td>ROOT::Math::GradFunctor1D</td>
      <td>See → Wrapping one-dimensional gradient functions</td>
    </tr>
      <tr>
      <td>ROOT::Math::IBaseFunctionMultiDim</td>
      <td>ROOT::Math::Functor</td>
      <td>See → Wrapping multi-dimensional functions</td>
    </tr>
      <tr>
      <td>ROOT::Math::IGradientFunctionMultiDim</td>
      <td>ROOT::Math::GradFunctor</td>
      <td>See → Wrapping multi-dimensional gradient functions</td>
    </tr>
</tbody>
</table>

Note the special case when [wrapping TF1 objects in parametric function interfaces](#wrapping-tf1-objects-in-parametric-function-interfaces).

<p><a name="wrapping-one-dimensional-functions"></a></p>
**Wrapping one-dimensional functions**

Use [ROOT::Math::Functor1D](https://root.cern/doc/master/classROOT_1_1Math_1_1Functor1D.html){:target="_blank"} to wrap one-dimensional functions.

[ROOT::Math::Functor1D](https://root.cern/doc/master/classROOT_1_1Math_1_1Functor1D.html){:target="_blank"} can wrap the following types:
- A free C function of type `double ()(double )`.
- Any C++ callable object implementation `double operator()( double)`.
- A class member function with the correct signature like `double Foo::Eval(double )`. In this case you pass the object pointer and a pointer to the member function (`&Foo::Eval`).

_**Example**_

{% highlight C++ %}
   #include "Math/Functor.h"

   class MyFunction1D {
   public:
   double operator()(double x) const {
   return x*x;
   }
   double Eval(double x) const { return x+x; }
   };
   double freeFunction1D(double x ) {
   return 2*x;
     }
     int main()
     {

// Wrapping a free function.
      ROOT::Math::Functor1D f1(&freeFunction1D);
      MyFunction1D myf1;

// Wrapping a function object implementing operator().
      ROOT::Math::Functor1D f2(myf1);

// Wrapping a class member function.
      ROOT::Math::Functor1D f3(&myf1,&MyFunction1D::Eval);
      cout << f1(2) << endl;
      cout << f2(2) << endl;
      cout << f3(2) << endl;
      return 0;
   }
{% endhighlight %}

<p><a name="wrapping-one-dimensional-gradient-functions"></a></p>
**Wrapping one-dimensional gradient functions**

Use [ROOT::Math::GradFunctor1D](https://root.cern/doc/master/classROOT_1_1Math_1_1GradFunctor1D.html){:target="_blank"} to wrap one-dimensional gradient functions.

It can be constructed in three different ways:
- Any object implementing both double `operator()( double)` for the function evaluation and `double Derivative(double)` for the function derivative.
- Any object implementing any member function such as `Foo::XXX(double )` for the function evaluation and any other member function such as `Foo::YYY(double)` for the derivative.
- Any two function objects implementing `double operator()( double)`. One object provides the function evaluation, the other the derivative. One or both function objects can be a free C function of type `double ()(double)`.

<p><a name="wrapping-multi-dimensional-functions"></a></p>
**Wrapping multi-dimensional functions**

Use the [ROOT::Math::Functor](https://root.cern/doc/master/classROOT_1_1Math_1_1Functor.html){:target="_blank"} to wrap multi-dimensional function objects.

It can wrap all the following types:
- Any C++ callable object implementing double `operator()( const double * )`.
- A free C function of type `double ()(const double *)`.
- A member function with the correct signature like `Foo::Eval(const double *)`. In this case one pass the object pointer and a pointer to the member function `(&Foo::Eval)`.

_**Example**_

{% highlight C++ %}
   #include "Math/Functor.h"

   class MyFunction {
   public:
   double operator()(const double *x) const {
   return x[0]+x[1];
   }
   double Eval(const double * x) const { return x[0]+x[1]; }
   };
   double freeFunction(const double * x )
     {
     return x[0]+x[1];
     }
   int main()
      {

// Test directly calling the function object.
    MyFunction myf;

// Test from a free function pointer.
    ROOT::Math::Functor f1(&freeFunction,2);

// Test from function object.
    ROOT::Math::Functor f2(myf,2);

// Test from a member function.
    ROOT::Math::Functor f3(&myf,&MyFunction::Eval,2);
    double x[] = {1,2};
    cout << f1(x) << endl;
    cout << f2(x) << endl;
    cout << f3(x) << endl;
    return 0;
}
{% endhighlight %}

<p><a name="wrapping multi-dimensional-gradient-functions"></a></p>
**Wrapping multi-dimensional gradient functions**

Use [ROOT::Math::GradFunctor](https://root.cern/doc/master/classROOT_1_1Math_1_1GradFunctor.html){:target="_blank"} to wrap C++ callable objects to make gradient functions.

It can be constructed in three different ways:
- From an object implementing both `double operator()( const double*)` for the function evaluation and `double Derivative(const double *, int icoord)` for the partial derivatives.
- From an object implementing any member function such as `Foo::XXX(const double *)` for the function evaluation and any member function such as `Foo::XXX(const double *, int icoord)` for the partial derivatives.
- From a function object implementing `double operator()( const double *)` for the function evaluation and another function object implementing `double operator() (const double *, int icoord)` for the partial derivatives.

The function dimension is required when constructing the functor.

<p><a name="wrapping-tf1-objects-in-parametric-function-interfaces"></a></p>
**Wrapping TF1 objects in parametric function interfaces**

Often the {% include ref class="TF1" %} class is used.<br>
Use the [ROOT::Math::WrappedTF1](https://root.cern/doc/master/classROOT_1_1Math_1_1WrappedTF1.html) class, if the interface to be wrapped is one-dimensional.

The default constructor takes a {% include ref class="TF1" %} reference as argument, wrapped with the interfaces of the [ROOT::Math::IParametricGradFunctionOneDim](https://root.cern/doc/master/classROOT_1_1Math_1_1IParametricGradFunctionOneDim.html){:target="_blank"} class.

_**Example**_

{% highlight C++ %}
   #include "TF1.h"
   #include "Math/WrappedTF1.h"
   int main()
   {
      TF1 f("Sin Function", "sin(x)+y",0,3);
      ROOT::Math::WrappedTF1 wf1(f);
      cout << f(1) << endl;
      cout << wf1(1) << endl;
      return 0;
   }
{% endhighlight %}

Use the [ROOT::Math::WrappedMultiTF1](https://root.cern/doc/master/namespaceROOT_1_1Math.html#a5c8071dfd2d9d6661de283f5e363566b) class, if the interface to be wrapped is multi-dimensional.

Following the usual procedure, setting the {% include ref class="TF1" %} though the constructor, wraps it into a [ROOT::Math::IParametricGradFunctionMultiDim](https://root.cern/doc/master/namespaceROOT_1_1Math.html#a2e698159de0fa9c0bfb713f673464147){:target="_blank"}.

_**Example**_

{% highlight C++ %}
   #include "TF1.h"
   #include "Math/WrappedMultiTF1.h"
   int main()
   {
      TF2 f("Sin Function", "sin(x) + y",0,3,0,2);
      ROOT::Math::WrappedMultiTF1 wf1(f);
      double x[] = {1,2};
      cout << f(x) << endl;
      cout << wf1(x) << endl;
      return 0;
 }
 {% endhighlight %}

### Random numbers

The [MathCore](https://root.cern/doc/master/group__MathCore.html){:target="_blank"} library provides the following classes for generating pseudo-random numbers:

- [TRandom](https://root.cern/doc/master/classTRandom.html){:target="_blank"}: Using a linear congruential random generator.
- [TRandom1](https://root.cern/doc/master/classTRandom1.html){:target="_blank"}: Random number generator based on the Ranlux engine.
- [TRandom2](https://root.cern/doc/master/classTRandom2.html){:target="_blank"}: Based on the maximally equi-distributed combined Tausworthe generator by L'Ecuyer.
- [TRandom3](https://root.cern/doc/master/classTRandom3.html){:target="_blank"}: Based on the Mersenne and Twister pseudo-random number generator.

> **Note**
>
> For generating non-uniform random numbers, the UNU.RAN package (see → [UNU.RAN](#unuran)) is available.

You can work with the random number generators as follows:
- [Seeding the random number generators](#seeding-the-random-number-generators)
- [Using the random number generators](#using-the-random-number-generators)
- [Random number distributions](#random-number-distributions)

<p><a name="seeding-the-random-number-generators"></a></p>
**Seeding the random number generators**

- Use the [SetSeed()](https://root.cern/doc/master/classROOT_1_1Math_1_1Random.html#ab9efcc04f4be1e7e6e49c5281abdee5b){:target="_blank"} method.

When no value is given, the default seed of the generator is used. In this case, an identical sequence is generated each time the application is run.<br>
When the 0 value is used as seed, then a unique seed is generated using a TUUID, for {% include ref class="TRandom" %}, {% include ref class="TRandom1" %} and {% include ref class="TRandom3" %}.<br>
For {% include ref class="TRandom" %} the seed is generated using only the machine clock, which has a resolution of about 1 s. Therefore, identical sequences are generated when the elapsed time is less than one second.

<p><a name="using-the-random-number-generators"></a></p>
**Using the random number generators**

- Use the [Rndm()](https://root.cern/doc/master/classROOT_1_1Math_1_1Random.html#af47234971a577abc33b975867fc4877d){:target="_blank"} method for generating a pseudo-random number distributed between 0 and 1.

_**Example**_

{% highlight C++ %}
// Use the default seed (same random numbers will be generated each time).
// Generate a number in the interval ]0,1] (0 is excluded).
   TRandom3 r;
   r.Rndm();
   double x[100];

// Generate an array of random numbers in ]0,1].
   r.RndmArray(100,x);

// Construct with a user-defined seed.
   TRandom3 rdm(111);

// Use 0: a unique seed is automatically generated with TUUID.
   TRandom1 r1(0);
   TRandom2 r2(0);
   TRandom3 r3(0);

// Seed generated using machine clock (different every second).
   TRandom r0(0);
{% endhighlight %}

<p><a name="random-number-distributions"></a></p>
**Random number distributions**

The {% include ref class="TRandom" %} class provides functions that can be used by all other derived classes to generate random variables according to predefined distributions. In the simplest cases, as in the exponential distribution, the non-uniform random number is obtained by suitable transformations. In the more complicated cases, the random variables are obtained by acceptance-rejection methods that require several random numbers.

_**Example**_

{% highlight C++ %}
   TRandom3 r;
// Generate a gaussian distributed number with:
// mu=0, sigma=1 (default values)
   double x1 = r.Gaus();
   double x2 = r.Gaus(10,3);
// Use mu = 10, sigma = 3;
{% endhighlight %}

The following table shows the various distributions that can be generated using methods of the {% include ref class="TRandom" %} classes.<br>
In addition, you can use [TF1::GetRandom()](https://root.cern/doc/master/classTF1.html#ab44c5f63db88a3831d74c7c84dc6316b){:target="_blank"} or [TH1::GetRandom()](https://root.cern/doc/master/classTH1.html#a4dd1bbf1cbeea1e7da03e781d01cf232){:target="_blank"} to generate random numbers distributed according to a user defined function, in a limited interval, or to a user defined histogram.

<table width="100%" border="0">
  <tbody>
    <tr>
      <th scope="col">Distributions</th>
      <th scope="col">Description</th>
    </tr>
    <tr>
      <td>Double_t Uniform(Double_t x1,Double_t x2)</td>
      <td>Uniform random numbers between x1,x2.</td>
    </tr>
    <tr>
      <td>Double_t Gaus(Double_t mu,Double_t sigma)</td>
      <td>Gaussian random numbers. Default values: mu=0, sigma=1.</td>
    </tr>
    <tr>
      <td>Double_t Exp(Double_t tau)</td>
      <td>Exponential random numbers with mean tau.</td>
    </tr>
    <tr>
      <td>Double_t Landau(Double_t mean,Double_t sigma)</td>
      <td>Landau distributed random numbers. Default values: mean=0, sigma=1.</td>
    </tr>
    <tr>
      <td>Double_t BreitWigner(Double_t mean,Double_t gamma)</td>
      <td>Breit-Wigner distributed random numbers. Default values mean=0, gamma=1.</td>
    </tr>
    <tr>
      <td>Int_t Poisson(Double_t mean)</td>
      <td>Poisson random numbers.</td>
    </tr>
    <tr>
      <td>Double_t PoissonD(Double_t mean)</td>
      <td>Poisson random numbers.</td>
    </tr>
    <tr>
      <td>Int_t Binomial(Int_t ntot,Double_t prob)</td>
      <td>Binomial Random numbers</td>
    </tr>
    <tr>
      <td>Circle(Double_t &x,Double_t &y,Double_t r)</td>
      <td>Generate a random 2D point (x,y) in a circle of radius r.</td>
    </tr>
    <tr>
      <td>Sphere(Double_t &x,Double_t &y,Double_t &z,Double_t r)</td>
      <td>Generate a random 3D point (x,y,z) in a sphere of radius r.</td>
    </tr>
     <tr>
      <td>Rannor(Double_t &a,Double_t &b)</td>
      <td>Generate a pair of Gaussian random numbers with mu=0 and sigma=1.</td>
    </tr>
</tbody>
</table>


### Complex numbers

The [MathCore](https://root.cern/doc/master/group__MathCore.html){:target="_blank"} library provides with {% include ref class="TComplex" %} a class for complex numbers.


### Numerical integration

ROOT provides algorithms for integration of one-dimensional functions, with several adaptive and non-adaptive methods and for integration of multi-dimensional function using an adaptive method or MonteCarlo Integration (GSLMCIntegrator).

[ROOT::Math::VirtualIntegrator](https://root.cern/doc/master/classROOT_1_1Math_1_1VirtualIntegrator.html){:target="_blank"} defines the most basic functionality, this is, the common methods for the numerical integrator classes of one- and multi-dimensions.

[ROOT::Math::VirtualIntegratorOneDim](https://root.cern/doc/master/classROOT_1_1Math_1_1VirtualIntegratorOneDim.html){:target="_blank"} is an abstract interface class for 1Dnumerical integration. This method must be implemented in concrete classes, so you must create the [ROOT::Math::IntegratorOneDim](https://root.cern/doc/master/classROOT_1_1Math_1_1IntegratorOneDim.html){:target="_blank"} class for integrating one-dimensional
functions.

[ROOT::Math::VirtualIntegratorMultiDim](https://root.cern/doc/master/classROOT_1_1Math_1_1VirtualIntegratorMultiDim.html){:target="_blank"} is an abstract interface class for multi-numerical integration. This method must be implemented in concrete classes, so you must create the [ROOT::Math::IntegratorMultiDim](https://root.cern/doc/master/classROOT_1_1Math_1_1IntegratorMultiDim.html){:target="_blank"} class for integrating multi-dimensional functions.

**Using ROOT::Math::IntegratorOneDim**

The following code example shows how to use [ROOT::Math::IntegratorOneDim](https://root.cern/doc/master/classROOT_1_1Math_1_1IntegratorOneDim.html){:target="_blank"}.

_**Example**_

In this example different instances of the class are created using some of the available algorithms in ROOT. If no algorithm is specified, the default one is used. The default integrator together with other integration options, such as relative and absolute tolerance, can be specified using the static method of the [ROOT::Math::IntegratorOneDimOptions](https://root.cern/doc/master/classROOT_1_1Math_1_1IntegratorOneDimOptions.html){:target="_blank"}.

{% highlight C++ %}
#include "Math/Integrator.h"
const double ERRORLIMIT = 1E-3;
double f(double x) {
return x;
}
double f2(const double * x) {
return x[0] + x[1];
}
int testIntegration1D() {
   const double RESULT = 0.5;
   int status = 0;

// Set default tolerances for all integrators.
   ROOT::Math::IntegratorOneDimOptions::SetDefaultAbsTolerance(1.E-6);
   ROOT::Math::IntegratorOneDimOptions::SetDefaultRelTolerance(1.E-6);

   ROOT::Math::Functor1D wf(&f);
   ROOT::Math::Integrator ig(ROOT::Math::IntegrationOneDim::kADAPTIVESINGULAR);
   ig.SetFunction(wf);
   double val = ig.Integral(0,1);
   std::cout << "integral result is " << val << std::endl;
   status += std::fabs(val-RESULT) > ERRORLIMIT;

   ROOT::Math::Integrator ig2(ROOT::Math::IntegrationOneDim::kNONADAPTIVE);
   ig2.SetFunction(wf);
   val = ig2.Integral(0,1);
   std::cout << "integral result is " << val << std::endl;
   status += std::fabs(val-RESULT) > ERRORLIMIT;

   ROOT::Math::Integrator ig3(wf, ROOT::Math::IntegrationOneDim::kADAPTIVE);
   val = ig3.Integral(0,1);
   std::cout << "integral result is " << val << std::endl;
   status += std::fabs(val-RESULT) > ERRORLIMIT;

   ROOT::Math::Integrator ig4(ROOT::Math::IntegrationOneDim::kGAUSS)
   ig4.SetFunction(wf);
   val = ig4.Integral(0,1);
   std::cout << "integral result is " << val << std::endl;
   status += std::fabs(val-RESULT) > ERRORLIMIT;

   ROOT::Math::Integrator ig4(ROOT::Math::IntegrationOneDim::kLEGENDRE);
   ig4.SetFunction(wf);
   val = ig4.Integral(0,1);
   std::cout << "integral result is " << val << std::endl;
   status += std::fabs(val-RESULT) > ERRORLIMIT;

   return status;
   }

{% endhighlight %}


**Using ROOT::Math::IntegratorMultiDim**

The following code example shows how to use [ROOT::Math::IntegratorMultiDim](https://root.cern/doc/master/classROOT_1_1Math_1_1IntegratorMultiDim.html){:target="_blank"}.

_**Example**_

In this example, different instances of the class use some of the algorithms available in ROOT.

{% highlight C++ %}
#include "Math/IntegratorMultiDim.h"
#include "Math/Functor.h"

double f2(const double * x) {
return x[0] + x[1];
}

int testIntegrationMultiDim() {
   const double RESULT = 1.0;
   const double ERRORLIMIT = 1E-3;
   int status = 0;

   ROOT::Math::Functor wf(&f2,2);
   double a[2] = {0,0};
   double b[2] = {1,1};

   ROOT::Math::IntegratorMultiDim ig(ROOT::Math::IntegrationMultiDim::kADAPTIVE);
   ig.SetFunction(wf);
   double val = ig.Integral(a,b);
   std::cout << "integral result is " << val << std::endl;
   status += std::fabs(val-RESULT) > ERRORLIMIT;

   ROOT::Math::IntegratorMultiDim ig2(ROOT::Math::IntegrationMultiDim::kVEGAS);
   ig2.SetFunction(wf);
   val = ig2.Integral(a,b);
   std::cout << "integral result is " << val << std::endl;
   status += std::fabs(val-RESULT) > ERRORLIMIT;

   ROOT::Math::IntegratorMultiDim ig3(wf,ROOT::Math::IntegrationMultiDim::kPLAIN);
   val = ig3.Integral(a,b);
   std::cout << "integral result is " << val << std::endl;
   status += std::fabs(val-RESULT) > ERRORLIMIT;

   ROOT::Math::IntegratorMultiDim ig4(wf,ROOT::Math::IntegrationMultiDim::kMISER);
   val = ig4.Integral(a,b);
   std::cout << "integral result is " << val << std::endl;
   status += std::fabs(val-RESULT) > ERRORLIMIT;

   return status;
}
{% endhighlight %}

#### One-dimensional integration algorithms

You can instantiate one-dimensional integration algorithms by using the following enumeration values:

<table width="100%" border="0">
  <tbody>
    <tr>
      <th scope="col">Enumeration name</th>
      <th scope="col">Integrator class</th>
    </tr>
    <tr>
      <td>ROOT::Math::IntegratorOneDim::kGAUSS</td>
      <td>ROOT::Math::GaussianIntegrator</td>
    </tr>
    <tr>
      <td>ROOT::Math::IntegratorOneDim::kLEGENDRE</td>
      <td>ROOT::Math:::GausLegendreIntegrator</td>
    </tr>
    <tr>
      <td>ROOT::Math::Integration::kNONADAPTIVE</td>
      <td>ROOT::Math:::GSLIntegrator</td>
    </tr>
    <tr>
      <td>ROOT::Math::Integration::kADAPTIVE</td>
      <td>ROOT::Math:::GSLIntegrator</td>
    </tr>
    <tr>
      <td>ROOT::Math::Integration::kADAPTIVESINGULAR</td>
      <td>ROOT::Math:::GSLIntegrator</td>
    </tr>
</tbody>
</table>

**ROOT::Math:::GaussIntegrator**

[ROOT::Math:::GaussIntegrator](https://root.cern/doc/master/classROOT_1_1Math_1_1GaussIntegrator.html){:target="_blank"} uses the most basic Gaussian integration algorithm. It uses the 8-point and the 16-point Gaussian quadrature approximations.

_**Example**_

{% highlight C++ %}
#include "TF1.h"
#include "Math/WrappedTF1.h"
#include "Math/GaussIntegrator.h"

int main()
{
   TF1 f("Sin Function", "sin(x)", 0, TMath::Pi());
   ROOT::Math::WrappedTF1 wf1(f);
   ROOT::Math::GaussIntegrator ig;
   ig.SetFunction(wf1, false);
   ig.SetRelTolerance(0.001);
   cout << ig.Integral(0, TMath::PiOver2()) << endl;
{% endhighlight %}


**ROOT::Math::GaussLegendreIntegrator**

[ROOT::Math::GaussLegendreIntegrator](https://root.cern/doc/master/classROOT_1_1Math_1_1GaussLegendreIntegrator.html){:target="_blank"} implementes the Gauss-Legendre quadrature formulas. This sort of numerical methods requieres that you specify the number of intermediate function points used in the calculation of the integral. It automatically determines the coordinates and weights of such points before performing the integration. You can use the example above,
but replacing the creation of a [ROOT::Math:::GaussIntegrator](https://root.cern/doc/master/classROOT_1_1Math_1_1GaussIntegrator.html){:target="_blank"} object with [ROOT::Math::GaussLegendreIntegrator](https://root.cern/doc/master/classROOT_1_1Math_1_1GaussLegendreIntegrator.html){:target="_blank"}.


**ROOT::Math::GSLIntegrator**

[ROOT::Math::GSLIntegrator](https://root.cern/doc/master/classROOT_1_1Math_1_1GSLIntegrator.html){:target="_blank"} isa wrapper for the QUADPACK integrator implemented in the  [GSL](https://www.gnu.org/software/gsl/){:target="_blank"} library. It supports several integration methods that can be chosen in construction time. The default type is adaptive integration with singularity applying a Gauss-Kronrod 21-point integration rule.

#### Multi-dimensional integration algorithms

You can instantiate multi-dimensional integration algorithms by using the following enumeration values:

<table width="100%" border="0">
  <tbody>
    <tr>
      <th scope="col">Enumeration name</th>
      <th scope="col">Integrator class</th>
    </tr>
    <tr>
      <td>ROOT::Math::IntegratorMultiDim::kADAPTIVE</td>
      <td>ROOT::Math::AdaptiveIntegratorMultiDim</td>
    </tr>
    <tr>
      <td>ROOT::Math::IntegratorMultiDim::kVEGAS</td>
      <td>ROOT::Math:::GSLMCIntegrator</td>
    </tr>
    <tr>
      <td>ROOT::Math::IntegratorMultiDim::kMISER</td>
      <td>ROOT::Math:::GSLMCIntegrator</td>
    </tr>
    <tr>
      <td>ROOT::Math::IntegratorMultiDim::kPLAIN</td>
      <td>ROOT::Math:::GSLMCIntegrator</td>
    </tr>
</tbody>
</table>

**ROOT::Math::AdaptiveIntegratorMultiDim**

[ROOT::Math::AdaptiveIntegratorMultiDim](https://root.cern/doc/master/classROOT_1_1Math_1_1AdaptiveIntegratorMultiDim.html){:target="_blank"} implements an adaptive quadrature integration method for multi-dimensional functions. It is described in the paper *Genz, A.A. Malik, An adaptive algorithm for numerical integration over an N-dimensional rectangular region, J. Comput. Appl. Math. 6 (1980) 295-302*.


**ROOT::Math::GSLMCIntegrator**

[ROOT::Math::GSLMCIntegrator](https://root.cern/doc/master/classROOT_1_1Math_1_1GSLMCIntegrator.html){:target="_blank"} is a class for performing numerical integration of a multidimensional function. It uses the numerical integration algorithms of [GSL](https://www.gnu.org/software/gsl/){:target="_blank"}, which reimplements the algorithms used in the QUADPACK, a numerical integration package written in Fortran. Plain MC, MISER and VEGAS integration algorithms are supported for integration over finite (hypercubic) ranges.


## MathMore library

The [MathMore](https://root.cern/doc/master/group__MathMore.html){:target="_blank"} library provides an advanced collection of functions and C++ classes for numerical computing. This is an extension of the functionality provided by the [MathCore](https://root.cern/doc/master/group__MathCore.html){:target="_blank"} library. The [MathMore](https://root.cern/doc/master/group__MathMore.html){:target="_blank"}  library is implemented wrapping in C++ the GNU Scientific Library ([GSL](https://www.gnu.org/software/gsl/){:target="_blank"}). The mathematical functions are implemented as a set of free functions in the namespace [ROOT::Math](https://root.cern/doc/master/namespaceROOT_1_1Math.html){:target="_blank"}.

The [MathMore](https://root.cern/doc/master/group__MathMore.html){:target="_blank"} library includes classes and functions for:

- [Special functions](https://root.cern/doc/master/group__SpecFunc.html){:target="_blank"}<br>
Containing all the major functions such as Bessel functions, Legendre polynomial, etc.

- [Statistical functions](https://root.cern/doc/master/group__StatFunc.html){:target="_blank"}<br>
Contains mathematical functions used in statistics such as probability density functions, cumulative distributions functions and their inverse (quantiles).

- Numerical algorithms:
   - [Numerical integration](https://root.cern/doc/master/group__Integration.html){:target="_blank"}
   - [Numerical Monte Carlo integration classes](https://root.cern/doc/master/group__MCIntegration.html){:target="_blank"}
   - [Numerical differentiation](https://root.cern/doc/master/group__Deriv.html){:target="_blank"}
   - [One-dimensional Root-Finding](https://root.cern/doc/master/group__RootFinders.html){:target="_blank"}
   - [One-dimensional minimization](https://root.cern/doc/master/group__Min1D.html){:target="_blank"}
   - [Multi-dimensional minimization](https://root.cern/doc/master/group__MultiMin.html){:target="_blank"}

- [Interpolation classes](https://root.cern/doc/master/group__Interpolation.html){:target="_blank"}

- [Function approximation (ChebyshevApprox)](https://root.cern/doc/master/group__FuncApprox.html){:target="_blank"}
<br>Based on Chebyshev polynomials.

- [Random classes](https://root.cern/doc/master/group__Random.html){:target="_blank"}



## Linear algebra packages

The linear algebra packages provide a complete environment in ROOT to perform calculations such as equation solving and eigenvalue decompositions.

There are the following linear algebra packages available:

- [Matrix package](#matrix-package)
- [SMatrix](#smatrix)


### Matrix package

The following topics are covered for the matrix package:

- [matrix classes](#matrix-classes)
- [matrix properties](#matrix-properties)
- [creating and filling a matrix](#creating-and-filling-a-matrix)
- [inverting a matrix](#inverting-a-matrix)
- [matrix operators and methods](#matrix-operators-and-methods)
- [matrix views](#matrix-views)
- [matrix decompositions](#matrix-decompositions)
- [matrix Eigen analysis](#matrix-eigen-analysis)

<p><a name="matrix-classes"></a></p>
**Matrix classes**

ROOT provides the following matrix classes, among others:

- `TMatrixDBase`: Base class for matrices.

- `TMatrixF`: Matrix with single precision (`float`).

- `TMatrixFSym`: Symmetrical matrix with single precision (`float`).

- `TVectorF`: Vector with single precision (`float`).

- `TMatrixD`: Matrix with double precision (`double`).

- `TMatrixDSym`: Symmetrical matrix with double precision (`double`).

- `TMatrixDSparse`: Sparse matrix with double precision (`double`).

- [TDecompBase](https://root.cern/doc/master/classTDecompBase.html){:target="_blank"}: Decomposition base class.

- [TDecompChol](https://root.cern/doc/master/classTDecompChol.html){:target="_blank"}: Cholesky decomposition class.


<p><a name="matrix-properties"></a></p>
**Matrix properties**

A matrix has five properties, which are all set in the constructor:

- `precision` <br>
If the `precision` is float (this is single precision), use the `TMatrixF` class family. If the precision is double, use the `TMatrixD` class family.

- `type`<br>
Possible values are: `general` (`TMatrixD`), `symmetric` (`TMatrixDSym`) or `sparse` (`TMatrixDSparse`).

- `size`<br>
Number of rows and columns.

- `index`<br>
Range start of row and column index. By default these start at 0.

- `sparse map`<br>
Only relevant for a sparse matrix. It indicates where elements are unequal 0.

You can:
- [access the matrix properties](#accessing-matrix-properties)
- [set the matrix properties](#setting-matrix-properties)


<p><a name="accessing-matrix-properties"></a></p>
**Accessing matrix properties**

Use one of the following methods to access the information about the relevant matrix property:

- `Int_t` [GetRowLwb()](https://root.cern/doc/master/classTMatrixTBase.html#a612c6cfd4fe2cd171ae1e2bbd41de272){:target="_blank"}: Row lower-bound index.

- `Int_t` [GetRowUpb()](https://root.cern/doc/master/classTMatrixTBase.html#a510aa8161d3bc4103f5d16d059661b66){:target="_blank"}: Row upper-bound index.

- `Int_t` [GetNrows()](https://root.cern/doc/master/classTDecompBase.html#a66a4c05c9e1641439f25408fd4da3373){:target="_blank"}: Number of rows.

- `Int_t` [GetColLwb()](https://root.cern/doc/master/classTDecompBase.html#a478fc5dca42d64412651d046af98204b){:target="_blank"}: Column lower-bound index.

- `Int_t` [GetColUpb()](https://root.cern/doc/master/classTMatrixTBase.html#a862103c9fe9ec7d6b5c22df29183aafe){:target="_blank"}: Column upper-bound index.

- `Int_t` [GetNcols](https://root.cern/doc/master/classTDecompBase.html#a95b1a2f332e0896dafdcc59bd6b7d06a){:target="_blank"}: Number of columns.

- `Int_t` [GetNoElements()](https://root.cern/doc/master/classTMatrixTBase.html#a6ffb1b7e317f65e601e6f8529d287896){:target="_blank"}: Number of elements, for a dense matrix this equals: `fNrows x fNcols`.

- `Double_t` [GetTol()](https://root.cern/doc/master/classTMatrixTBase.html#af1fd9bf8dcae0bcc96e5c6d526bd176b){:target="_blank"}: Tolerance number that is used in decomposition operations.

- `Int_t` [*GetRowIndexArray()](https://root.cern/doc/master/classTMatrixTSparse.html#a4fc6e583f4f42338f83aa9bc36d9e78c){:target="_blank"}: For sparse matrices, access to the row index of `fNrows+1` entries.

- `Int_t` [*GetColIndexArray()](https://root.cern/doc/master/classTMatrixTSparse.html#a869e7f838f3f1abd6d3dac9323c3a72c){:target="_blank"}: For sparse matrices, access to the column index of `fNelems` entries.

`*GetRowIndexArray()` and `*GetColIndexArray()` are specific to the sparse matrix, which is implemented according to the Harwell-
Boeing format. Here, besides the usual shape/size descriptors of the matrix such as `fNrows`, `fRowLwb`, `fNcols` and `fColLwb`,
also a row index `fRowIndex` and a column index `fColIndex` are stored:

- `fRowIndex[0,..,fNrows]`: Stores for each row the index range of the elements in the data and column array.
- `fColIndex[0,..,fNelems-1]`: Stores the column number for each data element != 0.


<p><a name="setting-matrix-properties"></a></p>
**Setting matrix properties**

Use one of the following methods to set a matrix property:

- `SetTol (Double_t tol)`<br>
Sets the tolerance number.

- `ResizeTo (Int_t nrows,Int_t ncols, Int_t nr_nonzeros=-1)`<br>
Changes the matrix shape to `nrows x ncols`. Index starts at 0.

- `ResizeTo(Int_t row_lwb,Int_t row_upb, Int_t col_lwb,Int_t col_upb, Int_t nr_nonzeros=-1)`<br>
Changes the matrix shape to `row_lwb:row_upb x col_lwb:col_upb`.

- `SetRowIndexArray (Int_t *data)`<br>
For sparse matrices, it sets the row index. The array data should contain at least `fNrows+1` entries column lower-bound index.

- `SetColIndexArray (Int_t *data)`<br>
For sparse matrices, it sets the column index. The array data should contain at least `fNelems` entries.

- `SetSparseIndex (Int_t nelems new)`<br>
Allocates memory for a sparse map of `nelems_new` elements and copies (if exists) at most `nelems_new` matrix elements over to the new structure.

- `SetSparseIndex (const TMatrixDBase &a)`<br>
Copies the sparse map from matrix `a`.

- `SetSparseIndexAB (const TMatrixDSparse &a, const TMatrixDSparse &b)`<br>
Sets the sparse map to the same map of matrix `a` and `b`.


<p><a name="creating-and-filling-a-matrix"></a></p>
**Creating and filling a matrix**

Use one of the following constructors to create a matrix:

- `TMatrixD(Int_t nrows,Int_t ncols)`
- `TMatrixD(Int_t row_lwb,Int_t row_upb,Int_t col_lwb,Int_t col_upb)`
- `TMatrixD(Int_t nrows,Int_t ncols,const Double_t *data, Option_t option= "")`
- `TMatrixD(Int_t row_lwb,Int_t row_upb,Int_t col_lwb,Int_t col_upb, const Double_t *data,Option_t *option="")`
- `TMatrixDSym(Int_t nrows)`
- `TMatrixDSym(Int_t row_lwb,Int_t row_upb)`
- `TMatrixDSym(Int_t nrows,const Double_t *data,Option_t *option="")`
- `TMatrixDSym(Int_t row_lwb,Int_t row_upb, const Double_t *data, Option_t *opt="")`
- `TMatrixDSparse(Int_t nrows,Int_t ncols)`
- `TMatrixDSparse(Int_t row_lwb,Int_t row_upb,Int_t col_lwb, Int_t col_upb)`
- `TMatrixDSparse(Int_t row_lwb,Int_t row_upb,Int_t col_lwb,Int_t col_upb, Int_t nr_nonzeros,Int_t *row,Int_t *col,Double_t *data)`

Use one of the following methods to fill a matrix:

- `SetMatrixArray(const Double_t*data,Option_t*option="")`<br>
Copies array data. If `option="F"`, the array fills the matrix column-wise else row-wise. This option is implemented for `TMatrixD` and `TMatrixDSym`. It is expected that the array data contains at least `fNelems` entries.

- `SetMatrixArray(Int_t nr,Int_t *irow,Int_t *icol,Double_t *data)`<br>
Only available for sparse matrices. The three arrays should each contain `nr` entries with row index, column index and data entry. Only the entries with non-zero data value are inserted.

- `operator()`, `operator[]`<br>
These operators provide the easiest way to fill a matrix but are in particular for a sparse matrix expensive. If no entry for slot (`i`,`j`) is found in the sparse index table, it is entered, which involves some memory management. Therefore, before invoking this method in a loop set the index table first through a call to the `SetSparseIndex()` method.

- `SetSub(Int_t row_lwb,Int_t col_lwb,const TMatrixDBase &source)`<br>
The matrix to be inserted at position (`row_lwb`,`col_lwb`) can be both, dense or sparse.

- `Use()`<br>
Allows inserting another matrix or data array without actually copying the data.<br>
The following list shows the application of the `Use()` method:
   - `Use(TMatrixD &a)`
   - `Use(Int_t row_lwb,Int_t row_upb,Int_t col_lwb,Int_t col_upb,Double_t *data)`
   - `Use(Int_t nrows,Int_t ncols,Double_t *data)`
   - `Use(TMatrixDSym &a)`
   - `Use(Int_t nrows,Double_t *data)`
   - `Use(Int_t row_lwb,Int_t row_upb,Double_t *data)`
   - `Use(TMatrixDSparse &a)`
   - `Use(Int_t row_lwb,Int_t row_upb,Int_t col_lwb,Int_t col_upb,Int_t nr_no nzeros, Int_t *pRowIndex,Int_t *pColIndex,Double_t *pData)`
   - `Use(Int_t nrows,Int_t ncols,Int_t nr_nonzeros,Int_t *pRowIndex,Int_t *pColIndex,Double_t *pData)`

_**Example**_

A Hilbert matrix is created by copying an array.

{% highlight C++ %}
   TMatrixD h(5,5);
   TArrayD data(25);
   for (Int_t = 0; i < 25; i++) {
      const Int_t ir = i/5;
      const Int_t ic = i%5;
      data[i] = 1./(ir+ic);
   }
   h.SetMatrixArray(data.GetArray());
{% endhighlight %}

You can also assign the data array to the matrix without actually copying it.

{% highlight C++ %}
   TMatrixD h; h.Use(5,5,data.GetArray());
   h.Invert();
{% endhighlight %}

The array data now contains the inverted matrix.

Now a unit matrix in sparse format is created.

{% highlight C++ %}
   TMatrixDSparse unit1(5,5);
   TArrayI row(5),col(5);
   for (Int_t i = 0; i < 5; i++) row[i] = col[i] = i;
   TArrayD data(5); data.Reset(1.);
   unit1.SetMatrixArray(5,row.GetArray(),col.GetArray(),data.GetArray());

   TMatrixDSparse unit2(5,5);
   unit2.SetSparseIndex(5);
   unit2.SetRowIndexArray(row.GetArray());
   unit2.SetColIndexArray(col.GetArray());
   unit2.SetMatrixArray(data.GetArray());
{% endhighlight %}


<p><a name="inverting-a-matrix"></a></p>
**Inverting a matrix**

- Use the `Invert(Double_t &det=0)` function to invert a matrix:

{% highlight C++ %}
   TMatrixD a(...);
   a.Invert();
{% endhighlight %}

-- or --

- Use the appropriate constructor to invert a matrix:

{% highlight C++ %}
   TMatrixD b(kInvert,a);
{% endhighlight %}

Both methods are available for general and symmetric matrices.

For matrices whose size is less than or equal to 6x6, the `InvertFast(Double_t &det=0)` function is available. Here the Cramer algorithm is used, which is faster but less accurate.

**Using decomposition classes for inverting**

You can also use the following decomposition classes (see → [Matrix decompositions](#matrix-decompositions)) for inverting a matrix:

<table width="100%" border="0">
  <tbody>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Matrix type</th>
      <th scope="col">Comment</th>
    </tr>
    <tr>
      <td>TDecompLU</td>
      <td>General</td>
      <td></td>
    </tr>
    <tr>
      <td>TDecompQRH</td>
      <td>General</td>
      <td></td>
    </tr>
    <tr>
      <td>TDecompSVD</td>
      <td>General</td>
      <td>Can manipulate singular matrix.</td>
    </tr>
    <tr>
      <td>TDecompBK</td>
      <td>symmetric</td>
      <td></td>
    </tr>
    <tr>
      <td>TDecompChol</td>
      <td>Symmetric</td>
      <td>Matrix should also be positive definite.</td>
    </tr>
    <tr>
      <td>TDecompSparse</td>
      <td>Sparse</td>
      <td></td>
    </tr>
  </tbody>
</table>

If the required matrix type is general, you also can handle symmetric matrices.

_**Example**_

This example shows how to check whether the matrix is singular before attempting to invert it.

{% highlight C++ %}
   TDecompLU lu(a);
   TMatrixD b;
   if (!lu.Decompose()) {
      cout << "Decomposition failed, matrix singular ?" << endl;
      cout << "condition number = " << = a.GetCondition() << endl;
   } else {
      lu.Invert(b);
   }
{% endhighlight %}


<p><a name="matrix-operators-and-methods"></a></p>
**Matrix operators and methods**

The matrix/vector operations are classified according to BLAS (basic linear algebra subroutines) levels.

The following operations and methods are available:
- [arithmetic operations between matrices](#arithmetic-operations-between-matrices)
- [arithmetic operations between matrices and real numbers](#arithmetic-operations-between-matrices-and-real-numbers)
- [comparison between two matrices](#comparison-between-two-matrices)
- [comparison between matrix and real number](#comparison-between-matrix-and-real-number)

<p><a name="arithmetic-operations-between-matrices"></a></p>
**Arithmetic operations between matrices**

<table width="100%" border="0">
  <tbody>
    <tr>
      <th scope="col">Description</th>
      <th scope="col">Format</th>
      <th scope="col">Comment</th>
    </tr>
    <tr>
      <td>Element</td>
      <td>C=A+B</td>
      <td>Overwrites A</td>
    </tr>
    <tr>
      <td>Wise sum</td>
      <td>A+=B<br>Add (A,alpha,B)
<br>TMatrixD(A,TMatrixD::kPlus,B)</td>
      <td>A = A + &alpha; B constructor</td>
    </tr>
        <tr>
      <td>Element wise subtraction</td>
      <td>C=A-B A-=B<br>
TMatrixD(A,TMatrixD::kMinus,B)</td>
      <td>Overwrites A<br>
Constructor</td>
    </tr>
            <tr>
      <td>Matrix multiplication</td>
      <td>C=A*B<br>
A*=B<br>
C.Mult(A,B)<br>TMatrixD(A,TMatrixD::kMult,B)<br>TMatrixD(A, TMatrixD(A, TMatrixD::kTransposeMult,B)<br>TMatrixD(A, TMatrixD::kMultTranspose,B)</td>
      <td>Overwrites A<br>&nbsp;<br>&nbsp;<br>Constructor of A.B<br>Constructor of A<sup>T</sup> .B<br>Constructor of A.B<sup>T</sup></td>
    </tr>
      <tr>
      <td>Element wise multiplication</td>
      <td>ElementMult(A,B)</td>
      <td>A(i,j)*= B(i,j)</td>
    </tr>
      <tr>
      <td>Element wise division</td>
      <td>ElementDiv(A,B)</td>
      <td>A(i,j)/= B(i,j)</td>
    </tr>
  </tbody>
</table>

<p><a name="arithmetic-operations-between-matrices-and-real-numbers"></a></p>
**Arithmetic operations between matrices and real numbers**

<table width="100%" border="0">
  <tbody>
    <tr>
      <th scope="col">Description</th>
      <th scope="col">Format</th>
      <th scope="col">Comment</th>
    </tr>
    <tr>
      <td>Element wise sum</td>
      <td>C=r+A C=A+r A+=r</td>
      <td>overwrites A</td>
    </tr>
    <tr>
      <td>Element wise subtraction</td>
      <td>C=r-A C=A-r A-=r</td>
      <td>overwrites A</td>
    </tr>
       <tr>
      <td>Matrix multiplication</td>
      <td>C=r*A C=A*r A*=r</td>
      <td>overwrites A</td>
    </tr>
  </tbody>
</table>

<p><a name="comparison-between-two-matrices"></a></p>
**Comparison between two matrices**

<table width="100%" border="0">
  <tbody>
    <tr>
      <th scope="col">Format</th>
      <th scope="col">Output</th>
      <th scope="col">Description</th>
    </tr>
    <tr>
      <td>A == B</td>
      <td>Bool_t</td>
      <td>Equal to</td>
    </tr>
    <tr>
      <td>A != B</td>
      <td>matrix</td>
      <td>Not equal</td>
    </tr>
        <tr>
      <td>A > B</td>
      <td>matrix</td>
      <td>Greater than</td>
    </tr>
        <tr>
      <td>A >= B</td>
      <td>matrix</td>
      <td>Greater than or equal to</td>
    </tr>
        <tr>
      <td>A < B</td>
      <td>matrix</td>
      <td>Smaller than</td>
    </tr>
        <tr>
      <td>A <= B</td>
      <td>matrix</td>
      <td>Smaller than or equal to</td>
    </tr>
        <tr>
      <td>AreCompatible(A,B)</td>
      <td>Bool_t</td>
      <td>Compare matrix properties</td>
    </tr>
        <tr>
      <td>Compare(A,B)</td>
      <td>Bool_t</td>
      <td>Return summary of comparison</td>
    </tr>
        <tr>
      <td>VerifyMatrixIdentity(A,B,verb, maxDev)</td>
      <td>&nbsp;</td>
      <td>Check matrix identity within maxDev tolerance</td>
    </tr>
  </tbody>
</table>

<p><a name="comparison-between-matrix-and-real-number"></a></p>
**Comparison between matrix and real number**

<table width="100%" border="0">
  <tbody>
    <tr>
      <th scope="col">Format</th>
      <th scope="col">Output</th>
      <th scope="col">Description</th>
    </tr>
    <tr>
      <td>A == r</td>
      <td>Bool_t</td>
      <td>Equal to</td>
    </tr>
    <tr>
      <td>A != r</td>
      <td>Bool_t</td>
      <td>Not equal</td>
    </tr>
        <tr>
      <td>A > r</td>
      <td>Bool_t</td>
      <td>Greater than</td>
    </tr>
        <tr>
      <td>A >= r</td>
      <td>Bool_t</td>
      <td>Greater than or equal to</td>
    </tr>
        <tr>
      <td>A < r</td>
      <td>Bool_t</td>
      <td>Smaller than</td>
    </tr>
        <tr>
      <td>A <= r</td>
      <td>Bool_t</td>
      <td>Smaller than or equal to</td>
    </tr>
        <tr>
      <td>VerifyMatrixValue(A,r,verb, maxDev)</td>
      <td>Bool_t</td>
      <td>Compare matrix value with r within maxDev tolerance</td>
    </tr>
        <tr>
      <td>A.RowNorm()</td>
      <td>Double_t</td>
      <td>Norm induced by the infinity vector norm</td>
    </tr>
        <tr>
      <td>A.NormInf()</td>
      <td>Double_t</td>
      <td>&nbsp;</td>
    </tr>
        <tr>
      <td>A.ColNorm()</td>
      <td>Double_t</td>
      <td>Norm induced by the 1 vector norm</td>
    </tr>
        <tr>
      <td>A.Norm1()</td>
      <td>Double_t</td>
      <td>&nbsp;</td>
    </tr>
        <tr>
      <td>A.E2Norm()</td>
      <td>Double_t</td>
      <td>Square of the Euclidean norm</td>
    </tr>
        <tr>
      <td>A.NonZeros()</td>
      <td>Int_t</td>
      <td>&nbsp;</td>
    </tr>
        <tr>
      <td>A.Sum()</td>
      <td>Double_t</td>
      <td>Number of elements unequal zero</td>
    </tr>
        <tr>
      <td>A.Min()</td>
      <td>Double_t</td>
      <td>&nbsp;</td>
    </tr>
        <tr>
      <td>A.Max()</td>
      <td>Double_t</td>
      <td>&nbsp;</td>
    </tr>
        <tr>
      <td>A.NormByColumn (v,"D")</td>
      <td>TMatrixD</td>
      <td>&nbsp;</td>
    </tr>
        <tr>
      <td>A.NormByRow (v,"D")</td>
      <td>TMatrixD</td>
      <td>&nbsp;</td>
    </tr>
  </tbody>
</table>

<p><a name="matrix-views"></a></p>
**Matrix views**

With the following matrix view classes, you can access the matrix elements:

- `TMatrixDRow`
- `TMatrixDColumn`
- `TMatrixDDiag`
- `TMatrixDSub`

**Matrix view operators**

For the matrix view classes `TMatrixDRow`, `TMatrixDColumn` and `TMatrixDDiag`, the necessary assignment operators are available to interact with the vector class `TVectorD`.<br>The sub matrix view classes `TMatrixDSub` has links to the matrix classes `TMatrixD` and `TMatrixDSym.`

The next table summarizes how to access the individual matrix elements in the matrix view classes.

<table width="100%" border="0">
  <tbody>
    <tr>

      <th scope="col">Format</th>
      <th scope="col">Comment</th>
    </tr>
    <tr>

      <td>TMatrixDRow(A,i)(j) TMatrixDRow(A,i)[j]</td>
      <td>Element A<sub>ij</sub></td>
    </tr>
    <tr>

      <td>TMatrixDColumn(A,j)(i) TMatrixDColumn(A,j)[i]</td>
      <td>Element A<sub>ij</sub></td>
    </tr>
        <tr>

      <td>TMatrixDDiag(A(i) TMatrixDDiag(A[i]</td>
      <td>Element A<sub>ij</sub></td>
    </tr>
    <tr>

      <td>TMatrixDSub(A(i) TMatrixDSub(A,rl,rh,cl,ch)(i,j)</td>
      <td>Element A<sub>ij</sub><br>Element A<sub>rl+i,cl+j</sub></td>
    </tr>
  </tbody>
</table>


<p><a name="matrix-decompositions"></a></p>
**Matrix decompositions**

There are the following classes available for matrix decompositions:

- [TDecompLU](https://root.cern/doc/master/classTDecompLU.html){:target="_blank"}: Decomposes a general `n x n` matrix `A` into `P A = L U`.
- [TDecompBK](https://root.cern/doc/master/classTDecompBK.html){:target="_blank"}: The Bunch-Kaufman diagonal pivoting method decomposes a real symmetric matrix `A`.
- [TDecompChol](https://root.cern/doc/master/classTDecompChol.html){:target="_blank"} : The Cholesky decomposition class, which decomposes a symmetric, positive definite matrix `A = U^T * U` where `U` is a upper triangular matrix.
- [TDecompQRH](https://root.cern/doc/master/classTDecompQRH.html){:target="_blank"}: QR decomposition class.
- [TDecompSVD](https://root.cern/doc/master/classTDecompSVD.html){:target="_blank"}: Single value decomposition class.
- [TDecompSparse](https://root.cern/doc/master/classTDecompSparse.html){:target="_blank"}: Sparse symmetric decomposition class.

<p><a name="matrix-eigen-analysis"></a></p>
**Matrix Eigen analysis**

With the {% include ref class="TMatrixDEigen" %} and {% include ref class="TMatrixDSymEigen" %} classes, you can compute eigenvalues and eigenvectors for general dense and symmetric real matrices.

The following table lists the methods of the {% include ref class="TMatrixDEigen" %} and the {% include ref class="TMatrixDSymEigen" %} to obtain the eigenvalues and eigenvectors. {% include ref class="TMatrixDSymEigen" %} constructors can only be called with `TMatrixDSym`:
<table width="100%" border="0">
  <tbody>
    <tr>

      <th scope="col">Format</th>
      <th scope="col">Output</th>
      <th scope="col">Description</th>
    </tr>
    <tr>
      <td>eig.GetEigenVectors()</td>
      <td>TMatrixD</td>
      <td>Eigenvectors for both TMatrixDEigen and TMatrixDSymEigen.</td>
    </tr>
    <tr>
      <td>eig.GetEigenValues()</td>
      <td>TVectorD</td>
      <td>Eigenvalues vector for TMatrixDSymEigen.</td>
    </tr>
    <tr>
      <td>eig.GetEigenValues()</td>
      <td>TMatrixD</td>
      <td>Eigenvalues matrix for TMatrixDEigen.</td>
    </tr>
    <tr>
      <td>eig.GetEigenValuesRe()</td>
      <td>TVectorD</td>
      <td>Real part of eigenvalues for TMatrixDEigen.</td>
    </tr>
    <tr>
      <td>eig.GetEigenValuesIm()</td>
      <td>TVectorD</td>
      <td>Imaginary part of eigenvalues for TMatrixDEigen.</td>
    </tr>
  </tbody>
 </table>

 _**Example**_

The usage of the eigenvalue class is shown in this example where it is checked that the square of the singular values of
a matrix `c` are identical to the eigenvalues of c<sup>T</sup>.c:

{% highlight C++ %}
   const TMatrixD m = THilbertMatrixD(10,10);
   TDecompSVD svd(m);
   TVectorD sig = svd.GetSig(); sig.Sqr();

// Symmetric matrix EigenVector algorithm.
   TMatrixDSym mtm(TMatrixDBase::kAtA,m);
   const TMatrixDSymEigen eigen(mtm);
   const TVectorD eigenVal = eigen.GetEigenValues();
   const Bool_t ok = VerifyVectorIdentity(sig,eigenVal,1,1.-e-14);
{% endhighlight %}

### SMatrix

[SMatrix](https://root.cern/doc/master/group__SMatrixGroup.html){:target="_blank"} is a C++ package for high performance vector and matrix computations. It can be used only in problems when the size of the matrices is known at compile time, like in the tracking reconstruction of HEP experiments. It is based on a C++ technique, called expression templates, to achieve an high level optimization. The C++ templates can be used to implement vector and matrix expressions in such a way that these expressions can be transformed at compile time to code equivalent to hand-optimized code in a low-level language such as FORTRAN or C.

The [SMatrix](https://root.cern/doc/master/group__SMatrixGroup.html){:target="_blank"} has been developed initially by T. Glebe of the Max-Planck-Institut, Heidelberg, as part of the HeraB analysis framework. A subset of the original package has been now incorporated in the ROOT distribution, with the aim to provide to the LHC experiments a stand-alone and high performance matrix package for reconstruction. The API of the current package differs from the original one to conform to ROOT coding conventions.

[SMatrix](https://root.cern/doc/master/group__SMatrixGroup.html){:target="_blank"} contains the following generic classes for describing matrices and vectors of arbitrary dimensions and of arbitrary type:
- [SVector](#svector)
- [SMatrix](#smatrix)

#### SVector

The template class [ROOT::Math::SVector](https://root.cern/doc/master/classROOT_1_1Math_1_1SVector.html){:target="_blank"} represents n-dimensional vectors for objects of arbitrary type. The class has two template parameters that define their properties at compile time:
1. Type of the contained elements (for example `float` or `double`).
2. Size of the vector.

**Creating a vector**

Use one of the following constructors to create a vector:

- Default constructor for a zero vector (all elements equal to zero).
- Constructor (and assignment) from a vector expression, like `v=p*q+w`. Due to the expression template technique, no temporary objects are created in this operation.
- Constructor by passing directly the elements. This is possible only for vectors up to size 10.
- Constructor from an iterator copying the data referred by the iterator. It is possible to specify the begin and end of the iterator or the begin and the size. Note that for

 _**Example**_
 The namespace [ROOT::Math](https://root.cern/doc/master/namespaceROOT_1_1Math.html){:target="_blank"} is used.

 {% highlight C++ %}
// Create an empty vector of size 3 ( v[0]=v[1]=v[2]=0).
   SVector<double,3> v;
   double d[3] = {1,2,3};
// Create a vector from a C array.
   SVector<double,3> v(d,3);
  {% endhighlight %}

#### SMatrix

The template class [ROOT::Math::SMatrix](https://root.cern/doc/master/classROOT_1_1Math_1_1SMatrix.html){:target="_blank"} represents a matrix of arbitrary type with `nrows x ncol`dimension. The class has four template parameters that define their properties at compile time:
- type of the contained elements (for example `float` or `double`)
- number of rows
- number of columns
- representation type

**Creating a matrix**

Use one of the following constructors to create a matrix:
- Default constructor for a zero matrix (all elements equal to zero).
- Constructor of an identity matrix.
- Copy constructor (and assignment) for a matrix with the same representation, or from a different one when possible (for example from a symmetric to a general matrix).
- Constructor (and assignment) from a matrix expression, like `D=A*B+C`. Due to the expression template technique, no temporary objects are created in this operation. In the case of an operation like `A=A*B+C`, a temporary object is needed and it is created automatically to store the intermediary result in order to preserve the validity of this operation.
- Constructor from a generic STL-like iterator copying the data referred by the iterator, following its order. It is both possible, to specify the begin and end of the iterator or the begin and the size. In case of a symmetric matrix, it is required only the triangular block and the user can specify whether giving a block representing the lower (default case) or the upper diagonal part.

 _**Example**_
 Typedef’s are used in this example to avoid the full C++ names for the matrix classes. For a general matrix, the representation has the default value [ROOT::Math::MatRepStd](https://root.cern/doc/master/classROOT_1_1Math_1_1MatRepStd.html){:target="_blank"}. For a general square matrix, the number of columns can be omitted.

 {% highlight C++ %}
// Typedef definitions used in the following declarations:
   typedef ROOT::Math::SMatrix<double,3> SMatrix33;
   typedef ROOT::Math::SMatrix<double,2> SMatrix22;
   typedef ROOT::Math::SMatrix<double,3,3,
   ROOT::Math::MatRepSym<double,3>> SMatrixSym3;
   typedef ROOT::Math::SVector>double,2> SVector2;
   typedef ROOT::Math::SVector>double,3> SVector3;
   typedef ROOT::Math::SVector>double,6> SVector6;
   SMatrix33 m0; // create a zero 3x3 matrix

// Create a 3x3 identity matrix.
   SMatrix33 i = ROOT::Math::SMatrixIdentity();
   double a[9] = {1,2,3,4,5,6,7,8,9}; // input matrix data

// Create a matrix using the a[] data.
// This results in the 3x3 matrix:
    SMatrix33 m(a,9);
  {% endhighlight %}


_**Example**_

A symmetric matrix is filled from a `std::vector`.

{% highlight C++ %}
   std::vector<double> v(6);
   for (int i = 0; i<6; ++i) v[i] = double(i+1);

// This creates the symmetric matrix:
   SMatrixSym3 s(v.begin(),v.end())

// Create a general matrix from a symmetric matrix (the opposite does not compile)
   SMatrix33 m2 = s;
{% endhighlight %}

## Minimization libraries and classes

ROOT provides several minimization libraries and classes:
- [TMinuit](#tminuit)
- [Minuit2 library](#minuit2-library)
- [FUMILI minimization package](#fumili-minimization-package)

### TMinuit

The Minuit minimization package was originally written in Fortran by Fred James and part of PACKLIB (patch D506). It has been converted to the C++ class {% include ref class="TMinuit" %}, by R.Brun.

> **Topical manual**
>
> For TMinuit, a topical manual it available at [Topical Manual - TMinuit]({{ '/topical/#minuit' | relative_url }}).<br>
> It contains in-depth information about TMinuit.

### Minuit2 library

The [Minuit2](https://root.cern/doc/master/group__Minuit.html){:target="_blank"} library is a new object-oriented implementation, written in C++, of the popular MINUIT minimization package. These new version provides basically all the functionality present in the old Fortran version, with almost equivalent numerical accuracy and computational performances.

Furthermore, it contains new functionality, like the possibility to set single side parameter limits or the FUMILI algorithm (see → [FUMILI minimization package](#fumili-minimization-package)), which is an optimized method for least square and log likelihood minimizations. The package has been originally developed by M. Winkler and F. James.

> **Topical manuals**
>
> For Minuit2, topical manuals are available at [Topical Manuals - Minuit2]({{ '/topical/#minuit-2' | relative_url }}).<br>
> They contain in-depth information about Minuit2.

### FUMILI minimization package

FUMILI is used to minimize Chi-square function or to search maximum of likelihood function.

FUMILI is based on ideas, proposed by I.N. Silin. It was converted from FORTRAN to C by Sergey Yaschenko s.yaschenko@fz-juelich.de.

For detailed information on the FUMILI minimization package, see → [TFumili class reference](https://root.cern/doc/master/classTFumili.html){:target="_blank"}.

### Numerical minimization

ROOT provides algorithms for one-dimensional und multi-dimensional numerical minimizations.

**One-dimensional minimization**

The one-dimensional minimization algorithms are used to find the minimum of a one-dimensional minimization function. The function to minimize must be given to the class implementing the algorithm as a [ROOT::Math::IBaseFunctionOneDim](https://root.cern/doc/master/classROOT_1_1Math_1_1IBaseFunctionOneDim.html){:target="_blank"} object.

You can apply one-dimensional minimization in the following ways:

- ROOT::Math::BrentMinimizer1D
- ROOT::Math::GSLMInimizer1D
- Using the TF1 class

**ROOT::Math::BrentMinimizer1D**

[ROOT::Math::BrentMinimizer1D](https://root.cern/doc/master/classROOT_1_1Math_1_1BrentMinimizer1D.html){:target="_blank"} implements the Brent method to minimize an one-dimensional function. You must provide an interval containing the function minimum.

_**Example**_

In this example a function is definded to minimize as a lambda function. The function to minimize must be given to the class implementing the algorithm as a [ROOT::Math::IBaseFunctionOneDim](https://root.cern/doc/master/classROOT_1_1Math_1_1IBaseFunctionOneDim.html){:target="_blank"} object.

{% highlight C++ %}
ROOT::Math::Functor1D func( [](double x){ return 1 + -4*x + 1*x*x; } );

   ROOT::Math::BrentMinimizer1D bm;
   bm.SetFunction(func, -10,10);
   bm.Minimize(10,0,0);
   cout << "Minimum: f(" << bm.XMinimum() << ") = " <<bm.FValMinimum() << endl;
{% endhighlight %}

Note that when setting the function to minimize, you must provide the interval range to find the minimum. In the `Minimize call, the maximum number of function calls, the relative and absolute tolerance must be provided.

**ROOT::Math::GSLMInimizer1D**

[ROOT::Math::GSLMInimizer1D](https://root.cern/doc/master/classROOT_1_1Math_1_1GSLMinimizer1D.html){:target="_blank"} wraps two different methods from the GNU Scientific Library (GSL). At construction time you can choose between the BRENT and the GOLDENSECTION algorithmen. The GOLDENSECTION algorithm is the simplest method but the slowest and the BRENT algorithm (default) combines the golden section with a parabolic interpolation. <br/>
You can choose the algorithm as a different enumeration in the constructor:
- `* ROOT::Math::Minim1D::kBRENT` for the BRENT algorithm (default).
- `* ROOT::Math::Minim1D::kGOLDENSECTION` for the GOLDENSECTION algorithm.

_**Example**_

{% highlight C++ %}
// This creates a class with the default BRENT algorithm.
   ROOT::Math::GSLMinimizer1D minBrent;

// This creates a class with the GOLDENSECTION algorithm
   ROOT::Math::GSLMinimizer1D minGold(ROOT::Math::Minim1D::kGOLDENSECTION);
{% endhighlight %}

**Using the TF1 class**

You can perform a one-dimensional minimization or maximization of a function by using directly the {% include ref class="TF1" %}  class. The minmization implemented in `TF1` uses the `BrentMInimizer1D` and is available with the class member functions `* TF1::GetMinimum` or `TF1::GetMaximum` to find the function minimum (`* TF1::GetMinimumX`) or the maximum value (`TF1::GetMaximumX`). You can provide the search interval for the minimum, the tolerance and the maximum iterations as optional parameters of the `* TF1::GetMinimum` or `TF1::GetMaximum` functions.

**Multi-dimensional minimization**

The algorithms for a multi-dimensional minimization are implemented in the `ROOT::Math::Minimizer` interface. They can be used the same way as it was shown for the one-dimensional mimimization.

## ROOT statistics classes

ROOT provides statistics classes for:

- [Computing limits and confidence levels](#classes-for-computing-limits-and-confidence-levels)
- [Fitting](#specialized-classes-for-fitting)
- [Multi-variate analysis](#multi-variate-analysis-classes)

### Classes for computing limits and confidence levels

[TFeldmanCousins](https://root.cern/doc/master/classTFeldmanCousins.html){:target="_blank"}: Calculates the confidence levels of the upper or lower limit for a Poisson process using the Feldman-Cousins method (as described in PRD V57 #7, p3873-3889). No treatment is provided in this method for the uncertainties in the signal or the background.

[TRolke](https://root.cern/doc/master/classTRolke.html){:target="_blank"}: Computes the confidence intervals for the rate of a Poisson process in the presence of background and efficiency, using the profile likelihood technique for treating the uncertainties in the efficiency and background estimate. The signal is always assumed to be Poisson; background may be Poisson, Gaussian, or user-supplied. efficiency may be Binomial, Gaussian, or user-supplied. See publication at Nucl. Instrum. Meth. A551:493-503,2005.

[TLimit](https://root.cern/doc/master/classTLimit.html){:target="_blank"}: Computes 95% of the confidence level limits using the likelihood ratio semi-Bayesian method (method; see e.g.,  T. Junk, NIM A434, p. 435-443, 1999). It takes signal background and data histograms wrapped in a {% include ref class="TLimitDataSource" %} as input, and runs a set of Monte Carlo experiments in order to compute the limits. If needed, inputs are fluctuated according to systematic.

### Specialized classes for fitting

[TFractionFitter](https://root.cern/doc/master/classTFractionFitter.html){:target="_blank"}: Fits Monte Carlo fractions to data histogram (à la HMCMLL, R. Barlow and C. Beeston, Comp. Phys. Comm. 77 (1993) 219-228). It accounts for the both data and the statistical Monte Carlo uncertainties through a likelihood fit using Poisson statistics. However, the template (Monte Carlo) predictions are also varied within statistics, leading to additional contributions to the overall likelihood. This leads to many more fitting parameters (one per bin per template), but minimization with respect to these additional parameters is performed analytically rather than introducing them as formal fitting parameters. Some special care needs to be taken in the case of bins with zero content.

[TMultiDimFit](https://root.cern/doc/master/classTMultiDimFit.html){:target="_blank"}: Implements a multi-dimensional function parametrization for multi-dimensional data by fitting them to multi-dimensional data using polynomial or Chebyshev or Legendre polynomial.

[TSpectrum](https://root.cern/doc/master/classTSpectrum.html){:target="_blank"}: Contains advanced spectra processing functions for 1- and 2-dimensional background estimation, smoothing, deconvolution, peak search and fitting, and orthogonal transformations.

`RooFit`: Toolkit for fitting and data analysis modeling,  see → [RooFit]({{ '/manual/roofit' | relative_url }}).

[TSPlot](https://root.cern/doc/master/classTSPlot.html){:target="_blank"}: Allows separation of the signal from the background via an extended maximum likelihood fit. Provides a tool to access the quality and validity of the fit producing distributions for the control variables. (see M. Pivk and F.R. Le Diberder, Nucl. Inst. Meth.A 555, 356-369, 2005).

### Multi-variate analysis classes

[TMultiLayerPerceptron](https://root.cern/doc/master/classTMultiLayerPerceptron.html){:target="_blank"}: Is a neural network class.

[TPrincipal](https://root.cern/doc/master/classTPrincipal.html){:target="_blank"}: Provides the Principal Component Analysis.

[TRobustEstimator](https://root.cern/doc/master/classTRobustEstimator.html){:target="_blank"}: Method for a minimum covariance determinant estimator (MCD).

`TMVA`: Package for multi-variate data analysis, see →[TMVA]({{ '/manual/tmva' | relative_url }}).


## UNU.RAN

[UNU.RAN](https://statmath.wu-wien.ac.at/unuran){:target="_blank"} (**U**niversal **N**on **U**niform **RA**ndom **N**umber generator for generating non-uniform pseudo-random numbers) contains universal (also called automatic or black-box) algorithms that can generate random numbers from large classes of continuous (in one or multi-dimensions), discrete distributions, empirical distributions (auch as histograms), and also from practically all standard distributions.

UNU.RAN is an ANSI C library licensed under GPL.

The {% include ref class="TUnuran" %} class is used to interface the UNURAN package.

> **Tutorials**
>
> {% include tutorials name="Unuran" url="unuran" %}
>

**Working with UNU.RAN**

- [Initializing TUnuran with string API](#initializing-tunuran)
- [Using TUnuranContDist for a one-dimensional distribution](#using-tunurancontdist)
- [Using TUnuranMultiContDist for a multi-dimensional distribution](#using-tunuranmulticontdist)
- [Using TUnuranDiscrDist for a discrete one-dimensional distribution](#using-tunurandiscrdist)
- [Using TUnuranEmpDist for an empirical distribution](#using-tunuranempdist)

<p><a name="initializing-tunuran"></a></p>
**Initializing TUnuran with string API**

You can initialize UNU.RAN with the string API via [TUnuran::Init()](https://root.cern/doc/master/classTUnuran.html#a793f7255df1e6d595fdfb6bc2f3a8256){:target="_blank"}, passing the distribution type and the method.

_**Example**_

{% highlight C++ %}
TUnuran unr;
// Initialize UNU.RAN to generate normal random numbers using an "arou" method.
   unr.Init("normal()","method=arou");
   ...

// Sample distributions N times (generate N random numbers).
   for (int i = 0; i<N; ++i)
   double x = unr.Sample();
{% endhighlight %}

<p><a name="using-tunurancontdist"></a></p>
**Using TUnuranContDist for a one-dimensional distribution**

Use {% include ref class="TUnuranContDist" %} for creating a continuous 1-D distribution object (for example from a {% include ref class="TF1" %} object providing the PDF (probability density function)).<br>
You can provide additional information via [TUnuranContDist::SetDomain(min,max)](https://root.cern/doc/master/classTUnuranContDist.html#aa82c3fc018dadafc55ef3a45239ce191){:target="_blank"} like the `domain()` for generating numbers in a restricted region.

_**Example**_

{% highlight C++ %}
// 1D case: create a distribution from two TF1 object, pointers pdfFunc.
   TUnuranContDist dist(pdfFunc);

// Initialize UNU.RAN, passing the distribution and a string.
// Define the method.
   unr.Init(dist, "method=hinv");

// Sample distribution N times (generate N random numbers).
   for (int i = 0; i < N; ++i)
   double x = unr.Sample();

{% endhighlight %}

<p><a name="using-tunuranmulticontdist"></a></p>
**Using TUnuranMultiContDist for a multi-dimensional distribution**

Use {% include ref class="TUnuranMultiContDist" %} to create a multi-dimensional distribution that can be created from a multi-dimensional PDF (probability density function).

_**Example**_

{% highlight C++ %}
// Multi- dimensional case from TF1 (TF2 or TF3) objects.
   TUnuranMultiContDist dist(pdfFuncMulti);

// The recommended method for a multi-dimensional function is "hitro".
   unr.Init(dist,"method=hitro");

// Sample distribution N times (generate N random numbers).
   double x[NDIM];
   for (int i = 0; i<N; ++i)
   unr.SampleMulti(x);

{% endhighlight %}

<p><a name="using-tunurandiscrdist"></a></p>
**Using TUnuranDiscrDist for a discrete one-dimensional distribution**

Use {% include ref class="TUnuranDiscrDist" %} to create a discrete one-dimensional distribution that can be initialized from a {% include ref class="TF1" %} object or from a vector of probabilities.

_**Example**_

{% highlight C++ %}
// Create a distribution from a vector of probabilities.
   double pv[NSize] = {0.1,0.2,...};
   TUnuranDiscrDist dist(pv,pv+NSize);

// The recommended method for a discrete distribution is "dgt".
   unr.Init(dist, "method=dgt");

// Sample N times (generate N random numbers).
   for (int i = 0; i < N; ++i)
   int k = unr.SampleDiscr();
{% endhighlight %}

<p><a name="using-tunuranempdist"></a></p>
**Using TUnuranEmpDist for an empirical distribution**

Use {% include ref class="TUnuranEmpDist" %} for creating an empirical distribution that can be initialized from a {% include ref class="TH1" %} object (using the bins or from its buffer for un-binned data) or from a vector of data.

_**Example**_

{% highlight C++ %}
// Create a distribution from a set of data.
// vdata is an std::vector containing the data.
   TUnuranEmpDist dist(vdata.begin(),vdata.end());
   unr.Init(dist);

// Sample N times (generate N random numbers).
   for (int i = 0; i<N; ++i)
   double x = unr.Sample();
{% endhighlight %}

## FOAM

FOAM is a simplified version of a multi-dimensional general purpose Monte Carlo event generator (integrator) with hyper-cubical "foam of cells".

> **Tutorials and more information**
>
> {% include tutorials name="FOAM" url="FOAM" %}
>
> ["Foam: A General Purpose Cellular Monte Carlo Event Generatory" by S. Jadach](https://cds.cern.ch/record/541515/files/0203033.pdf){:target="_blank"}

Certain features of full version of FOAM are omitted. mFOAM is intended as an easy to use tool for Monte Carlo simulation and integration in few dimensions. It relies on the ROOT package, borrowing persistency of classes from ROOT. You can use mFOAM from the ROOT shell.

_**Examples**_

{% include tutorial name="foam_kanwa" %} is a simple example on running FOAM in interactive mode.

{% include tutorial name="foam_demo" %} shows the usage of FOAM in compiled mode, which is the preferred method.

{% include tutorial name="foam_demopers" %} demonstrates the persistency of FOAM classes.

## FFTW

For computing Fast Fourier Transforms, ROOT uses the FFTW library (see  →  http://www.fftw.org). To use it, the fftw3 module must be enabled.

{% include ref class="TVirtualFFT" %}  is the interface class for Fast Fourier Transforms.

With [SetDefaultFFT()](https://root.cern/doc/master/classTVirtualFFT.html#a1c7c6134bf0a5ea525c7f670f59f82a0){:target="_blank"} you can change the default library.

> **Tutorial**
>
> {% include tutorials name="fft" url="fft" %}
>

## MLP
The multilayer perceptron (MLP) is a library with the neural network class {% include ref class="TMultiLayerPerceptron" %} from the `MLPfit` package.

_**Example**_

An example of using the {% include ref class="TMultiLayerPerceptron" %} can be found in the {% include tutorial name="mlpHiggs" %} macro in the `$ROOTSYS/tutorials/legacy/mlp` directory.

## Quadp

Quadp is  an optimization library with linear and quadratic programming methods. It is based on the [matrix package](#matrix-package).

_**Example**_

An example of using Quadp can be found in the {% include tutorial name="portfolio" %} macro in the `$ROOTSYS/tutorials/quadp/` directory.
