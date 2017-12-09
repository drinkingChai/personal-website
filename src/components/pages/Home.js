import React from 'react'
import { connect } from 'react-redux'

import Projects from './Projects'

const Home = ({ me }) => {
  return (
    <div>
      <img src={ me.profilePic } />
      <h1>{ me.headline }</h1>
      <h3>{ me.social && me.social.linkedin }</h3>

      <Projects />
    </div>
  )
}

const mapState = ({ me }) => ({ me })
export default connect(mapState)(Home)