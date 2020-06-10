import React from 'react'
import SearchBar from '../../Components/Videos/SearchBar';
import { shallow } from 'enzyme'
import { findByTestAtrr, mockStore } from '../../testHelpers';

const setUp = (initialState={}) => {
  const store = mockStore(initialState);
  return shallow(<SearchBar store={store} />).childAt(0).dive();
}

describe('Video List component', () => {  

  let wrapper;
  beforeEach(() => {
    wrapper = setUp();
  })

  it('should render', () => {
    const component = findByTestAtrr(wrapper, "form");
    expect(component.length).toBe(1);
  })
})

