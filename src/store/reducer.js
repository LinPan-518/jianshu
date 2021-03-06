import { combineReducers } from "redux-immutable";
import { reducer as headerReducer } from "../component/header/store";
import { reducer as homeReducer } from "../pages/home/store";
import { reducer as detailReducer } from "../pages/detail/store";
import { reducer as loginReducer } from "../pages/login/store";

const reducer = combineReducers({
  header: headerReducer,
  home: homeReducer,
  detail: detailReducer,
  login: loginReducer
}); // this state 变成immutable对象
export default reducer;
