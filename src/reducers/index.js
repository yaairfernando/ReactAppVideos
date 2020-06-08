import { combineReducers } from 'redux';
import VideosReducer from './VideosReducer';
import BookmarkReducer from './BookmarkReducer';
import SearchReducer from './SearchReducer';

export default combineReducers({
  videos: VideosReducer,
  bookmarks: BookmarkReducer,
  searchValue: SearchReducer,
});
