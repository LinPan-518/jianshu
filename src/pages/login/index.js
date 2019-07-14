import React, { PureComponent } from "react";
import { LoginWrapper, LoginBox, Input, Button } from "./style";
import { connect } from "react-redux";
import { actionCreator } from "./store";
import { Redirect } from "react-router-dom";
class Login extends PureComponent {
  render() {
    const { loginStatus } = this.props;
    if (!loginStatus) {
      return (
        <div>
          <LoginWrapper>
            <LoginBox>
              <Input
                placeholder="account"
                ref={input => {
                  this.account = input;
                }}
              />
              <Input
                placeholder="password"
                type="password"
                ref={input => {
                  this.password = input;
                }}
              />
              <Button
                onClick={() => {
                  this.props.login(this.account, this.password);
                }}
              >
                Login
              </Button>
            </LoginBox>
          </LoginWrapper>
        </div>
      );
    } else {
      return <Redirect to="/" />;
    }
  }
}
const mapState = state => ({
  loginStatus: state.getIn(["login", "login"])
});
const mapDispatch = dispatch => ({
  login(accountElem, passwordElem) {
    dispatch(actionCreator.getLogin(accountElem.value, passwordElem.value));
  }
});
export default connect(
  mapState,
  mapDispatch
)(Login);
