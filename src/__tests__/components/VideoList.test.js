import React from 'react'
import VideoList from '../../Components/Videos/VideoList';
import { shallow } from 'enzyme'
import { findByTestAtrr, mockStore } from '../../testHelpers';

const setUp = (initialState={}, props={}) => {
  const store = mockStore(initialState);
  return shallow(<VideoList store={store} {...props} />).childAt(0).dive();
}

describe('Video List component', () => {  
  let wrapper;
  beforeEach(() => {
    const initialState = {
      videos: [
        {
          id: {
            kind: "some text",
            videoId: "7uhdj",
          },
          snippet: {
            title: "Title",
            description: "Description",
            publishedAt: '2020-02-03'
          },
        },
        {
          id: {
            kind: "some text",
            videoId: "755dj",
          },
          snippet: {
            title: "Title",
            description: "Description",
            publishedAt: '2022-05-09'
          },
        },
        {
          id: {
            kind: "some text",
            videoId: "EH678",
          },
          snippet: {
            title: "Title",
            description: "Description",
            publishedAt: '2021-09-05'
          },
        },
      ]
    };
    const expectedProps = {
      videos: [
        {
          id: {
            kind: "some text",
            videoId: "7uhdj",
          },
          snippet: {
            title: "Title",
            description: "Description",
            publishedAt: '2020-02-03'
          },
        },
        {
          id: {
            kind: "some text",
            videoId: "755dj",
          },
          snippet: {
            title: "Title",
            description: "Description",
            publishedAt: '2022-05-09'
          },
        },
        {
          id: {
            kind: "some text",
            videoId: "EH678",
          },
          snippet: {
            title: "Title",
            description: "Description",
            publishedAt: '2021-09-05'
          },
        },
      ],
      fetchVideos: () => {},
      bookmark: () => {},
      search: "cars",
    }
    wrapper = setUp(initialState, expectedProps);
  })

  it('should render', () => {
    const component = findByTestAtrr(wrapper, "videoList");
    expect(component.length).toBe(1);
  })
})

