import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import VideoList from './Videos/VideoList';
import VideoShow from './Videos/VideoShow';
import { fetchVideos } from '../actions';
import './Reset.css';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

const App = ({ fetchVideos }) => {
  useEffect(() => {
    fetchVideos();
  }, [fetchVideos]);

  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={VideoList} />
          <Route path="/video/:id" exact component={VideoShow} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

App.propTypes = {
  fetchVideos: PropTypes.func.isRequired,
};

export default connect(null, { fetchVideos })(App);
