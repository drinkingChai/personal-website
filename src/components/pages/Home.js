import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { Projects } from './Projects'

const Home = ({ me, projects, className }) => {
  window.scrollTo(0, 0)
  
  return (
    <div className={ `home ${className || ''}` }>
      <div className='me'>
        <div className='click-the-bat'>Click the bat!</div>
        <Link to='/about' className='batman'></Link>
        <h1>Wasif Zaman</h1>
        <h2>Full Stack Developer</h2>
      </div>
    </div>
  )
}

const mapState = ({ me, projects }) => ({ me, projects })
export default connect(mapState)(Home)