import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchVideos } from '../../actions';
import classes from '../Styles/Styles.module.css';
import { Link } from 'react-router-dom';

const SearchBar = ({ fetchVideos }) => {
  const [input, setInput] = useState('');

  const onSubmit = e => {
    e.preventDefault();
    fetchVideos(input);
    setInput('');
  };

  return (
    <form onSubmit={e => onSubmit(e)} className={classes.Form}>
      <label htmlFor="search-bar-input">
        Enter your search:
        <input type="text" id="search-bar-input" value={input} onChange={e => setInput(e.target.value)} />
      </label>
      <Link className={classes.Bookmark} to="/bookmarks">Bookmarks</Link>
    </form>
  );
};

SearchBar.propTypes = {
  fetchVideos: PropTypes.func.isRequired,
};


export default connect(null, { fetchVideos })(SearchBar);
