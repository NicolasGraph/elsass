# elsass responsive grid builder

[elsass](//github.com/NicolasGraph/elsass) is a quite light Sass powered CSS responsive and "semantic" grid builder using [flexbox](//caniuse.com/#feat=flexbox) and [calc()](//caniuse.com/#search=calc).
Click these features for support informations via [caniuse.com](//caniuse.com/).

## Contents

* [Features](#features)
* [Usage](#usage)
* [Settings](#settings)
* [Usage](#usage)
* [Mixin](#mixin)
* [Example / demo](#example--demo)
* [Add-ons](#add-ons)
* [Credits](#credits)

## Features

* Unlimited columns width;
* unlimited custom breakpoints;
* responsive gutters;
* gutters as margin and/or padding;
* add-ons;
* etc.

## Usage

Import `elsass.scss` in your main `.scss` file.

```scss
@import "elsass/core/elsass";
```

## Settings

You can customize `$settings` values on the top of `elsass.scss`.

```scss
$settings: (
    "s": (                           // Each $settings key is used as a custom breakpoint.
        "content-max-width" : 480px, // Max-width to optionally apply to containers.
        "vertical-spacing"  : 12px,  // Top and bottom gutters.
        "horizontal-spacing": 8px    // Right and left gutters.
    ),
    "m": (
        "device-min-width"  : 640px, // Media-query min-width (useless for the first breakpoint).
        "content-max-width" : 800px,
        "vertical-spacing"  : 16px,
        "horizontal-spacing": 12px
    ),
    …
);
```

## Mixin

### this

```scss
@include this($media, $flow, $width, $gutter, $position, $padding);
```

#### arguments

- `$media` set the media-query/ies to apply.

    | Value                        | Description                                                            |
    |------------------------------|------------------------------------------------------------------------|
    | Breakpoint (`$settings` key) | Uses the $settings map to get or calculate the `min-` and `max-width`. |
    | CSS value                    | Applies this value to the media-query `min-` or `max-width`.           |
    | false                        | Skips the media-query `min-width`.                                     |

    ```scss
    @include this("s") { … }; // or…
    @include this("s" "l") { … }; // or…
    @include this(false "l") { … };
    ```

- `flow` set `flex-direction`, `flex-wrap` or `flex-flow` from a single value or a list of two values (as for the CSS `flex-flow` rule).

    …

    ```scss
    @include this("s" "l", row-reverse) { … }; // or…
    @include this($flow: row-reverse wrap) { … };
    ```

- `$width` set the item width (gutter included).

    | Value               | Description                                                        |
    |---------------------|--------------------------------------------------------------------|
    | fraction or decimal | Calculates the gutter included `width` from the container `width`. |
    | `"max-width"`       | Applies a `width` of 100%  and a responsive `max-width`.           |

    ```scss
    @include this("s" "l", "row wrap", 1/2) { … }; // or…
    @include this("s" "l", "row wrap", .5) { … }; // or…
    @include this($width: "max-width") { … };
    ```

- `$gutter` set margins from a value or a list of two or four values (as for the CSS margin rule) and alterates the width by soustracting right and left margins from it.

    | Value           | Description                                                                              |
    |-----------------|------------------------------------------------------------------------------------------|
    | `true`/`false`  | Enables/disables the related side(s) gutter as margin.                                   |
    | `"nested"`      | Set a negative gutter on the related margin side(s).                                     |
    | unitless number | Multiply the gutter value of the related margin side(s).                                 |
    | CSS value       | Set this value as the related gutter/margin side(s) .                                    |
    | `(silent: …)`   | Alterates the width without affecting any margin (see [Example / demo](#example--demo)). |

    ```scss
    @include this("s" "l", "row wrap", 1/2, true) { … }; // or…
    @include this("s" "l", "row wrap", 1/2, 2 -1) { … }; // or…
    @include this("s" "l", "row wrap", 1/2, 1px 2px 3px 4px) { … }; // or…
    @include this("s" "l", "row wrap", 1/2, ("silent": true)) { … }; // or…
    @include this($gutter: false true) { … };
    ```

- `$position` alterates margins to pull, push or center the element.

    | Value                                           | Description                                                           |
    |-------------------------------------------------|-----------------------------------------------------------------------|
    | fraction/factor of the container width          | Alterates the left margin to push the element.                        |
    | negative fraction/factor of the container width | Alterates the left margin to pull the element.                        |
    | `"pull"`                                        | Pulls the element on the right side by applying `margin-right: auto`. |
    | `"push"`                                        | Pushes the element on the left side by applying `margin-left: auto`.  |
    | `"center"`                                      | Centers the element by setting the right an left margins to `auto`.   |

    ```scss
    @include this("s" "l", "row wrap", 1/2, true, 1/2) { … }; // or…
    @include this("s" "l", "row wrap", 1/2, true, -1/2) { … }; // or…
    @include this($position: "center") { … };
    ```

- `$padding` set paddings from a value or a list of two or four values (as for the CSS padding rule).

    | Value           | Description                                                               |
    |-----------------|---------------------------------------------------------------------------|
    | `true`/`false`  | Enables/disables the related side(s) padding.                             |
    | unitless number | Multiplies the media-query related spacing values of the defined side(s). |
    | CSS value       | Set this value as the related side(s) padding.                            |

    ```scss
    @include this("s" "l", "row wrap", 1/2, true, 1/2, true) { … }; // or…
    @include this("s" "l", "row wrap", 1/2, true, 1/2, 1 -1) { … }; // or…
    @include this("s" "l", "row wrap", 1/2, true, 1/2, 1px 2px 3px 4px) { … }; // or…
    @include this($padding: false true) { … };
    ```

## Example / demo

```html
<ul class="catalog">
    <li class="catalog_product catalog_product--first"></li>
    <li class="catalog_product"></li>
    <li class="catalog_product"></li>
    <li class="catalog_product"></li>
    <li class="catalog_product"></li>
    <li class="catalog_product"></li>
    <li class="catalog_product"></li>
    <li class="catalog_product"></li>
    <li class="catalog_product"></li>
    <li class="catalog_product"></li>
</ul>
```

```scss
.catalog {
    // @include this($media, $flow, $width, $gutter, $position, $padding);
    @include this(false, row wrap, "max-width", true, "center", true) {
        list-style: none;
        background: #eee;
    }

    &_product {
        border: 1px solid #ddd;
        @include this("s" "l", false, 1/2, true, false, true);
        @include this("l", false, 1/4, true, false, true);

        &--first {
            background: #fff;
            @include this("s" "l", false, 1, ("silent": true));
            @include this("l", false, 1/2, ("silent": true));
        }
    }
}
```

See and play on [Sassmeister](http://www.sassmeister.com/gist/0a4b4870f20b95404d8d463fa7500693).

## Add-ons

* [children mixin](/add-ons/children): apply `this` mixin with multiple widths to children elements;
* [CSS grid](/add-ons/css): Old style CSS grid to use elsass through classes or placeholders

## Credits

### Author

[Nicolas Morand](https://twitter.com/NicolasGraph), graphic designer and front-end developer in Strasbourg, France.

### Licence

This project is distributed under the [MIT licence](https://opensource.org/licenses/MIT).

Copyright (c) 2017 [Nicolas Morand](https://twitter.com/NicolasGraph)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
