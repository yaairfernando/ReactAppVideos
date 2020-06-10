import checkPropTypes from "check-prop-types";
import { applyMiddleware, createStore } from "redux";
import reducers from "../reducers";
import { middlewares } from "../createStore";

export const findByTestAtrr = (comp, attr) =>
  comp.find(`[data-test='${attr}']`);
export const checkProps = (comp, expectedProps) =>
  checkPropTypes(comp.propTypes, expectedProps, "props", comp.name);

export const mockStore = (initialState) => {
  const createStoreWithMiddleware = applyMiddleware(...middlewares)(
    createStore
  );
  return createStoreWithMiddleware(reducers, initialState);
};
