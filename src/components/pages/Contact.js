import React, { Component } from 'react'
import { connect } from 'react-redux'

class Contact extends Component {
  state = {
    email: '',
    message: ''
  }

  handleChange = name => ev => {
    this.setState({ [name]: ev.target.value })
  }

  handleSubmit = ev => {
    ev.preventDefault()
    console.log(this.state)
  }

  render = () => {
    const { me } = this.props
    me.social = me.social || {}

    return (
      <div className='contact-container'>
        <div className='social-container'>
          <h3>You can reach me via: </h3>
          <div className='contact-links'>
            <a href={ me.social.linkedin } className='btn linkedin' target='_blank'>LinkedIn</a>
            <a href={ `mailto:${ me.social.email }` } className='btn email'>{ me.social.email }</a>
          </div>
        </div>

        <form className='contact-form-container' onSubmit={ this.handleSubmit }>
          <h3>Or contact me below!</h3>
          <input value={ this.email } onChange={ this.handleChange('email') } placeholder='Email' type='email' required/>

          <textarea value={ this.message } onChange={ this.handleChange('message') } rows={ 10 } placeholder='Message'></textarea>

          <div>
            <button className='btn default'>Contact</button>
          </div>
        </form>
      </div>
    )
  }
}

const mapState = ({ me }) => ({ me })
export default connect(mapState)(Contact)
