# redux-standalone-component

It's a simple example of how we can create a standalone React component in combination with Redux.
As far as Redux is used as a single global store in React app, we have to adjust all our components with its actions and reducers to the current app configuration.
But what if we want to use the same components in different React apps with different Redux stores? 

Here we create some component boilerplate, that can be used in a different apps.
The basic idea is to pass the data identifier `stateKey` as a props to our component from the parent component
```js
<DemoComponent mapStateToProps="demoComponentData"/>
```
and inside the component we define `mapStateToProps` function 
```js
function mapStateToProps(state, props) {
  return {
    // data prop to be used in component
    data: state[props.stateKey]
  }
}
```
And also combine reducer by key
```js
const reducers = combineReducers({ demoComponentData: demoReducer })
```

## Install

    npm install redux-standalone-component
    
## Usage

Simple example of usage

```js
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './containers/App'
import { demoReducer } from 'redux-standalone-component'
import {data} from './data'

const initialState = {
  demoComponentData: data
}

const reducers = combineReducers({ demoComponentData: demoReducer })

const store = createStore(reducers, initialState)
    
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
```

Class App
```js
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { DemoComponent } from 'redux-standalone-component'

class App extends Component {
  constructor(props){
    super(props)
  }
  render(){
    return <DemoComponent stateKey="demoComponentData"/>
  }
}

export default connect()(App)
```    

## License
MIT