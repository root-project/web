---
title:  "Main Histogram Changes in ROOT 6"
layout: archive
author: Lorenzo Moneta
---

Here is a list of the main changes which have been applied to the histogram classes in
ROOT 6. These changes affect the behaviour of the histogram classes and explain why for
some cases the same code would give a different outcome than in ROOT 5.

#### Rebinning/Extension of axis

The histogram bit TH1::kCanRebin has been removed.

We have introduced a new a bit, TAxis::kCanExtend, which controls the extension of a single
axis.

Helper TAxis functions, TAxis::SetCanExtend and TAxis::CanExtend() can be used to set the
bit and to query its status.

A new functions TH1::SetCanExtend( axis_bit_mask) can be used to control also the extensions.
The axis bit mask can be

TH1::kXaxis, TH1::kYaxis, TH1::kZaxis, TH1::kAllAxes or TH1::kNoAxis.

TAxis::kCanExtendbit is set on automatically for axis where all bins have label (i.e. when
the axis is alphanumeric).

Histograms with labels/Alphanumeric axis

In ROOT 6 we have introduced the notion of an alphanumeric axis. An axis is considered
alphanumeric when all the bins have labels attached to them. In this case the numerical
bin center values do not really make sense and one should fill the histogram with
TH1::Fill(label) instead of TH1::Fill(x), where label is a string and x is a real number.

In the case of an alphanumeric axis, the histogram statistics (Mean, RMS, etc..) is not
computed anymore, and their values are set to zero. The histograms with an alphanumeric
axis will be merged by adding the bin contents for bins with the same labels.

If a user wants to force an axis to be not alphanumeric, although labels are present in
every bin bin, he can call the function

TAxis::SetNoAlphanumeric().

#### Filling with weights different than one

A histogram filled with weights different than 1 automatically stores now the sum of the
square of the weights for each bin. There is no need to call anymore the function
TH1::Sumw2() for weighted histograms.

If one wants to delete the sum of the weight squares arrays (to save memory),
TH1::Sumw2(false) must be called.

Also the function TH1::Fill(x, y) should not be used anymore to set the bin content to y.
One should use instead TH1::SetBinContent( TAxis::FindBin(x), y).

In case one wants to have the old behaviour and to avoid that the sum of the weight
squares is stored in the histogram, even if filled with weights different than one,
then one should set the histogram bit TH1::kIsNotW.

#### TH1::Copy vs TH1::Clone

TH1::Copy is now public. It makes of the histogram content using the copy constructor but
it does not copy the contained objects (e.g. a fitted TF1). TH1::Clone copies everything
but is much slower in particular in multi-thread environments due to internal serialization
points.

In ROOT 6 also the copy constructor of TH1 is not public anymore. One can use instead the
copy constructor of the derived classes.

#### Deprecated TH1 methods in ROOT 6

TH1::Get/SetCellContent, Get/SetCellError have been removed. One should use
Get/SetBinContent and Get/SetBinError, which have exactly the same functionality.

#### Faster internal method to retrieve/update bin content.

TH1 now uses in its member functions (e.g. TH1::Add ) the new protected virtual functions
UpdatedBinContent and RetrieveBinContent to update and retrieve the bin contents. These
functions have the advantage to be faster than the public methods Get/SetBinContent. If a
user has implemented a derived class of TH1, he might need to re-implement these new
protected virtual functions.
