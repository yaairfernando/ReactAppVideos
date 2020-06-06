import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import VideoList from './Videos/VideoList';
import VideoShow from './Videos/VideoShow';

import './Reset.css';

const App = () => (
  <div>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={VideoList} />
        <Route path="/video/:id" exact component={VideoShow} />
      </Switch>
    </BrowserRouter>
  </div>
);

export default App;
