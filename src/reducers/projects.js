import { LOAD_PROJECTS } from '../actions'

const initialState = []

export default function reducer (state = initialState, action) {
  switch(action.type) {
    case LOAD_PROJECTS:
      return action.projects
    default:
      return state
  }
}