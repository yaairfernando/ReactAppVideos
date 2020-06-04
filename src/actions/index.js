import { FETCH_VIDEOS } from '../types';
import youtube from '../api/youtube';

const KEY = 'AIzaSyBRNH4qiqdzmDDAcK6fhF2kU3ksmhEKPEY';
// AIzaSyDwRok3RWII228XCbTO0a81piTkswqQfI4

export const fetchVideos = input => async dispatch => {
  console.log(input);
  const response = await youtube.get('/search', {
    params: {
      q: input || 'cars',
      part: 'snippet',
      type: 'video',
      maxResults: 50,
      key: KEY,
    },
  });
  console.log(response);

  const { data } = response;

  if (data.items) {
    dispatch({
      type: FETCH_VIDEOS,
      payload: data.items,
    });
  }
};
