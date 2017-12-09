import React, { Component } from 'react'
import { connect } from 'react-redux'

class Contact extends Component {
  state = {
    email: '',
    blurb: ''
  }

  render = () => {
    return (
      <div>
        <input />
        <textarea></textarea>
      </div>
    )
  }
}

export default connect()(Contact)