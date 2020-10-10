import RequestUtils from "./RequestUtils";
import RoutesUtils from './RoutesUtils';

class jwtService extends RoutesUtils.EventEmiter {

    init() {
        this.handleAuthtication();
    }

    handleAuthtication = () => {
        let token = this.getAccessToken();
        this.emit("TOKEN", token)
    }

    siginWithUsernameAndPassword = (username, password) => {
        return RequestUtils.Post("/api/auth", {
            username: username,
            password: password,
        });
    };

    siginWithToken = token => {
        return new Promise((resolve, reject) => {
            RequestUtils.Post("/api/token", {token: token}).then(res => {
                if (res.errorCode === 200) {
                    resolve(res);
                } else {
                    reject(res)
                }
            });
        });
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
