import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchVideos } from '../../actions';
import classes from '../Styles/Styles.module.css';

const SearchBar = ({ fetchVideos }) => {
  const [search, setSearch] = useState('');

  const onSubmit = e => {
    e.preventDefault();
    fetchVideos(search);
    setSearch('');
  };

  return (
    <form onSubmit={e => onSubmit(e)} className={classes.Form} data-test="form">
      <input
        type="text"
        id="search-bar-input"
        value={search}
        required
        placeholder="Enter your search"
        onChange={e => setSearch(e.target.value)}
      />
    </form>
  );
};

SearchBar.propTypes = {
  fetchVideos: PropTypes.func.isRequired,
};

export default connect(null, { fetchVideos })(SearchBar);
