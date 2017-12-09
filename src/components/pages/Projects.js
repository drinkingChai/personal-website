import React from 'react'
import { connect } from 'react-redux'

import IconLink from '../iconLinkGenerator'

export const Projects = ({ projects }) => {
  return (
    <div className='projects-container'>
    {
      projects.length && projects.map((project, i) =>
        <div className='project-card' key={ i }>
          <h3>{ project.name }</h3>
          <div className='project-details-container'>
            <h5>{ project.role }</h5>
            <h5>@{ project.location }</h5>
            <p>{ project.description }</p>
          </div>

          <div className='links-container'>
            { project.url && <p><a href={ project.url } target='_blank'>{ project.url }</a></p> }
            <div className='social-links'>
            {
              project.links.map((link, i) =>
                <IconLink key={ i } url={ link.url } type={ link.type } />
              )
            }
            </div>
          </div>
          <div className='tech-used-container hidden'>
            <span>Created with:</span>
            {
              project.techUsed.map((tech, i) => <span key={ i }>{ tech }</span>)
            }
          </div>
        </div>
      )
    }
    </div>
  )
}

export const MyProjects = ({ projects }) => {
  return (
    <div>
      <h3>Projects</h3>

      <Projects projects={ projects } />
    </div>
  )
}

const mapState = ({ projects }) => ({ projects })
export default connect(mapState)(MyProjects)