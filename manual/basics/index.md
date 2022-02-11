---
title: ROOT Manual - Basics
layout: single
sidebar:
  nav: "manual"

---

In the first part of the ROOT Manual, the basic concepts of ROOT and its usage are presented.<br>
For everyone who wants to start immediately with data analysis, the [ROOT files]({{ '/manual/root_files' | relative_url }})** <br> chapter is of interest. Here the ROOT files are presented in which the data from LHC (Large Hadron Collider) experiments are stored.

The first part of the ROOT Manual contains:

  - **[First steps with ROOT]({{ '/manual/first_steps_with_root' | relative_url }})** <br>
    Working with an interactive ROOT session.

  - **[ROOT architecture and components]({{ '/manual/root_architecture_and_components' | relative_url }})** <br>
    ROOT is modular scientific software toolkit and provides numerous tools for big data processing, statistical analysis, visualization and storage.

  - **[ROOT macros and shared libraries]({{ '/manual/root_macros_and_shared_libraries' | relative_url }})** <br>
    A ROOT macro contains pure C++ code, which additionally can contain ROOT classes and other ROOT objects.

  - **[ROOT files]({{ '/manual/root_files' | relative_url }})** <br>
    ROOT files contain C++ objects that are stored to disk.

  - **[Creating a user application with ROOT]({{ '/manual/creating_a_user_application' | relative_url }})** <br>
     This section shows how to create a standalone user application based on ROOT libraries.

  - **[Integrating ROOT into CMake projects]({{ '/manual/integrate_root_into_my_cmake_project' | relative_url }})** <br>
    You can integrate ROOT into a CMake based project.

  - **[ROOT collections]({{ '/manual/root_collections' | relative_url }})** <br>
    For historical reasons, some of ROOT’s interfaces use ROOT’s own collection types such as {% include ref class="TList" %} and {% include ref class="TObjArray" %}.

  - **[Object ownership]({{ '/manual/object_ownership' | relative_url }})** <br>
    An object ownership means the permission to delete it.

  - **[Multi-threading]({{ '/manual/multi_threading' | relative_url }})** <br>
    ROOT can benefit from multi-threading by being able to do work in parallel.