import React from 'react'
import { Link } from 'react-router-dom';
import classes from '../Styles/Styles.module.css'

const Header = () => {
  return (
    <div className={classes.Header}>
      <Link className={classes.Bookmark} to="/bookmarks">Bookmarks</Link>
      <Link className={classes.Videos} to="/">Videos</Link>
    </div>
  )
};

export default Header;