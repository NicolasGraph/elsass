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
@include grid-items(s l, .5) { … };
```
- `$margin` (`null`): value of list of values…
  - `true` or `false` will enable or disable the responsive gutter;
  - a unitless value will be read as a factor of the responsive gutter;
  - a usual margin value followed by its unit will be used as it.
```scss
@include grid-items(s l, 1/2, true) { … };
@include grid-items(s l, 1/2, 1 -1) { … };
@include grid-items(s l, 1/2, 1px 2px 3px 4px) { … };
```
- `$padding` (`null`): see `margin`.
```scss
@include grid-items(s l, 1/2, true, true) { … };
@include grid-items(s l, 1/2, true, 1 -1) { … };
@include grid-items(s l, 1/2, true, 1px 2px 3px 4px) { … };
```
- `$position` (`null`): …
- `flow` (`null`): …

### children

- `$width` (`null`): factor (.5) or fraction (1/2) of the container width.
```scss
@include grid-items(s l, 1/2) { … };
@include grid-items(s l, 1/2 1/4) { … };
```
- `$repeat` (`null`): extra value for `$width` to define the repeat scheme to use.
```scss
@include grid-items(s l, 1/2 1/4 repeat-last) { … };
