import axios from "axios";
import uuid from "react-uuid";
import history from "../history";
import queryString from "query-string";

import {
  FETCH_VIDEOS,
  FILTER_VIDEOS,
  FETCH_VIDEO,
  BOOKMARK,
  DELETE_BOOKMARK,
} from "../types";

const KEY = process.env.REACT_APP_KEY;
const videosHistory = [];
let filterResult;
let sortedVideos;

const filterCount = (values) => {
  const [state] = videosHistory;
  if (values.count === "All") {
    sortedVideos = state;
  } else {
    sortedVideos = state.slice(0, values.count);
  }
};

const sortVideos = (videos, order) =>
  videos.sort((a, b) => {
    if (a.snippet.publishedAt < b.snippet.publishedAt) {
      return order === "ASC" ? -1 : 1;
    }

    if (a.snippet.publishedAt > b.snippet.publishedAt) {
      return order === "ASC" ? 1 : -1;
    }

    return 0;
  });

export const fetchVideos = () => async (dispatch) => {
  console.log("fetch from ", history.location.search);
  const query = queryString.parse(history.location.search);
  const search = query.search;
  console.log(search);
  const response = await axios.get(
    "https://www.googleapis.com/youtube/v3/search",
    {
      params: {
        q: search || "kids",
        part: "snippet",
        type: "video",
        maxResults: 50,
        key: KEY,
      },
    }
  );

  const { data } = response;
  console.log("DATA RESULT FROM API:", data);
  console.log("fetch done");
  if (data.items) {
    dispatch({
      type: FETCH_VIDEOS,
      payload: { data: data.items, search: search || null },
    });
  }
};

export const filterVideos = (values) => (dispatch, getState) => {
  videosHistory.push(getState().videos.data);

  if (values.count !== "" && values.date !== "") {
    filterCount(values);
    filterResult = sortVideos(sortedVideos, values.date);
    dispatch({
      type: FILTER_VIDEOS,
      payload: [...filterResult],
    });
    return;
  }

  if (values.date !== "") {
    sortedVideos = sortVideos(
      videosHistory[videosHistory.length - 1],
      values.date
    );
  }

  if (values.count !== "") {
    filterCount(values);
  }

  dispatch({
    type: FILTER_VIDEOS,
    payload: sortedVideos ? [...sortedVideos] : getState().videos.data,
  });
};

export const fetchVideo = (id) => (dispatch, getState) => {
  const { videos } = getState();
  const video = videos.data.filter((f) => f.id.videoId === id);
  dispatch({
    type: FETCH_VIDEO,
    payload: video,
  });
};

export const bookmark = (video) => {
  const id = uuid();
  const bookmark = { ...video };
  bookmark.bookmarkId = id;
  return {
    type: BOOKMARK,
    payload: { id: bookmark },
  };
};

export const deleteBookmark = (bookmarkId) => ({
  type: DELETE_BOOKMARK,
  payload: bookmarkId,
});
