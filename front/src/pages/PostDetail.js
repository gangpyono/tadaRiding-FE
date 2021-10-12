import React from "react";
import { Grid, Text, Input, Button, Image } from "../elements/index";

const PostDetail = (props) => {
  return (
    <React.Fragment>
      <Grid center>
        <Text bold size="40px">
          상세페이지
        </Text>
      </Grid>
      <Grid
        margin="0px auto"
        borderRadius="7px"
        border="1px"
        bg="#efebe9"
        width="800px"
      >
        <Grid isFlex>
          <Grid width="350px" margin="0px auto">
            <Image src={props.src}></Image>
          </Grid>
          <Grid margin="50px auto">
            <Grid isFlex padding="16px 0px">
              <Text>인원수 1/4</Text>
              <Button padding="10px">확인</Button>
            </Grid>
            <Grid isFlex padding="16px 0px">
              <Text>출발 강남</Text>
            </Grid>
            <Grid isFlex padding="16px 0px">
              <Text>도착 강북</Text>
            </Grid>
            <Grid isFlex padding="16px 0px">
              <Text>주행기간 2021-10-08</Text>
            </Grid>
            <Grid isFlex padding="16px 0px">
              <Text>내용 날도좋은데 라이딩어때요?</Text>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
export default PostDetail;
