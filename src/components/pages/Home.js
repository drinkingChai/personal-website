import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { Projects } from './Projects'

const Home = ({ me, projects }) => {
  return (
    <div className='home'>
      <div className='me-container'>
        <div className='me'>
          <img src={ '/public/assets/profilePic.jpg' } />
          <div className='headline-container'>
            <h3>{ me.headline }</h3>
            <h4>{ me.subheader }</h4>
          </div>

          <div className='btn-container'>
            <Link to='/projects' className='btn default'>Projects</Link>
            <a href={ me.social && me.social.resume } target='_blank' className='btn default'>Resume</a>
            <Link to='/contact' className='btn default'>Contact</Link>
          </div>
        </div>
      </div>

      <div className='home-projects-container'>
        <Projects projects={ projects.splice(0, 5) } />
      </div>
    </div>
  )
}

const mapState = ({ me, projects }) => ({ me, projects })
export default connect(mapState)(Home)