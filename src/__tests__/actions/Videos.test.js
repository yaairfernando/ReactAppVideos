import * as actions from '../../actions'
import { FETCH_VIDEOS, FETCH_VIDEO, FILTER_VIDEOS } from '../../types'
import thunk from 'redux-thunk'
import fetchMock from 'fetch-mock'
import configureMockStore from 'redux-mock-store';

const middleware = [thunk]
const mockStore = configureMockStore(middleware);

describe('Video actions', () => {
  afterEach(() => {
    fetchMock.restore();
  })

  it('should return an action with the ', () => {
    const store = mockStore({ videos: [] })

    fetchMock.getOnce('https://www.googleapis.com/youtube/v3/search', {
      params: {
        q: 'kids',
        part: 'snippet',
        type: 'video',
        maxResults: 50,
        key: "AIzaSyAFUXOvA3krXYUSIaqRtY1fJ6AVURgD4gw",
      }
    })

    console.log(store.getState());
    console.log(store.getActions());

    return store.dispatch(actions.fetchVideos()).then(() => {
      console.log(store.getActions());
    })
  })
})
