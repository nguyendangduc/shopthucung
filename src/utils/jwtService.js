import RequestUtils from "./RequestUtils";

class jwtService {
  siginWithUsernameAndPassword = (username, password) => {
    return RequestUtils.Post("/api/auth", {
      username: username,
      password: password,
    });
  };

  siginWithToken = token => {
    return RequestUtils.Post("/api/token", {token: token});
  }

  setSession = (access_token) => {
    if (access_token) {
      localStorage.setItem("jwt_access_token", access_token);
    } else {
      localStorage.removeItem("jwt_access_token");
    }
  };

  getAccessToken = () => {
    return window.localStorage.getItem("jwt_access_token");
  };
}

const intansce = new jwtService();
export default intansce;
