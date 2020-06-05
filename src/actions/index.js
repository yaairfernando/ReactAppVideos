import { FETCH_VIDEOS, FILTER_VIDEOS, FETCH_VIDEO } from '../types';
import youtube from '../api/youtube';

const KEY = 'AIzaSyD9HehTBDCnxFccxxcX2K4qUAXgimurEjY';
const history = []
let filterResult;
let sortedVideos;
// AIzaSyDwRok3RWII228XCbTO0a81piTkswqQfI4

export const fetchVideos = input => async dispatch => {
  const response = await youtube.get('/search', {
    params: {
      q: input || 'cars',
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

export const filterVideos = (values) => async (dispatch, getState) => {
  history.push(getState().videos)

  if (values.count !== '' && values.date !== '') {
    filterCount(values)
    filterResult = sortVideos(sortedVideos, values.date);
    dispatch({
      type: FILTER_VIDEOS,
      payload: [...filterResult]
    });
    return;
  }

  if (values.date !== '') {
    sortedVideos = sortVideos(history[history.length-1], values.date);
  }

  if (values.count !== '') {
    filterCount(values)
  }

  dispatch({
    type: FILTER_VIDEOS,
    payload: [...sortedVideos]
  });
}

export const fetchVideo = (id) => async (dispatch, getState ) => {
  let videos = getState().videos
  let video = videos.filter(f => f.id.videoId === id);
  dispatch({
    type: FETCH_VIDEO,
    payload: video
  })
}


const filterCount = (values) => {
  if (values.count === 'All') {
    sortedVideos = history[0]
  } else {
    sortedVideos = history[0].slice(0, values.count);
  }
}

const sortVideos = (videos, order) => {
  return videos.sort((a,b) => {
    if (a.snippet.publishedAt < b.snippet.publishedAt) {
      return order === 'ASC' ? -1 : 1; 
    }
    
    if (a.snippet.publishedAt > b.snippet.publishedAt) {
      return order === 'ASC' ? 1 : -1; 
    }
  })
}