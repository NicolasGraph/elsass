# elsass CSS extension

Extend [elsass](//github.com/NicolasGraph/elsass) by adding an old school CSS grid with defined classes or placeholders.

## Contents

* [Usage](#usage)
* [Usage](#usage)
* [Settings](#settings)
* [Classes](#classes)
* [Example / demo](#example--demo)
* [Credits](#credits)

## Usage

Import `elsass_css_grid.scss` after `elsass.scss` in your main `.scss` file.

```scss
@import "elsass";
@import "elsass_css_grid";
```

## Settings

* `$max-col-number: 12;`
* `$use-placeholders: false;`
Change it to true to use `@extend`.
* `$irreducible: false;`
If true, the generated CSS grid will make each [irreducible fraction](//en.wikipedia.org/wiki/Irreducible_fraction) from 1/1 to `$max-col-number`/`$max-col-number` available.
While in a standard grid `.s-3of12` should be replaced by `.s-1of4` (1/4 beeing the irreducible fraction of 3/12), you would also be able to use `s-1of5`; making the grid more flexible.

## Classes and placeholders

### Containers

* `.flex-row`;
* `.flex-grid`;

### Items

* `.s-3of12` where _s_ is a custom breakpoint set as `$settings` map key.

## Example

### Using classes

```html
<div class="flex-grid">
    <div class="s-3of12"> // or class="s-1of4"
        …
    </div>
    …
</div>
```

### Using placeholders

```html
<div class="catalog">
    <div class="catalog_product"></div>
    <div class="catalog_product"></div>
    <div class="catalog_product"></div>
    <div class="catalog_product"></div>
    <div class="catalog_product"></div>
    <div class="catalog_product"></div>
    <div class="catalog_product"></div>
    <div class="catalog_product"></div>
    <div class="catalog_product"></div>
    <div class="catalog_product"></div>
</div>
```

```scss
.catalog {
    @extend %flex-grid;

    &_product {
        @extend %s-3of12; // or @extend %s-1of4;
    }
}
```

See and play on [Sassmeister](//www.sassmeister.com/).

## Credits

### Author

[Nicolas Morand](https://twitter.com/NicolasGraph)

### Licence

This project is distributed under the [MIT licence](https://opensource.org/licenses/MIT).

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
