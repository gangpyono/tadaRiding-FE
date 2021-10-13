import React from "react";
import { Grid, Text, Input, Button, Image } from "../elements/index";
import styled from "styled-components";

const PostDetail = (props) => {
  return (
    <React.Fragment>
      {/* <Text margin="80px" size="2em" bold align="center">
        상세페이지
      </Text> */}
      <Grid width="800px" margin="100px auto">
        <Grid padding="10px 0px" width="100%" flexEnd>
          <Button padding="10px">수정</Button>
          <Button padding="10px">삭제</Button>
          <Button padding="10px">1:좋아요</Button>
        </Grid>

        <Grid
          width="100%"
          padding="55px"
          borderRadius="15px"
          bg="#e1f5fe"
          isShadow
        >
          <Text size="2em" bold margin="20px 0px 0px 20px">
            제목
          </Text>

          <Grid isFlex>
            <Grid width="300px">
              <Image src={props.src}></Image>
            </Grid>
            {/* <Button padding="10px">참석</Button> */}
            <Grid width="350px">
              <Grid isFlex padding="10px 0px" width="100%" margin="0 auto">
                <Text size="1em" bold>
                  인원수
                </Text>
                <Text
                  bg="white"
                  padding="10px"
                  borderRadius="10px"
                  width="250px"
                  size="1em"
                  bold
                >
                  1/4
                </Text>
              </Grid>
              <Grid isFlex padding="10px 0px" width="100%" margin="0 auto">
                <Text size="1em" bold>
                  출발
                </Text>
                <Text
                  bg="white"
                  padding="10px"
                  borderRadius="10px"
                  width="250px"
                  size="1em"
                  bold
                >
                  강북
                </Text>
              </Grid>
              <Grid isFlex padding="10px 0px" width="100%" margin="0 auto">
                <Text size="1em" bold>
                  도착
                </Text>
                <Text
                  bg="white"
                  padding="10px"
                  borderRadius="10px"
                  width="250px"
                  size="1em"
                  bold
                >
                  강북
                </Text>
              </Grid>
              <Grid isFlex padding="10px 0px" width="100%" margin="0 auto">
                <Text size="1em" bold>
                  주행기간
                </Text>
                <Text
                  bg="white"
                  padding="10px"
                  borderRadius="10px"
                  width="250px"
                  size="1em"
                  bold
                >
                  2021-10-08
                </Text>
              </Grid>
            </Grid>
          </Grid>

          <Grid width="100%">
            <Text padding="10px 0px" size="1em" bold>
              내용
            </Text>
            <Text
              padding="10px"
              bg="white"
              borderRadius="10px"
              width="100%"
              size="1em"
              bold
            >
              날도좋은데 라이딩어때요?날도좋은데 라이딩어때요?날도좋은데
              라이딩어때요?날도좋은데 라이딩어때요?날도좋은데 라이딩어때요?
              날도좋은데 라이딩어때요?날도좋은데 라이딩어때요?날도좋은데
              라이딩어때요?날도좋은데 라이딩어때요?날도좋은데 라이딩어때요?
              날도좋은데 라이딩어때요?날도좋은데 라이딩어때요?날도좋은데
              라이딩어때요?날도좋은데 라이딩어때요?날도좋은데 라이딩어때요?
            </Text>
          </Grid>
          <Text padding="16px 0px" size="1em" bold>
            댓글
          </Text>
          <Grid isFlex width="100%" margin="0 auto">
            <Input
              multiLine
              height="50px"
              padding="10px"
              width="100%"
              radius="15px"
              placeholder="내용을 입력하세요"
              _onChange={() => {}}
            ></Input>

            <Button
              isShadow
              backgroundColor="#ffffee"
              padding="10px"
              margin="0px 0px 0px 10px"
              _onClick={() => {}}
            >
              댓글작성
            </Button>
          </Grid>
        </Grid>

        <Grid width="100%" padding="55px" margin="20px 0px">
          <Grid margin="0px 0px 50px 0px">
            <Text size="1em">작성자&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;시간</Text>
            <Text size="1em" width="100%" padding="20px 0px 10px 0px">
              여기가 라이딩 최고야
            </Text>
            <Line />
          </Grid>
          <Grid margin="0px 0px 50px 0px">
            <Text size="1em">작성자&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;시간</Text>
            <Text size="1em" width="100%" padding="20px 0px 10px 0px">
              여기가 최고야
            </Text>
            <Line />
          </Grid>
          <Grid margin="0px 0px 50px 0px">
            <Text size="1em">작성자&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;시간</Text>
            <Text size="1em" width="100%" padding="20px 0px 10px 0px">
              맞아 여기가 최고야
            </Text>
            <Line />
          </Grid>
          <Grid margin="0px 0px 50px 0px">
            <Text size="1em">작성자&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;시간</Text>
            <Text size="1em" width="100%" padding="20px 0px 10px 0px">
              여기 진짜 빡세다...
            </Text>
            <Line />
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

const Line = styled.hr`
  border-top: 1px solid #bbb;
`;
export default PostDetail;
