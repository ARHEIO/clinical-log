[![forthebadge](https://forthebadge.com/images/badges/gluten-free.svg)](https://forthebadge.com) [![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://forthebadge.com)

# Access at <https://arhe.io/clinical-log/>

Hosted with <3 via Github Pages

## Quick Notes

* Organisms are responsible for the layout of pages and handling of data.
  * They get info from the APIs, and pass this data down to Molecules to be displayed
  * They also get info passed up from Molecules so that they can interact with APIs
* Molecules are responsible for displaying information in a clump. They are composed based on business semantics.
* Atoms are specific comopnents responsible for displaying a single thing. These are components that are one step above a basic HTML tag
  * An example is a component with a simple if-else condition, or at its most basic, a button with custom styles applied

## TODO

* Remove references to DBD Randomiser, (the template for this codebase)
* Create the post component
  * Create a full clinical post
  * Create a full public post
  * Pull the individual components out into Atoms
* Update header to include links to either page
* Create fake posts and return them from the service
  * Add pagination?
* Add fake auth step for the clinical log

## Running the App

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
