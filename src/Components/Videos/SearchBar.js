import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchVideos } from '../../actions';
import classes from '../Styles/Styles.module.css';

const SearchBar = ({ fetchVideos }) => {
  const [inputVal, setInput] = useState('');

  const onSubmit = e => {
    e.preventDefault();
    fetchVideos(inputVal);
    setInput('');
  };

  return (
    <form onSubmit={e => onSubmit(e)} className={classes.Form}>
      <input
        type="text"
        id="search-bar-input"
        value={inputVal}
        required
        placeholder="Enter your search"
        onChange={e => setInput(e.target.value)}
      />
    </form>
  );
};

SearchBar.propTypes = {
  fetchVideos: PropTypes.func.isRequired,
};

export default connect(null, { fetchVideos })(SearchBar);
