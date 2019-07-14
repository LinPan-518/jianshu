import React, { PureComponent } from "react";
import { ListItem, ListInfo, Loadmore } from "../style";
import { connect } from "react-redux";
import { actionCreator } from "../store";
import { Link } from "react-router-dom";

class List extends PureComponent {
  render() {
    const { list, getMoreList, page } = this.props;
    return (
      <div>
        {list.map((item, index) => (
          <Link key={index} to={"/detail/" + item.get("id")}>
            <ListItem>
              <img className="image-pic" src={item.get("imeUrl")} alt="" />
              <ListInfo>
                <h3 className="title">{item.get("title")}</h3>
                <p className="dsc">{item.get("desc")}</p>
              </ListInfo>
            </ListItem>
          </Link>
        ))}
        <Loadmore
          onClick={() => {
            getMoreList(page);
          }}
        >
          加载更多
        </Loadmore>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  list: state.getIn(["home", "articleList"]),
  page: state.getIn(["home", "articlePage"])
});
const mapDispatchToProps = dispatch => ({
  getMoreList(page) {
    dispatch(actionCreator.getMoreList(page));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);
