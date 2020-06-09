import * as actions from "../../actions";
import { FETCH_VIDEOS } from "../../types";
import moxios from "moxios";
import { testStore } from "../../util";

describe("Fetch Videos action", () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  test("store is updated successfully", () => {
    const expectedState = [
      {
        id: {
          kind: "some text",
          videoId: "456fd",
        },
        snippet: {
          title: "Title",
          description: "Description",
        },
      },
    ];

    const store = testStore();

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: expectedState,
      });
    });

    return store.dispatch(actions.fetchVideos()).then(() => {
      const newState = store.getState();
      expect(newState.videos).toBe(expectedState);
    });
  });
});

// describe('Video actions', () => {
//   it('should return an action with a single video', () => {
//     const action = [
//       {
//         type: FETCH_VIDEO,
//         payload: [
//           {
//             etag: expect.any(String),
//             id: {
//               kind: expect.any(String),
//               videoId: expect.any(String),
//             },
//             kind: expect.any(String),
//             snippet: {
//               channelId: expect.any(String),
//               channelTitle: expect.any(String),
//               description: expect.any(String),
//               liveBroadcastContent: expect.any(String),
//               publishTime: expect.any(String),
//               publishedApp: expect.any(String),
//               thumbnalis: {
//                 default: {
//                   height: expect.any(Number),
//                   url: expect.any(String),
//                   width: expect.any(Number),
//                 },
//                 high: {
//                   height: expect.any(Number),
//                   url: expect.any(String),
//                   width: expect.any(Number),
//                 },
//                 medium: {
//                   height: expect.any(Number),
//                   url: expect.any(String),
//                   width: expect.any(Number),
//                 },
//               },
//               title: expect.any(String),
//             },
//           },
//         ],
//       },
//     ];

//     expect(actions.fetchVideo('1')).toEqual(expect.arrayContaining(action));
//   });
// });
