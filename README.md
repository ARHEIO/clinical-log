[![forthebadge](https://forthebadge.com/images/badges/gluten-free.svg)](https://forthebadge.com) [![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://forthebadge.com)

# Access at <https://arhe.io/clinical-log/>

Hosted with <3 via Github Pages

## Quick Notes on archetecture

* Organisms are responsible for the layout of pages and handling of data.
  * They get info from the APIs, and pass this data down to Molecules to be displayed
  * They also get info passed up from Molecules so that they can interact with APIs
* Molecules are responsible for displaying information in a clump. They are composed based on business semantics.
* Atoms are specific comopnents responsible for displaying a single thing. These are components that are one step above a basic HTML tag
  * An example is a component with a simple if-else condition, or at its most basic, a button with custom styles applied
* Theres obviously no API backing this up, but I've structured the service as though there is

---

## Quick notes on app logic

* The point of this is to allow public users to see the newsfeed and react but not much else
  * The reacts are kinda sloppy, I will admit typescript led to some problems with this in terms of disallowing some options
  * A user can click on any react and can spam click them. If this were a full app, there'd be some sort of check to prevent a user from reacting to the same post multiple times. Since this requires a persistent store I've vetoed it for this
* A user can log in with the button in the top corner to get the full interface
  * There's obviously no username/password input, presumably this would just be a pop-up modal or a dedicated auth page to verify credentials and get a token back
  * For this I've ignored authentication past just showing the state
* Once logged in, a user can navigate between the public page and the private log and post to either

---


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
