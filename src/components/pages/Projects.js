import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link as ScrollLink, Element } from 'react-scroll'

import IconLink from '../iconLinkGenerator'

class Projects extends Component {
  state = { activeProject: 0 }

  componentDidMount = () => {
    window.scrollTo(0, 0)
  }

  scrollTo = i => {
    this.setState({ activeProject: i })
  }
  
  render = () => {
    const { projects } = this.props

    return (
      <div className='projects-container'>
        <div className='bubble-scrollbar'>
        {
          projects.length && projects.map((project, i) => 
            <ScrollLink
              to={ `project-${i}` }
              smooth={ true }
              offset={ -80 }
              duration={ 300 }
              spy={ true }
              activeClass={ 'active' }
              className='bubble'
              key={ i }
              onClick={ () => this.scrollTo(i) }></ScrollLink>
          )
        }
        </div>
        <h3 className='page-title'>Projects</h3>
        <div className='projects-card-container'>
          {
            projects.length && projects.map((project, i) =>
              <Element className='project-card element' key={ i } name={ `project-${i}` }>
                { project.thumbnail ?
                  <div className='thumbnail-container'>
                    <img src={ project.thumbnail } />
                  </div> : null }
                <div className='project-info'>
                  <h4>{ project.name }</h4>
                  <p>{ project.description }</p>
                  <div className='project-links'>
                    <a href={ project.url } target='_blank'>Demo</a>
                    <a href={ project.github } target='_blank'>Code</a>
                  </div>
                </div>
              </Element>
            )
          }
        </div>
      </div>
    )
  }
}

const mapState = ({ projects }) => ({ projects })
export default connect(mapState)(Projects)