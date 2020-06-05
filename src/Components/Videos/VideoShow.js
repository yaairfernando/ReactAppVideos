import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchVideo } from '../../actions'
import ShowVideo from '../Modals/ShowVideo';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom'

const VideoShow = ({ fetchVideo, match, video }) => {
  console.log(match)
  const history = useHistory();

  useEffect(() => {
    fetchVideo(match.params.id)
  }, [fetchVideo])

  return (
    <ShowVideo
      onDismiss={() => history.push('/')}
      video={video[0]}
      />
  )
}

VideoShow.prototype = {
  fetchVideo: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
  video: PropTypes.array.isRequired
}

const mapStateToProps = state => {
  console.log(state);
  return {
    video: state.videos
  }
}

export default connect(mapStateToProps, { fetchVideo })(VideoShow);
