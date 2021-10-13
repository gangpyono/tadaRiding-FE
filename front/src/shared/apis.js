import axios from "axios";

const instance = axios.create({
  baseURL: "",
});

export const apis = {
  getUser: () => instance.post("/api/users/register"),
  setUser: (userInfo) => instance.post("/api/users/auth", userInfo),
};

instance.defaults.headers.common["Authorization"] = `Bearer ${USER_TOKEN}`;

export default apis;
