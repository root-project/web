---
title: Histograms
layout: single
sidebar:
  nav: "manual"
toc: true
toc_sticky: true
---

Histograms are approximate representations of the distribution of numerical data and they play a fundamental role in any kind of physical analysis.
Histograms can be used to visualize your data, by being an approximation to the underlying data density distribution, and they can be used also as a powerful form of data reduction. For a detailed
description of what is an histogram, see the corresponding page in [Wikipedia](https://en.wikipedia.org/wiki/Histogram).

ROOT provides a rich set of functionality to work with histograms. They can be used for continuos data in one or multi dimensions, they can represent integer data and they can also be used to display categorical data, such
as bar charts. Furthermore, ROOT supports building histograms from weighted data sets, which are very common in HEP, it provides the functionality to compute summary statistics information from the histograms input data, such as
sample mean, standard deviation and higher momenta.

ROOT provides also the functionality to perform operations on histograms such as addition, division and multiplication or transformations such as rebinning, scaling,
including normalisations, or projections from a multi dimensional histograms to ones with lower dimensions.
The ROOT histogram library provides also the capability or producing profile plots from multi dimensional data, see  [Profile Histograms](#profile-histograms).

The first step to construct an histogram is to define a range for the input data and then bin this range of values in intervals: the histogram bins.
The histogram will count how many values fall into each interval, building a frequency distribution of the input data.
ROOT supports histograms with bins of equal size or variable size.

See the histogram tutorials for all the possible type of histograms that can be built. 


{% include tutorials name="Histogram" url="hist" %}

## Histogram classes

The ROOT histogram classes derive from the base {% include ref class="TH1" %}  class, which is a common interface to interact with the ROOT histograms.
Derived classes exist depending on the dimension, 1-D, 2-D and 3-D, and the type used to represent the bin contents:
- one byte per channel: `TH1C`, `TH2C` or `TH3C`. Maximum bin content = 127.
- one short per channel: `TH1S`, `TH2S` or `TH3S`. Maximum bin content = 32767.
- one int per channel: `TH1I`, `TH2I` or `TH3I`. Maximum bin content = 2147483647.
- one float per channel: `TH1F`, `TH2F` or `TH3F`. Maximum precision 7 digits, i.e a  maximum bin content of around 10E7 for having the precision of one count.
- one double per channel: `TH1D`, `TH2D` or `TH3D` . Maximum precision 16 digits, i.e maximum bin content of around 10E16.

If there are no particular needs for limiting the memory used by the histograms, it is recommended to use the double precision version:
`TH1D` for the 1-D case, `TH2D` for the 2-D and `TH3D` for 3-D.

### Histograms for larger dimensions

For the case of dimensions larger than 3, ROOT provides a generic base class for multi-dimensional histogram {% include ref class="THn" %} and the derived classes
`THnD`, `THnF`, `THnL`, `THnI`, `THnS` and `THnC`, which are different instantiations of a generic template `THnT<Type>`. 
The `THn` classes should be used when a large fraction of all bins are filled. 
Given the large amount of memory used by `THn`, sparse multi-dimensional histogram classes exist for the use case of multi-dimensions and large number of bins.
The base class for sparse histograms is {% include ref class="THnSparse" %} with its derived instantiation `THnSparse<type>`.

Note that both `THn` and `THnSparse` do not inherit from `TH1` and have therefore a slightly different interface.


### Profile histograms

In addition to the standard histograms, ROOT provides also classes for producing profile plots, i.e plots obtained from multi-dimensional input data (e.g. X and Y), where one of the dimension
(Y) is not grouped in bins, but the sample mean value and the corresponding error are displayed. A profile plot can be used to better visualize dependence relations in multi-dimensional data, than using
standard multi-dimensional histogram plots such as scatter plots.

  - {% include ref class="TProfile" %} is a profile histogram for (X,Y) data to display the mean value of Y and its error for each bin in X.

  - {% include ref class="TProfile2D" %} is a profile histogram for (X,Y,Z) data to display the mean value of Z and its error for each cell in X,Y.

- {% include ref class="TProfile3D" %} is a profile histogram for (X,Y,Z,T) data to display the mean value of T and its error for each cell in X,Y,Z.

Profile plots have the option to display instead of the default sample mean error the sample standard deviation (the spread of the data). A similar plot to a profile, which shows the quantiles of the
Y input data, is the candle plot, called also box plot,  (see [tutorial](https://root.cern.ch/doc/master/candleplot_8C.html)), which can be obtained directly from the 2D histogram using the `candle`
draw option.


### Bin numbering

All histogram types support fixed or variable bin sizes. 2-D histograms may have fixed size bins along X and variable size bins along Y or vice-versa.
The type of binning of the histogram is managed by the {% include ref class="TAxis" %} class, which defines also the minimum and maximum range of the input data that will be collected in the bins.
The `TH1` class orders the bins using a *global bin* number for dealing with the multi-dimensional cases.

**Conventions**

For all histogram types: `nbins`, `xlow`, `xup`:

  - bin# 0 contains the underflow.

  - bin# 1 contains the first bin with low-edge (`xlow` INCLUDED).

  - The second to last bin (bin# nbins) contains the upper-edge (`xup` EXCLUDED).

  - The last bin (bin# `nbins+1`) contains the overflow.

  - A *global bin* number is defined  to access the bin information independently of the dimension. 

_**Example**_

Assuming a 3-D histogram `h` with `binx`, `biny`, `binz`, the function returns a global bin number.

`Int_t bin = h->GetBin(binx, biny, binz);`

and given a global bin number `bin`, the function `h->GetBinXYZ(bin,binx,biny,binz)` computes the corresponding `binx`, `biny` and `binz`.


**Re-binning**

You can re-bin a histogram via the [TH1::Rebin()](https://root.cern/doc/master/classTH1.html#aff6520fdae026334bf34fa1800946790){:target="_blank"} method. It returns a new histogram with the re-binned
contents. If bin errors were stored, they are recomputed during the re-binning.
You can see this [tutorial](https://root.cern.ch/doc/master/rebin_8C.html) as a rebinning example.

### Stack of histograms

{% include ref class="THStack" %} is a collection of {% include ref class="TH1" %} or {% include ref class="TH2" %} histograms. The tutorial [`hstack.C`](https://root.cern.ch/doc/master/hstack_8C.html) is a good example of how using the `THStack` class.

## Working with histograms


### Creating and copying a histogram

- Use a constructor of the derived classes (`TH1D` instead of `TH1`)  to create a histogram object, by passing in addition to name an title strings, the number of bins, the minimum and maximum range.

_**Examples**_

In the following examples, histograms are created for the classes {% include ref class="TH1I" %}, {% include ref class="TH2F" %}, {% include ref class="TH3D" %}:

{% highlight C++ %}
   TH1* h1 = new TH1I("h1", "h1 title", 100, 0.0, 4.0);
   TH2* h2 = new TH2F("h2", "h2 title", 40, 0.0, 2.0, 30, -1.5, 3.5);
   TH3* h3 = new TH3D("h3", "h3 title");
{% endhighlight %}

For creating variable bins histograms:

{% highlight C++ %}
   double binEdges[] = { 0.0, 0.2, 0.5, 1., 2., 4. };
   TH1* h1 = new TH1D("h1", "h1 title", 6, binEdges );
   TH2* h2 = new TH2D("h2", "h2 title", 6, binEdges , 30, -1.5, 3.5);
{% endhighlight %}
note that the array of bin edges should be of size `nbins+1` , since it contains the lower and upper range axis values.

For creating a profile histograms passing the range in the profiled variable (e..g .Y for a `TProfille`) is optional:
{% highlight C++ %}
   TProfile* p1 = new TProfile("p1", "profile title", 40, 0.0, 2.0 );
   TProfile* p2 = new TProfile("p2", "profile title", 40, 0.0, 2.0, -1.5, 3.5 );
{% endhighlight %}


For Clone/copy an existing histogram you can use the `Clone()` method or the copy constructor.
Note that `Clone()` returns a pointer to a `TObject` and it requires the casting to `TH1`, while the copy constructor can be used only with the leaf histogram classes (e.g `TH1D` for a double type histogram). 

_**Example**_

{% highlight C++ %}
TH1* hc = (TH1*)h1->Clone();
{% endhighlight %}
If the type of h1 is `TH1D` you can also do:
{% highlight C++ %}
TH1* hc = new TH1D(*h1);
{% endhighlight %}

### Filling a histogram

Fill a histogram with the [TH1::Fill()](https://root.cern/doc/master/classTH1.html#a77e71290a82517d317ea8d05e96b6c4a){:target="_blank"} method.

_**Examples**_

- For 1-D histograms
{% highlight C++ %}
   h1->Fill(x);
   h1->Fill(x,w); // with weight
{% highlight C++ %}
- For 2-D histograms and `TProfile`:
{% highlight C++ %}
   h2->Fill(x,y);
   p2->Fill(x,y);
   h2->Fill(x,y,w);  // with weights
   p2->Fill(x,y,w);  
{% endhighlight %}
- For 3-D histograms and `TProfile2D`:
{% highlight C++ %}
   h3->Fill(x,y,z);
   h3->Fill(x,y,z,w); // with weights
{% endhighlight %}
   

The `Fill()` method computes the bin number corresponding to the given x, y or z argument and increments this bin by the given weight.<br>
The `Fill()` method returns the bin number for 1-D histograms or *global bin* number for 2-D and 3-D histograms.

An histogram can also be filled directly by an array of values of type `double` and an array of weights.
{% highlight C++ %}
   std::vector<double> x = {0,1,2,3,4,5,6,7,8,9};
   std::vector<double> w(x.size(),1); // weights vector
   auto h1 = new TH1D("h1","h1 title",10,0.,10.);
   h1.FillN(10,x,w);
{% endhighlight %}

This is useful when working in Python with `numpy` arrays, so you can fill directly an histograms. An example is provided in the next section.


Note that when filling an histogram passing a weight different than one, the histogram assumes you are dealing with a weighted data set and stores internally an additional array with
the sum of weight square used to compute its error. A weighted histogram is displayed always by default showing the bin error for each bin instead of the standard histogram bar.

#### Filling a histogram with random numbers

- Fill a histogram with random numbers with the [TH1::FillRandom()](https://root.cern/doc/master/classTH1.html#a1e9d6258ae798a0eb52aef58a72758a5){:target="_blank"} method.

The `FillRandom()` method uses the contents of an existing `TF1` function or another `TH1` histogram (for all dimensions) and the default random number generator defined in `gRandom`.

_**Example**_

A histogram is randomly filled 10 000 times with a default Gaussian distribution of mean 0 and sigma 1.

{% highlight C++ %}
   TH1F h1("h1","Histogram from a Gaussian",100,-3,3);
   h1.FillRandom("gaus",10000);
   {% endhighlight %}

In Python you can use random numbers generated using the `numpy.random` library and `FillN` for filling the histogram:

```python
import numpy as np
import ROOT
  # generate an array of normal distributed data with mean=5 and stddev=2 containing 1000 values
  x = np.random.normal(5,2,1000)
  w = np.ones(1000)
  h1 = ROOT.TH1D("h1","h1 title",50,0.,10.);
  h1.Fill(1000, x, w)
```

Use the [TH1::GetRandom()](https://root.cern/doc/master/classTH1.html#a4dd1bbf1cbeea1e7da03e781d01cf232){:target="_blank"} method to get a random number distributed according the contents of a histogram.

### Adding, multiplying and dividing histograms

Following operations are supported on histograms or between histograms:

-   Addition of a histogram to the current histogram.

-   Additions of two histograms with coefficients and storage into the current histogram.

-   Multiplications and divisions are supported in the same way as additions.

You can use the operators (+, *, /) or the {% include ref class="TH1" %} methods `Add()`, `Multiply()` and `Divide()`.

_**Examples**_

Multiplying a histogram object with a constant:

{% highlight C++ %}
   h1.Scale(const)
{% endhighlight %}

Creating a new histogram without changing the original one:

{% highlight C++ %}
   TH1F h3 = 8*h1;
{% endhighlight %}

Multiplying two histograms and put the result in the third one:

{% highlight C++ %}
TH1F h3 = h1*h2;
{% endhighlight %}

When performing operations, the resulting bin errors and histogram statistics are computed assuming the two histograms are independents and a normal approximation for the bin error is used.
A special case is when histograms are divided to compute efficiency and in this case the numerator histogram is a subset of the denominator histogram. The correct handling of errors is done by using
the {% include ref class="TEfficiency" %} class.

### Drawing a histogram

  - Use the [TH1::Draw()](https://root.cern/doc/master/classTH1.html#aa53a024a9e94d5ec91e3ef49e49563da){:target="_blank"} method to draw a histogram.
    It creates a {% include ref class="THistPainter" %} object that specializes the drawing of the histogram.
    The {% include ref class="THistPainter" %} class is separated
    from the histogram, so that the histogram does not contain the graphics overhead.

  - Use the [TH1::DrawCopy()](https://root.cern/doc/master/classTH1.html#aa19b24b96284284d677cd73f00d29d79){:target="_blank"} method to create a copy of the histogram when drawing it.

  - Use the [TH1::DrawNormalized()](https://root.cern/doc/master/classTH1.html#a46394b325a71d59fe0009172079b4a62){:target="_blank"} method to draw a normalized copy of a histogram.

_**Example**_

{% highlight C++ %}
   TH1F h1("h1","Histogram from a Gaussian",100,-3,3);
   h1.FillRandom("gaus",10000);
   h1.Draw();
{% endhighlight %}

{% include figure_jsroot
   file="histograms.root" object="h1" width="500px" height="350px"
   caption="Histogram drawn with Draw()."
%}

#### Getting the bin width

- Use the [GetBinWidth()](https://root.cern/doc/master/classTH1.html#ad69a5fa0002361fd77f37990a29d1aa3){:target="_blank"} method to get the bin width of a histogram.

{% highlight C++ %}
   TH1F h1("h1","Histogram from a Gaussian",100,-3,3);
   h1.FillRandom("gaus",10000);
   h1.Draw();
   h1.GetBinWidth(0)

   (double) 0.060000000
{% endhighlight %}

#### Drawing options

> **Note**
>
> The drawing options are not case sensitive.

**Drawing options for all histogram classes**

The "drawing option" is the unique parameter of the [TH1::Draw()](https://root.cern/doc/master/classTH1.html#aa53a024a9e94d5ec91e3ef49e49563da){:target="_blank"}
method. It specifies how the histogram will be graphically rendered.
For detailed information on the drawing options for all histogram classes, refer to
[THistPainter](https://root.cern/doc/master/classTHistPainter.html#HP01a){:target="_blank"}.

_**Examples**_

{% highlight C++ %}
   TH2F h2("h2","Histogram filled with random numbers",40,-4,4,40,-20,20);
   float px, py;
   for (int i = 0; i < 25000; i++) {
      gRandom->Rannor(px,py);
      h2.Fill(px,5*py);
   }
   h2.Draw("LEGO1");
{% endhighlight %}

{% include figure_image
   img="histo-lego.png"
   caption="Histogram drawn with Draw(\"LEGO1\")."
%}

{% highlight C++ %}
   h2.Draw("LEGO1 POL");
{% endhighlight %}

{% include figure_image
   img="histo-lego-pol.png"
   caption="Histogram drawn with Draw(\"LEGO1 POL\")."
%}


{% include ref class="THistPainter" %} implements drawing options for
 [1-D](https://root.cern/doc/master/classTHistPainter.html#HP01b){:target="_blank"},
 [2-D](https://root.cern/doc/master/classTHistPainter.html#HP01c){:target="_blank"}, and
 [3-D](https://root.cern/doc/master/classTHistPainter.html#HP01d){:target="_blank"} histogram classes.
It also implements specific drawing options for
 [THStack](https://root.cern/doc/master/classTHistPainter.html#HP01e){:target="_blank"}.


### Drawing a histogram with error bars

The following example shows how to draw a histogram with error bars.

_**Example**_

{% highlight C++ %}
   TH1F h1("h1","Histogram from a Gaussian",100,-3,3);
   h1.FillRandom("gaus",10000);
   h1.Draw();
{% endhighlight %}

A canvas with the histogram is displayed.

- Click `View`, and then click `Editor`.

- Click on the histogram.

In the `Style` tab, you can select the error bars to displayed for the histogram.

{% include figure_image
   img="histogram-error-select.png"
   caption="Selection of error bars for a histogram."
%}

- Select `Simple`.

The size of the error bars is equal to the square root of the number of events in the histogram.

{% include figure_image
   img="histogram-error-bars.png"
   caption="Error bars for a histogram."
%}

Instead of using the `Editor`, you also can simply draw the error bars by:

{% highlight C++ %}
   h1.Draw("e");
{% endhighlight %}



### Normalizing histograms

You can use [TH1::Scale (Double_t c1 = 1, Option_t* option = “”)](https://root.cern/doc/master/classTH1.html#add929909dcb3745f6a52e9ae0860bfbd){:target="_blank"} in combination with [TH1::Integral (Option_t* option = “”)](https://root.cern/doc/master/classTH1.html#aaf053a4b487c46b9e20c0bf534b34012){:target="_blank"} to normalize histograms.

The following example shows how to normalize a histograms, such as it represents a probability density distribution

_**Example**_

The following histogram is given:

{% highlight C++ %}
   TH1D *h = new TH1D("h","a trial histogram", 100, -1.5, 1.5);
   for (Int_t i = 0; i < 10000; i++) h->Fill(gRandom->Gaus(0, 1));
   h->Draw();
{% endhighlight %}

{% include figure_image
   img="histo-trial.png"
   caption="A trial histogram for normalizing."
%}

To test the normalization methods, you can clone the histogram and call `TH1::Scale` passing a scale parameter the
histogram integral. In addition we use the option `width` to divide also by the bin width to display the probability density in each bin.
If we want to show just the frequency probability of each bin we don't need to use the `width` option.

{% highlight C++ %}
TH1*h1 = (TH1*)(h->Clone("h1"));
h1->Scale(1./h1->Integral(), "width");
h1->Draw();
{% endhighlight %}


After applying the normalization method, redraw the histogram with a [drawing option](#drawing-options):

{% highlight C++ %}
   myHist->Draw("HIST")
{% endhighlight %}


### Fast Fourier transforms for histograms

ROOT provides with {% include ref class="TVirtualFFT" %} an interface class for fast Fourier transforms (FFT) (see → [FFTW]({{ '/manual/math/#fftw' | relative_url }}). With [TH1::FFT()](https://root.cern/doc/master/classTH1.html#a69321e3106e4a26db3fef4d126d835ff){:target="_blank"} you can perform a FFT for a histogram.

