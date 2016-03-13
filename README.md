# redux-standalone-component

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