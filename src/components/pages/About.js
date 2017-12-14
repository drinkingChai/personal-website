import React from 'react'
import { connect } from 'react-redux'

import Home from './Home'

// add blog and social icons

const About = ({ me }) => {
  window.scrollTo(0, 0)
  
  return (
    <div className='about-page'>
      <div className='about-content'>
        <h3>About</h3>
        <div className='info'>
          <div>
            <span className='label'>Me:</span>
            <p>{ me.aboutmsg }</p>
          </div>
          <div>
            <span className='label'>My Skills:</span> 
            <p>{ me.proficiencies && me.proficiencies.join(', ') }</p>
          </div>
          <div>
            <span className='label'>Misc:</span> 
            <p>{ me.aboutmisc }</p>
          </div>
          <div>
            <span className='label'>Social:</span> 
            <p className='social-links'>
              <a href={ me.social && me.social.linkedin } target='_blank'><i className="fab fa-linkedin"></i></a>
              <a href={ me.social && me.social.medium } target='_blank'><i className="fab fa-medium"></i></a>
              <a href={ me.social && me.social.twitter } target='_blank'><i className="fab fa-twitter-square"></i></a>
              <a href={ me.social && me.social.facebook } target='_blank'><i className="fab fa-facebook-square"></i></a>
            </p>
          </div>
        </div>
        <div className='image-container'>
          <img src='../public/assets/profilePic.jpg' />
        </div>
      </div>
    </div>
  )
}

const mapState = ({ me }) => ({ me })
export default connect(mapState)(About)