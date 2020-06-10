import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchVideos, setSearchValue } from '../../actions';
import classes from '../Styles/Styles.module.css';

const SearchBar = ({ fetchVideos, search, setSearchValue }) => {
  const onSubmit = e => {
    e.preventDefault();
    fetchVideos(search);
  };

  return (
    <form onSubmit={e => onSubmit(e)} className={classes.Form} data-test="form">
      <input
        type="text"
        id="search-bar-input"
        value={search}
        required
        placeholder="Enter your search"
        onChange={e => setSearchValue(e.target.value)}
      />
    </form>
  );
};

SearchBar.propTypes = {
  fetchVideos: PropTypes.func.isRequired,
  setSearchValue: PropTypes.func.isRequired,
  search: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  search: state.searchValue,
});

export default connect(mapStateToProps, { fetchVideos, setSearchValue })(SearchBar);
