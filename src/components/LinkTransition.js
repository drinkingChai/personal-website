import React, { Component, Children } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { toggleTransition } from '../actions'

class LinkTransition extends Component {
  transition = () => {
    this.props.toggleTransition()
    setTimeout(() => {
      this.props.history.push(this.props.to)
    }, 2000)
    setTimeout(() => {
      this.props.toggleTransition()
    }, 4500)
  }

  render = () => {
    console.log(this.props)
    return (
      <a onClick={ this.transition } className={ this.props.className }>{ Children.map(this.props.children, (child, i) => child)}</a>
    )
  }
}

export default withRouter(connect(null, { toggleTransition })(LinkTransition))
