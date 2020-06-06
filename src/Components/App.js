import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import VideoList from './Videos/VideoList';
import VideoShow from './Videos/VideoShow';
import Header from './Header/Header';

import './Styles/Reset.css';
import BookmarkList from './Bookmarks/BookmarkList';
import BookmarkShow from './Bookmarks/BookmarkShow';

const App = () => (
  <div>
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={VideoList} />
        <Route path="/video/:id" exact component={VideoShow} />
        <Route path="/bookmarks" exact component={BookmarkList} />
        <Route path="/bookmarks/:id" exact component={BookmarkShow} />
      </Switch>
    </BrowserRouter>
  </div>
);

export default App;
