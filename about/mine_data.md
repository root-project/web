---
layout: single
title: Mine Data
sidebar:
  nav: "about"
toc: true
toc_sticky: true
---

Powerful mathematical and statistical tools are provided to operate on your data. The
full power of a C++ application and of parallel processing is available for any kind of
data manipulation. Data can also be generated following any statistical distribution,
making it possible to simulate complex systems.

## Mathematical and Statistical Libraries
You may need to manipulate your data in a number of different ways.  Because ROOT is
a C++ framework, you can use all C and C++ standard functions to perform your operations.
In addition, ROOT provides a number of mathematical and statistical functions, well
integrated into the framework, that allow to perform virtually all possible operation
with a few simple commands.

The basic mathematical functions and algorithms are provided together with more advanced
functions.  Geometrical concepts as points and vectors, and physical entities as
4-vectors are also defined, supporting all their transformation properties.
Coordinates transformations in 2D, 3D and 4D are also defined, to make easier coding
physical simulations.  Finally, linear algebra (i.e. vector and matrix) operations
are supported by all geometrical or physical quantities.

Among the advanced features, one has many special mathematical functions (e.g. gamma,
beta, error and zeta functions, Legendre polynomials, elliptic integrals, hypergeometric,
Bessel and Neumann functions), numerical functions used in statistics (probability
density functions and cumulative distribution functions for several distributions,
methods to compute limits and confidence levels, multi-variate analysis), and algorithms
for numerical integration and differentiation, to solve equations, to find minima in
multi-dimensional spaces (with different methods), to interpolate data points or to
approximate them with a function.

## Simulation
One of the key points in statistical data analysis is the possibility to simulate your
system to test your model.  The basic ingredient of any statistical simulation is the
availability of (pseudo-)random generators, that are methods to get numbers distributed
accordingly to some given distribution.  The starting point for any random distribution
is a uniform random generator whose output is a floating point number between 0 and 1.
ROOT provides, in addition to the linear congruential pseudo-random generator coming
from the C standard library, 3 high-quality algorithms: RANLUX, L'Ecuyer, and MT19937
(the default one, being a good compromise between speed and quality).

In addition, ROOT provides generators following the most common distributions, like the
Gaussian, exponential, Landau, Breit-Wigner continuous distributions and the Poisson and
binomial discrete distributions.  Even more, ROOT provides methods to generate
pseudo-random numbers following any continuous, discrete or empirical (i.e. a histogram)
distribution, by interfacing with the UNU.RAN C library.  This is true both for
1-dimensional and for multi-dimensional distributions.

## Analysis
Once you get data, either real or simulated events, you can start browsing them with the
ROOT browser, that allows you to quickly plot the distribution of your quantities
(simply double click on variables).  A productive way of working is to write a C++ macro,
testing each command step by step with the Cling interpreter - writing a Python program
using ROOT's Python bindings is a very good option too.  When you are satisfied with your
macro, you may consider converting it into a compiled library or stand-alone application,
to achieve the maximum speed.

Incidentally, note that, because the C++ specifications do not fix the size of integer
and floating point variables (they only provide limits), ROOT provides also
machine-independent definitions of different integer and floating point variables with
fixed representation.  Sometimes, such definitions are necessary to deal with your data,
for example when they are the binary output of some device, in which case your variables
must have the same representation as the output words of such device.

Most often, the result of your data analysis is best displayed as histograms.  ROOT
provides a very rich set of functionalities for histogram creation, manipulation and
drawing, and can save high-quality plots in a number of different formats.

## Parallel Processing
When you have more than one computer and the data are statistically independent, as it
is the case with independent repeated measurements or with random poll, the best
theoretical speed-up is possible.  One has simply to split the data among his N machines
and let them process each sample.  If the time required to split the data and to join all
partial results is negligible, then one gets the result in a time close to N times
shorter than what would be required with a single computer.

ROOT provides a way to automatically spread the processing among many nodes, and to
collect and join the results.  This requires some configuration of the farm or group of
computers, and a particular approach for the user application.  However, everything else
proceeds in a transparent way for the user, who simply gets the results much faster,
without needing to explicitly manage the work balancing and the data spreading among all
nodes.