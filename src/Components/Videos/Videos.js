import React, { useEffect } from "react";
import VideoList from "../Videos/VideoList";
import { fetchVideos } from "../../actions";
import { connect } from "react-redux";
import history from "../../history";
import queryString from "query-string";

const Videos = ({ fetchVideos, search }) => {
  console.log("VIDEOS COMPONENT");
  let query;
  let searchVal = 0;
  if (search === null) {
    searchVal++;
  }
  console.log(searchVal);
  useEffect(() => {
    // history.listen((location) => {
    // console.log(history.location);
    // query = queryString.parse(history.location.search);
    // console.log(search, query.search);
    // if (
    //   search !== query.search &&
    //   history.location.pathname === "/videos" &&
    //   searchVal <= 1
    // ) {
    //   console.log("change");
    //   console.log("kskskskk");
    //   fetchVideos(query.search);
    // }
    // });
  }, [fetchVideos, search]);

  return (
    <div>
      <VideoList />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    search: state.videos.search,
  };
};

export default connect(mapStateToProps, { fetchVideos })(Videos);
