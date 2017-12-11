import React from 'react'
import { connect } from 'react-redux'

import Home from './Home'

const About = ({ me }) => {
  return (
    <div className='about'>
    {
      // <div className='about-splash'>
      //   <div className='slides'>
      //     <div className='slide slide-1'></div>
      //     <div className='slide slide-2'><div className='batmobile'></div></div>
      //     <div className='slide slide-3'></div>
      //   </div>
      //   <Home />
      // </div>
    }

      <div className='about-content'>
        <img src='../public/assets/profilePic.jpg' />
        <div className='info'>
          <h3>About</h3>
          <div>
            <span className='label'>Me:</span>
            <p>{ me.aboutmsg }</p>
          </div>
          <div>
            <span className='label'>My Skills:</span> 
            <p>{ me.proficiencies && me.proficiencies.join(', ') }</p>
          </div>
        </div>
      </div>
    </div>
  )
}

const mapState = ({ me }) => ({ me })
export default connect(mapState)(About)