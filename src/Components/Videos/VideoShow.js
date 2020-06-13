import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { fetchVideo } from "../../actions";
import ShowVideo from "../Modals/ShowVideo";
import history from "../../history";

const VideoShow = ({ fetchVideo, match, video }) => {
  useEffect(() => {
    fetchVideo(match.params.id);
  }, [fetchVideo, match.params.id]);

  return <ShowVideo onDismiss={() => history.push("/")} video={video[0]} />;
};

VideoShow.propTypes = {
  fetchVideo: PropTypes.func.isRequired,
  match: PropTypes.objectOf(PropTypes.string).isRequired,
  video: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => ({
  video: state.videos.data,
});

export default connect(mapStateToProps, { fetchVideo })(VideoShow);
