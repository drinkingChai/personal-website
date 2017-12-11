import React from 'react'
import { connect } from 'react-redux'

import IconLink from '../iconLinkGenerator'

export const Projects = ({ projects }) => {
  window.scrollTo(0, 0)
  
  return (
    <div className='projects-container'>
    {
      projects.length && projects.map((project, i) =>
        <div className='project-card' key={ i }>
          <div className='project-screen-container'>
          {
            project.screenshots && project.screenshots.map((screen, i) =>
              <img key={ i } src={ `../data/${screen}` } className='screenshot'/>
            )
          }
          </div>
          <div className='project-info'>
            <h3>{ project.name }</h3>
          </div>
        </div>
      )
    }
    </div>
  )
}

export const MyProjects = ({ projects }) => {
  return (
    <div className='my-projects'>
      <h3 className='page-title'>Projects</h3>

      <Projects projects={ projects } />
    </div>
  )
}

const mapState = ({ projects }) => ({ projects })
export default connect(mapState)(MyProjects)