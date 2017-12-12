import React, { Component, Children } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { toggleTransition } from '../actions'

class LinkTransition extends Component {
  transition = () => {
    if (this.props.transition) return
    this.props.toggleTransition()
    setTimeout(() => {
      this.props.history.push(this.props.to)
    }, 2000)
    setTimeout(() => {
      this.props.toggleTransition()
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
