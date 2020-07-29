---
title: Physics vectors
layout: single
sidebar:
  nav: "manual"
toc: true
toc_sticky: true
---


Generic 2D, 3D and 4D vectors (GenVectors) represent vectors and their operations and transformations, such as rotations and Lorentz transformations. The 2D and 3D space are used to describe the geometry vectors and points, while the 4D space-time is used for physics vectors representing relativistic particles.

In contrast to the ROOT physics libraries, the GenVector package provides class templates for modeling the vectors.

Every class, function, manipulator, or other symbol defined in the GenVector package, is in the [ROOT::Math](https://root.cern/doc/master/namespaceROOT_1_1Math.html){:target="_blank"} namespace.

## GenVector classes and vector class templates

The vector class templates are provided to represent vectors (in the physics sense) in 2, 3, and Minkowski space 4 dimensions.

Each vector template class  uses as its only parameter the coordinate system.

Every vector class publishes a typedef for `CoordinateType`, which allows to specify the coordinate system , as well as a typedef for `Scalar` (which will match the `Scalar` type for the coordinate system).

The vector classes are comparable (operator `==` and operator `!=` for the objects or the identical class (including the coordinate system used). Checks for the
equivalence of two vectors in different coordinate systems can be done by converting one to the system of the other.

None of the vector classes have methods to rotate a vector. To rotate a vector, you first have to instantiate the desired rotation object, and then apply it to the vector.

The following GenVector classes and class templates are available:

- {% include ref class="DisplacementVector3D" link="ROOT_1_1Math_1_1DisplacementVector3D" %}: Describing a generic displacement vector in 3 dimensions.

- {% include ref class="PositionVector3D" link="ROOT_1_1Math_1_1PositionVector3D" %}: Describing a generic position vector (point) in 3 dimensions.

- {% include ref class="LorentzVector" link="ROOT_1_1Math_1_1LorentzVector" %}: Describing a generic LorentzVector in the 4D space-time, using the specified coordinate system for the spatial vector part.

- {% include ref class="DisplacementVector2D" link="ROOT_1_1Math_1_1DisplacementVector2D" %}: Describing a generic displacement vector in 2 dimensions.

- {% include ref class="PositionVector2D" link="ROOT_1_1Math_1_1PositionVector2D" %}: Describing a generic position vector (point) in 2 dimensions.

- {% include ref class="Rotation3D" link="ROOT_1_1Math_1_1Rotation3D" %}: Class with the (3D) rotation, represented by a 3x3 orthogonal matrix.

- {% include ref class="AxisAngle" link="ROOT_1_1Math_1_1AxisAngle" %}: Describing a rotation, represented with a direction axis (3D Vector), and an angle of rotation around that axis.

- {% include ref class="EulerAngles" link="ROOT_1_1Math_1_1EulerAngles" %}: Describing a rotation as three angles (Euler angles).

- {% include ref class="Quaternion" link="ROOT_1_1Math_1_1Quaternion" %}: Rotation class with the (3D) rotation represented by a unit quaternion (u, i, j, k).

- {% include ref class="RotationX" link="ROOT_1_1Math_1_1RotationX" %}: Rotation class representing a 3D rotation about the X axis by the angle of rotation.

- {% include ref class="RotationY" link="ROOT_1_1Math_1_1RotationY" %}: Rotation class representing a 3D rotation about the Y axis by the angle of rotation.

- {% include ref class="RotationZ" link="ROOT_1_1Math_1_1RotationZ" %}: Rotation class representing a 3D rotation about the Z axis by the angle of rotation.

- {% include ref class="LorentzRotation" link="ROOT_1_1Math_1_1LorentzRotation" %}: Lorentz transformation class with the (4D) transformation represented by a 4x4 orthosymplectic matrix.

- {% include ref class="Boost" link="ROOT_1_1Math_1_1Boost" %}: Lorentz boost class with the (4D) transformation represented internally by a 4x4 orthosymplectic matrix.

- {% include ref class="BoostX" link="ROOT_1_1Math_1_1BoostX" %}: Representing a Lorentz Boost along the X axis, by beta.

- {% include ref class="BoostY" link="ROOT_1_1Math_1_1BoostY" %}: Class representing a Lorentz Boost along the Y axis, by beta.

- {% include ref class="BoostZ" link="ROOT_1_1Math_1_1BoostZ" %} Class representing a Lorentz Boost along the Z axis, by beta.

## Coordinate systems

The vector classes are based on a generic type of coordinate system, expressed as a template parameter of the class. The following classes exist to describe the various coordinates systems:

### 2D coordinate system

- [ROOT::Math::Cartesian2D](https://root.cern/doc/master/classROOT_1_1Math_1_1Cartesian2D.html){:target="_blank"}: 2D cartesian coordinate system (`x`, `y` coordinates).

- [ROOT::Math::Polar2D](https://root.cern/doc/master/classROOT_1_1Math_1_1Polar2D.html){:target="_blank"}: A polar 2D coordinate system based on `r` and `phi`. `phi` is restricted to the range (-PI,PI).

### 3D coordinate systems

- [ROOT::Math::Cartesian3D](https://root.cern/doc/master/classROOT_1_1Math_1_1Cartesian3D.html){:target="_blank"}: 3D cartesian coordinate system (`x`, `y`, `z` coordinates).

- [ROOT::Math::Polar3D](https://root.cern/doc/master/classROOT_1_1Math_1_1Polar3D.html){:target="_blank"}: 3D polar coordinate system (`r`, `theta`, `phi` coordinates).

- [ROOT::Math::Cylindrical3D](https://root.cern/doc/master/classROOT_1_1Math_1_1Cylindrical3D.html){:target="_blank"}: Cylindrical coordinate system based on `rho`, `z` and `phi`.

- [ROOT::Math::CylindricalEta3D6](https://root.cern/doc/master/classROOT_1_1Math_1_1CylindricalEta3D.html){:target="_blank"}: Cylindrical coordinate system based on `eta` (pseudorapidity) instead of `z`.

### 4D coordinate systems

- [ROOT::Math::PxPyPzE4D](https://root.cern/doc/master/classROOT_1_1Math_1_1PxPyPzE4D.html){:target="_blank"}: 4D cartesian coordinate system (`x`, `y`, `z`, `t` coordinates) or momentum-energy vectors stored as (`Px`, `Py`, `Pz`, `E`).

- [ROOT::Math::PxPyPzM4D](https://root.cern/doc/master/classROOT_1_1Math_1_1PxPyPzM4D.html){:target="_blank"}: 4D coordinate system or momentum-energy vectors stored as (`Px`, `Py`, `Pz`, `M`).

- [ROOT::Math::PtEtaPhiE4D](https://root.cern/doc/master/classROOT_1_1Math_1_1PtEtaPhiE4D.html){:target="_blank"}: 4D cylindrical coordinate system using `Pt`, `Phi`, `Eta` and `E` (or `rho`, `phi`, `eta`, `T`). The metric used is (-,-,-,+).

- [ROOT::Math::PtEtaPhiM4D](https://root.cern/doc/master/classROOT_1_1Math_1_1PtEtaPhiM4D.html){:target="_blank"}: 4D cylindrical coordinate system using `Pt`, `Phi`, `Eta` and `M` (mass). The metric used is (-,-,-,+).


