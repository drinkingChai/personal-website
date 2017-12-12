import React from 'react'
import { connect } from 'react-redux'

const Transition = ({ transition }) => {
  return (
    <span>
    { transition ?
      <div className='transition slides'>
        <div className='slide'></div>
        <div className='slide'></div>
        <div className='slide'></div>
        <div className='slide'></div>
        <div className='slide'></div>
        <div className='slide'></div>
        <div className='slide'></div>
        <div className='slide'></div>
        <div className='slide'></div>
        <div className='slide'></div>
        <div className='slide'></div>
        <div className='slide'></div>
        <div className='slide'></div>
      </div> : null
    }
    </span>
  )
}

const mapState = ({ transition }) => ({ transition })
export default connect(mapState)(Transition)
