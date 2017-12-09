import React from 'react'
import { connect } from 'react-redux'

const Footer = () => {
  return (
    <footer>
      Made with <i className='ion-heart'></i> by Wasif Zaman
    </footer>
  )
}

export default connect()(Footer)
