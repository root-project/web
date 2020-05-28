---
title: S3 Test
layout: single
---



### JSROOT image include using figure_jsroot

{% capture f %}{{'/manual/graphics/graphics.root' | relative_url}}{% endcapture %}

#### {{f}}

{% include figure_jsroot
   file=f object="func1" width="500px" height="350px"
   caption="func1 test"
%}


### JSROOT image included directly

<center>
<div id="id1" style="width:500px; height:350px">
</div>
</center>

<script src="https://root.cern/js/dev/scripts/JSRootCore.js" type="text/javascript"></script>
<script type='text/javascript'> JSROOT.OpenFile("{{'/manual/graphics/graphics.root' | relative_url}}", function(file) {
file.ReadObject("arrows", function(obj) {JSROOT.draw("id1", obj, "");});});</script>
