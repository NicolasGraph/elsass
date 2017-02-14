# el-sass responsive grid builder

[el-sass](//github.com/NicolasGraph/el-sass) is a quite light Sass powered CSS responsive and _semantic_ grids builder using [flexbox](//caniuse.com/#feat=flexbox).  
It does also use [calc()](//caniuse.com/#search=calc) when needed.  
Click these features for support informations via [caniuse.com](//caniuse.com/).

## Contents

* [Features](#features)
* [Usage](#usage)
* [Settings](#settings)
* [mixin](#mixin)
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

Import `el-sass.scss` in your main `.scss` file.

```scss
@import "el-sass/core/el-sass";
```

## Settings

You can customize some el-sass variable values on the top of `el-sass.scss`.
It can also be done in a different file if you prefer.

### Layout settings

```scss
$settings: (
  's': (                          // Each $settings key is used as a breakpoint.
    'container-max-width': 480px, // Max-width to optionally apply to containers.
    'gutter-height'      : 24px,  // Top/bottom gutter value.
    'gutter-width'       : 16px,  // Right/left gutter value.
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

### el-sass mixin default argument values

```scss
$el-sass: (
  'media'     : $BPT-MIN,
  'flow'      : null,
  'width'     : 1,
  'gutter-in' : .5,
  'gutter-out': .5,
  'shift'     : null,
);
```

## Mixin

### el-sass

el-sass is a multipurpose mixin able to build responsive containers, flex grids and grids items.
It can also be used to easily build other mixins.

```scss
@include el-sass($media, $flow, $width, $gutter-out, $shift, $gutter-in);
```

#### Arguments

An arguments need to be set to `true` to enable its default value.  
`"…"` can be used to enable the default value of the current argument and the following non defined ones.

```scss
@include el-sass("…"); // Set each argument to its default value.
```

- ##### `$media`  

  ###### Description

  Applies a media-query around the generated CSS to build responsive layouts.  
  It accepts a single value or list of two values to set the media-query `min-` and `max-width`.

  ###### Values

  | Value         | Description                                                                              |
  |---------------|------------------------------------------------------------------------------------------|
  | `true`        | Enables the argument default value.                                                      |
  | `"…"`         | Enables the default value for the current argument and the following non defined ones.   |
  | Breakpoint(s) | Uses the `$settings` map to get or calculate the `min-` and `max-width`.                 |
  | CSS value(s)  | Applies this value to the media-query `min-` or `max-width`.                             |
  | `false`       | Disables the media-query or skips `min-width` if a second value is set.                  |

- ##### `$flow`  

  ###### Description

  Set `flex-direction`, `flex-wrap` or `flex-flow`.  
  It accepts a single value or a list of two values.

- ##### `$width`  

  ###### Description

  Set the element width (gutter included).

  ###### Values

  | Value   | Description                                                                            |
  |---------|----------------------------------------------------------------------------------------|
  | `true`  | Enables the argument default value.                                                    |
  | `"…"`   | Enables the default value for the current argument and the following non defined ones. |
  | Ratio   | Calculates the element `width` (gutter included) based on the container `width`.       |
  | `"max"` | Applies a `width` of 100% and a responsive `max-width`.                                |
  | `false` | Disables `width` and `max-width`.                                                      |

- ##### `$gutter-in`  

  ###### Description

  Set paddings from a single value or a list of two or four values (as for the CSS padding rule).  
  Different type of values can be used in a list.

  ###### Values

  | Value                 | Description                                                                            |
  |-----------------------|----------------------------------------------------------------------------------------|
  | `true`                | Enables the argument default value.                                                    |
  | `"…"`                 | Enables the default value for the current argument and the following non defined ones. |
  | Ratio(s)              | Multiplies the gutter value of the related padding side(s).                            |
  | CSS value(s)          | Set this value as the related gutter/padding side(s) .                                 |
  | `("`side`":` value`)` | Set a defined side gutter.                                                             |
  | `false`               | Disables gutter as padding for the related side(s).                                    |

- ##### `$gutter-out`  

  ###### Description

  Set margins from a value or a list of two or four values (as for the CSS margin rule).  
  It also alterates the width if provided, by soustracting the right and left margins from it.

  ###### Values

  | Value                    | Description                                                                               |
  |--------------------------|-------------------------------------------------------------------------------------------|
  | `true`                   | Enables the argument default value.                                                       |
  | `"silent"`               | Alterates the width according to the default argument value without affecting any margin. |
  | `"…"`                    | Enables the default value for the current argument and the following non defined ones.    |
  | Ratio(s)                 | Multiplies the gutter value of the related margin side(s).                                |
  | CSS value(s)             | Set this value as the related gutter/margin side(s) .                                     |
  | `("`side`":` value`)`    | Set a defined side gutter.                                                                |
  | `("silent":` value(s)`)` | Alterates the width according to the provided value(s) without affecting any margin.      |
  | `false`                  | Disables gutter as padding for the related side(s).                                       |

- ##### `$shift`  

  ###### Description

  Alterates margins to positionate the element.

  ###### Values

  | Value          | Description                                                                            |
  |----------------|----------------------------------------------------------------------------------------|
  | `true`         | Enables the argument default value.                                                    |
  | `"pull"`       | Pulls the element on the right side by applying `margin-right: auto`.                  |
  | `"center"`     | Centers the element by setting the right an left margins to `auto`.                    |
  | `"push"`       | Pushes the element on the left side by applying `margin-left: auto`.                   |
  | Ratio (`true`) | Push or pull (if negative) the element according to the container width ratio.
                     If `true` is appended as a second value, it will enable an _apply to next_ option,
                     pulling or pushing the following elements                                              |

## Examples / demos

### Simple responsive grid

#### HTML

```html
<ul class="staff">
  <li class="staff__person staff__person--lead"></li>
  <li class="staff__person"></li>
  <li class="staff__person"></li>
  <li class="staff__person"></li>
  <li class="staff__person"></li>
  <li class="staff__person"></li>
  <li class="staff__person"></li>
  <li class="staff__person"></li>
  <li class="staff__person"></li>
  <li class="staff__person"></li>
</ul>
```

#### SCSS

```scss
.staff {
  @include el-sass("…", $shift: "center") {
    list-style: none;
    background: #eee;
  }

  &__person {
    border: 1px solid #ddd;
    @include el-sass("s" "l", false, 1/2, "…");
    @include el-sass("l", false, 1/4, "…");

    &--lead {
      background: #fff;
      @include el-sass("s" "l", false, 1, "silent");
      @include el-sass("l", false, 1/2, "silent");
    }
  }
}
```

See and resize on [Sassmeister](http://www.sassmeister.com/gist/0a4b4870f20b95404d8d463fa7500693).

### Metro-UI-like responsive grid

#### HTML

```html
<main class="page">

  <article class="page__post post">

    <header class="post__infos infos">
      <h1 class="infos__title"></h1>
      <p class="infos_description"></p>
    </header>

    <img class="post__image" height="240" width="480">

    <p class="post__body"></p>

    <footer class="post__footer"></footer>

  </article>

  <aside class="page__sidebar"></aside>

</div>
```

#### SCSS

```sass
.page {
  background: #eee;
  @include el-sass("…", $shift: "center");
  @include el-sass("s" "m", column, $gutter-out: "silent");

  &__post {
    @include el-sass("s" "l", false, 1);
    @include el-sass("l", false, 2/3);
  }

  &__sidebar {
    border: 1px solid #ddd;
    @include el-sass("s" "l", false, 1, "…");
    @include el-sass("l", false, 1/3, "…");
  }
}

.post {
  @include el-sass("s" "m", column);
  @include el-sass("m", true);

  &__infos {
    @include el-sass("s" "m", false, 1);
    @include el-sass("m", false, 1/2);
  }

  &__image {
    border: 1px solid #ddd;
    background: #fff;
    @include el-sass("s" "m", false, 1, "…");
    @include el-sass("m", false, 1/2, "…");
  }

  &__body,
  &__footer {
    border: 1px solid #ddd;
    @include el-sass("s", false, 1, "…");
  }

  &__body {
    height: 240px;
  }
}

.infos {
  @include el-sass("s" "m", row);
  @include el-sass("m", column);

  &__title,
  &__description {
    border: 1px solid #ddd;
    flex-grow: 1;
    @include el-sass("s" "m", false, 1/2, "…");
    @include el-sass("m", false, 1, "…");
  }
}
```

See and resize on [Sassmeister](http://www.sassmeister.com/gist/2722430257d50d32d2ca662f2ad6d942).

## Add-ons

el-sass is build to provide a generic multipurpose mixin which can be used as is or manipulated to build your owns.
You can also build CSS grids or whatever you need.

* [el-sass-children mixin](/add-ons/children): apply `el-sass` mixin with multiple `width` values to children elements;

## Credits

### Author

[Nicolas Morand](https://twitter.com/NicolasGraph), designer and front-end developer in Strasbourg, France.  
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
