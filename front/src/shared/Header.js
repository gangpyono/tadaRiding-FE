import React from "react";
import { Grid, Button, Text } from "../elements/index";

const Header = (props) => {
  // 로그인 안 했을 때 헤더
  return (
    <>
      <Grid isFlex height="80px" padding="0px 10%" bg="#afc2cb">
        <Text size="2em" bold color="#ffffee">
          Tada Riding
        </Text>
        <Grid isFlex>
          <Button
            margin="0px 20px"
            padding="10px"
            backgroundColor="#ffffee"
            _onClick={() => {}}
          >
            로그인
          </Button>
          <Button padding="10px" backgroundColor="#ffffee" _onClick={() => {}}>
            회원가입
          </Button>
        </Grid>
      </Grid>
    </>
  );

  // 로그인 했을 때 헤더
  // return (
  //   <>
  //     <Grid isFlex height="80px" padding="0px 150px" bg="#ffccbc">
  //       <Text size="2em" bold color="#ffffee">
  //         Tada Riding
  //       </Text>
  //       <Grid isFlex>
  //         <Button
  //           margin="0px 20px"
  //           padding="10px"
  //           backgroundColor="#ffffee"
  //           _onClick={() => {}}
  //         >
  //           마이페이지
  //         </Button>
  //         <Button padding="10px" backgroundColor="#ffffee" _onClick={() => {}}>
  //           로그아웃
  //         </Button>
  //       </Grid>
  //     </Grid>
  //   </>
  // );
};

export default Header;
