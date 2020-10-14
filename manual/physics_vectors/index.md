---
title: Physics vectors
layout: single
sidebar:
  nav: "manual"
toc: true
toc_sticky: true
---

ROOT provides several packes for physics vectors:

- [Generic 2D, 3D and 4D vectors (GenVectors)](#genvectors)

- [Physics vector package](#physics-vector-package)

<p><a name="genvectors"></a></p>
## Generic 2D, 3D and 4D vectors (GenVectors)

Generic 2D, 3D and 4D vectors (GenVectors) represent vectors and their operations and transformations, such as rotations and Lorentz transformations. The 2D and 3D space are used to describe the geometry vectors and points, while the 4D space-time is used for physics vectors representing relativistic particles.

In contrast to the ROOT physics libraries, the GenVector package provides class templates for modeling the vectors.

Every class, function, manipulator, or other symbol defined in the GenVector package, is in the [ROOT::Math](https://root.cern/doc/master/namespaceROOT_1_1Math.html){:target="_blank"} namespace.

> **Topical Manual**
>
> For the GenVector package, a Topical Manuals is available at [Topical Manuals - Genvectors]({{ '/topical/#genvector' | relative_url }}).<br>
> It contains in-depth information about the GenVector package.

### GenVector classes and vector class templates

The vector class templates are provided to represent vectors (in the physics sense) in 2, 3, and Minkowski space 4 dimensions.

Each vector template class  uses as its only parameter the coordinate system.

Every vector class publishes a typedef for `CoordinateType`, which allows to specify the coordinate system , as well as a typedef for `Scalar` (which will match the `Scalar` type for the coordinate system).

The vector classes are comparable (operator `==` and operator `!=` for the objects or the identical class (including the coordinate system used). Checks for the
equivalence of two vectors in different coordinate systems can be done by converting one to the system of the other.

None of the vector classes have methods to rotate a vector. To rotate a vector, you first have to instantiate the desired rotation object, and then apply it to the vector.

The following GenVector classes and class templates are available:

- [DisplacementVector3D](https://root.cern/doc/master/classROOT_1_1Math_1_1DisplacementVector3D.html){:target="_blank"}: Describing a generic displacement vector in 3 dimensions.

- [PositionVector3D](https://root.cern/doc/master/classROOT_1_1Math_1_1PositionVector3D.html){:target="_blank"}: Describing a generic position vector (point) in 3 dimensions.

- [LorentzVector](https://root.cern/doc/master/classROOT_1_1Math_1_1LorentzVector.html){:target="_blank"}: Describing a generic LorentzVector in the 4D space-time, using the specified coordinate system for the spatial vector part.

- [DisplacementVector2D](https://root.cern/doc/master/classROOT_1_1Math_1_1DisplacementVector2D.html){:target="_blank"}: Describing a generic displacement vector in 2 dimensions.

- [PositionVector2D](https://root.cern/doc/master/classROOT_1_1Math_1_1PositionVector2D.html){:target="_blank"}: Describing a generic position vector (point) in 2 dimensions.

- [Rotation3D](https://root.cern/doc/master/classROOT_1_1Math_1_1Rotation3D.html){:target="_blank"}: Class with the (3D) rotation, represented by a 3x3 orthogonal matrix.

- [AxisAngle](https://root.cern/doc/master/classROOT_1_1Math_1_1AxisAngle.html){:target="_blank"}: Describing a rotation, represented with a direction axis (3D Vector), and an angle of rotation around that axis.

- [EulerAngles](https://root.cern/doc/master/classROOT_1_1Math_1_1EulerAngles.html){:target="_blank"}: Describing a rotation as three angles (Euler angles).

- [Quaternion](https://root.cern/doc/master/classROOT_1_1Math_1_1Quaternion.html){:target="_blank"}: Rotation class with the (3D) rotation represented by a unit quaternion (u, i, j, k).

- [RotationX](https://root.cern/doc/master/classROOT_1_1Math_1_1RotationX.html){:target="_blank"}: Rotation class representing a 3D rotation about the X axis by the angle of rotation.

- [RotationY](https://root.cern/doc/master/classROOT_1_1Math_1_1RotationY.html){:target="_blank"}: Rotation class representing a 3D rotation about the Y axis by the angle of rotation.

- [RotationZ](https://root.cern/doc/master/classROOT_1_1Math_1_1RotationZ.html){:target="_blank"}: Rotation class representing a 3D rotation about the Z axis by the angle of rotation.

- [LorentzRotation](https://root.cern/doc/master/classROOT_1_1Math_1_1LorentzRotation.html){:target="_blank"}: Lorentz transformation class with the (4D) transformation represented by a 4x4 orthosymplectic matrix.

- [Boost](https://root.cern/doc/master/classROOT_1_1Math_1_1Boost.html){:target="_blank"}: Lorentz boost class with the (4D) transformation represented internally by a 4x4 orthosymplectic matrix.

- [BoostX](https://root.cern/doc/master/classROOT_1_1Math_1_1BoostX.html){:target="_blank"}: Representing a Lorentz Boost along the X axis, by beta.

- [BoostY](https://root.cern/doc/master/classROOT_1_1Math_1_1BoostY.html){:target="_blank"}: Class representing a Lorentz Boost along the Y axis, by beta.

- [BoostZ](https://root.cern/doc/master/classROOT_1_1Math_1_1BoostZ.html){:target="_blank"}: Class representing a Lorentz Boost along the Z axis, by beta.

### Coordinate systems

The vector classes are based on a generic type of coordinate system, expressed as a template parameter of the class. The following classes exist to describe the various coordinates systems:

**2D coordinate system**

- [ROOT::Math::Cartesian2D](https://root.cern/doc/master/classROOT_1_1Math_1_1Cartesian2D.html){:target="_blank"}: 2D cartesian coordinate system (`x`, `y` coordinates).

- [ROOT::Math::Polar2D](https://root.cern/doc/master/classROOT_1_1Math_1_1Polar2D.html){:target="_blank"}: A polar 2D coordinate system based on `r` and `phi`. `phi` is restricted to the range (-PI,PI).

**3D coordinate systems**

- [ROOT::Math::Cartesian3D](https://root.cern/doc/master/classROOT_1_1Math_1_1Cartesian3D.html){:target="_blank"}: 3D cartesian coordinate system (`x`, `y`, `z` coordinates).

- [ROOT::Math::Polar3D](https://root.cern/doc/master/classROOT_1_1Math_1_1Polar3D.html){:target="_blank"}: 3D polar coordinate system (`r`, `theta`, `phi` coordinates).

- [ROOT::Math::Cylindrical3D](https://root.cern/doc/master/classROOT_1_1Math_1_1Cylindrical3D.html){:target="_blank"}: Cylindrical coordinate system based on `rho`, `z` and `phi`.

- [ROOT::Math::CylindricalEta3D6](https://root.cern/doc/master/classROOT_1_1Math_1_1CylindricalEta3D.html){:target="_blank"}: Cylindrical coordinate system based on `eta` (pseudorapidity) instead of `z`.

**4D coordinate systems**

- [ROOT::Math::PxPyPzE4D](https://root.cern/doc/master/classROOT_1_1Math_1_1PxPyPzE4D.html){:target="_blank"}: 4D cartesian coordinate system (`x`, `y`, `z`, `t` coordinates) or momentum-energy vectors stored as (`Px`, `Py`, `Pz`, `E`).

- [ROOT::Math::PxPyPzM4D](https://root.cern/doc/master/classROOT_1_1Math_1_1PxPyPzM4D.html){:target="_blank"}: 4D coordinate system or momentum-energy vectors stored as (`Px`, `Py`, `Pz`, `M`).

- [ROOT::Math::PtEtaPhiE4D](https://root.cern/doc/master/classROOT_1_1Math_1_1PtEtaPhiE4D.html){:target="_blank"}: 4D cylindrical coordinate system using `Pt`, `Phi`, `Eta` and `E` (or `rho`, `phi`, `eta`, `T`). The metric used is (-,-,-,+).

- [ROOT::Math::PtEtaPhiM4D](https://root.cern/doc/master/classROOT_1_1Math_1_1PtEtaPhiM4D.html){:target="_blank"}: 4D cylindrical coordinate system using `Pt`, `Phi`, `Eta` and `M` (mass). The metric used is (-,-,-,+).

### Transformations

The transformations are modeled using simple, non-template classes, using `double` as the scalar type to avoid too large numerical errors.<br/>
The transformations are grouped as follows:
- rotations (3 dimensions)
- Lorentz transformations
- Poincare transformations (combinations of translation and rotation)

Each group has several members, which may model physically equivalent transformations but with different internal representations. Transformation classes can
operate on all type of vectors by using the `()` operator or the `*` operator. You can combine transformations with the `*` operator.

The available transformations are:

- 3D rotation classes:
	- Rotation described by a 3x3 matrix ([ROOT::Math::Rotation3D](https://root.cern/doc/master/classROOT_1_1Math_1_1Rotation3D.html){:target="_blank"}).
	- Rotation described by Euler angles ([ROOT::Math::EulerAngles](https://root.cern/doc/master/classROOT_1_1Math_1_1EulerAngles.html){:target="_blank"}).
	- Rotation described by a direction axis and an angle ([ROOT::Math::AxisAngle](https://root.cern/doc/master/classROOT_1_1Math_1_1AxisAngle.html){:target="_blank"}).
	- Rotation described by a quaternion ([ROOT::Math::Quaternion](https://root.cern/doc/master/classROOT_1_1Math_1_1Quaternion.html){:target="_blank"}).
	- Optimized rotation around x ([ROOT::Math::RotationX](https://root.cern/doc/master/classROOT_1_1Math_1_1RotationX.html){:target="_blank"}), y ([ROOT::Math::RotationY](https://root.cern/doc/master/classROOT_1_1Math_1_1RotationY.html){:target="_blank"}) and z ([ROOT::Math::RotationZ](https://root.cern/doc/master/classROOT_1_1Math_1_1RotationZ.html){:target="_blank"}) and described by just one angle.
- 3D transformation: the transformations are defined as a composition between a rotation and a translation using the class [ROOT::Math::Transform3D](https://root.cern/doc/master/classROOT_1_1Math_1_1Impl_1_1Transform3D.html){:target="_blank"}. Note that transformations act differently on vectors
and points. Vectors only rotate. When applying a transformation (rotation and translation) on a
vector, only the rotation operates while the translation has no effect. The [ROOT::Math::Transform3D](https://root.cern/doc/master/classROOT_1_1Math_1_1Impl_1_1Transform3D.html){:target="_blank"} class interface is similar
to the one used in the [CLHEP Geometry package](https://proj-clhep.web.cern.ch/proj-clhep/){:target="_blank"}.
- Lorentz rotation:
	- Generic Lorentz rotation described by a 4x4 matrix containing a 3D rotation part and a boost part ([ROOT::Math::LorentzRotation](https://root.cern/doc/master/classROOT_1_1Math_1_1LorentzRotation.html){:target="_blank"}).
	- A pure boost in an arbitrary direction and described by a 4x4 symmetric matrix or 10 numbers ([ROOT::Math::Boost](https://root.cern/doc/master/classROOT_1_1Math_1_1Boost.html){:target="_blank"}).
	- Boost along the axis: [x(ROOT::Math::BoostX)](https://root.cern/doc/master/classROOT_1_1Math_1_1BoostX.html){:target="_blank"}), [y(ROOT::Math::BoostY)](https://root.cern/doc/master/classROOT_1_1Math_1_1BoostY.html){:target="_blank"}) and [z(ROOT::Math::BoostZ)](https://root.cern/doc/master/classROOT_1_1Math_1_1BoostZ.html){:target="_blank"}).

### Example: 3D vector classes

The following typedef-declarations are available for the different instantiations of [ROOT::Math::DisplacementVector3D](https://root.cern/doc/master/classROOT_1_1Math_1_1DisplacementVector3D.html){:target="_blank"}:

- [ROOT::Math::XYZVector](https://root.cern/doc/master/namespaceROOT_1_1Math.html#a91b80e54b44a65c90d60e5c8ff128746){:target="_blank"}: Vector based on x, y, z coordinates (Cartesian) in double precision.
- [ROOT::Math::XYZVectorF](https://root.cern/doc/master/namespaceROOT_1_1Math.html#a767e8c52a85dc9538fe00603961eab98){:target="_blank"}: Vector based on x, y, z coordinates (Cartesian) in float precision.
- [ROOT::Math::Polar3DVector](https://root.cern/doc/master/namespaceROOT_1_1Math.html#aa455061348e886c280b314f0ce71acc8){:target="_blank"}: Vector based on r, theta, phi coordinates (polar) in double precision.
- [ROOT::Math::Polar3DVectorF](https://root.cern/doc/master/namespaceROOT_1_1Math.html#a99ed124b4fcfe3b964f953f4fbd5d6de){:target="_blank"}: Vector based on r, theta, phi coordinates (polar) in float precision.
- [ROOT::Math::RhoZPhiVector](https://root.cern/doc/master/namespaceROOT_1_1Math.html#a262d84bbc0d0661ced0bafc1e6cc26c0){:target="_blank"}: Vector based on rho, z, phi coordinates (cylindrical) in double precision.
- [ROOT::Math::RhoZPhiVectorF](https://root.cern/doc/master/namespaceROOT_1_1Math.html#aa3c9fd04f93aa30367f6abf941515837){:target="_blank"}: Vector based on rho, z, phi coordinates (cylindrical) in float precision.
- [ROOT::Math::RhoEtaPhiVector](https://root.cern/doc/master/namespaceROOT_1_1Math.html#ab4c60490477e8c23bc55c7024fa367f1){:target="_blank"}: Vector based on rho, eta, phi coordinates (cylindrical using eta instead of z) in double precision.
- [ROOT::Math::RhoEtaPhiVectorF](https://root.cern/doc/master/namespaceROOT_1_1Math.html#acabaf2b8ab123be3aa7f25a7969f7b89){:target="_blank"}: Vector based on rho, eta, phi coordinates (cylindrical using eta instead of z) in float precision.

**Constructors and assignment**

The following declarations are available:

{% highlight C++ %}
   XYZVector        v1;            // An empty vector (x=0, y=0, z=0).
   XYZVector        v2(1,2,3);     // Vector with x=1, y=2, z=3.
   Polar3DVector    v3(1,PI/2,PI); // Vector with r=1, theta=PI/2, phi=PI.
   RhoEtaPHiVector  v4(1,2, PI);   // Vector with rho=1, eta=2, phi=PI.
{% endhighlight %}

Note that each vector type is constructed by passing its coordinate representation. So a `XYZVector(1,2,3)` is different
from a `Polar3DVector(1,2,3)`. <br>
In addition, you can construct the vector classes by any vector, which implements
the accessors `x()`, `y()` and `z()`. This can be another 3D vector, based on a different coordinate system type. It can be
even any vector of a different package, like the CLHEP `HepThreeVector` that implements the required signature.

_**Example**_

{% highlight C++ %}
   XYZVector   v1(1,2,3);
   RhoEtaPhiVector   r2(v1);
   CLHEP::HepThreeVector   q(1,2,3);
   XYZVector   v3(q);
{% endhighlight %}

**Coordinate accessors**

All coordinate accessors are available through [ROOT::Math::DisplacementVector3D](https://root.cern/doc/master/classROOT_1_1Math_1_1DisplacementVector3D.html){:target="_blank"}:

_**Examples**_

{% highlight C++ %}
// Returns the cartesian components for the cartesian vector v1.
   v1.X(); v1.Y(); v1.Z();

// Returns the cylindrical components for the cartesian vector v1.
   v1.Rho(); v1.Eta(); v1.Phi();

// Returns the cartesian components for the cylindrical vector r2.
   r2.X(); r2.Y(); r2.Z()
{% endhighlight %}

In addition, you can retrieve all the three vector coordinates with the `GetCoordinates()` method:

{% highlight C++ %}
   double d[3];
// Fill the d array with the (x,y,z) components of v1.
v1.GetCoordinates(d);

// Fill the d array with the (r,eta,phi) components of r2.
   r2.GetCoordinates(d);
   std::vector vc(3);

// Fill std::vector with the (x,y,z) components of v1.
   v1.GetCoordinates(vc.begin(),vc.end());
{% endhighlight %}

**Setter methods**

You can set the three coordinates via:

{% highlight C++ %}
   v1.SetCoordinates(c1,c2,c3);  // (x,y,z) for a XYZVector.
   r2.SetCoordinates(c1,c2,c3);  // r,theta,phi for a Polar3DVector.
   r2.SetXYZ(x,y,z);             // 3 Cartesian components for Polar3DVector.
{% endhighlight %}

Single coordinate setter methods are available for the basic vector coordinates, like `SetX()` for a [ROOT::Math::XYZVector](https://root.cern/doc/master/namespaceROOT_1_1Math.html#a91b80e54b44a65c90d60e5c8ff128746){:target="_blank"} or `SetR()` for a polar vector. Therefore, applying a `SetX()?` on a polar vector does not compile.

{% highlight C++ %}
   XYZVector v1;
   v1.SetX(1);     // Correct setting x for a Cartesian vector.

   Polar3DVector v2;
   v2.SetX(1);     // ERROR: cannot set X for a polar vector. The method does not compile.

   v2.SetR(1);     // Correct setting r for a polar vector.
{% endhighlight %}

There are also setter methods from C arrays or iterators.

_**Examples**_

{% highlight C++ %}
   double d[3] = {1.,2.,3.};
   XYZVector v;

// Set the (x,y,z) components of v using values from d.
   v.SetCoordinates(d);

// std::vector using the iterator:
   std::vector w(3);
// Set the (x,y,z) components of v using values from w.
   v.SetCoordinates(w.begin(),w.end());
{% endhighlight %}

**Arithmetic operations**

The following operations are possible between vector classes, even for different coordinate system types:<br/>
(v1, v2 are any type of [ROOT::Math::DisplacementVector3D](https://root.cern/doc/master/classROOT_1_1Math_1_1DisplacementVector3D.html){:target="_blank"}, v3 is the same type of v1; a is a scalar value)

{% highlight C++ %}
   v1 += v2;
   v1 -= v2;
   v1 = - v2;
   v1 *= a;
   v1 /= a;
   v2 = a * v1;
   v2 = v1 / a;
   v2 = v1 * a;
   v3 = v1 + v2;
   v3 = v1 - v2;
{% endhighlight %}

**Comparison**

You can compare v1 and v2 of the same type (same coordinate system and same scalar type):

{% highlight C++ %}
   v1 == v2;
   v1 != v2;
{% endhighlight %}

**Dot and cross product**
Use the `Dot()` method for the dot product and the `Cross()` method for the cross product, with any vector `(q)` implementing `x()`, `y()` and `z()`.

_**Examples**_

{% highlight C++ %}
   XYZVector v1(x,y,z);
   double s = v1.Dot(q);
   XYZVector v2 = v1.Cross(q);
{% endhighlight %}

> **Note**
>
> The `*` operator for the multiplication between two vectors is not supported, because it is ambiguous.

**Other methods**

Returning a unit vector.

{% highlight C++ %}
   XYZVector u = v1.Unit();  // Returns the unit vector parallel to v1.
{% endhighlight %}

### Example: 3D point classes

The following typedef-declarations are available for the different instantiations of [ROOT::Math::PositionVector3D](https://root.cern/doc/master/classROOT_1_1Math_1_1PositionVector3D.html){:target="_blank"}:

- [ROOT::Math::XYZPoint](https://root.cern/doc/master/namespaceROOT_1_1Math.html#a842a2d01e05d33873e8deea6ea2a36d8){:target="_blank"}: Point based on x, y, z coordinates (Cartesian) in double precision.
- [ROOT::Math::XYZPointF](https://root.cern/doc/master/namespaceROOT_1_1Math.html#a2fcc7d6a499a368ba747430d744daa57){:target="_blank"}: Point based on x, y, z coordinates (Cartesian) in float precision.
- [ROOT::Math::Polar3DPoint](https://root.cern/doc/master/namespaceROOT_1_1Math.html#ae633cb5b9999024109c6b0dc7fb42064){:target="_blank"}: Point based on r, theta, phi coordinates (polar) in double precision.
- [ROOT::Math::Polar3DPointF](https://root.cern/doc/master/namespaceROOT_1_1Math.html#a03ec5a063755ab54115dbc195619fdb3){:target="_blank"}: Point based on r, theta, phi coordinates (polar) in float precision.
- [ROOT::Math::RhoZPhiPoint](https://root.cern/doc/master/namespaceROOT_1_1Math.html#a014ad44a29736d6a179bce6529a2a827){:target="_blank"}: Point based on rho, z, phi coordinates (cylindrical using z) in double precision.
- [ROOT::Math::RhoZPhiPointF](https://root.cern/doc/master/namespaceROOT_1_1Math.html#a07fc49fc7cc2664595b64c71b29de610){:target="_blank"}: Point based on rho, z, phi coordinates (cylindrical using z) in float precision.
- [ROOT::Math::RhoEtaPhiPoint](https://root.cern/doc/master/namespaceROOT_1_1Math.html#a8030d41d2a6dcdead24eb63c6b0667ab){:target="_blank"}: Point based on rho, eta, phi coordinates (cylindrical using eta instead of z) in double precision.
- [ROOT::Math::RhoEtaPhiPointF](https://root.cern/doc/master/namespaceROOT_1_1Math.html#a3e0a6985736faa58a8e2e2dab29cd9d8){:target="_blank"}: Point based on rho, eta, phi coordinates (cylindrical using eta instead of z) in float precision.

**Constructors and assignment**

The following declarations are available:

{% highlight C++ %}
   XYZPoint p1;         // An empty vector (x=0, y=0, z=0).
   XYZPoint p2(1,2,3);
{% endhighlight %}

Note that each point type is constructed by passing its coordinate representation. So a `XYZPoint(1,2,3)` is different
from a `Polar3DPoint(1,2,3)`.<br/>
In addition, you can construct the point classes by any vector, which implements the accessors `x()`, `y()` and `z()`. This can be another 3D point based on a different coordinate system type or even any
vector of a different package, like the CLHEP `HepThreePoint` that implements the required signatures.

_**Examples**_

{% highlight C++ %}
   XYZPoint               p1(1,2,3);
   RhoEtaPHiPoint         r2(v1);
   CLHEP::HepThreePoint   q(1,2,3);
   XYZPoint               p3(q);
{% endhighlight %}

**Coordinate accessors and setter methods**

The point classes use the same getter and setter methods as the vector classes, see → Example: 3D vector classes.

**Point-vector operations**

The following operations are possible between points and vector classes:
<br>(p1, p2 and p3 are instantiations of [ROOT::Math::PositionVector3D](https://root.cern/doc/master/classROOT_1_1Math_1_1PositionVector3D.html){:target="_blank"} objects with p1 and p3 of the same type; v1 and v2 are [ROOT::Math::DisplacementVector3D](https://root.cern/doc/master/classROOT_1_1Math_1_1DisplacementVector3D.html){:target="_blank"} objects).

{% highlight C++ %}
   p1 += v1;
   p1 -= v1;
   p3 = p1 + v1;    // p1 and p3 are of the same type.
   p3 = v1 + p1;    // p3 is based on the same coordinate system as v1.
   p3 = p1 - v1;
   p3 = v1 - p1;
   v2 = p1 - p2;    // Difference between points returns a vector v2
                    // based on the same coordinate system as p1.
{% endhighlight %}

> **Note**
>
> The addition between two points is NOT possible and the difference between points returns a vector.

**Other operations**

As for vectors, the following operations are allowed for points:

- comparison of points,
- scaling and division of points with a scalar,
- dot and cross product with any type of vector.

### Example: LorentzVector classes

The following typedef-declarations are available for the different instantiations of [ROOT::Math::LorentzVector](https://root.cern/doc/master/classROOT_1_1Math_1_1LorentzVector.html){:target="_blank"}:

- [ROOT::Math::XYZTVector](https://root.cern/doc/master/namespaceROOT_1_1Math.html#ae13b19f249ad4b10e895df591fc8ae8d){:target="_blank"}: Vector based on x, y, z, t coordinates (Cartesian) in double precision.
- [ROOT::Math::XYZTVectorF](https://root.cern/doc/master/namespaceROOT_1_1Math.html#a7a7702034ab0a4e722810fc0bccb5578){:target="_blank"}: Vector based on x, y, z, t coordinates (Cartesian) in float precision.
- [ROOT::Math::PtEtaPhiEVector](https://root.cern/doc/master/namespaceROOT_1_1Math.html#a39def91bfd150148b1534d8ae665b145){:target="_blank"}: Vector based on pt(rho), eta, phi and E(t) coordinates in double precision.
- [ROOT::Math::PtEtaPhiMVector](https://root.cern/doc/master/namespaceROOT_1_1Math.html#a6cea5921731c7ac99dea921fb188df31){:target="_blank"}: Vector based on pt(rho), eta, phi and M(t) coordinates in double precision.
- [ROOT::Math::PxPyPzMVector](https://root.cern/doc/master/namespaceROOT_1_1Math.html#ab656170160f8b486f4bf5bdaac82bdb4){:target="_blank"}: Vector based on px, py, pz and M(mass) coordinates in double precision.

The metric used for all [ROOT::Math::LorentzVector](https://root.cern/doc/master/classROOT_1_1Math_1_1LorentzVector.html){:target="_blank"} classes is (-,-,-,+).

**Constructors and assignment**

The following declarations are available:

{% highlight C++ %}
// Create an empty vector (x=0, y=0, z=0, t=0).
   XYZTVector v1;

// Vector with x=1, y=2, z=3, t=4.
   XYZTVector v2(1,2,3,4);

// Vector with pt=1, eta=2, phi=PI, E=5.
   PtEtaPhiEVector v3(1,2,PI,5);
{% endhighlight %}

Note that each type of vector is constructed by passing its coordinate representation. So a `XYZTVector(1,2,3,4)` is
different from a `PtEtaPhiEVector(1,2,3,4)`.<br/>
In addition, you can construct the vector classes by any vector, which implements the accessors `x()`, `y()`, `z()` and `t()`.
This can be another [ROOT::Math::LorentzVector](https://root.cern/doc/master/classROOT_1_1Math_1_1LorentzVector.html){:target="_blank"} based on a different coordinate system or any vector of a different
package, like the CLHEP `HepLorentzVector` that implements the required signature.

_**Examples**_

{% highlight C++ %}
   XYZTVector v1(1,2,3,4);
   PtEtaPhiEVector v2(v1);
   CLHEP::HepLorentzVector q(1,2,3,4);
   XYZTVector v3(q);
{% endhighlight %}

**Coordinate accessors**

The coordinate accessors are available through the interface of [ROOT::Math::LorentzVector](https://root.cern/doc/master/classROOT_1_1Math_1_1LorentzVector.html){:target="_blank"}.

_**Examples**_

{% highlight C++ %}
// Returns the Cartesian components for the cartesian vector v1.
   v1.X(); v1.X(); v1.Z(); v1.T();

// Returns the Cartesian components for the cylindrical vector v2.
   v2.Px(); v2.Py(); v2.Pz(); v2.E();

// Returns other components for the cartesian vector v1.
   v1.Pt(); v1.Eta(); v1.Phi(); v1.M()
{% endhighlight %}

In addition, you can retrieve all four vector coordinates with the `GetCoordinates()` method:

{% highlight C++ %}
   double d[4];

// Fill the d array with (x,y,z,t) components of v1.
   v1.GetCoordinates(d);

// Fill the d array with (pt,eta,phi,e) components of v2.
   v2.GetCoordinates(d);
   std::vector w(4);

// Fill std::vector with (x,y,z,t).
   v1.GetCoordinates(w.begin(),w.end());
// Components of v1.
{% endhighlight %}

**Setter methods**

You can set the four coordinates via:

{% highlight C++ %}
// Sets the (x,y,z,t) for a XYZTVector.
   v1.SetCoordinates(c1,c2,c3,c4);

// Sets pt,eta,phi,e for a PtEtaPhiEVector.
   v2.SetCoordinates(c1,c2,c3,c4);

// Sets Cartesian components for PtEtaPhiEVector.
   v2.SetXYZ(x,y,z,t);
{% endhighlight %}


Single coordinate setter methods are available for the basic vector coordinates, like `SetX()` for a `XYZTVector` or `SetPt()`
for a `PtEtaPhiEVector`. Therefore, applying a `SetX()` on a non-Cartesian vector does not compile.

{% highlight C++ %}
   XYZTVector v1;
   v1.SetX(1);          // Correct setting x for a Cartesian vector.

   PtEtaPhiEVector v2;
   v2.SetX(1);          // ERROR: cannot set X for a non-Cartesian vector. Method does not compile.

   v2.SetR(1)           // Correct setting Pt for a PtEtaPhiEVector vector.
{% endhighlight %}

There are also setter methods from C arrays or iterators.

{% highlight C++ %}
   double d[4] = {1.,2.,3.,4.};
   XYZTVector v;

// Sets the  (x,y,z,t) components of v using values from d.
   v.SetCoordinates(d);

// std::vector using the iterator:
   std::vector w(4);

// Sets the (x,y,z,t) components of v using values from w.
   v.SetCoordinates(w.begin(),w.end());
{% endhighlight %}

**Arithmetic operations**

The following operations are possible between Lorentz vectors classes, even for different coordinate system types:<br/>
(v and w are two Lorentz vectors of the same type, q is a generic Lorentz vector implementing `x()`, `y()`, `z()` and `t()`, and a is a generic scalar type: double, float, int, etc.) .

{% highlight C++ %}
   v += q;
   v -= q;
   v = -q;
   v *= a;
   v /= a;
   w = v + q;
   w = v - q;
   w = v * a;
   w = a * v;
   w = v / a;
{% endhighlight %}

**Comparison**

The following comparisons are possible:

{% highlight C++ %}
   v == w;
   v != w;
{% endhighlight %}

**Other methods**

There are several other methods available:

{% highlight C++ %}
   a = v.Dot(q);                 // Dot product in metric(+,+,+,-) of 2 LorentzVectors.
   XYZVector s = v.Vect()        // Returns the spatial components (x,y,z).
   v.Beta();                     // Returns beta and gamma value (vector must
   v.Gamma()                     // be time-like otherwise result is meaningless).
   XYZVector b = v.BoostToCM();  // Returns boost vector which will bring
                                 // the vector in its mas frame (P=0).
{% endhighlight %}

### Example: Vector transformations

The transformation classes are grouped as follows:

- 3D rotations,
- Lorentz transformations,
- Poincaré transformations, which are translation/rotation combinations.

Each group has several members which may model physically equivalent transformations but with different internal representations. All the classes are non-template and use double
precision as the scalar type.

3D rotations:

- [ROOT::Math::Rotation3D](https://root.cern/doc/master/classROOT_1_1Math_1_1Rotation3D.html){:target="_blank"}: Rotation described by a 3x3 matrix of doubles.
- [ROOT::Math::EulerAngles](https://root.cern/doc/master/classROOT_1_1Math_1_1EulerAngles.html){:target="_blank"}: Rotation described by the three Euler angles (phi, theta and psi) following the GoldStein definition.
- [ROOT::Math::RotationZYX](https://root.cern/doc/master/classROOT_1_1Math_1_1RotationZYX.html){:target="_blank"}: Rotation described by three angles defining a rotation first along the Z axis, then along the rotated Y' axis and then along the rotated X'' axis.
- [ROOT::Math::AxisAngle](https://root.cern/doc/master/classROOT_1_1Math_1_1AxisAngle.html){:target="_blank"}: Rotation described by a vector (axis) and an angle.
- [ROOT::Math::Quaternion](https://root.cern/doc/master/classROOT_1_1Math_1_1Quaternion.html){:target="_blank"}: Rotation described by a quaternion (4 numbers).
- [ROOT::Math::RotationX](https://root.cern/doc/master/classROOT_1_1Math_1_1RotationX.html){:target="_blank"}: Specialized rotation along the X axis.
- [ROOT::Math::RotationY](https://root.cern/doc/master/classROOT_1_1Math_1_1RotationY.html){:target="_blank"}: Specialized rotation along the Y axis.
- [ROOT::Math::RotationZ](https://root.cern/doc/master/classROOT_1_1Math_1_1RotationZ.html){:target="_blank"}: Specialized rotation along the Z axis.

Lorentz rotations and boosts:

- [ROOT::Math::LorentzRotation](https://root.cern/doc/master/classROOT_1_1Math_1_1LorentzRotation.html){:target="_blank"}: 4D rotation (3D rotation plus a boost) described by a 4x4 matrix.
- [ROOT::Math::Boost](https://root.cern/doc/master/classROOT_1_1Math_1_1Boost.html){:target="_blank"}: A Lorentz boost in an arbitrary direction and described by a 4x4 symmetric matrix (10 numbers).
- [ROOT::Math::BoostX](https://root.cern/doc/master/classROOT_1_1Math_1_1BoostX.html){:target="_blank"}: A boost in the X axis direction.
- [ROOT::Math::BoostY](https://root.cern/doc/master/classROOT_1_1Math_1_1BoostY.html){:target="_blank"}: A boost in the Y axis direction.
- [ROOT::Math::BoostZ](https://root.cern/doc/master/classROOT_1_1Math_1_1BoostZ.html){:target="_blank"}: A boost in the Z axis direction.

3D transformations (rotations and translations):

- [ROOT::Math::Transform3D](https://root.cern/doc/master/classROOT_1_1Math_1_1Impl_1_1Transform3D.html){:target="_blank"}: Rotations and then translations described by a 3x4 matrix (12 double numbers).
- [ROOT::Math::Translation3D](https://root.cern/doc/master/classROOT_1_1Math_1_1Impl_1_1Translation3D.html){:target="_blank"}: Only translations described by a 3D vector.

**Constructors**

All rotations and transformations can be constructed by default, giving the identity transformation. All rotations can be constructed
by taking a number of scalar arguments, which match with the number and the order of components.

_**Examples**_

{% highlight C++ %}
   Rotation3D rI;                   // A summing rotation (Identity matrix).
   RotationX rX(PI);                // A RotationX with an angle PI.
   EulerAngles rE(phi,theta,psi);   // An Euler rotation with phi, theta, and psi angles.
   XYZVector u(ux,uy,uz);
   AxisAngle rA(u,delta);           // A rotation based on direction u, angle delta.
{% endhighlight %}

In addition, all rotations and transformations, other than the axial rotations, and transformations can be constructed
from (`begin`, `end`) iterators or from pointers that behave like iterators.

_**Examples**_

{% highlight C++ %}
   double data[9];

// Create a rotation from a rotation matrix.
   Rotation3D r(data,data+9);
   std::vector w(12);

// Create Transform3D from std::vector content.
   Transform3D t(w.begin(),w.end());
{% endhighlight %}

All rotations, except the axial rotations, can be constructed and assigned from any other type of rotation (including the
axial):

_**Examples**_

{% highlight C++ %}
// Create a rotation 3D from a rotation along X axis of angle PI.
   Rotation3D r(ROOT::Math::RotationX(PI));

// Construct an Euler rotation from A Rotation3D.
   EulerAngles r2(r);

// Assign an Axis rotation from an Euler Rotation.
   AxisAngle r3; r3 = r2;
{% endhighlight %}

[ROOT::Math::Transform3D](https://root.cern/doc/master/classROOT_1_1Math_1_1Impl_1_1Transform3D.html){:target="_blank"} (rotation and translation) can be constructed from a rotation and a translation vector:

_**Examples**_

{% highlight C++ %}
   Rotation3D r;
   XYZVector v;
   Transform3D t1(r,v);  // Construct from rotation and the translation.
   Transform3D t2(v,r);  // Construct inverse from first translation and then the rotation.
   Transform3D t3(r);    // Construct from only a rotation (no translation).
   Transform3D t4(v);    // Construct from only translation.
{% endhighlight %}

**Operations**

You can apply all transformations to vectors and points by using the  operator  or the `()` operator.

_**Examples**_

{% highlight C++ %}
   XYZVector v1(...);
   Rotation3D r(...);
   XYZVector v2 = r*v1;  // Rotate vector v1 using r.
   v2 = r(v1);           // Equivalent.
{% endhighlight %}

You can combine transformations using the `*` operator . You can combine rotation, translation, and `Transform3D` classes with the `*` operator . The result of a combination of a rotation and a translation will be a Transform3D class.

> **Note **
>
> Rotations are not commutative, so the order is important.

_**Example**_

{% highlight C++ %}
   Rotation3D r1(...);
   Rotation3D r2(...);
   Rotation3D r3 = r2*r1;   // A combined rotation r3 by applying first r1 then r2.
{% endhighlight %}

You can combine rotations of different types, like `Rotation3D` with any other type of rotations. The product of two
different axial rotations returns a `Rotation3D`.

_**Example**_

{% highlight C++ %}
   RotationX rx(1.);
   RotationY ry(2.);
   Rotation3D r = ry * rx; //rotation along X and then Y axis
{% endhighlight %}

It is also possible to invert all the transformation or return their inverse.

_**Example**_

{% highlight C++ %}
   Rotation3D r1(...);
   r1.Invert();                  // Invert the rotation modifying its content.
   Rotation3D r2 =r1.Inverse();  // Return the inverse in a new rotation class.
{% endhighlight %}

All the presented operations can also be applied to all transformation classes.

**SetGetComponents and GetComponents methods**

You can use the `SetGetComponents()` and `SetComponents()` methods to retrieve all the scalar values on which the transformation is based.

_**Examples**_

{% highlight C++ %}
   RotationX rx;
   rx.SetComponents(1.);      // Set angle of the X rotation.
   double d[9] = {........};
   Rotation3D r;
   r.SetComponents(d,d+9);    // Set 9 components of 3D rotation.
   double d[16];
   LorentzRotation lr;
   lr.GetComponents(d,d+16); // Get 16 components of a LorentzRotation.
   TMatrixD(3,4) m;
   Transform3D t;
   t.GetComponents(m);        // Fill 3x4 matrix with components of t.
{% endhighlight %}

You can use the `GetComponents()` and `SetComponents()` methods with a signature based on iterators or by using any foreign
matrix, which implements the operator(i,j) or a different signature depending on the transformation.

### Example: Connection to linear algebra classes

You can use the vector and rotation classes together with the linear algebra classes and to set and get the
contents of any 3D or 4D vector from a linear algebra vector class, which implements an iterator or something which
behaves like an iterator.

For example, a pointer to a C array (`double*`) behaves like an iterator. It is then assumed that the coordinates, like `(x,y,z)` are stored contiguously.

{% highlight C++ %}
   TVectorD r2(N);   // ROOT linear algebra vector containing many vectors.
   XYZVector v2;     // Construct vector from x=r[INDEX], y=r[INDEX+1], z=r[INDEX+2].
   v2.SetCoordinates(&r2[INDEX],&r2[index]+3);
{% endhighlight %}

To fill a linear algebra vector from a 3D or 4D vector with `GetCoordinates()`, you  can get the internal coordinate
data.

{% highlight C++ %}
   HepVector c(3);  // CLHEP linear algebra vector.

// Fill HepVector c with c[0]=x, c[1]=y, c[2]=z
   v2.GetCoordinates(&c[0],&c[index]+3)
{% endhighlight %}

or using `TVectorD`:

{% highlight C++ %}
   double *data[3];
   v2.GetCoordinates(data,data+3);
   TVectorD r1(3,data);            // Create a new linear algebra vector copying the data
{% endhighlight %}

For transformations, constructors and methods to set/get components exist with linear algebra matrices. Prerequisite is that the matrix data is stored, for example, in the case of a Lorentz rotation, from (0,0) thru (3,3).

{% highlight C++ %}
   TMatrixD(4,4) m;
   LorentzRotation r(m);      // Create Lorentz rotation.
{% endhighlight %}

### Example: Connection to other vector classes

You can construct and assign the 3D and 4D vectors of the GenVector package from any vector that meets the following requirements:

- for 3D vectors implementing the `x()`, `y()` and `z()` methods,
- for Lorentz vectors implementing the `x()`, `y()`, `z()` and `t()` methods.

_**Example**_

{% highlight C++ %}
   CLHEP::Hep3Vector hv;
   XYZVector v1(hv);      // Create 3D vector from CLHEP 3D vector.
   HepGeom::Point3D hp;
   XYZPoint p1(hp);       // Create a 3D point.
{% endhighlight %}


<p><a name="physics-vector-package"></a></p>
## Physics vector package

The physics vector package is a combination of CLHEPs vector package written by Leif Lonnblad, Andreas Nilsson and Evgueni Tcherniaev (→ see [https://www.cern.ch/clhep/](https://www.cern.ch/clhep/){:target="_blank"}) and a ROOT package written by Pasha Murat.

There are the following classes in the physics vector package, which are described in detail in the [Reference Guide](https://root.cern/doc/master/group__Physics.html){:target="_blank"}:

- [TVector2](https://root.cern/doc/master/classTVector2.html){:target="_blank"}: A general two-vector class that can be used for the description of vectors in 2D.

- [TVector3](https://root.cern/doc/master/classTVector3.html){:target="_blank"}: A general three-vector class that can be used for the description of vectors in 3D.

- [TRotation](https://root.cern/doc/master/classTRotation.html){:target="_blank"}: Describes a rotation of objects of the `TVector3` class.

- [TLorentzVector](https://root.cern/doc/master/classTLorentzVector.html){:target="_blank"}: A general four-vector classthat can be used either for the description of position and time (x, y, z, t) or momentum and energy (px, py, pz, E). `TLorentzVector` is a legacy class.

- [TLorentzRotation](https://root.cern/doc/master/classTLorentzRotation.html){:target="_blank"}: Describes Lorentz transformations including Lorentz boosts and rotations.



