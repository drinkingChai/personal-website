import React from 'react'
import { connect } from 'react-redux'

const Transition = ({ transition }) => {
  const directions = [ 'left-angle', 'right-angle', 'left', 'right' ],
    direction = directions[Math.floor(Math.random()*4 + 0)],
    numSlides = Math.ceil(window.innerWidth / 30),
    slides = []

  for(let i = 0; i < numSlides; i++) {
    slides.push(<div className='slide' key={ i }></div>)
  }

  return (
    <span>
    { transition ?
      <div className={ `transition slides` }>
      { slides.map(slide => slide) }
      </div> : null
    }
    </span>
  )
}

const mapState = ({ transition }) => ({ transition })
export default connect(mapState)(Transition)
