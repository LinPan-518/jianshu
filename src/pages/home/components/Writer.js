import React, { PureComponent } from "react";
import { WriterWrapper } from "../style";
import { connect } from "react-redux";

class Writer extends PureComponent {
  render() {
    return <WriterWrapper>writer</WriterWrapper>;
  }
}
const mapStateToProps = state => ({
  list: state.getIn(["home", "recommentList"])
});

export default connect(
  mapStateToProps,
  null
)(Writer);
