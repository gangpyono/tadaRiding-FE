import React from "react";

import { Grid, Button, Text, Image } from "../elements/index.js";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const Post = (props) => {
  return (
    <Grid
      bg="#e1f5fe"
      center
      margin="20px"
      flexBasis
      isShadow
      borderRadius="10px"
      isPosition="relative"
    >
      <Text align="center" margin="20px" bold color="#727e82">
        동료 모집합니다.
      </Text>

      <Grid isPosition="absolute" top="5px" right="5px">
        <Button borderRadius="15px" backgroundColor="transparent" width="30px">
          <EditIcon />
        </Button>
        <Button borderRadius="15px" backgroundColor="transparent" width="30px">
          <DeleteIcon />
        </Button>
      </Grid>

      <Grid margin="0px 20px 20px 20px">
        <Image></Image>
      </Grid>
      <Text bold> 강남 → 강북</Text>

      <Grid padding="14px">
        <Grid isFlex padding="10px">
          <Text size="15px">출발일 : 2021.10.1</Text>
          <Text size="15px">인원수 : 5/10</Text>
          <Grid isFlex padding="10px">
            <Text size="15px" margin=" 10px">
              1
            </Text>
            <Button
              width="12px"
              backgroundColor="transparent"
              borderRadius="0px"
              padding="0px"
            >
              <FavoriteBorderIcon />
            </Button>
          </Grid>
        </Grid>

        <Grid isFlex padding="10px">
          <Text size="15px">작성일 : 2021.10.12</Text>
          <Text size="14px">작성자 : 아무개</Text>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default Post;
