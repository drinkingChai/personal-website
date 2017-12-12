import React, { Component, Children } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { toggleTransition } from '../actions'

class LinkTransition extends Component {
  transition = () => {
    const { transition, location, to, history, toggleTransition } = this.props
    if (transition || location.pathname == to) return
    toggleTransition()
    setTimeout(() => {
      history.push(to)
    }, 2000)
    setTimeout(() => {
      toggleTransition()
    }, 4500)
  }

  render = () => {
    return (
      <a onClick={ this.transition } className={ this.props.className } style={{ cursor: 'pointer' }}>{ Children.map(this.props.children, (child, i) => child)}</a>
    )
  }
}

const mapState = ({ transition }) => ({ transition })
export default withRouter(connect(mapState, { toggleTransition })(LinkTransition))
