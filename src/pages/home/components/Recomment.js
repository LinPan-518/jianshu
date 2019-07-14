import React, { PureComponent } from "react";
import { RecommendWrapper, RecommendInfo } from "../style";
import { connect } from "react-redux";

class Recomment extends PureComponent {
  render() {
    const { list } = this.props;
    return (
      <RecommendWrapper>
        {list.map(item => {
          return (
            <RecommendInfo key={item.get("id")} imgUrl={item.get("imgUrl")} />
          );
        })}
      </RecommendWrapper>
    );
  }
}
const mapStateToProps = state => ({
  list: state.getIn(["home", "recommentList"])
});
// const mapDispatchToProps = dispatch => {
//   return null;
// };

export default connect(
  mapStateToProps,
  null
)(Recomment);
