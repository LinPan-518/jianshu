import axios from "axios";
import * as constants from "./constants";

const check = () => ({
  type: constants.CHNAGE_LOGIN_DATA,
  value: true
});

export const logout = () => ({
  type: constants.LOGIN_OUT,
  value: false
});

export const getLogin = (account, password) => {
  return dispatch => {
    axios
      .get("/api/login.json?account=" + account + "&password+" + password)
      .then(res => {
        const result = res.data.data;
        if (result) {
          dispatch(check());
        } else {
          alert("error");
        }
      })
      .catch(() => {
        alert("error");
      });
  };
};
