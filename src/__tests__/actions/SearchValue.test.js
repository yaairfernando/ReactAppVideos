import * as actions from '../../actions';
import { mockStore } from '../../testHelpers';

const store = mockStore();

describe('Search Value action', () => {
  it('returns an action to update the search input value', () => {
    store.dispatch(actions.setSearchValue('cars'));
    expect(store.getState().searchValue).toEqual('cars');
  })
})
