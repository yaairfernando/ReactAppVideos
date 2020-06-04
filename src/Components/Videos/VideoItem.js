import React from 'react'
import PropTypes from 'prop-types';
import classes from './Styles.module.css'

const VideoItem = ({ video }) => {
  const { title, thumbnails, description } = video.snippet
  console.log(video);
  return (
    <div className={classes.VideoItem}>
      <div className={classes.DivImage}>
        <img src={thumbnails.medium.url} className={classes.Image} />
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
  )
};

VideoItem.propTypes = {
  video: PropTypes.object.isRequired
}

export default VideoItem;