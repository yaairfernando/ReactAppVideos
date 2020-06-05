import {
  FETCH_VIDEOS,
  FILTER_VIDEOS,
  FETCH_VIDEO
} from '../types';

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_VIDEOS:
      return action.payload;
    case FETCH_VIDEO:
      return action.payload;
    case FILTER_VIDEOS:
      return action.payload;
    default:
      return state;
  }
};
