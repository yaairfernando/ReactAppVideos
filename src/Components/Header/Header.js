import React from "react";
import { Link } from "react-router-dom";
import classes from "../Styles/Styles.module.css";
import SearchBar from "../Videos/SearchBar";
import FormFilter from "../Videos/FormFilter";
import history from '../../history';

const Header = () => {
  const renderFormFilter = () => {
    history.listen((location) => {
      if (location.pathname !== '/bookmarks') {
        document.querySelector('.formFilter').classList.remove('hide');
      } else {
        document.querySelector('.formFilter').classList.add('hide');
      }
    })
  }

  return (
    <>
      <div className={classes.Header}>
        <Link className={classes.Videos} to="/">
          Home :)
        </Link>
        <Link className={classes.Bookmark} to="/bookmarks">
          Bookmarks :)
        </Link>
      </div>
      <SearchBar />
      <FormFilter />
      {renderFormFilter()}
    </>
  )
}

export default Header;
