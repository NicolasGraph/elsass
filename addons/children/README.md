# Oui_grid children extension

Extend oui_grid by adding a mixin alterating children elements.

## Contents

* [Usage](#usage)
* [Usage](#usage)
* [Mixin](#mixins)
* [Example / demo](#example-demo)
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
@include children($media, $flow, $width, $gutter, $position, $padding);
```

#### children specific changes

- `$width` (`null`): factor (.5) or fraction (1/2) of the parent width.

  ```scss
  @include children("s" "l", 1/2) { … }; // or…
  @include children("s" "l", 1/2 1/4) { … };
  ```

- `$repeat` (`null`): extra value for `$width` to define the repeat scheme to use.

  ```scss
  @include children("s" "l", 1/2 1/4 "repeat-last") { … };
  ```

## Example

```html
<div class="my-grid">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
</div>
```

```scss
.my-grid {
    @include this(false, row wrap, "max-width");
    @include children("s" "l", false, 1 1/2 1/2, true);
    @include children("l", false, 1/2 1/4 "repeat-last", true);
}
```

See and play on [Sassmeister](//www.sassmeister.com/).

## Credits

### Author

[Nicolas Morand](https://twitter.com/NicolasGraph)

### Licence

This project is distributed under the [MIT licence](https://opensource.org/licenses/MIT).

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
