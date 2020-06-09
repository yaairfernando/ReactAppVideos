import * as actions from "../../actions";
import moxios from "moxios";
import { testStore } from "../../util";
import axios from "axios";

const expectedState = {
  items: [
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
  ]
}

describe("Fetch Videos action", () => {
  beforeEach(() => {
    moxios.install(axios);
  });

  afterEach(() => {
    moxios.uninstall();
  });

  test("store is updated successfully", () => {
    const store = testStore();

    moxiosRequest();
    return store.dispatch(actions.fetchVideos()).then(() => {
      const newState = store.getState();
      expect(newState.videos).toBe(expectedState.items);
    });
  });

  test('store is filtered successfuly', () => {
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
      expect(newState.videos).toBe(expectedState.items);
      store.dispatch(actions.filterVideos({ count: 2, date: "" }))
      expect(store.getState().videos.length).toBe(2);
    });

  })
});


const moxiosRequest = () => {
  moxios.wait(() => {
    const request = moxios.requests.mostRecent();
    request.respondWith({
      status: 200,
      response: expectedState,
    });
  });
}
