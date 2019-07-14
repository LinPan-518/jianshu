import { fromJS } from "immutable";
import * as constants from "./constants";
const defaultState = fromJS({
  //变成immutable对象
  title: "",
  content: ""
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.GET_DATA:
      return state.merge({
        title: action.title,
        content: action.content
      });
    default:
      return state;
  }
};
