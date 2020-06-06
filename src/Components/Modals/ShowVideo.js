import React from 'react';
import ReactDOM from 'react-dom';
import classes from '../Videos/Styles.module.css';

const ShowVideo = ({ video, onDismiss }) => {
  const { title, description } = video.snippet;
  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  return ReactDOM.createPortal(
    <button type="button" className={classes.ShowVideo} onClick={onDismiss} onKeyDown={onDismiss}>
      <button
        type="button"
        className={classes.Content}
        onClick={e => e.stopPropagation()}
        onKeyDown={e => e.stopPropagation()}
      >
        <div className={classes.Video}>
          <iframe src={videoSrc} title={title} />
        </div>
        <div className={classes.VideoDetails}>
          <div>
            <h2>{title}</h2>
            <p>{description}</p>
          </div>
          <button type="button" className={classes.ButtonBack} onClick={onDismiss}>Back</button>
        </div>
      </button>
    </button>,
    document.querySelector('#modal-show'),
  );
};

export default ShowVideo;
