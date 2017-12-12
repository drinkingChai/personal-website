import React from 'react'
import { connect } from 'react-redux'

import { CopyToClipboard } from 'react-copy-to-clipboard'

const Contact = ({ email }) => {
  // business card
  return (
    <div className='contact-container'>
      <div className='emails'>
        <h3>Contact</h3>
        <p>{ email }</p>
        <CopyToClipboard text={ email }><span>Click to copy my email address</span></CopyToClipboard>
        <a href={ `mailto:${email}` }>Open your email app</a>
      </div>
    </div>
  )
}

const mapState = ({ me }) => ({ email: me.social && me.social.email })
export default connect(mapState)(Contact)
