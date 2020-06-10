import React from 'react';
import { shallow } from 'enzyme';
import { findElement, validateProps } from '../../testHelpers';
import Filter from '../../Components/Videos/Filter';

// eslint-disable-next-line
const setUp = (props = {}) => shallow(<Filter {...props} />);

describe('Filter component', () => {
  const expectedProps = {
    onHandleBookmark: () => {},
    onHandleShow: () => {},
    video: {
      snippet: {
        title: 'Title',
        description: 'Desc',
        thumbnails: {
          medium: {
            url: 'http://gmail.com',
          },
        },
      },
    },
  };

  describe('check props', () => {
    it('should be undefined', () => {
      expect(validateProps(Filter, expectedProps)).toBeUndefined();
    });
  });

  describe('have props', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setUp(expectedProps);
    });

    it('should render the container', () => {
      expect(findElement(wrapper, 'videoItem').length).toBe(1);
    });

    it('should render the cards', () => {
      expect(findElement(wrapper, 'card').length).toBe(1);
    });
  });
});
