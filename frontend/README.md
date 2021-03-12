# React Frontend and Python Backend E-Commerce App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Installation
* [Axios](https://www.npmjs.com/package/axios) - Promise based HTTP client for the browser and node.js
* Used Bootswatch for the Bootstrap template
* Redux
* React-Redux
* Redux-thunk
* redux-devtools-extensions

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


## Notes
Inline If with Logical && Operator
`ProductScreen.js` Line 77
`{product.countInStock > 0 && (` is an *inline if with Logical && Operator* [link](https://reactjs.org/docs/conditional-rendering.html#inline-if-with-logical--operator)
* It works because in JavaScript, true && expression always evaluates to expression, and false && expression always evaluates to false.
Therefore, if the condition is true, the element right after && will appear in the output. If it is false, React will ignore and skip it.
