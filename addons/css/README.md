# Oui_grid CSS extension

Extend oui_grid by adding an old school CSS grid with defined classes or placeholders.

* [Usage](#usage)
* [Settings](#settings)
* [Classes](#classes)
* [Credits](#credits)

## Usage

Import `_oui_grid_css_grid.scss` after `_oui_grid.scss` in your main `.scss` file.

```scss
@import "_oui_grid";
@import "_oui_grid_css_grid";
```

## Settings

* $max-col-number: 12;
* $use-placeholders: false;
Change it to true to use @extend.
* $irreducible: false;
If true, the generated CSS grid will make each irreducible fraction from 1/1 to $max-col-number/$max-col-number available.
While in a standard grid .s-3of12 would be replace by .s-1of4 (1/4 beeing the irreducible value of 3/12), you would also be able to use s-1of5; making the grid more flexible.

## Classes and placeholders

### Containers

* .flex-row;
* .flex-grid;

### Items

* .breakpoint-3of12 where _breakpoint_ is a custom breakpoint set as $settings map key.

## Credits

### Author

[Nicolas Morand](https://twitter.com/NicolasGraph)

### Licence

This project is distributed under the [MIT licence](https://opensource.org/licenses/MIT).

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
