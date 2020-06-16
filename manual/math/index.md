---
title: Mathematical libraries
layout: single
sidebar:
  nav: "manual"
toc: true
toc_sticky: true
---

The ROOT Mathematical libraries consist of the following components:

- [MathCore library](#mathcore-library)

- [MathMore library](#mathmore-library)

- [Linear algebra package](#linear-algebra-package)

- [SMatrix](#smatrix)

- [TMinuit](#tminuit)

- [Minuit2 Library](#minuit2-library)

- [Vectors]({{ '/manual/vectors' | relative_url }})

- [UNU.RAN](#unuran)


## MathCore library

The [MathCore](https://root.cern/doc/master/MathCorePage.html){:target="_blank"} library provides a collection of functions, C++ classes and ROOT classes for HEP numerical computing. <br>
The `MathCore` is a self-consistent minimal set of tools required for the basic numerical computing. More advanced mathematical functionalities is provided by the [MathMore](#mathmore-library) library.
The following is included in the `MathCore` library:

- [Special functions](https://root.cern/doc/master/group__SpecFunc.html){:target="_blank"}: Functions like the gamma, beta and error function that are used in HEP.

- [Statistical functions](https://root.cern/doc/master/group__StatFunc.html){:target="_blank"}: Functions used in statistics, such as the probability density functions and the cumulative distributions functions for continuous and discrete distributions.

- [Function classes and interfaces](https://root.cern/doc/master/group__CppFunctions.html){:target="_blank"}: Interfaces (abstract classes) and base classes, including helper classes to wrap free (static) and non-static member functions.

- Numerical algorithms: User classes with basic implementations for:
   - [Numerical integration](https://root.cern/doc/master/group__Integration.html){:target="_blank"}
   - [Numerical differentiation](https://root.cern/doc/master/group__Deriv.html){:target="_blank"}
   - [One-dimensional Root-Finding](https://root.cern/doc/master/group__RootFinders.html){:target="_blank"}
   - [One-dimensional minimization](https://root.cern/doc/master/group__Min1D.html){:target="_blank"} and [multi-dimensional minimization](https://root.cern/doc/master/group__MultiMin.html){:target="_blank"}

- [Fitting and parameter estimation](https://root.cern/doc/master/group__Fit.html){:target="_blank"}: ROOT classes for fitting and parameter estimation from a given data set.

In addition, the [MathCore](https://root.cern/doc/master/MathCorePage.html){:target="_blank"} library contains the following ROOT classes that were originally part of *libCore*:

- the namespaces for [TMath](https://root.cern/doc/master/namespaceTMath.html){:target="_blank"} and [ROOT::Math](https://root.cern/doc/master/namespaceROOT_1_1Math.html){:target="_blank"}.

- ROOT classes for pseudo-random number generators, {% include ref class="TRandom" %} and the derived classes {% include ref class="TRandom1" %}, {% include ref class="TRandom2" %} and {% include ref class="TRandom3" %}.

- ROOT class for complex numbers, {% include ref class="TComplex" %}.

- other ROOT classes like:
   - {% include ref class="TKDTree" %}: ROOT class implementing a kd-tree.
   - [ROOT::Math::GoFTest](https://root.cern/doc/master/classROOT_1_1Math_1_1GoFTest.html){:target="_blank"}: ROOT class for testing the for goodness of fit tests.


### TMath

The [TMath](https://root.cern/doc/master/namespaceTMath.html){:target="_blank"} namespace provides a collection of free functions:

- numerical constants (like &#x03C0;, e, h, etc.)
- [trigonometric and elementary mathematical functions](#elementary-functions)
- functions to work with arrays and collections (e.g., functions to find the minimum and maximum of arrays)
- [statistic functions to work on array of data (e.g., mean and RMS of arrays)](#statistic-functions-operating-on-arrays)
- algorithms for binary search/hashing sorting
- [special mathematical functions like `Bessel`, `Erf`, `Gamma`, etc.](#special-and-statistical-function)
- statistical functions, like common probability and cumulative (quantile) distributions
- geometrical functions


<p><a name="elementary-functions"></a></p>
**Elementary functions**

Some of elementary mathematical functions refer to basic mathematical functions like the square root, the power to a number of the calculus
of a logarithm, while others are used for number treatment, like rounding.

Although there are some functions that are not in the standard C math library (like `Factorial`), most of the functionality
offered here is just a wrapper of the first ones. Nevertheless, some of the them also offer some security checks or a
better precision, like the trigonometrical functions `ASin(x)`, `ACos(x)` or `ATan(x)`.

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

[TMath](https://root.cern/doc/master/namespaceTMath.html){:target="_blank"} provides special functions like `Bessel`, `error functions`, `Gamma` or similar plus statistical mathematical
functions, including probability density functions, cumulative distribution and their inverse.

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
This interface provides a method to evaluate the function given a value (simple double) by implementing `double operator()` (`const double`). The user class
defined only needs to reimplement the pure abstract method double `DoEval(double x)` that will do the work of evaluating the function at point x.

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
This interface is needed by some numerical algorithms to calculate the derivatives of the function. It introduces the method double `Derivative(double x)` that will return
the derivative of the function at the point x. The class inherit by the user will have to implement the abstract
method `double DoDerivative(double x)`, leaving the rest of the class untouched.

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
the functionality for two different functions: `double DoEval(const double*)` and unsigned `int NDim()`. The first ones evaluates the function given the array that represents the multiple variables. The second returns the number of dimensions of the function.

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
- A class member function with the correct signature like `double Foo::Eval(double )`. In this case one pass the object pointer and a pointer to the member function (`&Foo::Eval`).

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
- Any object implementing any member function like `Foo::XXX(double )` for the function evaluation and any other member function like `Foo::YYY(double)` for the derivative.
- Any two function objects implementing `double operator()( double)`. One object provides the function evaluation, the other the derivative. One or both function object can be a free C function of type `double ()(double)`.

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

It can be constructed in three different way:
- From an object implementing both `double operator()( const double*)` for the function evaluation and `double Derivative(const double *, int icoord)` for the partial derivatives.
- From an object implementing any member function like `Foo::XXX(const double *)` for the function evaluation and any member function like `Foo::XXX(const double *, int icoord)` for the partial derivatives. 
- From an function object implementing `double operator()( const double *)` for the function evaluation and another function object implementing `double operator() (const double *, int icoord)` for the partial derivatives.

The function dimension is required when constructing the functor.

<p><a name="wrapping-tf1-objects-in-parametric-function-interfaces"></a></p>
**Wrapping TF1 objects in parametric function interfaces**

Often the {% include ref class="TF1" %} class is used.<br>
Use the [ROOT::Math::WrappedTF1](https://root.cern/doc/master/classROOT_1_1Math_1_1WrappedTF1.html) class, if the interface to wrap is one-dimensional.

The default constructor takes a {% include ref class="TF1" %} reference as an argument, that will be wrapped with the interfaces of a [ROOT::Math::IParametricGradFunctionOneDim](https://root.cern/doc/master/classROOT_1_1Math_1_1IParametricGradFunctionOneDim.html){:target="_blank"}. 

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

Use the [ROOT::Math::WrappedMultiTF1](https://root.cern/doc/master/namespaceROOT_1_1Math.html#a5c8071dfd2d9d6661de283f5e363566b) class, if the interface to wrap is multi-dimensional.

Following the usual procedure, setting the {% include ref class="TF1" %} though the constructor, will wrap it into a [ROOT::Math::IParametricGradFunctionMultiDim](https://root.cern/doc/master/namespaceROOT_1_1Math.html#a2e698159de0fa9c0bfb713f673464147){:target="_blank"}. 

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

The [MathCore](https://root.cern/doc/master/MathCorePage.html){:target="_blank"} library provides the following classes for generating pseudo-random numbers:

- {% include ref class="TRandom" %}: Using a linear congruential random generator.
- {% include ref class="TRandom1" %}: Random number generator based on the Ranlux engine.
- {% include ref class="TRandom2" %}: Based on the maximally equi-distributed combined Tausworthe generator by L'Ecuyer.
- {% include ref class="TRandom3" %}: Based on the Mersenne and Twister pseudo-random number generator.

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

When no value is given, the generator default seed is used. In this case an identical sequence will be generated every time the application is run.<br>
When the 0 value is used as seed, then a unique seed is generated using a TUUID, for {% include ref class="TRandom" %}, {% include ref class="TRandom1" %} and {% include ref class="TRandom3" %}.<br>
For {% include ref class="TRandom" %} the seed is generated using only the machine clock, which has a resolution of about 1 s. Therefore, identical sequences will be generated if the elapsed time is less than a second.

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

// Use 0: a unique seed will be automatically generated using TUUID.
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

The [MathCore](https://root.cern/doc/master/MathCorePage.html){:target="_blank"} library provides with {% include ref class="TComplex" %} a class for complex numbers.

## MathMore library

The [MathMore](https://root.cern/doc/master/MathMorePage.html){:target="_blank"} library provides an advanced collection of functions and C++ classes for numerical computing. This is an extension of the functionality provided by the [MathCore](https://root.cern/doc/master/MathCorePage.html){:target="_blank"} library. The [MathMore](https://root.cern/doc/master/MathMorePage.html){:target="_blank"}  library is implemented wrapping in C++ the GNU Scientific Library ([GSL](https://www.gnu.org/software/gsl/){:target="_blank"}). The mathematical functions are implemented as a set of free functions in the namespace [ROOT::Math](https://root.cern/doc/master/namespaceROOT_1_1Math.html){:target="_blank"}.

The [MathMore](https://root.cern/doc/master/MathMorePage.html){:target="_blank"} library includes classes and functions for:

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


## Linear algebra package

The linear algebra package provides a complete environment in ROOT to perform calculations like equation solving and eigenvalue decompositions.

### Matrix classes

ROOT provides the following matrix classes, among others:

- `TMatrixDBase`

- `TMatrixF`

- `TMatrixFSym`

- `TVectorF`

- `TMatrixD`

- `TMatrixDSym`

- `TMatrixDSparse`

- `TDecompBase`

- `TDecompChol`

#### Matrix properties

A matrix has five properties, which are all set in the constructor:

- `precision` <br>
If the `precision` is float (i.e. single precision), use the `TMatrixF` class family. If the precision is double, use the `TMatrixD` class family.

- `type`<br>
Possible values are: `general` (`TMatrixD`), `symmetric` (`TMatrixDSym`) or `sparse` (`TMatrixDSparse`).

- `size`<br>
Number of rows and columns.

- `index`<br>
Range start of row and column index. By default these start at 0.

- `sparse map`<br>
Only relevant for a sparse matrix. It indicates where elements are unequal 0.

#### Accessing matrix properties

Use one of the following methods to access the information about the relevant matrix property:

- `Int_t GetRowLwb()`: Row lower-bound index.

- `Int_t GetRowUpb()`: Row upper-bound index.

- `Int_t GetNrows()`: Number of rows.

- `Int_t GetColLwb()`: Column lower-bound index.

- `Int_t GetColUpb()`: Column upper-bound index.

- `Int_t GetNcols()`: Number of columns.

- `Int_t GetNoElements()`: Number of elements, for a dense matrix this equals: `fNrows x fNcols`.

- `Double_t GetTol()`: Tolerance number that is used in decomposition operations.

- `Int_t *GetRowIndexArray()`: For sparse matrices, access to the row index of `fNrows+1` entries.

- `Int_t *GetColIndexArray()`: For sparse matrices, access to the column index of `fNelems` entries.

#### Setting matrix properties

Use one of the following methods to set a matrix property:

- `SetTol (Double_t tol)`<br>
Sets the tolerance number.

- `ResizeTo (Int_t nrows,Int_t ncols, Int_t nr_nonzeros=-1)`<br>
Changes the matrix shape to `nrows x ncols`. Index will start at 0.

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

### Creating and filling a matrix

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
These operators provide the easiest way to fill a matrix but are in particular for a sparse matrix expensive. If no entry for slot (`i`,`j`) is found in the sparse index table it will be entered, which involves some memory management. Therefore, before invoking this method in a loop set the index table first through a call to the `SetSparseIndex()` method.

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

### Inverting a matrix

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

For matrices whose size is less than or equal to 6x6, the `InvertFast(Double_t &det=0)` function is available. Here the Cramer algorithm will be applied, which is faster but less accurate.

#### Using decomposition classes for inverting

You can also use the following decomposition classes (see → [Matrix decompositions](#matrix-decompositions")) for inverting a matrix:

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


### Matrix operators and methods

The matrix/vector operations are classified according to BLAS (basic linear algebra subroutines) levels.

#### Arithmetic operations between matrices

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
      <td>overwrites A</td>
    </tr>
    <tr>
      <td>Wise sum</td>
      <td>A+=B<br>Add (A,alpha,B)
<br>TMatrixD(A,TMatrixD::kPlus,B)</td>
      <td>A = A + &alpha; B constructor</td>
    </tr>
        <tr>
      <td>Element wise substraction</td>
      <td>C=A-B A-=B<br>
TMatrixD(A,TMatrixD::kMinus,B)</td>
      <td>overwrites A<br>
constructor</td>
    </tr>
            <tr>
      <td>Matrix multiplication</td>
      <td>C=A*B<br>
A*=B<br>
C.Mult(A,B)<br>TMatrixD(A,TMatrixD::kMult,B)<br>TMatrixD(A, TMatrixD(A, TMatrixD::kTransposeMult,B)<br>TMatrixD(A, TMatrixD::kMultTranspose,B)</td>
      <td>overwrites A<br>&nbsp;<br>&nbsp;<br>constructor of A.B<br>constructor of A<sup>T</sup> .B<br>constructor of A.B<sup>T</sup></td>
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

#### Arithmetic operations between matrices and real numbers

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

#### Comparison and Boolean operations

**Comparison between two matrices**

<table width="100%" border="0">
  <tbody>
    <tr>
      <th scope="col">Description</th>
      <th scope="col">Output</th>
      <th scope="col">Descriptions</th>
    </tr>
    <tr>
      <td>A == B</td>
      <td>Bool_t</td>
      <td>equal to</td>
    </tr>
    <tr>
      <td>A != B</td>
      <td>matrix</td>
      <td>not equal</td>
    </tr>
        <tr>
      <td>A > B</td>
      <td>matrix</td>
      <td>greater than</td>
    </tr>
        <tr>
      <td>A >= B</td>
      <td>matrix</td>
      <td>greater than or equal to</td>
    </tr>
        <tr>
      <td>A < B</td>
      <td>matrix</td>
      <td>smaller than</td>
    </tr>
        <tr>
      <td>A <= B</td>
      <td>matrix</td>
      <td>smaller than or equal to</td>
    </tr>
        <tr>
      <td>AreCompatible(A,B)</td>
      <td>Bool_t</td>
      <td>compare matrix properties</td>
    </tr>
        <tr>
      <td>Compare(A,B)</td>
      <td>Bool_t</td>
      <td>return summary of comparison</td>
    </tr>
        <tr>
      <td>VerifyMatrixIdentity(A,B,verb, maxDev)</td>
      <td>&nbsp;</td>
      <td>check matrix identity within maxDev tolerance</td>
    </tr>
  </tbody>
</table>

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
      <td>equal to</td>
    </tr>
    <tr>
      <td>A != r</td>
      <td>Bool_t</td>
      <td>not equal</td>
    </tr>
        <tr>
      <td>A > r</td>
      <td>Bool_t</td>
      <td>greater than</td>
    </tr>
        <tr>
      <td>A >= r</td>
      <td>Bool_t</td>
      <td>greater than or equal to</td>
    </tr>
        <tr>
      <td>A < r</td>
      <td>Bool_t</td>
      <td>smaller than</td>
    </tr>
        <tr>
      <td>A <= r</td>
      <td>Bool_t</td>
      <td>smaller than or equal to</td>
    </tr>
        <tr>
      <td>VerifyMatrixValue(A,r,verb, maxDev)</td>
      <td>Bool_t</td>
      <td>compare matrix value with r within maxDev tolerance</td>
    </tr>
        <tr>
      <td>A.RowNorm()</td>
      <td>Double_t</td>
      <td>norm induced by the infinity vector norm</td>
    </tr>
        <tr>
      <td>A.NormInf()</td>
      <td>Double_t</td>
      <td>&nbsp;</td>
    </tr>
        <tr>
      <td>A.ColNorm()</td>
      <td>Double_t</td>
      <td>norm induced by the 1 vector norm</td>
    </tr>
        <tr>
      <td>A.Norm1()</td>
      <td>Double_t</td>
      <td>&nbsp;</td>
    </tr>
        <tr>
      <td>A.E2Norm()</td>
      <td>Double_t</td>
      <td>square of the Euclidean norm</td>
    </tr>
        <tr>
      <td>A.NonZeros()</td>
      <td>Int_t</td>
      <td>&nbsp;</td>
    </tr>
        <tr>
      <td>A.Sum()</td>
      <td>Double_t</td>
      <td>number of elements unequal zero</td>
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

### Matrix views

With the following matrix view classes, you can access the matrix elements:

- `TMatrixDRow`
- `TMatrixDColumn`
- `TMatrixDDiag`
- `TMatrixDSub`

#### Matrix view operators

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
      <td>element A<sub>ij</sub></td>
    </tr>
    <tr>

      <td>TMatrixDColumn(A,j)(i) TMatrixDColumn(A,j)[i]</td>
      <td>element A<sub>ij</sub></td>
    </tr>
        <tr>

      <td>TMatrixDDiag(A(i) TMatrixDDiag(A[i]</td>
      <td>element A<sub>ij</sub></td>
    </tr>
    <tr>

      <td>TMatrixDSub(A(i) TMatrixDSub(A,rl,rh,cl,ch)(i,j)</td>
      <td>element A<sub>ij</sub><br>element A<sub>rl+i,cl+j</sub></td>
    </tr>
  </tbody>
</table>

#### Matrix decompositions

There are the following classes available for matrix decompositions:

- {% include ref class="TDecompLU" %}: Decomposes a general `n x n` matrix `A` into `P A = L U`.
- {% include ref class="TDecompBK" %}: The Bunch-Kaufman diagonal pivoting method decomposes a real symmetric matrix `A`.
- {% include ref class="TDecompChol" %}: The Cholesky decomposition class, which decomposes a symmetric, positive definite matrix `A = U^T * U` where `U` is a upper triangular matrix.
- {% include ref class="TDecompQRH" %}: QR decomposition class.
- {% include ref class="TDecompSVD" %}: Single value decomposition class.
- {% include ref class="TDecompSparse" %}: Sparse symmetric decomposition class.

### Matrix Eigen analysis

With the `TMatrixDEigen` and `TMatrixDSymEigen` classes, you can compute eigenvalues and eigenvectors for general dense and symmetric real matrices.

## SMatrix

[SMatrix](https://root.cern/doc/master/group__SMatrixGroup.html){:target="_blank"} is a C++ package for high performance vector and matrix computations. It can be used only in problems when the size of the matrices is known at compile time, like in the tracking reconstruction of HEP experiments. It is based on a C++ technique, called expression templates, to achieve an high level optimization. The C++ templates can be used to implement vector and matrix expressions such that these expressions can be transformed at compile time to code which is equivalent to hand optimized code in a low-level language like FORTRAN or C.

The [SMatrix](https://root.cern/doc/master/group__SMatrixGroup.html){:target="_blank"} has been developed initially by T. Glebe of the Max-Planck-Institut, Heidelberg, as part of the HeraB analysis framework. A subset of the original package has been now incorporated in the ROOT distribution, with the aim to provide to the LHC experiments a stand-alone and high performance matrix package for reconstruction. The API of the current package differs from the original one, in order to be compliant to the ROOT coding conventions.

## TMinuit

The Minuit minimization package was originally written in Fortran by Fred James and part
of PACKLIB (patch D506). It has been converted to the C++ class
{% include ref class="TMinuit" %}, by R.Brun.

> **Topical manual**
>
> For TMinuit, a topical manual it available at [Topical Manual - TMinuit]({{ '/topical/#minuit' | relative_url }}).<br>
> It contains in-depth information about TMinuit.

## Minuit2 Library


The [Minuit2](https://root.cern/doc/master/group__Minuit.html){:target="_blank"} library is a new object-oriented implementation, written in C++, of the popular MINUIT minimization package. These new version provides basically all the functionality present in the old Fortran version, with almost equivalent numerical accuracy and computational performances. Furthermore, it contains new functionality, like the possibility to set single side parameter limits or the FUMILI algorithm, which is an optimized method for least square and log likelihood minimizations. The package has been originally developed by M. Winkler and F. James.

> **Topical manuals**
>
> For Minuit2, topical manuals are available at [Topical Manuals - Minuit2]({{ '/topical/#minuit-2' | relative_url }}).<br>
> They contain in-depth information about Minuit2.

## UNU.RAN

[UNU.RAN](http://statmath.wu-wien.ac.at/unuran){:target="_blank"} (**U**niversal **N**on **U**niform **RA**ndom **N**umber generator for generating non-uniform pseudo-random numbers) contains universal (also called automatic or black-box) algorithms that can generate random numbers from large classes of continuous (in one or multi-dimensions), discrete distributions, empirical distributions (like histograms) and also from practically all standard distributions.

UNU.RAN is an ANSI C library licensed under GPL.

The {% include ref class="TUnuran" %} class is used to interface the UNURAN package.

> **Tutorials**
>
> UNU:RAN tutorials are available at → [https://root.cern/doc/master/group__tutorial__unuran.html](https://root.cern/doc/master/group__tutorial__unuran.html){:target="_blank"}

### Initializing TUnuran with string API

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

### Using TUnuranContDist for a one-dimensional distribution

- Use {% include ref class="TUnuranContDist" %} for creating a continuous 1-D distribution object (for example from a {% include ref class="TF1" %} object providing the PDF (probability density function).<br>
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

### Using TUnuranMultiContDist for a multi-dimensional distribution

- Use {% include ref class="TUnuranMultiContDist" %} to create a multi-dimensional distribution, which can be created from a multi-dimensional PDF (probability density function).

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

### Using TUnuranDiscrDist for a discrete one-dimensional distribution

- Use {% include ref class="TUnuranDiscrDist" %} to create a discrete one-dimensional distribution, which can be initialized from a {% include ref class="TF1" %} object or from a vector of probabilities.

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

### Using TUnuranEmpDist an empirical distribution

Use {% include ref class="TUnuranEmpDist" %} for creating an empirical distribution, which can be initialized from a {% include ref class="TH1" %} object (using the bins or from its buffer for un-binned data) or from a vector of data.

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
