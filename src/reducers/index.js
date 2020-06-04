import { combineReducers } from 'redux';
import VideosReducer from './VideosReducer';

export default combineReducers({
  videos: VideosReducer
})