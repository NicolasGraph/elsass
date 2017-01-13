# Oui_grid children extension

Extend oui_grid by adding a mixin alterating children elements.

## Contents

* [Usage](#usage)
* [Usage](#usage)
* [Mixin](#mixins)
* [Example / demo](#example--demo)
* [Credits](#credits)

## Usage

Import `_oui_grid_children.scss` after `_oui_grid.scss` in your main `.scss` file.

```scss
@import "_oui_grid";
@import "_oui_grid_children";
```

## Mixin

### children

```scss
@include children($media, $flow, $widths, $gutter, $position, $padding);
```

#### children specific changes

- `$widths` (`null`): The only difference with `this` mixin arguments is the ability of `$widths` to receive multiple width values and to define repeat scheme. By default the mixin repeat the `$widths` sequence over and over but you can set the repeat scheme to `"repeat-first"` or `"repeat-last"`.

  ```scss
  @include children("s" "l", 1/2) { … }; // or…
  @include children("s" "l", 1/2 1/4) { … }; // or…
  @include children("s" "l", 1/2 1/4 "repeat-first") { … }; // or…
  @include children($widths: 1/2 1/4 "repeat-last") { … };
  ```

## Example

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
    <li class="catalog_product--last"></li>
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

    .catalog_product--last {
        @include this($position: "push");
    }
}
```

See and play on [Sassmeister](http://www.sassmeister.com/gist/614d42fbe999a66e873f38610fc15072).

## Credits

### Author

[Nicolas Morand](https://twitter.com/NicolasGraph)

### Licence

This project is distributed under the [MIT licence](https://opensource.org/licenses/MIT).

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
