---
title: ROOT collections
layout: single
sidebar:
  nav: "manual"
toc: true
toc_sticky: true
---

## `TObjArray` versus `std::vector`

For historical reasons, some of ROOT's interfaces use ROOT's own collection types such as `TList` and `TObjArray`.
You (and modern ROOT code) should use `std::array` or `std::vector` etc from the C++ Standard Library; ROOT supports these fully.
The following describes how you can access the elements in case an interface returns a ROOT collection type such as `TList`.

## Iteration and Element Access

ROOT collections hold pointers to {% include ref class="TObject" %}.
I.e. to store an object in a ROOT collection, it must inherit from `TObject`.
ROOT collections return pointers to `TObject`; those pointers have to be cast back to the correct subclass.

You can think of a `TList` as a `std::list<TObject*>`.

Element retrieval through `TObject*` is often not useful;
for instance with `TTree::GetListOfBranches()` you know that the elements are of type `TBranch*`.
For this purpose, ROOT offers a tool specific for range-based for loops: [TRangeDynCast](https://root.cern/doc/master/TCollection_8h.html#ab36279cd943b06d94ecec8a2a10110f7).

{% highlight C++ %}
for (auto br : TRangeDynCast<TBranch>( tree->GetListOfBranches() )) {
    if (!br) continue;
    // Use br as a TBranch*
}
{% endhighlight %}
