import React from 'react'
import { connect } from 'react-redux'

import IconLink from '../iconLinkGenerator'

export const Projects = ({ projects }) => {
  window.scrollTo(0, 0)
  
  return (
    <div className='projects-container'>
      <h3 className='page-title'>Projects</h3>
      {
        projects.length && projects.map((project, i) =>
          <div className='project-card' key={ i }>
            <div className='project-info'>
              <h4>{ project.name }</h4>
              <h5>{ project.role }</h5>
              <h5>@{ project.location }</h5>
            </div>
            <p>{ project.description }</p>
          </div>
        )
      }
    </div>
  )
}

const mapState = ({ projects }) => ({ projects })
export default connect(mapState)(Projects)