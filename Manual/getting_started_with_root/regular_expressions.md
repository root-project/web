---
title: Regular expressions
layout: single
sidebar:
  nav: "manual"
toc: true
toc_sticky: true
---


You can use the following meta-characters in regular expressions:

`ˆ`
start-of-line anchor

`$`
end-of-line anchor

`.`
matches any character

`[`
start a character class

`]`
end a character class

`ˆ`
negates character class if first character

`*`
Kleene closure (matches 0 or more)

`+`
Positive closure (1 or more)

`?`
Optional closure (0 or 1)

When using wildcards, the regular expression is assumed to be preceded by a `ˆ `(BOL) and terminated by `$` (EOL).

All `*` (closures) are assumed to be preceded by a `.` , i.e. any character, except slash `/`. Its special treatment allows the easy matching of pathnames.

### Example

`*.root` will match `aap.root`, but not `pipo/aap.root`

The escape characters are:

`\`
backslash

`b`
backspace

`f`
form feed

`n`
new line

`r`
carriage return

`s`
space

`t`
tab

`e`
ASCII ESC character ('033')

`DDD`
number formed of 1-3 octal digits

`xDD`
number formed of 1-2 hex digits

`ˆC`
C = any letter. Control code

You can use the [TRegexp] class to create a regular expression from an input string. If wildcard is true then the input string contains a wildcard expression.

### Example

```
   TRegexp(const char *re, Bool_t wildcard)
```

Regular expression and wildcards can be easily used in methods like:

`Ssiz_t Index(const TString& string,Ssiz_t* len,Ssiz_t i) const`

The method finds the first occurrence of the regular expression in the string and returns its position.

