import React, { useEffect } from 'react';
import VideoList from './Videos/VideoList';
import { connect } from 'react-redux';
import { fetchVideos } from '../actions'
import PropTypes from 'prop-types';

const App = ({ fetchVideos }) => {

  useEffect(() => {
    fetchVideos();
  }, []);

  return (
    <div>
      <VideoList />
    </div>
  )
}

App.propTypes = {
  fetchVideos: PropTypes.func.isRequired
}

export default connect(null, { fetchVideos })(App);
