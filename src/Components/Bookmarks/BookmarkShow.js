import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import ShowVideo from "../Modals/ShowVideo";
import history from "../../history";

const BookmarkShow = ({ match, videos }) => {
  const video = videos.filter((f) => f.id.videoId === match.params.id);

  if (!video) {
    return null;
  }

  return (
    <ShowVideo onDismiss={() => history.push("/bookmarks")} video={video[0]} />
  );
};

BookmarkShow.propTypes = {
  videos: PropTypes.arrayOf(PropTypes.object).isRequired,
  match: PropTypes.objectOf(PropTypes.string).isRequired,
};

const mapStateToProps = (state) => ({
  videos: Object.values(state.bookmarks),
});

export default connect(mapStateToProps)(BookmarkShow);
