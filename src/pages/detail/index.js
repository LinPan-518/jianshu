import React, { Component } from "react";
import { DetailWrapper, Header, Content } from "./style";
import { connect } from "react-redux";
import { actionCreator } from "./store";
import { withRouter } from "react-router-dom"; //让此页面也可以获取异步组件内容

class Detail extends Component {
  render() {
    const { title, content } = this.props;
    return (
      <div>
        <DetailWrapper>
          <Header>{title}</Header>
          <Content dangerouslySetInnerHTML={{ __html: content }} />
        </DetailWrapper>
      </div>
    );
  }
  componentDidMount() {
    this.props.getDeatil(this.props.match.params.id);
  }
}
const mapState = state => ({
  title: state.getIn(["detail", "title"]),
  content: state.getIn(["detail", "content"])
});
const mapDispatch = dispatch => ({
  getDeatil(id) {
    dispatch(actionCreator.getDetailInfo(id));
  }
});
export default connect(
  mapState,
  mapDispatch
)(withRouter(Detail)); //让此页面也可以获取异步组件内容
