import React from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import VideoItem from './VideoItem';
import classes from './Styles.module.css'

const VideoList = ({ videos }) => {

  const renderContent = () => {
    return videos.map(video => {
      return <VideoItem key={video.id.videoId} video={video} />
    })
  }

  return (
    <div className={classes.VideoList}>{renderContent()}</div>
  )
};

VideoList.propTypes = {
  videos: PropTypes.array.isRequired
}

const mapStateToProps = state => {
  return {
    videos: state.videos
  }
}

export default connect(mapStateToProps)(VideoList);