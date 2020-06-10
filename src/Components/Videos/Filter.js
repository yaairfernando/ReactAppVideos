import React from 'react';
import PropTypes from 'prop-types';
import classes from '../Styles/Styles.module.css';
import Icon from '../Icon/Icon';

const Filter = ({ video, onHandleBookmark, onHandleShow }) => {
  const { title, thumbnails, description } = video.snippet;

  return (
    <div className={classes.VideoItem} data-test="videoItem">
      <div className={classes.Card} data-test="card">
        <button
          type="button"
          className={classes.DivImage}
          onClick={() => onHandleShow(video.id.videoId)}
          onKeyDown={() => onHandleShow(video.id.videoId)}
        >
          <img src={thumbnails.medium.url} className={classes.Image} alt="Video Cover" />
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
          <Icon name="icon-heart" />
        </button>
      </div>
    </div>
  );
};

Filter.propTypes = {
  onHandleBookmark: PropTypes.func.isRequired,
  onHandleShow: PropTypes.func.isRequired,
  video: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.instanceOf(Object),
  ])).isRequired,
};

export default Filter;
