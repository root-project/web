---
title: S3 Test
layout: single
---

<center>
<div id="id1" style="width:500px; height:350px">
</div>
</center>



<script src="https://root.cern/js/dev/scripts/JSRootCore.js" type="text/javascript"></script>
<script type='text/javascript'> JSROOT.OpenFile("{{'/manual/graphics/graphics.root' | relative_url}}", function(file) {
file.ReadObject("func1", function(obj) {JSROOT.draw("id1", obj, "");});});</script>

