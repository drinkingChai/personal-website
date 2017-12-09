import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import Nav from './Nav'
import Routes from './Routes'
import store from '../store'
import { fetchMe, fetchProjects } from '../actions'

class Root extends React.Component {
  componentDidMount = () => {
    store.dispatch(fetchMe())
    store.dispatch(fetchProjects())
  }

  render = () => {
    return (
      <div>
        <Nav />

        <Routes />
      </div>
    )
  }
}

export default withRouter(Root)