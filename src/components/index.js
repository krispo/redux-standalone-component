import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'

class DemoComponent extends Component {
  constructor(props){
    super(props)
  }
  render(){
    return <div>Hello World!</div>
  }
}

function mapStateToProps(state, props) {
  return typeof props.stateKey === 'undefined'
    ? state
    : state[props.stateKey];
}

export default connect(mapStateToProps, actions)(DemoComponent)