import React from 'react'
import ReactDOM from 'react-dom';
import classes from '../Videos/Styles.module.css'

const ShowVideo = ({ video }) => {
  
  if (!video) {
    return null;
  }
  
  console.log("Modal: ", video);
  const { title, thumbnails, description } = video.snippet;
  return ReactDOM.createPortal(
    <div className={classes.ShowVideo}>
      <h2>{title}</h2>
    </div>,
    document.querySelector('#modal-show')
  )
};

export default ShowVideo;