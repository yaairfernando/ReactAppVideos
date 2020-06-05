import {
  FETCH_VIDEOS,
  FILTER_VIDEOS,
} from '../types';

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_VIDEOS:
      return action.payload;
    case FILTER_VIDEOS:
      return action.payload
    default:
      return state;
  }
};
