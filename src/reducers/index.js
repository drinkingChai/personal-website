import { combineReducers } from 'redux'
import projects from './projects'
import me from './me'
import transition from './transition'

export default combineReducers({
  projects,
  me,
  transition
})
