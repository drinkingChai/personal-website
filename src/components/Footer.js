import React from 'react'
import { connect } from 'react-redux'

const Footer = () => {
  return (
    <footer>
      Made with <i className="fab fa-react"></i> by Wasif Zaman
    </footer>
  )
}

export default connect()(Footer)
