import VideosReducer from '../../reducers/VideosReducer';

describe('Videos reducer', () => {
  it('updates the state to be an array ob ojects', () => {
    expect(VideosReducer({}, { type: 'FETCH_VIDEOS', payload: { data: [{}, {}, {}], search: 'cars' } })).toEqual({ data: [{}, {}, {}], search: 'cars' });
  });

  it('updates the state to be an array of one single object', () => {
    expect(VideosReducer([], { type: 'FETCH_VIDEO', payload: [{}] })).toEqual({ data: [{}] });
  });

  it('updates the state to be an array of one or more objects', () => {
    expect(VideosReducer([], { type: 'FILTER_VIDEOS', payload: [{}, {}] })).toEqual({ data: [{}, {}] });
  });
});
