---
title: "Cling Transitions to LLVM's Clang-Repl"
layout: archive
author: Vassil Vassilev
---

Over the last decade we developed an interactive, interpretative C++ interpreter
(aka REPL) as part of the high-energy physics (HEP) data analysis
project -- ROOT. We invested a significant effort to replace CINT, the
C++ interpreter used until ROOT5, with a newly implemented REPL based on
llvm -- Cling. Cling is a core component of ROOT and has been in production
since 2014.

[Cling](https://github.com/root-project/cling/) is also a standalone tool,
which has a growing community outside of our field. It is recognized for
enabling interactivity, dynamic interoperability and rapid prototyping
capabilities for C++ developers. For example, if you are typing C++ in a Jupyter
notebook you are using the
[xeus-cling](https://github.com/jupyter-xeus/xeus-cling) jupyter kernel.
One of the major challenges is to ensure Cling's sustainability and to foster
that growing community.


## Goals

Cling is built on top of LLVM and Clang. Reusing this compiler infrastructure
means that Cling gets  easy access to new future C++ standards, new compiler
features and static analysis infrastructure. Our project organization mostly
followed the LLVM community standards, but the remaining LLVM-specific
customizations, while kept at minimum, are now costly for sustainability and
development. For example, it is time consuming to move to newer LLVM versions
and release Cling as following the LLVM release schedule.

A natural next step to mitigate some of these challenges is to move the
essential part of the infrastructure closer to the LLVM orbit. The benefits of
the solid software engineering by the LLVM community have been praised widely.
For example, LLVM’s rigorous standards for code reviews, release cycles and
integration are often raised by our "external" users. We would connect two
highly knowledgeable system software engineering communities -- the one around
LLVM, and the one around data analysis in HEP. The success of Cling demonstrates
that incrementally compiled C++ is a feature the C++ community can benefit from
and the data science community needs. Finally, there are also potential
synergies with projects such as clangd and lldb which would help interactive C++
become more popular to the broader C++ audience.

## Where Are We Now

In 2018 we decided to approach the issue in a more structural way. We dedicated
resources from various ongoing activities in DIANA-HEP and IPCC-ROOT and in 2019
we received an NSF award supporting this goal.

In July 2020, we laid our arguments in a "request for comment" document on the
llvm mailing
[lists](https://lists.llvm.org/pipermail/llvm-dev/2020-July/143257.html). The
encouraging community response motivated us to produce several llvm blog posts
with intention to clarify capabilities, design aspects and advanced feature use:

* [Interactive C++ with Cling](https://blog.llvm.org/posts/2020-11-30-interactive-cpp-with-cling/)
  -- motivates an interactive C++ interpreter, explains Cling's architecture and
  design principles, and shares several implementation challenges of specific
  features.
* [Interactive C++ for Data Science](https://blog.llvm.org/posts/2020-12-21-interactive-cpp-for-data-science/)
  -- motivates interactive C++ in the context of Data Science and High Energy
  Physics use case. Examples include eval-style programming capabilities, and
  enabling technologies such as C++ in Jupyter Notebooks via xeus-cling and
  interactive CUDA C++ development.
* [Cling -- Beyond Just Interpreting C++](https://blog.llvm.org/posts/2021-03-25-cling-beyond-just-interpreting-cpp/)
  -- demonstrates advanced usage such as template instantiation on demand,
  language interoperability with Python and D via cppyy, as well as using the
  interpreter as a service to bridge compiled and interpreted code. Other
  applications include extending the C++ language to provide automatic
  differentiation features on the fly.



The LLVM community encouraged the general direction of moving reusable
components in Clang. The "new" Clang tool is called clang-repl. The motivation
behind the new name has two main aspects. Firstly, we need to ensure gradual
code reuse from clang-repl to downstream Cling and clashing class names is yet
another unnecessary complication. Secondly, some Cling features are tailored
towards HEP and hard to argue for wider use. Such an example is the implicit
`auto` keyword injection or connecting ROOT files to the name lookup. In that
respect having a project named Cling in the Clang repository which differs in
functionality than the one in ROOT and HEP would create confusion and packaging
problems. And the final (bonus) argument is that ROOT will always require
occasional hot fixes in both Cling and LLVM which cannot be bound to the major
LLVM release schedule. For example, it would be unreasonable to wait for the
next LLVM release to address that (or even just the rigorous review procedure).

On 12th of May the initial, minimally functional,
[clang-repl](https://reviews.llvm.org/D96033) landed in the LLVM repository.
Hooray!

## Next Challenges

Although the acceptance of the initial clang-repl patch was a considerable
success, it is essentially about initiating a new direction for the LLVM
community. Such strategic choice came by the years-long effort within HEP to
innovate, and also sustain, its technology advancement making it accessible to a
broader audience.

Several of Cling's technical aspects are now being discussed with the LLVM
community, for instance how to  implement reliable error recovery and
code-removal mechanisms that free the unused underlying memory. These tasks have
proven to be difficult for Cling being outside of the LLVM infrastructure.
Thanks to John McCall and Richard Smith the sketch of the feature technical
design within LLVM is sound and we are working towards it. However, this process
poses an anticipated challenge -- how to advance the technology in a slightly
tangent direction while feeding it back to its major field of use?

Feeding back implementation from mainline LLVM to Cling and ROOT is a
non-trivial task, partially because ROOT usually uses significantly older LLVM
versions. The LLVM API does not promise backward compatibility and ROOT uses an
intricate and vast API surface which makes transitions to newer versions
essentially a development task. The goal of upstreaming parts of Cling in LLVM
is to reduce the used API surface. We will make the upgrade procedure faster,
though still measured in months to allow for extensive testing by the
experiments software stacks. We cannot expect that ROOT can easily adopt each
release of LLVM, without speaking of each commit. However, we can keep ROOT
closer to LLVM mainline which makes backporting features from mainline easier.

The next piece of the puzzle is, if mainline functionality is successfully
backported, how to evolve ROOT and Cling’s codebases incrementally towards it
and how to ensure things work at the full scale of experiments. My personal
take is that it is possible only if the two ends match by design. That is, when
developing a patch against clang-repl we need to evaluate its reuse in Cling.
This is easier said than done and we will need to learn through experience...

Sustainability in open source usually means having advanced users who can
contribute back bug reports, code reviews, and code. Thus, a non-negligible part
of this effort is outreach and community building for both clang-repl and Cling.
Cling has been lucky to have people donating their time to help going towards
LLVM mainline. Here I want to thank all of them. In particular Raphael Isemann,
Jonas Hahnfeld and Pratyush Das who have each dedicated significant time to help
our efforts and thereby reducing the accumulated technical debt in HEP.


## Conclusion

The research and development efforts towards an interactive and incremental C++
in ROOT resulted in Cling, which became a cornerstone for data analysis in the
field of HEP. Technical advancements in Cling enables new, previously
unthought-of, abilities for clang and C++ such as template instantiations on
demand, reflection, and language interoperability.

Thanks to support from CERN, USCMS, DIANA-HEP, Intel, the "technical debt" in
the initial Cling implementation has been significantly reduced. Even so, much
of that work is still ahead of us.

Cling is now used outside of HEP. We are excited to be working towards making it
available to an even broader audience for instance by increasing Cling's ties
with the llvm project, while feeding back advancements from  other communities
to HEP through Cling and ROOT.

## Acknowledgement

The author would like to thank Axel Naumann and David Lange who contributed to
this post. You can find out more about our activities at
[https://compiler-research.org](https://compiler-research.org) and
[https://root.cern/cling/](https://root.cern/cling/)

