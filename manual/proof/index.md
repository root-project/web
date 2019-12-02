---
title: PROOF
layout: single
sidebar:
  nav: "manual"
toc: true
toc_sticky: true
---

PROOF is an extension of ROOT allowing transparent analysis of large sets of ROOT files in parallel on remote computer clusters or multi-core computers. The main design goals for the PROOF system
are:

- **Transparency**: There should be as little difference as possible between a local ROOT based analysis session and a
remote parallel PROOF session, both being interactive and giving the same results.

- **Scalability**: The basic architecture should not put any implicit limitations on the number of computers that can be
used in parallel.

- **Adaptability**: She system should be able to adapt itself to variations in the remote environment (changing load on the
cluster nodes, network interruptions, etc.).

## Starting PROOF from the command line

A client interaction with a PROOF session goes via an instance of the API class [TProof](https://root.cern/doc/master/classTProof.html). 
The interaction with the server daemon is internally managed by a dedicated manager class, [TProofMgr](https://root.cern/doc/master/classTProofMgr.html), which is invoked by [TProof](https://root.cern/doc/master/classTProof.html) when creating a PROOF session. 

To start a PROOF session, type:

```
      root[0] TProof *p = TProof::Open("")
```

If the user name to be used for identification is different from the local one and/or if the service is run on a port different from the standard one (1093) then the username and/or the port must be specified using an URL syntax:.

```
      root[1] TProof *p = TProof::Open("@:2093")
```

`""` represents the name of the master machine on the PROOF enabled cluster. [TProof::Open(...)](https://root.cern/doc/master/classTProof.html#a504051c971e1034d3ee68bd0682313e4) takes care of creating the correct manager instance for the required cluster. The manager instance is available via [TProof::GetManager()](https://root.cern/doc/master/classTProof.html#a1c43f07d0972930887e2e25259cd06d1). If the user has already a session running on the cluster, by default [TProof::Open(...)](https://root.cern/doc/master/classTProof.html#a504051c971e1034d3ee68bd0682313e4) attaches to the existing session. 

To force the creation of a new PROOF session, use the N `option`:

```
      root[0] TProof *p = TProof::Open("/?N")

```

## Connecting to PROOF via an SSH tunnel

In case a master stays behind a firewall, it is normally not possible to connect directly to the master. In this case, you can use an SSH tunnel.

### Setting up an SSH tunnel

For setting up a SSH, the following information is required:

- The name of master machine and the port on which the PROOF related daemons accept connections.

- The name of a third party machine open to the outside world and from which direct connections to the master are possible.

- The local port number available for outside connections.

- The user credentials for the third party machine.

_**Example**_

An SSH tunnel is set up between `proofmaster.domain.org` (local port 3000, outside port 1093) to the third party machine `open.domain.org` (port 1093).

```
      ssh -N -f -4 -L 3000:proofmaster.domain.org:1093 open.domain.org

```
The following options are used:

`-N`: Do not expect to execute a remote command (just forwarding ports).

`-f`: Run into the background (only needed if you want to continue using the current window).

`-4`: Use IPv4 addresses only (to prevent problems with machines non supporting IPv6).

`-L`: Define the end-points of the SSH tunnel.

### Connecting to PROOF via the SSH tunnel

Once the SSH tunnel is created the remote target entity is mapped on the local port, so the connection to the PROOF cluster goes via the local port:

{% highlight C++ %}
   root[0] TProof *p = TProof::Open("localhost:3000")
   Starting master: opening connection ...
   Starting master: OK
   Opening connections to workers: OK (3 workers)
   Setting up worker servers: OK (3 workers)
   PROOF set to parallel mode (3 workers)
   (class TProof*)0x82e9670
{% endhighlight %}
