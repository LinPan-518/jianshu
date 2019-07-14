import styled from "styled-components";

export const HomwWrapper = styled.div`
  overflow: hidden;
  width: 960px;
  margin: 0 auto;
`;

export const HomeLeft = styled.div`
  margin-left: 15px;
  padding-top: 30px;
  float: left;
  width: 625px;
  .banner-img {
    width: 625px;
    height: 270px;
  }
`;

export const HomeRight = styled.div`
  float: right;
  width: 280px;
`;

export const TopicWrapper = styled.div`
  overflow: hidden;
  padding-top: 20px 0 10px 0;
  margin-left: -18px;
  border-bottom: 1px solid #dcdcdc;
`;

export const TopicItem = styled.div`
  float: left;
  height: 32px;
  padding-right: 10px;
  margin-top: 18px;
  margin-left: 18px;
  line-height: 32px;
  background: #f7f7f7;
  font-size: 14px;
  color: #000;
  border: 1px solid #dcdcdc;
  border-redius: 4px;
  margin-bottom: 18px;
  .topic-pic {
    display: block;
    float: left;
    width: 32px;
    height: 32px;
    margin-right: 10px;
  }
`;

export const ListItem = styled.div`
  padding: 20px 0;
  border-bottom: 1px solid #dcdcdc;
  overflow: hidden;
  .image-pic {
    width: 125px;
    height: 100px;
    display: block;
    float: right;
    border-redius: 10px;
  }
`;
export const ListInfo = styled.div`
  width: 500px;
  float: left;
  .title{
    line-height:27px;
    font-weight:bold;
    font-size:18px;
    color:#333;
  }
  .dsc{
    line-height:24px;
    font-size:13px;
    color:#999;
  }
}
`;
export const RecommendWrapper = styled.div`
  margin: 30px 0;
  width: 280px;
`;
export const RecommendInfo = styled.div`
  width: 280px;
  height: 50px;
  background: url(${props => props.imgUrl});
  background-size: contain;
`;

export const WriterWrapper = styled.div`
  width: 278px;
  border: 1px solid #dcdcdc;
  border-redius: 3px;
  height: 300px;
  line-height: 300px;
  text-align: center;
`;

export const Loadmore = styled.div`
  width: 100%;
  margin: 30px 0;
  height: 40px;
  line-height: 40px;
  background: #a5a5a5;
  border-redius: 20px;
  color: #fff;
  text-align: center;
  cursor: pointer;
`;

export const BackTop = styled.div`
  position: fixed;
  right: 100px;
  bottom: 100px;
  width: 60px;
  height: 60px;
  line-height: 60px;
  border: 1px solid #ccc;
  font-size: 14px;
`;
