# redux-standalone-component

It's a simple example of how we can create a standalone React component in combination with Redux.
As far as Redux is used as a single global store in React app, we have to adjust all our components with its actions and reducers to the current app configuration.
But what if we want to use the same components in different React apps with different Redux stores? 

Here we create some component boilerplate, that can be used in a different apps.
The basic idea is to pass the `mapStateToProps` function as a props to our component from the parent component
```js
demoComponentMapStateToProps(state, props){
  return {
    // data, x, y, ... or any other properties and its format are predefined by the component
    // so that the component can use it like for example
    //     const { data, x, y } = this.props
    //     data.map(d => x(d) + y(d)) 
    data: state.demoComponentData,
    x: d => d.prop1,
    y: d => d.prop2
  }
}
...
<DemoComponent mapStateToProps={this.demoComponentMapStateToProps}/>
```
And also combine reducers by data key
```js
const reducers = combineReducers({ 
  demoComponentData: demoReducer,
  someOtherData: otherReducer   
})
```

Inside a standalone demo component we define `mapStateToProps` function as
```js
function mapStateToProps(state, props) {
  return props.mapStateToProps(state, props)
}
```

## Install

    npm install redux-standalone-component
    
## Usage

Simple example of usage

```js
import React from 'react'
import { render } from 'react-dom'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import App from './containers/App'
import { demoReducer } from 'redux-standalone-component'
import {data} from './data'

const initialState = {
  demoComponentData: [
    { prop1: 1, prop2: 2 },
    { prop1: 3, prop2: 4 },
    { prop1: 5, prop2: 6 },
    { prop1: 7, prop2: 8 }
  ]
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
  demoComponentMapStateToProps(state, props){
    return {
      data: state.demoComponentData,
      x: d => d.prop1,
      y: d => d.prop2
    }
  }
  render(){
    return <DemoComponent mapStateToProps={this.demoComponentMapStateToProps}/>
  }
}

export default connect()(App)
```    

## Example
Locally,

1. Clone the repo
2. $cd examples
2. $npm install
3. $npm start
4. go to `localhost:3000` 

You should see a simple list of sums: `prop1`+`prop2`

## License
MIT