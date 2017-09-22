# mv

Vue components for metamn

## Ideas

### Ad hoc / No framework

- Do not try to save every component as a framework item
- That will make every site look the same ... se metamn, beat, gust, pulse ... etc
- Instead work with as less components possible: fonts, colors, links, intrinsic ratio, images
- Create new, unique components like text flip, text spacer etc.

### Simple components

- A component does just one job but does it well
- Do not stuff everything inside a component
- For example, `text-spacer` does only split a text into a char array, and, do not even displays as `flex`. Then it is wrapped into a box (`intrinsic-ratio`) and styled separately in the parent component.

### Do not reinvent the wheel

- When adding a new component look for if there is already one done well
- Like progressive image: it does placeholding, responsiveness, and lazy loading out of the box
- Or the carousel component

## The joys

- adding a component is a breeze
- CSS Modules makes you thinking in self-contained way
- you can mix CSS Modules with SCSS, no problem
- you write more `html` than `js` or `css`

## SCSS mixins and imports

- Vue single file components has absolutely no support for SCSS mixins and imports


## Testing

- both unit and e22 tests are running fine

## Documentation

- vue-styleguidist is the only one to have inline + markdown documentation support
- vue-play and storybook docs has to be written separately from the component which is nonsense
- vue-stylegudist cannot document HTML, CSS, and just a very limited JS (props, methods)

Nice to try:

- https://github.com/vuedoc/md
- https://github.com/vuedoc/parser
- https://docsify.js.org/#/?id=docsify
