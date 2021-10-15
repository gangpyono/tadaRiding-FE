import React from "react";
import styled from "styled-components";

import { Grid, Text, Image } from "../elements/index.js";
import Post from "../components/Post";
const MyPage = (props) => {
  return (
    <Grid margin="40px">
      {/* 내가 참여한 게시물 */}
      <Text align="center" size="30px" bold>
        내가참여한 라이딩
      </Text>
      <Grid mainFlex width="1350px" margin=" 0px auto 40px" wrap>
        <Post></Post>
        <Post></Post>
        <Post></Post>
        <Post></Post>
        <Post></Post>
        <Post></Post>
        <Post></Post>
      </Grid>
      {/* 내가 작성한 게시물 */}
      <Line />
      <Grid margin="50px 0px 0px">
        <Text align="center" size="30px" bold>
          내가 작성한 게시물
        </Text>
        <Grid mainFlex width="1350px" margin="0px auto 40px" wrap>
          <Post></Post>
          <Post></Post>
          <Post></Post>
          <Post></Post>
          <Post></Post>
          <Post></Post>
          <Post></Post>
        </Grid>
      </Grid>
    </Grid>
  );
};

const Line = styled.hr`
  border-top: 1px solid #bbb;
`;

export default MyPage;
