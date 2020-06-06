import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import classes from './Styles.module.css';
import Icon from '../Icon/Icon';
import { bookmark } from '../../actions'
import { connect } from 'react-redux';

const Filter = ({ video, bookmark }) => {
  const history = useHistory();
  const { title, thumbnails, description } = video.snippet;

  const onHandleClick = ({ id }) => {
    history.push(`/video/${id.videoId}`);
  };

  const onBookmark = (e) => {
    e.stopPropagation();
    console.log("click", video);
    bookmark(video);
  }

  return (
    <button type="button" className={classes.VideoItem} onClick={() => onHandleClick(video)} onKeyDown={() => onHandleClick(video)}>
      <div className={classes.DivImage}>
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
      <div className={classes.Icon} onClick={(e) => onBookmark(e)} onKeyDown={(e) => onBookmark(e)}>
        <Icon name="icon-heart" />
      </div>
    </button>
  );
};

Filter.propTypes = {
  bookmark: PropTypes.func.isRequired,
  video: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default connect(null, { bookmark })(Filter);
