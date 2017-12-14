import React from 'react'
import { connect } from 'react-redux'

import Home from './Home'
import SocialLinks from '../SocialLinks'

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
            <SocialLinks social={ me.social }/>
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