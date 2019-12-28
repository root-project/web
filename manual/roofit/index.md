---
title: RooFit
layout: single
sidebar:
  nav: "manual"
toc: true
toc_sticky: true
---

ROOT provides with the RooFit library a toolkit for modeling the expected distribution of events in a physics analysis.

> **Tutorials**
>
> RooFit tutorials are available at → [https://root.cern/doc/master/group__tutorial__roofit.html](https://root.cern/doc/master/group__tutorial__roofit.html)

> **Topical Manuals**
>
> For RooFit, Topical Manuals are available at [Topical Manuals - RooFit]({{ '/topical/#roofit' | relative_url }}).<br>
> They contain in-depth information about RooFit.


## Mathematical model

The core functionality of RooFit is to enable the modeling of ‘event data’ distributions, where each event is a discrete occurrence in time, and has one or more measured observables associated with it. 
Experiments of this nature result in data sets obeying Poisson (or binomial) statistics.

The natural modeling language for such distributions are probability density functions (probability density function = PDF) `F(x;p)` that describe the probability density of the distribution of the observables `x` in terms of function in parameter `p`.
The defining properties of probability density functions, unit normalization with respect to all observables and positive definiteness, also provide important benefits for the design of a structured modeling language: PDFs are easily added with intuitive interpretation of fraction coefficients. 
They allow construction of higher dimensional PDFs out of lower dimensional building block with an intuitive language to introduce and describe correlations between observables. 
And they also allow the universal implementation of toy Monte Carlo sampling techniques, and are of course an prerequisite for the use of (un-binned) maximum likelihood parameter estimation technique.

## Design

RooFit introduces a granular structure in its mapping of mathematical data models components to C++ objects: rather than aiming at a monolithic entity that describes a data model, each math symbol is presented by a separate object. A feature of this design philosophy is that all RooFit models always consist of multiple objects.

<table width="100%" border="0">
  <tbody>
    <tr>
      <th scope="col">Mathematical concept</th>
      <th scope="col">Roofit class</th>
    </tr>
    <tr>
      <td>Variable</td>
      <td>[RooRealVar](https://root.cern/doc/master/classRooRealVar.html)</td>
    </tr>
    <tr>
      <td>Function</td>
      <td>RooAbsReal</td>
    </tr>
    <tr>
      <td>PDF</td>
      <td>RooAbsPdf</td>
    </tr>
    <tr>
      <td>Integral</td>
      <td>RooRealIntegral</td>
    </tr>
    <tr>
      <td>Space point</td>
      <td>RooArgSet</td>
    </tr>
    <tr>
      <td>List of space points</td>
      <td>RooAbsData</td>
    </tr>
  </tbody>
</table>

