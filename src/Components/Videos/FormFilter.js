import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import uuid from 'react-uuid';
import { filterVideos } from '../../actions';
import classes from '../Styles/Styles.module.css';

const FormFilter = ({ filterVideos }) => {
  const filterByCount = ['All', '10', '20', '30', '40'];
  const filterByPublishedDate = ['ASC', 'DES'];
  const [filters, setFilters] = useState({ count: '', date: '' });

  const onSubmit = e => {
    e.preventDefault();
    filterVideos(filters);
    setFilters({ count: '', date: '' });
  };

  return (
    <form onSubmit={e => onSubmit(e)} className={classes.FilterForm}>
      <select name="count" onChange={e => setFilters({ ...filters, count: e.target.value })}>
        <option value="">Number of videos</option>
        {filterByCount.map(option => <option key={uuid()} value={option}>{option}</option>)}
      </select>
      <select name="date" onChange={e => setFilters({ ...filters, date: e.target.value })}>
        <option value="">Publish Date</option>
        {filterByPublishedDate.map(option => <option key={uuid()} value={option}>{option}</option>)}
      </select>
      <button type="submit">Filter</button>
    </form>
  );
};

FormFilter.propTypes = {
  filterVideos: PropTypes.func.isRequired,
};

export default connect(null, { filterVideos })(FormFilter);
