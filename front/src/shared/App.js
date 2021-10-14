import React from "react";
import { Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/configureStore";

//elements
import { Grid } from "../elements/";

// components
import Header from "./Header";

// pages
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import MyPage from "../pages/MyPage";
import PostDetail from "../pages/PostDetail";
import PostList from "../pages/PostList";
import PostWrite from "../pages/PostWrite";

function App() {
  return (
    <>
      <Grid>
        <Header />
        <ConnectedRouter history={history}>
          <Route path="/Login" exact component={Login} />
          <Route path="/SignUp" exact component={SignUp} />
          <Route path="/Mypage" exact component={MyPage} />
          <Route path="/" exact component={PostList} />
          <Route path="/PostWrite" exact component={PostWrite} />
          <Route path="/PostDetail/:postUid" exact component={PostDetail} />
        </ConnectedRouter>
      </Grid>
    </>
  );
}
export default App;
