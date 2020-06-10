import BookmarkReducer from '../../reducers/BookmarkReducer';

const INITIAL_STATE = {
  1: {
    bookmarkId: '1',
    title: 'Video 1',
    description: 'This is a description',
  },
};


const RESULT = {
  1: { bookmarkId: '1', title: 'Video 1', description: 'This is a description' },
  2: { title: 'Video 2', description: 'This is a cool video', bookmarkId: '2' },
};

describe('Bookmark Reducer', () => {
  it('updates the state by adding a new object to the object of bookmark videos', () => {
    expect(BookmarkReducer(
      INITIAL_STATE,
      { type: 'BOOKMARK', payload: { id: { title: 'Video 2', description: 'This is a cool video', bookmarkId: '2' } } },
    )).toEqual(RESULT);
  });

  it('updates the state by deleting a bookmark object', () => {
    expect(BookmarkReducer(
      RESULT,
      { type: 'DELETE_BOOKMARK', payload: '2' },
    )).toEqual(INITIAL_STATE);
  });
});
