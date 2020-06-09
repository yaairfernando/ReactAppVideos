import * as actions from '../../actions'
import { BOOKMARK, DELETE_BOOKMARK } from '../../types'

describe('Bookmark actions', () => {
  it('should return an action to bookmark a video', () => {
    const video = { title: "New Video", description: "Fun video"}
    const action = {
      type: BOOKMARK,
      payload: { id: {
        title: expect.any(String),
        description: expect.any(String),
        bookmarkId: expect.any(String)
      } }
    }

    expect(actions.bookmark(video)).toEqual(
      expect.objectContaining(action)
    )
  })

  it('should return an action to delete a bookmark video', () => {
    const action = {
      type: DELETE_BOOKMARK,
      payload: 2
    }
    expect(actions.deleteBookmark(2)).toEqual(
      expect.objectContaining(action)
    )
  })

})