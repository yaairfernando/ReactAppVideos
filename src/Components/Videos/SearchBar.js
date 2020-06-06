import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchVideos } from '../../actions';
import classes from '../Styles/Styles.module.css';

const SearchBar = ({ fetchVideos }) => {
  const [input, setInput] = useState('');

  const onSubmit = e => {
    e.preventDefault();
    fetchVideos(input);
    setInput('');
  };

  return (
    <form onSubmit={e => onSubmit(e)} className={classes.Form}>
      <input type="text" placeholder="Enter your search"  id="search-bar-input" value={input} onChange={e => setInput(e.target.value)} />
      <label htmlFor="search-bar-input" className={classes.Label}>
        Enter your search:
      </label>
    </form>
  );
};

SearchBar.propTypes = {
  fetchVideos: PropTypes.func.isRequired,
};


export default connect(null, { fetchVideos })(SearchBar);
