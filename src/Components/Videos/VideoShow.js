import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchVideo } from '../../actions'
const VideoShow = ({ fetchVideo, match }) => {
  console.log(match)

  useEffect(() => {
    fetchVideo(match.params.id)
  }, [fetchVideo])


  return (
    <div>VideoShow</div>
  )
}

const mapStateToProps = state => {
  console.log(state);
  return {
    video: state.videos
  }
}

export default connect(mapStateToProps, { fetchVideo })(VideoShow);
