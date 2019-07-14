import { fromJS } from "immutable";
import * as constants from "./constants";
const defaultState = fromJS({
  //变成immutable对象
  topicList: [],
  articleList: [],
  recommentList: [],
  articlePage: 1,
  showScrool: false
});

const changeHomeData = (state, action) => {
  return state.merge({
    topicList: fromJS(action.topicList),
    articleList: fromJS(action.articleList),
    recommentList: fromJS(action.recommentList)
  });
};
const addArticleList = (state, action) => {
  return state.merge({
    articleList: state.get("articleList").concat(action.list),
    articlePage: action.nextPage
  });
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.CHNAGE_HOME_DATA:
      return changeHomeData(state, action);
    case constants.CHNAGE_LIST_DATA:
      return addArticleList(state, action);
    case constants.TOGGLE_DATA:
      return state.set("showScrool", action.show);
    default:
      return state;
  }
};
