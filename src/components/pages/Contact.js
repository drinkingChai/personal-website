import React from 'react'
import { connect } from 'react-redux'

import { CopyToClipboard } from 'react-copy-to-clipboard'

const Contact = ({ email, resume }) => {
  // business card
  return (
    <div className='contact-container'>
      <div className='emails'>
        <h3>Contact</h3>
        <p>{ email }</p>
        <CopyToClipboard text={ email }><span>click to copy my email address</span></CopyToClipboard>
        <p>Or</p>
        <a href={ `mailto:${email}` }>open your email app</a>
        <br/>
        <br/>
        <a href={ resume } target='_blank'>view my resume</a>
      </div>
    </div>
  )
}

const mapState = ({ me }) => ({ email: me.social && me.social.email, resume: me.social && me.social.resume })
export default connect(mapState)(Contact)
