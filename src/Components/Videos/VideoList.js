import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import VideoItem from "./VideoItem";
import classes from "../Styles/Styles.module.css";
import { bookmark } from "../../actions";
import history from "../../history";

const VideoList = ({ videos, bookmark }) => {
  const addBookmark = (video) => {
    bookmark(video);
  };

  const showVideo = (id) => {
    history.push(`/videos/${id}`);
  };

  const renderContent = () =>
    videos.map((video) => (
      <VideoItem
        key={video.id.videoId}
        video={video}
        onHandleBookmark={addBookmark}
        onHandleShow={showVideo}
      />
    ));

  console.log("VIDEO LIST COMPONENT");
  return (
    <div
      className={`video-list-content ${classes.VideoList}`}
      data-test="videoList"
    >
      {renderContent()}
    </div>
  );
};

VideoList.defaultProps = {
  search: null,
};

VideoList.propTypes = {
  videos: PropTypes.arrayOf(PropTypes.object).isRequired,
  bookmark: PropTypes.func.isRequired,
  search: PropTypes.string,
};

const mapStateToProps = (state) => ({
  videos: state.videos.data,
  search: state.videos.search,
});

export default connect(mapStateToProps, { bookmark })(VideoList);
