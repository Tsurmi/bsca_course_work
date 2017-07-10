### Project Setup:

1) Create a proeject that has:
  `index.html`
  `css/styles.css`
  `README.md`

2) Ensure your `HTML` file is using the bootstrap boiler plate code, add content to your `README.md`

3) Run your project locally using brower-sync to ensure that is is working.

`browser-sync start --server --files "*.html, css/*.css, js/*.js"`

4) Create a repository at Github.com and push your code up.

### What is flexbox?
 - Create responsive layouts without using margin, padding, and floats.
 - Intelligently figures out what do to do with your layout, regardless of size and context.

### Resources
- [CSS Tricks](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [Flexbox Froggy](http://flexboxfroggy.com/)

### Display Flex
In order to implement flex properties you need a `flex container` (parent) which will make all the immediate children `flex items`


### Flex direction (main and cross axis)
  - row (default) / row-reverse
  - column / column-reverse


#### justify-content: What to do with the main axis extra space?
flex-end, flex-start, center, space-between, space-around



#### align-items: What to do with the cross axis extra space?
flex-end, flex-start, center, space-between, space-around







### Using Calc
If we want our items to take up exactly 1/3rd of the screen, yet have a little margin.


### order: a flex-item property
How to reorder elements of the DOM. Works similar to z-index, default is 0;


### Vertically center example
flex-direction: column;
min-height: 100vh;
justify-content: center

## Align items: Instead of working on main access; working on cross-access;
Give container some height; stretch is the default; flex-start; baseline;

## Align content: what do we do with the extra space when we have multiple rows? space between; space-around;
align-content: center;
justify-content: center;

### Align self
can apply to individual item

### Sizing with the flex property
Note: Flex item!
flex: 1; distribute evenly.
Can tell box 2 to have double the space.

flex: 1 is actually flex-grow; flex-shrink; and flex-basis
too much space, not enough,

flex-grow default is 0;

### Flex Container within flex container
Build panels example. and show how to build a cool little footer for each example.

----
