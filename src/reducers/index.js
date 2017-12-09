import { combineReducers } from 'redux'
import projects from './projects'
import me from './me'

export default combineReducers({
  projects,
  me
})
