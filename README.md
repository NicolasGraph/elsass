# Oui_grid

## In process!

A sass powered css grid using flex-boxes and calc().

## Features

* Unlimited breakpoints;
* responsive gutters;
* gutter value is applied to margin but can also be used as padding;
* etc.

## mixins

### item

```scss
@include grid-items($media, $width, $margin, $padding, $position, $padding);
```

- `$media` (`null`): min-width and/or max-width as `$layout` map keys.
```scss
@include grid-items(s) { … };
@include grid-items(s l) { … };
@include grid-items(false l) { … };
```
- `$width` (`null`): factor (.5) or fraction (1/2) of the container width.
```scss
@include grid-items(s l, 1/2) { … };
@include grid-items(s l, 1/2 1/4) { … };
```
- `$repeat` (`null`): extra value for `$width` to define the repeat scheme to use.
```scss
@include grid-items(s l, 1/2 1/4 repeat-last) { … };
```
- `$margin` (`null`): value of list of value where,
```scss
@include grid-items(s l, 1/2 1/4 repeat-last, true) { … };
@include grid-items(s l, 1/2 1/4 repeat-last, 1 -1) { … };
@include grid-items(s l, 1/2 1/4 repeat-last, 1px 2px 3px 4px) { … };
```
- `$padding` (`null`): value of list of value where,
```scss
@include grid-items(s l, 1/2 1/4 repeat-last, true) { … };
@include grid-items(s l, 1/2 1/4 repeat-last, 1 -1) { … };
@include grid-items(s l, 1/2 1/4 repeat-last, 1px 2px 3px 4px) { … };
```
- `$position` (`null`): …
