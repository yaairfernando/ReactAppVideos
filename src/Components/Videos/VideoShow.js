import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchVideo } from '../../actions'
import ShowVideo from '../Modals/ShowVideo';

const VideoShow = ({ fetchVideo, match, video }) => {
  console.log(match)

  useEffect(() => {
    fetchVideo(match.params.id)
  }, [fetchVideo])

  if (!video) {
    return null
  }
  console.log(video[0]);
  return (
    <ShowVideo video={video[0]}/>
  )
}

const mapStateToProps = state => {
  console.log(state);
  return {
    video: state.videos
  }
}

export default connect(mapStateToProps, { fetchVideo })(VideoShow);
