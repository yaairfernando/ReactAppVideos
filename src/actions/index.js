import uuid from 'react-uuid';
import {
  FETCH_VIDEOS,
  FILTER_VIDEOS,
  FETCH_VIDEO,
  BOOKMARK,
  DELETE_BOOKMARK,
  SEARCH_VALUE,
} from '../types';
import youtube from '../api/youtube';

const KEY = process.env.REACT_APP_KEY;
const history = [];
let filterResult;
let sortedVideos;

const filterCount = values => {
  const [state] = history;
  if (values.count === 'All') {
    sortedVideos = state;
  } else {
    sortedVideos = state.slice(0, values.count);
  }
};

const sortVideos = (videos, order) => videos.sort((a, b) => {
  if (a.snippet.publishedAt < b.snippet.publishedAt) {
    return order === 'ASC' ? -1 : 1;
  }

  if (a.snippet.publishedAt > b.snippet.publishedAt) {
    return order === 'ASC' ? 1 : -1;
  }

  return 0;
});

export const fetchVideos = input => async dispatch => {
  const response = await youtube.get('/search', {
    params: {
      q: input || 'kids',
      part: 'snippet',
      type: 'video',
      maxResults: 50,
      key: KEY,
    },
  });

  const { data } = response;

  if (data.items) {
    dispatch({
      type: FETCH_VIDEOS,
      payload: data.items,
    });
  }
};

export const filterVideos = values => (dispatch, getState) => {
  history.push(getState().videos);

  if (values.count !== '' && values.date !== '') {
    filterCount(values);
    filterResult = sortVideos(sortedVideos, values.date);
    dispatch({
      type: FILTER_VIDEOS,
      payload: [...filterResult],
    });
    return;
  }

  if (values.date !== '') {
    sortedVideos = sortVideos(history[history.length - 1], values.date);
  }

  if (values.count !== '') {
    filterCount(values);
  }

  dispatch({
    type: FILTER_VIDEOS,
    payload: sortedVideos ? [...sortedVideos] : getState().videos,
  });
};

export const fetchVideo = id => (dispatch, getState) => {
  const { videos } = getState();
  const video = videos.filter(f => f.id.videoId === id);
  dispatch({
    type: FETCH_VIDEO,
    payload: video,
  });
};

export const bookmark = video => {
  const id = uuid();
  const bookmark = { ...video };
  bookmark.bookmarkId = id;
  return {
    type: BOOKMARK,
    payload: { id: bookmark },
  };
};

export const deleteBookmark = bookmarkId => ({
  type: DELETE_BOOKMARK,
  payload: bookmarkId,
});

export const setSearchValue = value => ({ type: SEARCH_VALUE, payload: value });
