import _ from 'lodash';
import {
  BOOKMARK,
  DELETE_BOOKMARK
} from '../types'

export default (state= {}, action) => {
  switch(action.type) {
    case BOOKMARK:
      const { id } = action.payload
      return {...state, [id.bookmarkId]: id}
    case DELETE_BOOKMARK:
      return _.omit(state, action.payload);
    default:
      return state;
  }
}