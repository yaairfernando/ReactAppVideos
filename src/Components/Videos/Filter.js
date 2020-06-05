import React from 'react';
import { useHistory } from 'react-router-dom'
import PropTypes from 'prop-types';
import classes from './Styles.module.css';

const Filter = ({ video }) => {
  const history = useHistory();
  const { title, thumbnails, description } = video.snippet;

  const onHandleClick = ({id}) => {
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
