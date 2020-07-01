import React, { useEffect } from "react";
import VideoList from "../Videos/VideoList";
import { fetchVideos } from "../../actions";
import { connect } from "react-redux";

const Home = ({ fetchVideos }) => {
  useEffect(() => {
    console.log("HOME COMPONENT");
    fetchVideos();
  }, [fetchVideos]);

  return (
    <div>
      <VideoList />
    </div>
  );
};

export default connect(null, { fetchVideos })(Home);
