import React from "react";
import { Route, Router, Switch } from "react-router-dom";
import Videos from "./Videos/Videos";
import VideoShow from "./Videos/VideoShow";
import Home from "../Components/Home/Home";
import Header from "./Header/Header";
import history from "../history";

import "./Styles/Reset.css";
import BookmarkList from "./Bookmarks/BookmarkList";
import BookmarkShow from "./Bookmarks/BookmarkShow";

const App = () => (
  <Router history={history}>
    <Header />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/videos" exact component={Videos} />
      <Route path="/bookmarks" exact component={BookmarkList} />
      <Route path="/videos/:id" exact component={VideoShow} />
      <Route path="/bookmarks/:id" exact component={BookmarkShow} />
    </Switch>
  </Router>
);

export default App;
