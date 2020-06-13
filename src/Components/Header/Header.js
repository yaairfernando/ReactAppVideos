import React from "react";
import { Link } from "react-router-dom";
import classes from "../Styles/Styles.module.css";
import SearchBar from "../Videos/SearchBar";
import FormFilter from "../Videos/FormFilter";

const Header = () => (
  <>
    <div className={classes.Header}>
      <Link className={classes.Videos} to="/">
        Home
      </Link>
      <Link className={classes.Bookmark} to="/bookmarks">
        Bookmarks
      </Link>
    </div>
    <SearchBar />
    <FormFilter />
  </>
);

export default Header;
