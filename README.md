# Oui_grid

## In process!

A sass powered css grid using flex-boxes and calc().

## Features

* Unlimited breakpoints;
* responsive gutters;
* gutter value is applied to margin but can also be used as padding;
* etc.

## mixins

### grid-items

`@include grid-items($media, $width, $margin, $padding);`

#### $media: null
a $layout map key, used to get the related min-width, or a list of two of them, to also use a max-width.
`false` can be used as the first value in a list to skip the min-width rule.

```
@include grid-items(s) { … };
@include grid-items(s l) { … };
@include grid-items(false l) { … };
```

#### $width: null
a single value or a list of values where each one of them is a factor (.5) or a fraction (1/2) of the container width.

```
@include grid-items(s l, 1/2) { … };
@include grid-items(s l, 1/2 1/4) { … };
```

##### $repeat: null
an extra value can be added to the width value/list of values to define the repeat scheme to use.
By default each width value is applied to an item in a kind of loop mode, but

```
@include grid-items(s l, 1/2 1/4 repeat-last) { … };
```

#### $margin: null
a single value, a list of two values or a list of four values where the values order is the same as the one used by the CSS margin rule.
Values can be `true` or `false` to enable or disable the default spacing value; they can also be a unitless number used as a factor to apply to the default spacing value (a negative factor can be used to nest), or a usual value followed by its unit.

```
@include grid-items(s l, 1/2 1/4 repeat-last, true) { … };
@include grid-items(s l, 1/2 1/4 repeat-last, 1 -1) { … };
@include grid-items(s l, 1/2 1/4 repeat-last, 1px 2px 3px 4px) { … };
```

#### $padding: null
See $margin.
