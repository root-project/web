---
title: Geometry
layout: single
sidebar:
  nav: "manual"
toc: true
toc_sticky: true
---

The ROOT geometry package is a tool for building, browsing, navigating and visualizing detector geometries.


> **Tutorials**
>
> Geometry tutorials are available at → [https://root.cern/doc/master/group__tutorial__geom.html](https://root.cern/doc/master/group__tutorial__geom.html)

## Main geometry class

The main geometry class in ROOT is [TGeoManager](https://root.cern/doc/master/group__Geometry__classes.html). It provides the user interface for geometry creation, navigation, state querying, visualization, IO, geometry checking and other utilities.


## Rules for building a valid geometry

The basic bricks for building-up a geometrical model are called "volumes". These represent the un-positioned pieces of the geometry. The relationship between the pieces, this is volumes, is not defined by neighbors, but by "containment". Volumes are put one inside another to create an in-depth hierarchy.

There are the following general rules for building a valid geometry: 
- Volumes needs media and shapes in order to be created.
- Both, container and containee volumes must be created before linking them together, and a relative transformation matrix must be provided.
- All branches must have an upper link point. Otherwise they will not be considered as part of the geometry.
- Visibility or tracking properties of volumes can be provided both at build time or after geometry is closed. 
- Global visualization settings (see [TGeoPainter](https://root.cern/doc/master/classTGeoPainter.html)) should not be provided at build time, otherwise the drawing package will be loaded. 

There are the following specific rules for building a valid geometry:
- Positioned daughters should not extrude their mother or intersect with sisters unless this is specified (see [TGeoVolume::AddNodeOverlap()](https://root.cern/doc/master/classTGeoVolume.html#ab60894a89de3c3722d5906d55d964f44)).
- The top volume (containing the whole geometry tree) must be specified before closing the geometry and must not be positioned - it represents the global reference frame.
- After building the full geometry tree, the geometry must be closed (see [TGeoManager::CloseGeometry()](https://root.cern/doc/master/classTGeoManager.html#a7ea0792e9918521f8c5bd95546c3b708)).
- Voxelization can be redone per volume after this process.

## Creating a simple geometry

- Use the [TGeoManager](https://root.cern/doc/master/group__Geometry__classes.html) class to create an instance of the geometry manager class.

{% highlight C++ %}
   new TGeoManager("world", "A simples geometry.");
{% endhighlight %}

You can access the geometry manager class with the global variable `gGeoManager`.

In the next step, a volume ([TGeoVolume](https://root.cern/doc/master/classTGeoVolume.html)) is created. Any volume needs to have a material ([TGeoMaterial](https://root.cern/doc/master/classTGeoMaterial.html)) and a medium ([TGeoMedium](https://root.cern/doc/master/classTGeoMedium.html)).

{% highlight C++ %}
   TGeoMaterial *mat = new TGeoMaterial("Vacuum",0,0,0);
   TGeoMedium *med = new TGeoMedium("Vacuum",1,mat);
{% endhighlight %}

In the next step the volume gets a shape. Boxes and tubes are the most recommended shapes. Note that the world volume (the volume containing all other volumes) can have shape.

For example, you can make your volume having a box shape. The default units are in centimeters.

{% highlight C++ %}
   TGeoVolume *top=gGeoManager->MakeBox("Top",med,10.,10.,10.);
{% endhighlight %}

Now the volume is set as our world volume. Do this before *before* closing the geometry.

{% highlight C++ %}
   gGeoManager->SetTopVolume(top);
{% endhighlight %}

Now you can close the geometry.

{% highlight C++ %}
   gGeoManager->CloseGeometry();
{% endhighlight %}

With `Draw()` you can draw the simple geometry, for example:

{% highlight C++ %}
   top->SetLineColor(kMagenta);
   gGeoManager->SetTopVisible();
   top->Draw();
{% endhighlight %}

{% include figure_image
   img="simple-geometry.png"
   caption="A simple geometry."
%}

