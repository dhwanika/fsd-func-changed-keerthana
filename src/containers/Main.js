import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import RootContainer from './RootContainer'

class Main extends Component {
  render () {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path='/' component={RootContainer} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default Main