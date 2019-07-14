import axios from "axios";
import * as constants from "./constants";
import { fromJS } from "immutable";

const changeHomeData = result => ({
  type: constants.CHNAGE_HOME_DATA,
  topicList: result.topicList,
  articleList: result.articleList,
  recommentList: result.recommentList
});

const addHomrList = (list, nextPage) => ({
  type: constants.CHNAGE_LIST_DATA,
  list: fromJS(list),
  nextPage
});

export const getHomeInfo = () => {
  return dispatch => {
    axios
      .get("/api/home.json")
      .then(res => {
        const result = res.data.data;
        dispatch(changeHomeData(result));
      })
      .catch(() => {
        alert("error");
      });
  };
};

export const getMoreList = page => {
  return dispatch => {
    axios
      .get("/api/homeList.json?page=" + page)
      .then(res => {
        const result = res.data.data;
        dispatch(addHomrList(result, page + 1));
      })
      .catch(() => {
        alert("error");
      });
  };
};

export const toogleTopShow = show => ({
  type: constants.TOGGLE_DATA,
  show
});
