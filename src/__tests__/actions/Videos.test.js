import moxios from 'moxios';
import axios from 'axios';
import * as actions from '../../actions';
import { mockStore } from '../../testHelpers';

const expectedState = {
  items: [
    {
      id: {
        kind: 'some text',
        videoId: '7uhdj',
      },
      snippet: {
        title: 'Title',
        description: 'Description',
        publishedAt: '2020-02-03',
      },
    },
    {
      id: {
        kind: 'some text',
        videoId: '755dj',
      },
      snippet: {
        title: 'Title',
        description: 'Description',
        publishedAt: '2022-05-09',
      },
    },
    {
      id: {
        kind: 'some text',
        videoId: 'EH678',
      },
      snippet: {
        title: 'Title',
        description: 'Description',
        publishedAt: '2021-09-05',
      },
    },
    {
      id: {
        kind: 'some text',
        videoId: '456fd',
      },
      snippet: {
        title: 'Title',
        description: 'Description',
        publishedAt: '2019-05-04',
      },
    },
  ],
};

const store = mockStore();

const moxiosRequest = () => {
  moxios.wait(() => {
    const request = moxios.requests.mostRecent();
    request.respondWith({
      status: 200,
      response: expectedState,
    });
  });
};

describe('Fetch Videos action', () => {
  beforeEach(() => {
    moxios.install(axios);
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it('store is updated successfully', () => {
    moxiosRequest();
    return store.dispatch(actions.fetchVideos()).then(() => {
      expect(store.getState().videos.data).toBe(expectedState.items);
    });
  });


  it('store is filtered successfuly', () => {
    moxiosRequest();
    return store.dispatch(actions.fetchVideos()).then(() => {
      expect(store.getState().videos.data).toBe(expectedState.items);
      store.dispatch(actions.filterVideos({ count: 2, date: '' }));
      expect(store.getState().videos.data.length).toBe(2);
      store.dispatch(actions.filterVideos({ count: 'All', date: '' }));
      expect(store.getState().videos.data.length).toBe(4);
      store.dispatch(actions.filterVideos({ count: '', date: 'ASC' }));
      expect(store.getState().videos.data.length).toBe(4);
      store.dispatch(actions.filterVideos({ count: '2', date: 'DES' }));
      expect(store.getState().videos.data.length).toBe(2);
    });
  });

  it('store is set to the current selected video', () => {
    moxiosRequest();
    return store.dispatch(actions.fetchVideos()).then(() => {
      expect(store.getState().videos.data).toBe(expectedState.items);
      store.dispatch(actions.fetchVideo('456fd'));
      expect(store.getState().videos.data[0].id.videoId).toEqual('456fd');
    });
  });
});
