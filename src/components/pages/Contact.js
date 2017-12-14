import React from 'react'
import { connect } from 'react-redux'

import { CopyToClipboard } from 'react-copy-to-clipboard'
import SocialLinks from '../SocialLinks'

const Contact = ({ social }) => {
  // business card
  if (!social) return <div></div>
    
  return (
    <div className='contact-container'>
      <div className='emails'>
        <h3>Contact</h3>
        <p>{ social.email }</p>
        <CopyToClipboard text={ social.email }><span>click to copy my email address</span></CopyToClipboard>
        <p>Or</p>
        <a href={ `mailto:${social.email}` }>open your email app</a>
        <br/>
        <br/>
        <a href={ social.resume } target='_blank'>view my resume</a>
        <br/>
        <SocialLinks social={ social } />
      </div>
    </div>
  )
}

const mapState = ({ me }) => ({ social: me.social })
export default connect(mapState)(Contact)
