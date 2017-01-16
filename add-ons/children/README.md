# elsass children extension

Extend [elsass](//github.com/NicolasGraph/elsass) by adding a mixin alterating children elements.

## Contents

* [Usage](#usage)
* [Usage](#usage)
* [Mixin](#mixins)
* [Example / demo](#example--demo)
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

## Example / demo

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
    @include this(false, row wrap, "max-width", true, "center", true);
    list-style: none;
    background: #eee;

    @include children("s" "l", false, 1 1/2 "repeat-last", true, false, true);
    @include children("l", false, 1/2 1/4 "repeat-last", true, false, true);
    @include children { background: #ddd };
}
```

See and play on [Sassmeister](http://www.sassmeister.com/gist/614d42fbe999a66e873f38610fc15072).

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
