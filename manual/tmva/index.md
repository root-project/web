---
title: TMVA
layout: single
sidebar:
  nav: "manual"
toc: true
toc_sticky: true
---

The Toolkit for Multivariate Data Analysis with ROOT (TMVA) provides a machine learning
environment for the processing and evaluation of multivariate classification, both binary
and multi-class, and regression techniques targeting applications in high-energy physics.
The package includes:

- Neural networks
- Deep networks
- Multilayer perceptron
- Boosted/Bagged decision trees
- Function discriminant analysis (FDA)
- Multidimensional probability density estimation (PDE - range-search approach)
- Multidimensional k-nearest neighbor classifier
- Predictive learning via rule ensembles (RuleFit)
- Projective likelihood estimation (PDE approach)
- Rectangular cut optimisation
- Support Vector Machine (SVM)

{% include tutorials name="TMVA" url="tmva" %}

> **Topical manuals**
>
> For TMVA, topical manuals are available at [Topical Manuals - TMVA]({{ '/topical/#tmva' | relative_url }}).<br>
> They contain in-depth information about TMVA.

## Using TMVA

The ROOT tutorials for TMVA, available in `$ROOTSYS/tutorials/tmva`, provide example jobs for the training phase and the application of the training results in a classification or regression analysis using the TMVA Reader. 

### Training examples

- `TMVAClassification.C`: Provides examples for the training and testing of TMVA classifiers.

- `TMVAMulticlass.C`: Provides an example for the training and testing of a TMVA multi-class classification.

- `TMVARegression.C`: Provides examples for the training and testing of TMVA classifiers.

### Application examples

- `TMVAClassificationApplication.C`:  Provides an example on how to use the trained classifiers within an analysis module.

- `TMVAMulticlassApplication.C`: Provides an example on how to use the trained multi-class classifiers within an analysis module.

- `TMVARegressionApplication.C`: Provides an example on how to use the trained regression MVAs within an analysis module.

_**Example**_

`TMVAClassification.C` uses an academic toy data set for training and testing. It consists of four linearly correlated, Gaussian distributed discriminating input variables, with different sample means for signal and background.

The training job provides a formatted output logging that contains the following information: 
- Linear correlation matrices for the input variables.
- Correlation ratios and mutual information between input variables and regression targets.
- Variable ranking.
- Summaries of the MVA configurations.
- Goodness-of-fit evaluation for PDFs.
- Signal and background (or regression target) correlations between the various MVA methods.
- Decision overlaps.
- Signal efficiencies at benchmark background rejection rates.
- Other performance estimators.

After a successful training, TMVA provides so called "weight"-files (here in the `TMVA.root` ROOT file) that contain all information necessary to recreate the method without retraining.

In addition, a GUI is provided to execute macros for displaying training, test and evaluation results.

{% include figure_image
   img="tmva-gui.png"
   caption="GUI for TMVA."
%}

You can, for example, plot input variable distributions.

{% include figure_image
   img="input-variables.png"
   caption="Example plots for input variable distributions."
%}

