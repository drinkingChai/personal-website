import React from 'react'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'

import LinkTransition from './LinkTransition'

let links = [
  { path: '/projects', label: 'Projects' },
  { path: '/about', label: 'About' },
  { path: '/contact', label: 'Contact' }
]

const Nav = ({ location }) => {
  const { pathname } = location
  return (
    <nav className={ `${pathname.slice(1)}` }>
      <LinkTransition to ='/' className={ `logo-link ${pathname != '/' ? 'visible' : '' }` }><div className='logo-mini'></div></LinkTransition>
      {
        links.map((link, i) => <LinkTransition to={ link.path } key={ i } className={ `${ pathname == link.path ? 'active' : '' }` }>{ link.label }</LinkTransition>)
      }
    </nav>
  )
}

export default withRouter(Nav)