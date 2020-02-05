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

The [MathCore](https://root.cern/doc/master/MathCorePage.html) library provides a collection of functions, C++ classes and ROOT classes for HEP numerical computing. <br>
The `MathCore` is a self-consistent minimal set of tools required for the basic numerical computing. More advanced mathematical functionalities is provided by the [MathMore library](#mathmore-library).
The following is included in the `MathCore` library:

- [Special mathematical functions](https://root.cern/doc/master/group__SpecFunc.html): Functions like the gamma, beta and error function that are used in HEP.

- [Statistical functions](https://root.cern/doc/master/group__StatFunc.html): Mathematical functions used in statistics, such as the probability density functions and the cumulative distributions functions for continuous and discrete distributions.

- [Function classes and interfaces](https://root.cern/doc/master/group__CppFunctions.html): Interfaces (abstract classes) and base classes, including helper classes to wrap free (static) and non-static member functions.

- Numerical algorithms: User classes with basic implementations for:
   - [Numerical Integration](https://root.cern/doc/master/group__Integration.html)
   - [Numerical Differentiation](https://root.cern/doc/master/group__Deriv.html)
   - [One-dimensional Root-Finding](https://root.cern/doc/master/group__RootFinders.html)
   - [One-dimensional minimization](https://root.cern/doc/master/group__Min1D.html) and [multi-dimensional minimization](https://root.cern/doc/master/group__MultiMin.html)

- [Fitting and parameter estimation](https://root.cern/doc/master/group__Fit.html): ROOT classes for fitting and parameter estimation from a given data set.

In addition, the [MathCore](https://root.cern/doc/master/MathCorePage.html) library contains the following ROOT classes that were originally part of *libCore*:

- the namespaces for [TMath](https://root.cern/doc/master/namespaceTMath.html) and [ROOT::Math](https://root.cern/doc/master/namespaceROOT_1_1Math.html).

- ROOT classes for random number generators, {% include ref class="TRandom" %} etc.

- ROOT class for complex numbers, {% include ref class="TComplex" %}

- other ROOT classes like:
   - {% include ref class="TKDTree" %}: ROOT class implementing a kd-tree.
   - [ROOT::Math::GoFTest](https://root.cern/doc/master/classROOT_1_1Math_1_1GoFTest.html): ROOT class for testing the for goodness of fit tests.


### TMath

The [TMath](https://root.cern/doc/master/namespaceTMath.html) namespace provides a collection of free functions:

- numerical constants (like pi, e, h, etc.)

- trigonometric and elementary mathematical functions

- functions to work with arrays and collections (e.g., functions to find the minimum and maximum of arrays)

- statistic functions to work on array of data (e.g., mean and RMS of arrays)

- algorithms for binary search/hashing sorting

- special mathematical functions like `Bessel`, `Erf`, `Gamma`, etc.

- statistical functions, like common probability and cumulative (quantile) distributions

- geometrical functions


#### Numerical constants

[TMath](https://root.cern/doc/master/namespaceTMath.html) provides constants in the form of inline functions:

- pi
- base of natural logarithm
- velocity of light
- gravitational constant (G)
- standard acceleration of gravity (g)
- Plank’s constant
- Boltzmann’s and Steffan-Boltzmann’s constants
- Avogadro’s number
- universal gas constant
- molecular weight of dry air
- dry air gas constant
- Euler-Mascheroni constant
- elementary charge

#### Statistic functions operating on arrays

[TMath](https://root.cern/doc/master/namespaceTMath.html) provides functions that process arrays for calculation:

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

### ROOT:Math

The [ROOT::Math](https://root.cern/doc/master/namespaceROOT_1_1Math.html) namespace provides a set of function interfaces to define the basic behaviour of a mathematical function:

- **One-dimensional function interfaces**<br>
Used for numerical algorithms operating only on one-dimensional functions. They cannot applied to
multi-dimensional functions.

- **Multi-dimensional function interfaces**<br>
Used for numerical algorithms operating on multi-dimensional functions.

- **Parametric function interfaces**<br>
Used for fitting after evaluating multi-dimensional functions.


### Random numbers

The [MathCore](https://root.cern/doc/master/MathCorePage.html) library provides the following classes for generating pseudo-random numbers:

{% include ref class="TRandom" %}: Using a linear congruential random generator.

{% include ref class="TRandom1" %}: Random number generator based on the Ranlux engine.

{% include ref class="TRandom2" %}: Based on the maximally equi-distributed combined Tausworthe generator by L'Ecuyer.

{% include ref class="TRandom3" %}: Based on the Mersenne and Twister pseudo-random number generator.

> **Note**
>
> For generating non-uniform random numbers, the UNU.RAN package (see → [UNU.RAN](#unuran)) is available.

#### Seeding the random number generators

- Use the [SetSeed()](https://root.cern/doc/master/classROOT_1_1Math_1_1Random.html#ab9efcc04f4be1e7e6e49c5281abdee5b) method.

When no value is given, the generator default seed is used. In this case an identical sequence will be generated every time the application is run.<br>
When the 0 value is used as seed, then a unique seed is generated using a TUUID, for {% include ref class="TRandom" %}, {% include ref class="TRandom1" %} and {% include ref class="TRandom3" %}.<br>
For {% include ref class="TRandom" %} the seed is generated using only the machine clock, which has a resolution of about 1 s. Therefore, identical sequences will be generated if the elapsed time is less than a second.

#### Using the random number generators

- Use the [Rndm()](https://root.cern/doc/master/classROOT_1_1Math_1_1Random.html#af47234971a577abc33b975867fc4877d) method for generating a pseudo-random number distributed between 0 and 1.

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

### Complex numbers

The [MathCore](https://root.cern/doc/master/MathCorePage.html) library provides with {% include ref class="TComplex" %} a class for complex numbers.

## MathMore library

The [MathMore](https://root.cern/doc/master/MathMorePage.html) library provides an advanced collection of functions and C++ classes for numerical computing. This is an extension of the functionality provided by the [MathCore](https://root.cern/doc/master/MathCorePage.html) library. The [MathMore](https://root.cern/doc/master/MathMorePage.html)  library is implemented wrapping in C++ the GNU Scientific Library ([GSL](https://www.gnu.org/software/gsl/)).

The [MathMore](https://root.cern/doc/master/MathMorePage.html) library includes classes and functions for:

- [Special functions](https://root.cern/doc/master/group__SpecFunc.html)<br>
Containing all the major functions such as Bessel functions, Legendre polynomial, etc.

- [Statistical functions](https://root.cern/doc/master/group__StatFunc.html)<br>
Contains mathematical functions used in statistics such as probability density functions, cumulative distributions functions and their inverse (quantiles).

- Numerical algorithms:
   - [Numerical Integration](https://root.cern/doc/master/group__Integration.html)
   - [Numerical Monte Carlo Integration classes](https://root.cern/doc/master/group__MCIntegration.html)
   - [Numerical Differentiation](https://root.cern/doc/master/group__Deriv.html)
   - [One-dimensional Root-Finding](https://root.cern/doc/master/group__RootFinders.html)
   - [One-dimensional Minimization](https://root.cern/doc/master/group__Min1D.html)
   - [Multi-dimensional Minimization](https://root.cern/doc/master/group__MultiMin.html)

- [Interpolation Classes](https://root.cern/doc/master/group__Interpolation.html)

- [Function Approximation (ChebyshevApprox)](https://root.cern/doc/master/group__FuncApprox.html)
<br>Based on Chebyshev polynomials.

- [Random Classes](https://root.cern/doc/master/group__Random.html)


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
Set the tolerance number.

- `ResizeTo (Int_t nrows,Int_t ncols, Int_t nr_nonzeros=-1)`<br>
Change matrix shape to `nrows x ncols`. Index will start at 0.

- `ResizeTo(Int_t row_lwb,Int_t row_upb, Int_t col_lwb,Int_t col_upb, Int_t nr_nonzeros=-1)`<br>
Change matrix shape to `row_lwb:row_upb x col_lwb:col_upb`.

- `SetRowIndexArray (Int_t *data)`<br>
For sparse matrices, set the row index. The array data should contain at least `fNrows+1` entries column lower-bound index.

- `SetColIndexArray (Int_t *data)`<br>
For sparse matrices, set the column index. The array data should contain at least `fNelems` entries.

- `SetSparseIndex (Int_t nelems new)`<br>
Allocate memory for a sparse map of `nelems_new` elements and copy (if exists) at most `nelems_new`  matrix elements over to the new structure.

- `SetSparseIndex (const TMatrixDBase &a)`<br>
Copy the sparse map from matrix `a`.

- `SetSparseIndexAB (const TMatrixDSparse &a, const TMatrixDSparse &b)`<br>
Set the sparse map to the same map of matrix `a` and `b`.

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

[SMatrix](https://root.cern/doc/master/group__SMatrixGroup.html) is a C++ package for high performance vector and matrix computations. It can be used only in problems when the size of the matrices is known at compile time, like in the tracking reconstruction of HEP experiments. It is based on a C++ technique, called expression templates, to achieve an high level optimization. The C++ templates can be used to implement vector and matrix expressions such that these expressions can be transformed at compile time to code which is equivalent to hand optimized code in a low-level language like FORTRAN or C.

The [SMatrix](https://root.cern/doc/master/group__SMatrixGroup.html) has been developed initially by T. Glebe of the Max-Planck-Institut, Heidelberg, as part of the HeraB analysis framework. A subset of the original package has been now incorporated in the ROOT distribution, with the aim to provide to the LHC experiments a stand-alone and high performance matrix package for reconstruction. The API of the current package differs from the original one, in order to be compliant to the ROOT coding conventions.

## TMinuit

The Minuit minimization package was originally written in Fortran by Fred James and part of PACKLIB (patch D506). It has been converted to a C++ class, [TMinuit](https://root.cern/doc/master/classTMinuit.html), by R.Brun.


## Minuit2 Library


The [Minuit2](https://root.cern/doc/master/group__Minuit.html) library is a new object-oriented implementation, written in C++, of the popular MINUIT minimization package. These new version provides basically all the functionality present in the old Fortran version, with almost equivalent numerical accuracy and computational performances. Furthermore, it contains new functionality, like the possibility to set single side parameter limits or the FUMILI algorithm, which is an optimized method for least square and log likelihood minimizations. The package has been originally developed by M. Winkler and F. James.


## UNU.RAN

[UNU.RAN](http://statmath.wu-wien.ac.at/unuran) (**U**niversal **N**on **U**niform **RA**ndom **N**umber generator for generating non-uniform pseudo-random numbers) contains universal (also called automatic or black-box) algorithms that can generate random numbers from large classes of continuous (in one or multi-dimensions), discrete distributions, empirical distributions (like histograms) and also from practically all standard distributions.

UNU.RAN is an ANSI C library licensed under GPL.

The {% include ref class="TUnuran" %} class is used to interface the UNURAN package.

> **Tutorials**
>
> UNU:RAN tutorials are available at → [https://root.cern/doc/master/group__tutorial__unuran.html](https://root.cern/doc/master/group__tutorial__unuran.html)

### Initializing TUnuran with string API

You can initialize UNU.RAN with the string API via [TUnuran::Init()](https://root.cern/doc/master/classTUnuran.html#a793f7255df1e6d595fdfb6bc2f3a8256), passing the distribution type and the method.

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
You can provide additional information via [TUnuranContDist::SetDomain(min,max)](https://root.cern/doc/master/classTUnuranContDist.html#aa82c3fc018dadafc55ef3a45239ce191) like the `domain()` for generating numbers in a restricted region.

_**Example**_

{% highlight C++ %}
// 1D case: create a distribution from two TF1 object, pointers pdfFunc.
   TUnuranContDist dist(pdfFunc);

// Initialize UNU.RAN passing the distribution and a string.
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

- Use {% include ref class="TUnuranDiscrDist" %} for creating a discrete one-dimensional distribution, which can be initialized from a {% include ref class="TF1" %} object or from a vector of probabilities.

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
