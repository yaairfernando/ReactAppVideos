import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { fetchVideo } from '../../actions';
import ShowVideo from '../Modals/ShowVideo';

const VideoShow = ({ fetchVideo, match, video }) => {
  const history = useHistory();

  useEffect(() => {
    fetchVideo(match.params.id);
  }, [fetchVideo, match.params.id]);

  return (
    <ShowVideo
      onDismiss={() => history.push('/')}
      video={video[0]}
    />
  );
};

VideoShow.propTypes = {
  fetchVideo: PropTypes.func.isRequired,
  match: PropTypes.objectOf(PropTypes.object).isRequired,
  video: PropTypes.arrayOf(PropTypes.array).isRequired,
};

const mapStateToProps = state => ({
  video: state.videos,
});

export default connect(mapStateToProps, { fetchVideo })(VideoShow);
