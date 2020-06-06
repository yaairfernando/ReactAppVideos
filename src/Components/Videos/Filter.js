import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import classes from '../Styles/Styles.module.css';
import Icon from '../Icon/Icon';
import { bookmark, deleteBookmark } from '../../actions'
import { connect } from 'react-redux';

const Filter = ({ video, bookmark, deleteBookmark, deleteBK }) => {
  const history = useHistory();
  const { title, thumbnails, description } = video.snippet;

  const onHandleClick = ({ id }) => {
    console.log("CLICK TO SHOW VIDEO")
    history.push(`/video/${id.videoId}`);
  };

  const onBookmark = (e) => {
    bookmark(video);
  }

  const onDeleteBookmark = (e) => {
    deleteBK(video.bookmarkId)
  }

  return (
    <button type="button" className={classes.VideoItem} onClick={() => onHandleClick(video)} onKeyDown={() => onHandleClick(video)}>
      <div onClick={(e) => e.stopPropagation()} className={classes.Card}>
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
        {video.bookmarkId ? 
          <div className={classes.Icon} onClick={(e) => onDeleteBookmark(e)} onKeyDown={(e) => onDeleteBookmark(e)}>
            <Icon name="icon-heart" />
          </div>
        :
          <div className={classes.Icon} onClick={(e) => onBookmark(e)} onKeyDown={(e) => onBookmark(e)}>
            <Icon name="icon-heart" />
          </div>
        }
      </div>
    </button>
  );
};

Filter.propTypes = {
  bookmark: PropTypes.func.isRequired,
  deleteBookmark: PropTypes.func.isRequired,
  video: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default connect(null, { bookmark, deleteBookmark })(Filter);
