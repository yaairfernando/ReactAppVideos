import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import Filter from './Filter';
import classes from '../Styles/Styles.module.css';
import SearchBar from './SearchBar';
import FormFilter from './FormFilter';
import { fetchVideos, bookmark } from '../../actions';

const VideoList = ({
  videos, fetchVideos, bookmark, search,
}) => {
  const history = useHistory();

  useEffect(() => {
    fetchVideos(search);
  }, [fetchVideos, search]);

  const addBookmark = video => {
    bookmark(video);
  };

  const showVideo = id => {
    history.push(`/videos/${id}`);
  };

  const renderContent = () => videos.map(video => (
    <Filter
      key={video.id.videoId}
      video={video}
      onHandleBookmark={addBookmark}
      onHandleShow={showVideo}
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

VideoList.defaultProps = {
  search: null,
};

VideoList.propTypes = {
  videos: PropTypes.arrayOf(PropTypes.object).isRequired,
  fetchVideos: PropTypes.func.isRequired,
  bookmark: PropTypes.func.isRequired,
  search: PropTypes.string,
};

const mapStateToProps = state => ({
  videos: state.videos.data,
  search: state.videos.search,
});

export default connect(mapStateToProps, { fetchVideos, bookmark })(VideoList);
