import React from 'react';
import PropTypes from 'prop-types';
import classes from './Styles.module.css';
import history from '../../history';

const Filter = ({ video }) => {
  const { title, thumbnails, description } = video.snippet;

  const onHandleClick = ({id}) => {
    console.log("jfjfj", id.videoId);
    history.push(`/video/${id.videoId}`);
  }

  return (
    <div className={classes.VideoItem} onClick={() => onHandleClick(video)}>
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
    </div>
  );
};

Filter.propTypes = {
  video: PropTypes.object.isRequired,
};

export default Filter;
