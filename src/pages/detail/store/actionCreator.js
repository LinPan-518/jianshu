import axios from "axios";
import * as constants from "./constants";

const getDeatil = result => ({
  type: constants.GET_DATA,
  title: result.title,
  content: result.content
});

export const getDetailInfo = id => {
  return dispatch => {
    axios
      .get("/api/detail.json?id=" + id)
      .then(res => {
        const result = res.data.data;
        dispatch(getDeatil(result));
      })
      .catch(() => {
        alert("error");
      });
  };
};
