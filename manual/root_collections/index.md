---
title: ROOT collections
layout: single
sidebar:
  nav: "manual"
toc: true
toc_sticky: true
---


A ROOT collection is a group of related objects. In general, it easier to manage a large number of items as a ROOT collection.

## General characteristics

ROOT collections are polymorphic containers that hold pointers to {% include ref class="TObject" %}:

-   ROOT collections can only hold objects that inherit from `TObject`. To store an object in a ROOT collection, it must be a descendent of `TObject`.

-   ROOT collections return pointers to `TObject` that have to be cast back to the correct subclass.

**ROOT collections are dynamic**

ROOT collections can grow in size as required. ROOT collections themselves are descendants of `TObject` so they can themselves be held in collections. It is possible to nest one type of collection inside another to any level to produce structures of arbitrary complexity.

**ROOT collections do not own the objects they hold**

ROOT collections do not own the objects they hold because the same object could be a member of more than one ROOT collection. Object ownership is important when it comes to deleting objects (see → [Object ownership]({{ '/manual/object_ownership' | relative_url }})). If nobody owns the object it could end up as wasted memory (this is a memory leak) when no longer needed. If a ROOT collection is deleted, its objects are not. You must delete the objects of a ROOT collection manually.

## Fundamental ROOT classes

All ROOT collections are based on the following fundamental ROOT classes:

-   [TCollection](https://root.cern/doc/master/classTCollection.html){:target="_blank"}: Collection abstract base class that describes the base protocol all collection classes have to implement. 

-   [TIterator](https://root.cern/doc/master/classTIterator.html){:target="_blank"}: Iterator abstract base class. 

They are abstract base classes and it is not possible to create objects from them. They are used as base classes for other ROOT classes.

The `TCollection `class provides the basic protocol (this is the minimum set of member functions) that all collection classes have to implement. These include:

- [Add()](https://root.cern/doc/master/classTCollection.html#ab3e434ef802177de135ab480ae932fe8){:target="_blank"}: Adds another object to the ROOT collection.

- [GetSize()](https://root.cern/doc/master/classTCollection.html#af0ca154693eeb1e9d9a0ff3a8d43e466){:target="_blank"}: Returns the number of objects in the ROOT collection.

- [Clear()](https://root.cern/doc/master/classTCollection.html#a6ca7fcb184cd27b4467737b1fb407f39){:target="_blank"}: Clears the ROOT collection, but does not delete the removed objects.

- [Delete()](https://root.cern/doc/master/classTCollection.html#a9f4c9aac590630d208a69585a00048f9){:target="_blank"}: Clears the ROOT collection and deletes the removed objects. This should only be used if the ROOT collection owns its objects (which is usually not the case).

- [FindObject()](https://root.cern/doc/master/classTCollection.html#a183913b7766d7f8a4e87d55e64a538d5){:target="_blank"}: Finds an object given either its name or address.

- [MakeIterator()](https://root.cern/doc/master/classTCollection.html#a1a2b122d40c8248317773351979b1cd8){:target="_blank"}: Returns an iterator associated with the ROOT collection.

- [Remove()](https://root.cern/doc/master/classTCollection.html#abc692cd675c668e8a1e491d36b181f05){:target="_blank"}: Removes an object from the ROOT collection.

## Types of ROOT collections

ROOT provides the following basic types of ROOT collections:

-   ordered

-   sorted

-   unordered

All primary collection classes derive from the abstract {% include ref class="TCollection" %} base class.
Refer to {% include ref class="TCollection" %} for the inheritance hierarchy for the primary collection classes.

### Ordered ROOT collections

ROOT collections that are externally ordered are called sequences. They maintain the internal elements according to the order in which they were added. Ordered collections all derive from the abstract [TSeqCollection](https://root.cern/doc/master/classTSeqCollection.html){:target="_blank"} base class.

The following ordered ROOT collections are available:

-   [TList](https://root.cern/doc/master/classTList.html){:target="_blank"}: A doubly linked list. 

-   [THashList](https://root.cern/doc/master/classTHashList.html){:target="_blank"}: Implements a hybrid collection class consisting of a hash table and a list to store {% include ref class="TObject" %} objects. 

-   [TOrdCollection](https://root.cern/doc/master/classTOrdCollection.html){:target="_blank"}: Ordered collection. 

-   [TObjArray](https://root.cern/doc/master/classTObjArray.html){:target="_blank"}: An array of {% include ref class="TObject" %} objects. 

-   [TClonesArray](https://root.cern/doc/master/classTClonesArray.html){:target="_blank"}: An array of clone (identical) objects. 

You can sort {% include ref class="TOrdCollection" %}, {% include ref class="TObjArray" %} and {% include ref class="TClonesArray" %} by using their `Sort()` function. For this, the stored objects must provide a comparison function by overriding [TObject::Compare()](https://root.cern/doc/master/classTObject.html#ad17c24b70c3614e78c9a75e771a86bb6){:target="_blank"} and also must enable sorting by overriding [TObject::IsSortable()](https://root.cern/doc/master/classTObject.html#a5caba8a470082257914b99ddf54c3084){:target="_blank"} to return `true`.

#### TList collection

A {% include ref class="TList" %} is a doubly linked list.
Before being inserted into the list, the object pointer is wrapped in a {% include ref class="TObjLink" %} object that contains, besides the object pointer, a previous and next pointer.

You can add objects by using:

-   `Add()`

-   `AddFirst()`, `AddLast()`

-   `AddBefore()`, `AddAfter()`

#### TObjArray Collection

A {% include ref class="TObjArray" %} is a collection that supports traditional array semantics via the overloading of `operator[]`.

The array expands automatically when objects are added. At creation time, one specifies the default array size (default = 16) and lower bound (default = 0).

You can access objects directly via an index.

Resizing involves a re-allocation and a copy of the old array to the new. This can be costly if done too often. If possible, set initial size close to expected final size. Index validity is always checked.

If the stored objects are sortable you can sort the array by using `Sort()`. Once sorted, efficient searching is possible via the `BinarySearch()` method.

#### TClonesArray

A {% include ref class="TClonesArray" %} is an array of identical (clone) objects. The class is specially designed for repetitive data analysis tasks, where in a loop many times the same objects, are created and deleted.
The memory for the objects stored in the array is allocated only once in the lifetime. All objects must be of the same class. For the rest this class has the same properties as a {% include ref class="TObjArray" %}.

The only supported way to add objects to {% include ref class="TClonesArray" %} is via the `new()` method.

### Sorted ROOT collections

Sorted ROOT collections are ordered by an internal sorting mechanism. The stored items must be sortable.

The following sorted ROOT collections are available:

-   [TSortedList](https://root.cern/doc/master/classTSortedList.html){:target="_blank"}: A sorted doubly linked list. 

-   [TBtree](https://root.cern/doc/master/classTBtree.html){:target="_blank"}: B-tree class. 

### Unordered ROOT collections

Unordered ROOT collections do not maintain the order in which the elements were added.
If you iterate over an unordered ROOT collection, you are not likely to retrieve the elements in the same order they were added to the ROOT collection.

The following unordered ROOT collections are available:

-   [THashTable](https://root.cern/doc/master/classTHashTable.html){:target="_blank"}: Implements a hash table to store {% include ref class="TObject" %} objects. 

-   [TMap](https://root.cern/doc/master/classTMap.html){:target="_blank"}: Implements an associative array of (key, value) pairs using a {% include ref class="THashTable" %} for efficient retrieval.

## Changing the behavior of objects in ROOT collections

By overriding the following {% include ref class="TObject" %} member functions, you can change the behavior of objects in ROOT collections:

- [IsEqual()](https://root.cern/doc/master/classTObject.html#a1a1c984d4cf6d7d73b8483bf9dc5ee47){:target="_blank"}: Used by the [FindObject()](https://root.cern/doc/master/classTCollection.html#a183913b7766d7f8a4e87d55e64a538d5){:target="_blank"} collection method. By default, `IsEqual()` compares the two object pointers.

- [Compare()](https://root.cern/doc/master/classTCollection.html#ac8f95e057382ad14a37a8b45f2ded510){:target="_blank"}: Returns -1, 0 or 1 depending if the object is smaller, equal or larger than the other object. By default, a TObject has not a valid `Compare()` method.

- [IsSortable()](https://root.cern/doc/master/classTCollection.html#a3e9adc8b21de67ae3149bf2cc8f6c67d){:target="_blank"}: Returns `true` if the class is sort able (i.e. if it has a valid `Compare()` method). By default, a `TObject` is not sort able.

- [Hash()](https://root.cern/doc/master/classTCollection.html#a880dfd3426f3946d2e383ad10af71c25){:target="_blank"}: Returns a hash value. It needs to be implemented if an object has to be stored in a collection using a hashing technique, like [THashTable](https://root.cern/doc/master/classTHashTable.html){:target="_blank"}, [THashList](https://root.cern/doc/master/classTHashList.html){:target="_blank"} and [TMap](https://root.cern/doc/master/classTMap.html){:target="_blank"}. By default, `Hash()` returns the address of the object.
