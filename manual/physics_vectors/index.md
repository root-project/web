---
title: Physics vectors
layout: single
sidebar:
  nav: "manual"
toc: true
toc_sticky: true
---

The [physics vector classes](https://root.cern/doc/master/group__GenVector.html) describe vectors in two, three and four dimensions and their rotation algorithms.

## Design

In this package, a vector is built out of:

- the container with N dimensions, for example `LorentzVector`
- the coordinate system, for example `PtEtaPhiM4D`
- the scalar type, typically `float` or `double`

The concrete vector type is a combination of the three ingredients, for example:

```c++
// PtEtaPhiMVector is a typedef to LorentzVector<PtEtaPhiM4D<double>>;
ROOT::Math::PtEtaPhiMVector v1(10. /*pt*/, 0.1 /*eta*/, 0.24 /*phi*/, 5 /*M*/);
```

For a full list of possible types and more details, please refer to the [Reference Guide](https://root.cern/doc/master/group__GenVector.html#GenVectorTypedefs).

## Operations

The vector classes provide functionality to express common arithmetic operations, such as adding two vectors and multiplication with a scalar:

```c++
using namespace ROOT::Math;
PtEtaPhiMVector v1(1, 2, 3, 4), v2(5, 6, 7, 8);
v1 += v2;
v1 *= 2;
```

For more details, please refer to the [Reference Guide](https://root.cern/doc/master/group__GenVector.html#GenVectorOperations).

## Transformations

The transformation classes are grouped into rotations and transformations such as [Lorentz boost](https://mathworld.wolfram.com/LorentzTransformation.html).

For example, a transformation of a `LorentzVector` works as follows:

```c++
LorentzRotation t(RotationX(M_PI));
PtEtaPhiMVector v3 = t(v1);
```

For the full list of transformations, please refer to the [Reference Guide](https://root.cern/doc/master/group__GenVector.html#GenVectorTransformations).
