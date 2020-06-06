import _ from 'lodash';
import {
  BOOKMARK
} from '../types'

export default (state= {}, action) => {
  switch(action.type) {
    case BOOKMARK:
      return {...state, [action.payload.id]: action.payload}
    case DELETE_BOOKMARK:
      return _.omit(state, action.payload);
    default:
      return state;
  }
}