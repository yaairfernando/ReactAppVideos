import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Filter from './Filter';
import classes from '../Styles/Styles.module.css';
import SearchBar from './SearchBar';
import FormFilter from './FormFilter';
import { fetchVideos } from '../../actions';

const VideoList = ({ videos, fetchVideos }) => {
  useEffect(() => {
    fetchVideos();
  }, [fetchVideos]);

  const renderContent = () => videos.map(
    video => <Filter key={video.id.videoId} video={video} />,
  );

  return (
    <>
      <SearchBar />
      <FormFilter />
      <div className={classes.VideoList}>{renderContent()}</div>
    </>
  );
};

VideoList.propTypes = {
  videos: PropTypes.arrayOf(PropTypes.array).isRequired,
  fetchVideos: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  videos: state.videos,
});

export default connect(mapStateToProps, { fetchVideos })(VideoList);
