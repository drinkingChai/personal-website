import React from 'react'
import { withRouter } from 'react-router-dom'

const Footer = ({ location }) => {
  const { pathname } = location
  return (
    <footer className={ `${pathname.slice(1)}` }>
      Made with <i className="fab fa-react"></i> by Wasif Zaman
    </footer>
  )
}

export default withRouter(Footer)
