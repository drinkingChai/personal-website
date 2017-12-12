import React from 'react'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'

import LinkTransition from './LinkTransition'

let links = [
  { path: '/', label: 'Home' },
  { path: '/projects', label: 'Projects' },
  // { path: '/contact', label: 'Contact' },
  { path: '/about', label: 'About' },
]

const Nav = ({ location, blog }) => {
  const { pathname } = location
  return (
    <nav>
    {
      links.map((link, i) => <LinkTransition to={ link.path } key={ i } className={ `${ pathname == link.path ? 'active' : '' }` }>{ link.label }</LinkTransition>)
    }
      <a href={ blog } target='_blank'>Blog</a>
    </nav>
  )
}

const mapState = ({ me }) => ({ blog: me.social && me.social.blog })
export default withRouter(connect(mapState)(Nav))