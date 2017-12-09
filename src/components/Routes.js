import React from 'react'
import { Switch, Route } from 'react-router-dom'

// ******************** pages ******************** //
import Home from './pages/Home'
import Projects from './pages/Projects'
import Contact from './pages/Contact'

export default function Routes () {
  return (
    <Switch>
      <Route exact path='/' component={ Home } />
      <Route exact path='/projects' component={ Projects } />
      <Route exact path='/contact' component={ Contact } />
    </Switch>
  )
}