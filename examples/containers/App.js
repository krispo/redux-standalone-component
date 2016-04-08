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