import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import VideoItem from './VideoItem';
import classes from './Styles.module.css';
import SearchBar from './SearchBar';

const VideoList = ({ videos }) => {
  const renderContent = () => videos.map(
    video => <VideoItem key={video.id.videoId} video={video} />,
  );

  return (
    <>
      <SearchBar />
      <div className={classes.VideoList}>{renderContent()}</div>
    </>
  );
};

VideoList.propTypes = {
  videos: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  videos: state.videos,
});

export default connect(mapStateToProps)(VideoList);
