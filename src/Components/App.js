import React from 'react';
import VideoList from './Videos/VideoList';
import VideoShow from './Videos/VideoShow';

import './Reset.css';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

const App = () => {
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

export default App;
