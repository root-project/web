---
title: Vectors
layout: single
sidebar:
  nav: "manual"
toc: true
toc_sticky: true
---

ROOT provides two vector packages:

- Generic 2D, 3D and 4D vectors classes and their transformations (rotations).

- The ROOT physics vectors classes.

## Generic 2D, 3D and 4D vectors (GenVectors)

Generic 2D, 3D and 4D vectors (GenVectors) represent vectors and their operations and transformations, such as rotations and Lorentz transformations. The 2D and 3D space are used to describe the geometry vectors and points, while the 4D space-time is used for physics vectors representing relativistic particles. 

In contrast to the ROOT physics libraries, the GenVector package provides class templates for modeling the vectors.

Every class, function, manipulator, or other symbol defined in the GenVector package, is in the [ROOT::Math](https://root.cern/doc/master/namespaceROOT_1_1Math.html) namespace.

### GenVector classes and class templates

The following GenVector classes and class templates are available, among others:

- [DisplacementVector3D](https://root.cern/doc/master/classROOT_1_1Math_1_1DisplacementVector3D.html): Describing a generic displacement vector in 3 dimensions. 

- [PositionVector3D](https://root.cern/doc/master/classROOT_1_1Math_1_1PositionVector3D.html): Describing a generic position vector (point) in 3 dimensions. 

- [LorentzVector](https://root.cern/doc/master/classROOT_1_1Math_1_1LorentzVector.html): Describing a generic LorentzVector in the 4D space-time, using the specified coordinate system for the spatial vector part. 

- [DisplacementVector2D](https://root.cern/doc/master/classROOT_1_1Math_1_1DisplacementVector2D.html): Describing a generic displacement vector in 2 dimensions. 

- [PositionVector2D](https://root.cern/doc/master/classROOT_1_1Math_1_1PositionVector2D.html): Describing a generic position vector (point) in 2 dimensions. 

- [Rotation3D](https://root.cern/doc/master/classROOT_1_1Math_1_1Rotation3D.html): Class with the (3D) rotation, represented by a 3x3 orthogonal matrix. 

- [AxisAngle](https://root.cern/doc/master/classROOT_1_1Math_1_1AxisAngle.html): Describing a rotation, represented with a direction axis (3D Vector), and an angle of rotation around that axis. 

- [EulerAngles](https://root.cern/doc/master/classROOT_1_1Math_1_1EulerAngles.html): Describing a rotation as three angles (Euler Angles).

- [Quaternion](https://root.cern/doc/master/classROOT_1_1Math_1_1Quaternion.html): Rotation class with the (3D) rotation represented by a unit quaternion (u, i, j, k). 

- [RotationX](https://root.cern/doc/master/classROOT_1_1Math_1_1RotationX.html): Rotation class representing a 3D rotation about the X axis by the angle of rotation.

- [RotationY](https://root.cern/doc/master/classROOT_1_1Math_1_1RotationY.html): Rotation class representing a 3D rotation about the Y axis by the angle of rotation. 

- [RotationZ](https://root.cern/doc/master/classROOT_1_1Math_1_1RotationZ.html): Rotation class representing a 3D rotation about the Z axis by the angle of rotation. 

- [LorentzRotation](https://root.cern/doc/master/classROOT_1_1Math_1_1LorentzRotation.html): Lorentz transformation class with the (4D) transformation represented by a 4x4 orthosymplectic matrix. 

- [Boost](https://root.cern/doc/master/classROOT_1_1Math_1_1Boost.html): Lorentz boost class with the (4D) transformation represented internally by a 4x4 orthosymplectic matrix. 

- [BoostX](https://root.cern/doc/master/classROOT_1_1Math_1_1BoostX.html): Representing a Lorentz Boost along the X axis, by beta.

- [BoostY](https://root.cern/doc/master/classROOT_1_1Math_1_1BoostY.html): Class representing a Lorentz Boost along the Y axis, by beta.

- [BoostZ](https://root.cern/doc/master/classROOT_1_1Math_1_1BoostZ.html) Class representing a Lorentz Boost along the Z axis, by beta. 

### Coordinate systems

The vector classes are based on a generic type of coordinate system, expressed as a template parameter of the class. The following classes exist to describe the various coordinates systems:

#### 2D coordinate system

- [ROOT::Math::Cartesian2D](https://root.cern/doc/master/classROOT_1_1Math_1_1Cartesian2D.html): 2D cartesian coordinate system (`x`, `y` coordinates).

- [ROOT::Math::Polar2D](https://root.cern/doc/master/classROOT_1_1Math_1_1Polar2D.html): A polar 2D coordinate system based on `r` and `phi`. `phi` is restricted to the range (-PI,PI).

#### 3D coordinate systems

- [ROOT::Math::Cartesian3D](https://root.cern/doc/master/classROOT_1_1Math_1_1Cartesian3D.html): 3D cartesian coordinate system (`x`, `y`, `z` coordinates).

- [ROOT::Math::Polar3D](https://root.cern/doc/master/classROOT_1_1Math_1_1Polar3D.html): 3D polar coordinate system (`r`, `theta`, `phi` coordinates).

- [ROOT::Math::Cylindrical3D](https://root.cern/doc/master/classROOT_1_1Math_1_1Cylindrical3D.html): Cylindrical coordinate system based on `rho`, `z` and `phi`. 

- [ROOT::Math::CylindricalEta3D6](https://root.cern/doc/master/classROOT_1_1Math_1_1CylindricalEta3D.html): Cylindrical coordinate system based on `eta` (pseudorapidity) instead of `z`.

#### 4D coordinate systems

- [ROOT::Math::PxPyPzE4D](https://root.cern/doc/master/classROOT_1_1Math_1_1PxPyPzE4D.html): 4D cartesian coordinate system (`x`, `y`, `z`, `t` coordinates) or momentum-energy vectors stored as (`Px`, `Py`, `Pz`, `E`). 

- [ROOT::Math::PxPyPzM4D](https://root.cern/doc/master/classROOT_1_1Math_1_1PxPyPzM4D.html): 4D coordinate system or momentum-energy vectors stored as (`Px`, `Py`, `Pz`, `M`).

- [ROOT::Math::PtEtaPhiE4D](https://root.cern/doc/master/classROOT_1_1Math_1_1PtEtaPhiE4D.html): 4D cylindrical coordinate system using `Pt`, `Phi`, `Eta` and `E` (or `rho`, `phi`, `eta`, `T`). The metric used is (-,-,-,+). 

- [ROOT::Math::PtEtaPhiM4D](https://root.cern/doc/master/classROOT_1_1Math_1_1PtEtaPhiM4D.html): 4D cylindrical coordinate system using `Pt`, `Phi`, `Eta` and `M` (mass). The metric used is (-,-,-,+). 



## Physics vectors

### Physics vector classes

The following physics vector classes are available in ROOT:

- [TVector2](https://root.cern/doc/master/classTVector2.html): A general three vector class that can be used for the description of different vectors in 2D.

- [TVector3](https://root.cern/doc/master/classTVector3.html): A general three vector class that can be used for the description of different vectors in 3D.

- [TRotation](https://root.cern/doc/master/classTRotation.html): Describes a rotation of objects of the `TVector3` class.

- [TLorentzVector](https://root.cern/doc/master/classTLorentzVector.html): A general four-vector class, which can be used either for the description of position and time (x,y,z,t) or momentum and energy (px,py,pz,E) (legacy).

- [TLorentzRotation](https://root.cern/doc/master/classTLorentzRotation.html): Describes Lorentz transformations including Lorentz boosts and rotations.



