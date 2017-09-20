# mv

Vue components for metamn

## This version

- goes with SCSS which is cumbersome
- e2e tests works when empty typography IDs are inserted into the html which is ugly

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
