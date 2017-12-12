import { TOGGLE_TRANSITION } from '../actions'

const initialState = false

export default function reducer (state = initialState, action) {
  switch(action.type) {
    case TOGGLE_TRANSITION:
      return !state
    default:
      return state
  }
}