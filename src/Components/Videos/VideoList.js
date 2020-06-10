import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Filter from './Filter';
import classes from '../Styles/Styles.module.css';
import SearchBar from './SearchBar';
import FormFilter from './FormFilter';
import { fetchVideos, bookmark } from '../../actions';

const VideoList = ({
  videos, fetchVideos, bookmark, search,
}) => {
  useEffect(() => {
    fetchVideos(search);
  }, [fetchVideos, search]);

  const addBookmark = video => {
    bookmark(video);
  };

  const renderContent = () => videos.map(video => (
    <Filter
      key={video.id.videoId}
      video={video}
      onHandleBookmark={addBookmark}
    />
  ));

  return (
    <>
      <SearchBar />
      <FormFilter />
      <div className={`video-list-content ${classes.VideoList}`} data-test="videoList">
        {renderContent()}
      </div>
    </>
  );
};

VideoList.propTypes = {
  videos: PropTypes.arrayOf(PropTypes.object).isRequired,
  fetchVideos: PropTypes.func.isRequired,
  bookmark: PropTypes.func.isRequired,
  search: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  videos: state.videos,
  search: state.searchValue,
});

export default connect(mapStateToProps, { fetchVideos, bookmark })(VideoList);
