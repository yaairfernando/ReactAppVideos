import { FETCH_VIDEOS } from "../types";
import youtube  from '../api/youtube';

const KEY = 'AIzaSyBiKXHJJBXR7YqnBEsIovHdhHKHqfz8-N4'

export const fetchVideos = () => async (dispatch) => {
  const response = await youtube.get("/search", {
    params: {
      q: 'buildings',
      part: "snippet",
      type: 'video',
      maxResults: 150,
      key: KEY
    }
  });

  const data = response.data

  if (data.items) {
    dispatch({
      type: FETCH_VIDEOS,
      payload: data.items
    })
  }

}