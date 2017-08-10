..import and export..

When exporting more than one thing. You have to give things names.

When returning to one item you can use the "lambda"
i.e. But all of these will achieve the same outcome.

1.)  const FancyButton = () => <button> Click Me </button>

2.)  const FancyButton = () => (
    <button> Click Me </button>
    )

3.)  const FancyButton = () +> {
    return (
      <button> Click Me </button>
      )
  }
export default FancyButton;

You can also use the name to export i.e. export {FancyButton}
//When using "NAME" to export you need to wrap the "NAME" around {}

You can export three buttons from one file by doing the following

export {FancyButton}
export {MoreFancyButton}
export {SuperFancyButton}

When importing these buttons you would do the following
// import {FancyButton, MoreFancyButton, SuperFancyButton} from ''./components/Button'

You can simplify this even more by just doing the following

import * as Buttons from './Buttons'
// You would then have to change the file paths to Buttons
// By using * you now have access to all the Buttons.

export const MAX_WIDTH = 10

or

const MAX_WIDTH = 10
export {MAX_WIDTH}
