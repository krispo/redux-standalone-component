import { SOME_ACTION } from '../actions'

export default function reducer(state = {}, action){
  const { id, value } = action
  switch (action.type) {
    case SOME_ACTION:
      return Object.assign({}, state, { [id]: value })
    default:
      return state
  }
}