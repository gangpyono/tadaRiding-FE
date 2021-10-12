import React from "react";
import { Route } from "react-router-dom";

//elements
import { Grid } from "../elements";
// components
import Header from "./Header";

// pages
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
// import MyPage from '../pages/MyPage';
// import PostDetail from '../pages/PostDetail';
// import PostList from '../pages/PostList';
// import PostWrite from '../pages/PostWrite';

function App() {
  return (
    <>
      {/* <Grid> */}
      <Header />
      <Route path="/Login" exact component={Login} />
      <Route path="/SignUp" exact component={SignUp} />
      {/* <Route path="/Mypage" exact component={MyPage} />
      <Route path="/" exact component={PostList} />
      <Route path="/PostWrite" exact component={PostWrite} />
      <Route path="/PostDetail" exact component={PostDetail} /> */}
      {/* </Grid> */}
    </>
  );
}
export default App;
