# elsass children extension

Extend [elsass](//github.com/NicolasGraph/elsass) by adding a mixin alterating children elements.

## Contents

* [Usage](#usage)
* [Usage](#usage)
* [Mixin](#mixins)
* [Examples / demos](#examples--demos)
* [Credits](#credits)

## Usage

Import `elsass_children.scss` after `elsass.scss` in your main `.scss` file.

```scss
@import "elsass/core/elsass";
@import "elsass/add-ons/elsass_children";
```

## Mixin

### children

```scss
@include children($media, $flow, $widths, $gutter, $position, $padding);
```

#### children specific changes

- `$widths` (`null`): The only difference with `this` mixin arguments is the ability of `$widths` to receive multiple width values and to define a repeat scheme. By default the mixin repeat the `$widths` sequence over and over but you can set the repeat scheme to `"repeat-first"` or `"repeat-last"`.

  ```scss
  @include children("s" "l", row wrap, 1/2) { … }; // or…
  @include children("s" "l", row wrap, 1/2 1/4) { … }; // or…
  @include children("s" "l", row wrap, 1/2 1/4 "repeat-first") { … }; // or…
  @include children($widths: 1/2 1/4 "repeat-last") { … };
  ```

## Examples / demos

### Simple grid

```html
<ul class="catalog">
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
</ul>
```

```scss
.catalog {
    @include this("…", $position: "center") {
        list-style: none;
        background: #eee;
    }

    @include children { border: 1px solid #ddd; };
    @include children("s" "l", false, 1 1/2 "repeat-last", "…");
    @include children("l", false, 1/2 1/4 "repeat-last", "…");

    & :first-child { background: #fff; }
}
```

See and resize on [Sassmeister](http://www.sassmeister.com/gist/614d42fbe999a66e873f38610fc15072).

### Metro-UI-like grid

```html
<main class="page">
    <article class="page_post post">
        <header class="infos">
            <h1></h1>
            <p></p>
        </header>
        <img class="image" height="240" width="480">
        <p class="body"></p>
        <footer class="footer"></footer>
    </article>
    <aside class="page_sidebar"></aside>
</div>
```

```scss
.page {
    background: #eee;
    @include this("…", $position: "center");
    @include this("s" "m", column, "…");

    &_post {
        @include this("s" "l", false, 1);
        @include this("l", false, 2/3);
    }

    &_sidebar {
        border: 1px solid #ddd;
        @include this("s" "l", false, 1, "…");
        @include this("l", false, 1/3, "…");
    }
}

.post {
    @include this("s" "m", column);
    @include this("m", row wrap);

    @include children { border: 1px solid #ddd; }
    @include children("s" "m", false, 1, "…");
    @include children("m", false, 1/2 1/2 1 "repeat-last", "…");

    & > :first-child {
        border: none;
        @include this("s" "m", false, 1, 0, false, 0);
        @include this("m", false, 1/2, 0, false, 0);
    }
}

.infos {
    @include this("m", column);

    @include children {
        border: 1px solid #ddd;
        flex-grow: 1;
    }
    @include children("s" "m", false, 1/2, "…");
    @include children("m", false, 1, "…");
}

.image {
    background: #fff;
    padding: 0;
}

.body { height: 240px; }
```

See and play on [Sassmeister](http://www.sassmeister.com/gist/f000107b5994d2113b23772524a539c5).

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
