import React from 'react'
import { render } from 'react-dom'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import App from './containers/App'
import { demoReducer } from 'redux-standalone-component'

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



