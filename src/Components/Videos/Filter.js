import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import classes from '../Styles/Styles.module.css';
import Icon from '../Icon/Icon';

const Filter = ({ video, onHandleBookmark }) => {
  const history = useHistory();
  const { title, thumbnails, description } = video.snippet;

  const onHandleClick = ({ id }) => {
    history.push(`/video/${id.videoId}`);
  };

  return (
    <div className={classes.VideoItem}>
      <div className={classes.Card}>
        <button
          type="button"
          className={classes.DivImage}
          onClick={() => onHandleClick(video)}
          onKeyDown={() => onHandleClick(video)}
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
  video: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.instanceOf(Object),
  ])).isRequired,
};

export default Filter;
