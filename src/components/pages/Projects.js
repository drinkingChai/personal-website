import React from 'react'
import { connect } from 'react-redux'

const Projects = ({ projects }) => {
  return (
    <div>
      <h3>Projects</h3>

      <div className='projects-container'>
      {
        projects.length && projects.map((project, i) =>
          <div className='project-card' key={ i }>
            <h3>{ project.name }</h3>
            <p>{ project.description }</p>
            <div className='tech-used-container'>
            {
              project.techUsed.map((tech, i) => <span key={ i }>{ tech }</span>)
            }
            </div>
            <div className='links-container'>
            {
              project.links.map((link, i) =>
                <span key={ i }>
                { /* link generator */ }
                </span>
              )
            }
            </div>
          </div>
        )
      }
      </div>
    </div>
  )
}

const mapState = ({ projects }) => ({ projects })
export default connect(mapState)(Projects)