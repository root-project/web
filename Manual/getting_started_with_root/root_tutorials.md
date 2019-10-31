---
title: ROOT tutorials
layout: single
sidebar:
  nav: "manual"
toc: true
toc_sticky: true
---


A ROOT tutorial is a ROOT macro that demonstrates ROOT specific features.

There are tutorials for the following topics, among others:

  - Containers
  - Data Frames
  - Fast Fourier Transforms
  - Fitting histograms, graphs, etc.
  - FITS files interface
  - FOAM (multi-dimensional general-purpose Monte Carlo event generator)
  - Geometry
  - OpenGL
  - Graphics
  - Graphs
  - GUI
  - Histograms
  - HTTP interface
  - Images (using TImage class)
  - Input/Output
  - Mathematics, matrixes, etc
  - Monte Carlo simulations
  - Multicore (multithreading and multiprocessing)
  - Physics
  - PROFF
  - PyRoot
  - Quadratic programming package
  - R
  - RooFit
  - RooStats (statistics)
  - SQL
  - Trees
  - UNURAN
  - ROOT 7
  - Vectors
  - XML
  - and many more

When you install ROOT, a tutorials directory is created, containing all ROOT tutorials listed on
[https://root.cern/doc/master/group__Tutorials.html](https://root.cern/doc/master/group__Tutorials.html).

> **Note**
>
> You need write permissions to the `tutorials` directory to execute the tutorials.

## Starting with hsimple.C

It is recommended to start with the `hsimple.C` macro first. It creates a `hsimple.root`
file, which is used by many other macros.

To execute the `hsimple.C` macro at the ROOT prompt, type:

```
root[0] .x hsimple.C
```

## Executing demos with demos.C

There are a lot of demos available in the `demos.C` macro.

To execute the `demos.C` macro at the ROOT prompt, type:

```
root[0] .x demos.C
```

A window is displayed. Here you can try out different demos.

## Source code of ROOT tutorials

To check the source code of a ROOT macro, open it in your favorite text editor.

### Example

`graph.C` tutorial from `$ROOTSYS/tutorials/graphs`

```
   void graph() {

      TCanvas *c1 = new TCanvas("c1","A Simple Graph Example",200,10,700,500);
      c1->SetGrid();
      const Int_t n = 20;
      Double_t x[n], y[n];

      for (Int_t i=0;i<n;i++) {
         x[i] = i*0.1;
         y[i] = 10*sin(x[i]+0.2);
         printf(" i %i %f %f \n",i,x[i],y[i]);
      }

      TGraph *gr = new TGraph(n,x,y);
      gr->SetLineColor(2);
      gr->SetLineWidth(4);
      gr->SetMarkerColor(4);
      gr->SetMarkerStyle(21);
      gr->SetTitle("a simple graph");
      gr->GetXaxis()->SetTitle("X title");
      gr->GetYaxis()->SetTitle("Y title\");
      gr->Draw("ACP");

      // TCanvas::Update() draws the frame, after which one can change it
      c1->Update();
      c1->GetFrame()->SetBorderSize(12);
      c1->Modified();
   }
```
