# Oui_grid

## In process!

A sass powered css grid using flex-boxes and calc().

## Features

* Unlimited columns width;
* Unlimited breakpoints;
* responsive gutters;
* gutter as margin and/or padding;
* etc.

## Support

Main *concerns* should be about [flexbox](http://caniuse.com/#feat=flexbox) and [calc()](http://caniuse.com/#search=calc).

## Variables settings

See `src/settings/variables.scss`.

## Mixins

### item

```scss
@include item($media, $width, $margin, $padding, $position, $padding);
```

- `$media` (`null`): min-width and/or max-width as `$layout` map keys.
```scss
@include item(s) { … };
@include item(s l) { … };
@include item(false l) { … };
```
- `$width` (`null`): factor (.5) or fraction (1/2) of the container width.
```scss
@include item(s l, 1/2) { … };
@include item(s l, .5) { … };
```
- `$margin` (`null`): value of list of values…
  - `true` or `false` will enable or disable the responsive gutter;
  - a unitless value will be read as a factor of the responsive gutter;
  - a usual margin value followed by its unit will be used as it.
```scss
@include item(s l, 1/2, true) { … };
@include item(s l, 1/2, 1 -1) { … };
@include item(s l, 1/2, 1px 2px 3px 4px) { … };
```
- `$padding` (`null`): see `margin`.
```scss
@include item(s l, 1/2, true, true) { … };
@include item(s l, 1/2, true, 1 -1) { … };
@include item(s l, 1/2, true, 1px 2px 3px 4px) { … };
```
- `$position` (`null`): …
```scss
@include item(s l, 1/2, true, true, pull-1/2) { … };
```
- `flow` (`null`): …
```scss
@include item(s l, 1/2, true, true, pull-1/2, grid) { … };
```

### children

- `$width` (`null`): factor (.5) or fraction (1/2) of the container width.
```scss
@include children(s l, 1/2) { … };
@include children(s l, 1/2 1/4) { … };
```
- `$repeat` (`null`): extra value for `$width` to define the repeat scheme to use.
```scss
@include children(s l, 1/2 1/4 repeat-last) { … };
