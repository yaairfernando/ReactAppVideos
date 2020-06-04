import React, { useState } from 'react';
import { connect } from 'react-redux';
import { fetchVideos } from '../../actions';
import classes from './Styles.module.css';

const SearchBar = ({ fetchVideos }) => {
  const [input, setInput] = useState('');

  const onSubmit = e => {
    e.preventDefault();
    console.log('SERACH BAR');
    fetchVideos(input);
  };

  return (
    <form onSubmit={e => onSubmit(e)} className={classes.Form}>
      <label>Enter your search:</label>
      <input value={input} onChange={e => setInput(e.target.value)} />
    </form>
  );
};


export default connect(null, { fetchVideos })(SearchBar);
