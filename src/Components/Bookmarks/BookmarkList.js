import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import Filter from '../Videos/Filter';
import classes from '../Styles/Styles.module.css';
import { deleteBookmark } from '../../actions';

const BookmarkList = ({ bookmarks, deleteBookmark }) => {
  const history = useHistory();

  const onDeleteBK = ({ bookmarkId }) => {
    deleteBookmark(bookmarkId);
  };

  const showBookmark = id => {
    history.push(`/bookmarks/${id}`);
  };

  const renderContent = () => bookmarks.map(bookmark => (
    <Filter
      key={bookmark.id.videoId}
      video={bookmark}
      onHandleBookmark={onDeleteBK}
      onHandleShow={showBookmark}
    />
  ));

  return <div className={classes.BookmarkList}>{renderContent()}</div>;
};

BookmarkList.propTypes = {
  bookmarks: PropTypes.arrayOf(PropTypes.object).isRequired,
  deleteBookmark: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  bookmarks: Object.values(state.bookmarks),
});

export default connect(mapStateToProps, { deleteBookmark })(BookmarkList);
