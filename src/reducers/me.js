import { LOAD_ME } from '../actions'

const initialState = {}

export default function reducer (state = initialState, action) {
  switch(action.type) {
    case LOAD_ME:
      return action.data
    default:
      return state
  }
}