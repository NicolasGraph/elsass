# elsass responsive grid builder

[elsass](//github.com/NicolasGraph/elsass) is a quite light Sass powered CSS responsive and "semantic" grid builder using [flexbox](//caniuse.com/#feat=flexbox). It does also use [calc()](//caniuse.com/#search=calc) as long as you use the `$gutter-out-out` mixin argument.
Click these features for support informations via [caniuse.com](//caniuse.com/).

## Contents

* [Features](#features)
* [Usage](#usage)
* [Settings](#settings)
* [Usage](#usage)
* [this mixin](#this-mixin)
* [Examples / demos](#examples--demos)
* [Add-ons](#add-ons)
* [Credits](#credits)

## Features

* Unlimited columns width;
* unlimited custom breakpoints;
* responsive gutters (optional);
* gutters as margin and/or padding;
* add-ons;
* etc.

## Usage

Import `elsass.scss` in your main `.scss` file.

```scss
@import "elsass/core/elsass";
```

## Settings

You can customize some elsass variable values on the top of `elsass.scss`.
It can also be done in a different file if you prefer.

### Layout settings

```scss
$settings: (
  's': (                          // Each $settings key is used as a custom breakpoint.
    'container-max-width': 480px, // Max-width to optionally apply to containers.
    'gutter-height'      : 24px,  // y axis (top/bottom) related gutter value.
    'gutter-width'       : 16px,  // x axis (right/left) related gutter value.
  ),
  'm': (
    'device-min-width'   : 640px, // Media-query min-width (useless for the first breakpoint).
    'container-max-width': 800px,
    'gutter-height'      : 32px,
    'gutter-width'       : 24px,
  ),
  …
);
```

### elsass mixin default argument values

```scss
$elsass: (
  'media'     : $BPT-MIN,
  'flow'      : null,
  'width'     : 1,
  'gutter-in' : .5,
  'gutter-out': .5,
  'position'  : null,
);
```

## Mixin

### elsass

```scss
@include elsass($media, $flow, $width, $gutter-out, $position, $gutter-in);
```

#### Arguments

To enable argument default values, you can set their values to `true`, or set it to `…`. This second value will enable the default value for each non defined following arguments.

- `$media`  
  Applies a media-query around the generated CSS to build responsive layouts.  
  It accepts a single value or list of two values to set the media-query `min-` and `max-width`.

  | Value         | Description                                                                              |
  |---------------|------------------------------------------------------------------------------------------|
  | `true`        | Enables the argument default value.                                                      |
  | `"…"`         | Enables the default value for the current argument and the following non defined ones.   |
  | Breakpoint(s) | Uses the `$settings` map to get or calculate the `min-` and `max-width`.                 |
  | CSS value(s)  | Applies this value to the media-query `min-` or `max-width`.                             |
  | `false`       | Disables the media-query or skips `min-width` if a second value is set.                  |

  ```scss
  @include elsass("s") { … }; // or…
  @include elsass("s" "l") { … }; // or…
  @include elsass(false "l") { … };
  ```

- `$flow`  
  Set `flex-direction`, `flex-wrap` or `flex-flow`.  
  It accepts a single value or a list of two values.

  ```scss
  @include elsass("s" "l", row-reverse) { … }; // or…
  @include elsass($flow: row-reverse wrap) { … };
  ```

- `$width`  
  Set the element width (gutter included).

  | Value   | Description                                                                              |
  |---------|------------------------------------------------------------------------------------------|
  | `true`  | Enables the argument default value.                                                      |
  | `"…"`   | Enables the default value for the current argument and the following non defined ones.   |
  | Ratio   | Calculates the element `width` (gutter included) based on the container `width`.         |
  | `"max"` | Applies a `width` of 100%  and a responsive `max-width`.                                 |
  | `false` | Disables `width` and `max-width`.                                                        |

  ```scss
  @include elsass("s" "l", "row wrap", 1/2) { … }; // or…
  @include elsass("s" "l", "row wrap", .5) { … }; // or…
  @include elsass($width: "max") { … };
  ```

- `$gutter-in`  
  Set paddings from a single value or a list of two or four values (as for the CSS padding rule).  
  Different type of values can be used in a list.

  | Value               | Description                                                                            |
  |---------------------|----------------------------------------------------------------------------------------|
  | `true`              | Enables the argument default value.                                                    |
  | `"…"`               | Enables the default value for the current argument and the following non defined ones. |
  | Ratio(s)            | Multiplies the gutter value of the related padding side(s).                            |
  | CSS value(s)        | Set this value as the related gutter/padding side(s) .                                 |
  | `(`side`:` value`)` | Set a defined side gutter. (`false .5 false false` = `("right": .5)`)                  |
  | `false`             | Disables gutter as padding for the related side(s).                                    |

  ```scss
  @include elsass("s" "l", "row wrap", 1/2, .5) { … }; // Half gutter as padding all around.
  @include elsass("s" "l", "row wrap", 1/2, ("silent": .5)) { … }; // Alterates the element width without affecting any margin.
  @include elsass("s" "l", "row wrap", 1/2, false -.5) { … }; // Half nested gutter on right and left.
  @include elsass("s" "l", "row wrap", 1/2, (left: 1)) { … }; // Full gutter on the left padding side.
  @include elsass($gutter-in: 1px 2px 3px 4px) { … }; // Usual padding CSS values.
  ```

- `$gutter-out`  
  Set margins from a value or a list of two or four values (as for the CSS margin rule).  
  It also alterates the width if provided, by soustracting the right and left margins from it.

  | Value                    | Description                                                                               |
  |--------------------------|-------------------------------------------------------------------------------------------|
  | `true`                   | Enables the argument default value.                                                       |
  | `"silent"`               | Alterates the width according to the default argument value without affecting any margin. |
  | `"…"`                    | Enables the default value for the current argument and the following non defined ones.    |
  | Ratio(s)                 | Multiplies the gutter value of the related margin side(s).                                |
  | CSS value(s)             | Set this value as the related gutter/margin side(s) .                                     |
  | `(`side`:` value`)`      | Set a defined side gutter. (`false .5 false false` = `("right": .5)`)                     |
  | `("silent":` value(s)`)` | Alterates the width according to the provided value(s) without affecting any margin.      |
  | `false`                  | Disables gutter as padding for the related side(s).                                       |

  ```scss
  @include elsass("s" "l", "row wrap", 1/2, 1/2) { … }; // Half gutter as margin all around.
  @include elsass("s" "l", "row wrap", 1/2, false -.5) { … }; // Half gutter nested on right and left.
  @include elsass("s" "l", "row wrap", 1/2, (right: 1)) { … }; // Full gutter on the right margin side.
  @include elsass($gutter-out: 1px 2px 3px 4px) { … }; // Usual CSS values.
  ```

- `$position`  
  Alterates margins to pull, push or center the element.

  | Value          | Description                                                                            |
  |----------------|----------------------------------------------------------------------------------------|
  | `true`         | Enables the argument default value.                                                    |
  | `"…"`          | Enables the default value for the current argument and the following non defined ones. |
  | Ratio          | Adds the related percentage to the left margin to push the element.                    |
  | Negative ratio | Soustract the related percentage from the left margin to push the element.             |
  | `"pull"`       | Pulls the element on the right side by applying `margin-right: auto`.                  |
  | `"push"`       | Pushes the element on the left side by applying `margin-left: auto`.                   |
  | `"center"`     | Centers the element by setting the right an left margins to `auto`.                    |

  ```scss
  @include elsass("s" "l", "row wrap", 1/2, true, 1/2) { … }; // or…
  @include elsass("s" "l", "row wrap", 1/2, true, -1/2) { … }; // or…
  @include elsass($position: "center") { … };
    ```

## Examples / demos

### Simple responsive grid

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
  @include elsass("…", $position: "center") {
    list-style: none;
    background: #eee;
  }

  &_product {
    border: 1px solid #ddd;
    @include elsass("s" "l", false, 1/2, "…");
    @include elsass("l", false, 1/4, "…");

    &--first {
      background: #fff;
      @include elsass("s" "l", false, 1, "silent");
      @include elsass("l", false, 1/2, "silent");
    }
  }
}
```

See and resize on [Sassmeister](http://www.sassmeister.com/gist/0a4b4870f20b95404d8d463fa7500693).

### Metro-UI-like responsive grid

```html
<main class="page">
  <article class="page_post post">
    <header class="post_infos infos">
      <h1 class="infos_title"></h1>
      <p class="infos_description"></p>
    </header>
    <img class="post_image" height="240" width="480">
    <p class="post_body"></p>
    <footer class="post_footer"></footer>
  </article>
  <aside class="page_sidebar"></aside>
</div>
```

```sass
.page {
  background: #eee;
  @include elsass("…", $position: "center");
  @include elsass("s" "m", column, $gutter-out: false);

  &_post {
    @include elsass("s" "l", false, 1);
    @include elsass("l", false, 2/3);
  }

  &_sidebar {
    border: 1px solid #ddd;
    @include elsass("s" "l", false, 1, "…");
    @include elsass("l", false, 1/3, "…");
  }
}

.post {
  @include elsass("s" "m", column);
  @include elsass("m", true);

  &_infos {
    @include elsass("s" "m", false, 1);
    @include elsass("m", false, 1/2);
  }

  &_image {
    border: 1px solid #ddd;
    background: #fff;
    @include elsass("s" "m", false, 1, "…");
    @include elsass("m", false, 1/2, "…");
  }

  &_body,
  &_footer {
    border: 1px solid #ddd;
    @include elsass(false, false, 1, "…");
  }

  &_body {
    height: 240px;
  }
}

.infos {
  @include elsass("s" "m", row);
  @include elsass("m", column);

  &_title,
  &_description {
    border: 1px solid #ddd;
    flex-grow: 1;
    @include elsass("s" "m", false, 1/2, "…");
    @include elsass("m", false, 1, "…");
  }
}
```

See and resize on [Sassmeister](http://www.sassmeister.com/gist/2722430257d50d32d2ca662f2ad6d942).

## Add-ons

elsass is build to provide a generic multipurpose mixin which can be used as is or manipulated to build your owns.
You can also build CSS grids or whatever you need.

* [elsass-children mixin](/add-ons/children): apply `elsass` mixin with multiple `width` values to children elements;

## Credits

### Author

[Nicolas Morand](https://twitter.com/NicolasGraph), graphic designer and front-end developer in Strasbourg, France.
_Pardon my frenglish…_

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
