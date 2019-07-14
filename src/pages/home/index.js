import React, { Component } from "react";
import { HomwWrapper, HomeLeft, HomeRight, BackTop } from "./style";
import List from "./components/List";
import Topic from "./components/Topic";
import Writer from "./components/Writer";
import Recomment from "./components/Recomment";
import { actionCreator } from "./store";
import { connect } from "react-redux";

class Home extends Component {
  handleScroolTop() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <HomwWrapper>
        <HomeLeft>
          <img
            className="banner-img"
            src="//upload-images.jianshu.io/upload_images/16027370-adcaab0af655d6da.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240"
            alt=""
          />
          <Topic />
          <List />
        </HomeLeft>
        <HomeRight>
          <Recomment />
          <Writer />
        </HomeRight>
        {this.props.showScrool ? (
          <BackTop onClick={this.handleScroolTop}>回到顶部</BackTop>
        ) : null}
      </HomwWrapper>
    );
  }
  componentDidMount() {
    this.props.changeHomeData();
    this.bindEvents();
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.props.changeScrollTopShow);
  }
  bindEvents() {
    window.addEventListener("scroll", this.props.changeScrollTopShow);
  }
}
const mapStateToProps = state => ({
  showScrool: state.getIn(["home", "showScrool"])
});
const mapDispatch = dispatch => ({
  changeHomeData() {
    dispatch(actionCreator.getHomeInfo());
  },
  changeScrollTopShow() {
    if (document.documentElement.scrollTop > 100) {
      dispatch(actionCreator.toogleTopShow(true));
    } else {
      dispatch(actionCreator.toogleTopShow(false));
    }
  }
});
export default connect(
  mapStateToProps,
  mapDispatch
)(Home);
