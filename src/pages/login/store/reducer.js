import { fromJS } from "immutable";
import * as constants from "./constants";
const defaultState = fromJS({
  //变成immutable对象
  login: false
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.CHNAGE_LOGIN_DATA:
      return state.set("login", action.value);
    case constants.LOGIN_OUT:
      return state.set("login", action.value);

    default:
      return state;
  }
};
