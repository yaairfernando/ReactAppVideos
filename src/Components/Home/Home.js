import React, { useEffect } from "react";
import VideoList from "../Videos/VideoList";
import { fetchVideos } from "../../actions";
import { connect } from "react-redux";

const Home = ({ videos, fetchVideos }) => {
  useEffect(() => {
    console.log("HOME COMPONENT");
    fetchVideos();
  }, [fetchVideos, videos]);

  return (
    <div>
      <VideoList />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    videos: state.videos,
  };
};

export default connect(mapStateToProps, { fetchVideos })(Home);
