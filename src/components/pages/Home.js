import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { Projects } from './Projects'

const Home = ({ me, projects }) => {
  window.scrollTo(0, 0)
  
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
            <Link to='/projects' className='btn inverse'>Projects</Link>
            <a href={ me.social && me.social.resume } target='_blank' className='btn inverse'>Resume</a>
            <Link to='/contact' className='btn inverse'>Contact</Link>
          </div>
        </div>
      </div>

      <div className='home-projects-container'>
        <Projects projects={ projects.splice(0, 2) } />
        <Link to='/projects' className='btn inverse see-more'>See more!</Link>
      </div>
    </div>
  )
}

const mapState = ({ me, projects }) => ({ me, projects })
export default connect(mapState)(Home)