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
              offset={ -100 }
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
        {
          projects.length && projects.map((project, i) =>
            <Element className='project-card element' key={ i } name={ `project-${i}` }>
              <div className='project-info'>
                <h4>{ project.name }</h4>
                <h5>{ project.role }</h5>
                <h5>@{ project.location }</h5>
              </div>
              <p>{ project.description }</p>
            </Element>
          )
        }
      </div>
    )
  }
}

const mapState = ({ projects }) => ({ projects })
export default connect(mapState)(Projects)