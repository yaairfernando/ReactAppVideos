import React from 'react'
import ReactDOM from 'react-dom';
import classes from '../Videos/Styles.module.css'

const ShowVideo = ({ video, onDismiss }) => {
  console.log("Modal: ", video.id.videoId);
  const { title, thumbnails, description } = video.snippet;
  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`
  return ReactDOM.createPortal(
    <div className={classes.ShowVideo} onClick={onDismiss}>
      <div className={classes.Content} onClick={(e) => e.stopPropagation()}>
        <div className={classes.Video}>
          <iframe src={videoSrc} title={title} />
        </div>
        <div className={classes.VideoDetails}>
          <div>
            <h2>{title}</h2>
            <p>{description}</p>
          </div>
          <button className={classes.ButtonBack} onClick={onDismiss}>Back</button>
        </div>
      </div>
    </div>,
    document.querySelector('#modal-show')
  )
};

export default ShowVideo;