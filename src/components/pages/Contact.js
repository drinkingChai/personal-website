import React from 'react'
import { connect } from 'react-redux'

const Contact = ({ email }) => {
  // business card
  return (
    <div className='contact-container'>
      { email }
    </div>
  )
}

const mapState = ({ me }) => ({ email: me.social && me.social.email })
export default connect(mapState)(Contact)
