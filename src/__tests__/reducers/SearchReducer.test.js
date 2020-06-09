import SearchReducer from '../../reducers/SearchReducer';

describe('Search Reducer', () => {
  it('updates the value of the search input', () => {
    expect(SearchReducer('', { type: 'SEARCH_VALUE', payload: 'animes' })).toEqual('animes');
  });
});
