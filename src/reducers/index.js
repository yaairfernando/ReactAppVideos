import { combineReducers } from 'redux';
import VideosReducer from './VideosReducer';
import BookmarkReducer from './BookmarkReducer';

export default combineReducers({
  videos: VideosReducer,
  bookmarks: BookmarkReducer
});
