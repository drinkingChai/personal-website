import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { Projects } from './Projects'

const Home = ({ me, projects }) => {
  window.scrollTo(0, 0)
  
  return (
    <div className='home'>
      <div className='me'>
        <div className='click-the-bat'>Click the bat!</div>
        <div className='batman'></div>
        <h1>Wasif Zaman</h1>
        <h2>Full Stack Developer</h2>
      </div>
    </div>
  )
}

const mapState = ({ me, projects }) => ({ me, projects })
export default connect(mapState)(Home)