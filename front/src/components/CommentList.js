import React from "react";
import styled from "styled-components";
import { Grid, Text, Button } from "../elements/index.js";
import DeleteIcon from "@mui/icons-material/Delete";

const CommentList = (props) => {
  return (
    <React.Fragment>
      <Grid width="100%" padding="55px" margin="20px 0px">
        <CommentItem />
        <CommentItem />
      </Grid>
    </React.Fragment>
  );
};

const CommentItem = (props) => {
  return (
    <Grid margin="0px 0px 50px 0px">
      <Grid isFlex>
        <Text size="1em">작성자&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;시간</Text>
        <Button borderRadius="15px" backgroundColor="transparent" width="30px">
          <DeleteIcon />
        </Button>
      </Grid>
      <Text size="1em" width="100%" padding="20px 0px 10px 0px">
        여기가 최고야
      </Text>
      <Line />
    </Grid>
  );
};

const Line = styled.hr`
  border-top: 1px solid #bbb;
`;

export default CommentList;
