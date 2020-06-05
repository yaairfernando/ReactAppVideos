import React from 'react';
import VideoList from './Videos/VideoList';
import VideoShow from './Videos/VideoShow';

import history from '../history';
import './Reset.css';
import { Route, Router, Switch } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Router history={history} >
        <Switch>
          <Route path="/" exact component={VideoList} />
          <Route path="/video/:id" exact component={VideoShow} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
