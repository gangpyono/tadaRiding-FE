import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5000",
});

const USER_TOKEN = sessionStorage.getItem("USER_TOKEN");

export const apis = {
  signUp: (userInfo) => instance.post("/api/users/register", userInfo),
  login: (userInfo) => instance.post("/api/users/auth", userInfo),
  loginCheck: () =>
    instance.get("/api/users/:userUid/validation", {
      headers: { Authorization: `Bearer ${USER_TOKEN}` },
    }),
};

instance.defaults.headers.common["Authorization"] = USER_TOKEN;

export default apis;
