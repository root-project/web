---
title: Threads
layout: single
sidebar:
  nav: "manual"
toc: true
toc_sticky: true
---

A thread is an independent flow of control that operates within the same address space as other independent flows of
controls within a process.

## Threads and Processes

In traditional single-threaded process systems, a process has a set of properties. In multi-threaded systems, these
properties are divided between processes and threads.

### Process Properties
A process in a multi-threaded system is the changeable entity. It must be considered as an execution frame. It has all
traditional process attributes, such as:

- Process ID, process group ID, user ID, and group ID
- Environment
- Working directory

A process also provides a common address space and common system resources:

- File descriptors
- Signal actions
- Shared libraries
- Inter-process communication tools (such as message queues, pipes, semaphores, or shared memory)

### Thread Properties
A thread is the schedulable entity. It has only those properties that are required to ensure its independent flow of
control. These include the following properties:

- Stack
- Scheduling properties (such as policy or priority)
- Set of pending and blocked signals
- Some thread-specific data (TSD)

### The Initial Thread
When a process is created, one thread is automatically created. This thread is called the initial thread or the main
thread. The initial thread executes the main routine in multi-threaded programs.

## Using threads with ROOT