import { FETCH_VIDEOS } from "../types";
import youtube  from '../api/youtube';

const KEY = 'AIzaSyBiKXHJJBXR7YqnBEsIovHdhHKHqfz8-N4'

export const fetchVideos = () => async (dispatch) => {
  const response = await youtube.get("/search", {
    headers: {
      Referer: 'https://explorer.apis.google.com'
    },
    params: {
      q: term,
      part: "snippet",
      type: 'video',
      maxResults: 10,
      key: KEY
    }
  });

  console.log(response);

}