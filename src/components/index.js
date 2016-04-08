import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'

class DemoComponent extends Component {
  constructor(props){
    super(props)
  }
  render(){
    const { data, x, y } = this.props
    const list = data.map(d => {
      const sum = x(d) + y(d)
      return <li>{sum}</li>
    })
    return <ul>{list}</ul>
  }
}

function mapStateToProps(state, props) {
  // required props
  //   data - array of objects, eg: [{prop1: 1, prop2: 2}, {prop1: 3, prop2: 4}, ...]
  //   x - query function of the first data prop, eg: x = d => d.prop1
  //   y - query function of the second data prop, eg: y = d => d.prop2
  return props.mapStateToProps(state, props);
}

export default connect(mapStateToProps, actions)(DemoComponent)