import React, { Component } from 'react'
import { connect } from 'react-redux'
import { sendMail } from '../../actions'

import Modal from '../Modal'
import { SentSuccessMessage, SendingEmailMessage } from '../messages'

class Contact extends Component {
  state = {
    email: '',
    message: '',
    sendingStatus: false,
    pseudoStatus: false,
    modalActive: false
  }

  handleChange = name => ev => {
    this.setState({ [name]: ev.target.value })
  }

  handleSubmit = ev => {
    ev.preventDefault()
    this.setState({ sendingStatus: true, pseudoStatus: true, modalActive: true })

    setTimeout(() => {
      if (!this.state.sendingStatus) {
        this.setState({ pseudoStatus: false, email: '', message: '' })
        setTimeout(() => {
          this.setState({ modalActive: false })
        }, 2100)
      }
      else this.setState({ pseudoStatus: false })
    }, 3000)

    this.props.sendMail(this.state)
      .then(() => {
        if (!this.state.pseudoStatus) {
          this.setState({ sendingStatus: false, email: '', message: '' })
          setTimeout(() => {
            this.setState({ modalActive: false })
          }, 2100)
        }
        else this.setState({ sendingStatus: false })
      })
  }

  render = () => {
    const { me } = this.props
    me.social = me.social || {}

    return (
      <div className='contact-container'>
        {
          this.state.modalActive ?
            this.state.pseudoStatus || this.state.sendingStatus ?
            <Modal><SendingEmailMessage /></Modal> :
            <Modal className='fading'><SentSuccessMessage /></Modal> :
            null
        }
        <form className='contact-form-container' onSubmit={ this.handleSubmit }>
          <h3>Send me a message!</h3>
          <input value={ this.state.email } onChange={ this.handleChange('email') } placeholder='Your email' type='email' required/>

          <textarea value={ this.state.message } onChange={ this.handleChange('message') } rows={ 10 } placeholder='Message'></textarea>

          <div>
            <button className='btn default'>Contact</button>
          </div>
        </form>

        <div className='social-container'>
          <h3>You can also reach me via: </h3>
          <div className='contact-links'>
            <a href={ me.social.linkedin } className='btn linkedin' target='_blank'>LinkedIn</a>
            <a href={ `mailto:${ me.social.email }` } className='btn email'>{ me.social.email }</a>
          </div>
        </div>
      </div>
    )
  }
}

const mapState = ({ me }) => ({ me })
export default connect(mapState, { sendMail })(Contact)
