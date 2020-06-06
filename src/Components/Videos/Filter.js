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
    <button type="button" className={classes.VideoItem}>
      <div onClick={e => e.stopPropagation()} className={classes.Card}>
        <div className={classes.DivImage} onClick={() => onHandleClick(video)}>
          <img src={thumbnails.medium.url} className={classes.Image} alt="Video Cover" />
        </div>
        <div className={classes.Content}>
          <h2>
            <span className={classes.Title}>{title}</span>
          </h2>
          <div className={classes.Description}>
            <span>{description}</span>
          </div>
        </div>
        <div className={classes.Icon} onClick={e => onHandleBookmark(video)} onKeyDown={e => onHandleBookmark(video)}>
          <Icon name="icon-heart" />
        </div>
      </div>
    </button>
  );
};

Filter.propTypes = {
  onHandleBookmark: PropTypes.func.isRequired,
  video: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default Filter;
