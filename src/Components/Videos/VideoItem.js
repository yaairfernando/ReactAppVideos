import React from "react";
import PropTypes from "prop-types";
import classes from "../Styles/Styles.module.css";
import Icon from "../Icon/Icon";
import { connect } from "react-redux";

const VideoItem = ({ video, onHandleBookmark, onHandleShow, videos }) => {
  const { title, thumbnails, description } = video.snippet;

  const isBookmarked = () =>
    videos.some((v) => v.id.videoId === video.id.videoId);
  console.log(isBookmarked());

  return (
    <div className={classes.VideoItem} data-test="videoItem">
      <div className={classes.Card} data-test="card">
        <button
          type="button"
          className={classes.DivImage}
          onClick={() => onHandleShow(video.id.videoId)}
          onKeyDown={() => onHandleShow(video.id.videoId)}
        >
          <img
            src={thumbnails.medium.url}
            className={classes.Image}
            alt="Video Cover"
          />
        </button>
        <div className={classes.Content}>
          <h2>
            <span className={classes.Title}>{title}</span>
          </h2>
          <div className={classes.Description}>
            <span>{description}</span>
          </div>
        </div>
        <button
          type="button"
          className={classes.Icon}
          onClick={() => onHandleBookmark(video)}
          onKeyDown={() => onHandleBookmark(video)}
        >
          <Icon name={isBookmarked() ? "icon-heart" : "icon-heart1"} />
        </button>
      </div>
    </div>
  );
};

VideoItem.propTypes = {
  onHandleBookmark: PropTypes.func.isRequired,
  onHandleShow: PropTypes.func.isRequired,
  video: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Object)])
  ).isRequired,
};

const mapStateToProps = (state) => {
  return {
    videos: Object.values(state.bookmarks),
  };
};

export default connect(mapStateToProps)(VideoItem);
