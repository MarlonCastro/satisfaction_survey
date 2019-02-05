import API from '../../guidelines/api.instance';
import ErrorMessage from '../error.model'

class AuthApi {

  static async login(email, password) {
    const params = {
      "email": email,
      "password": password,
      "role": "Admin"
    }
    return await API.post("/login", params)
      .then(function (response) {
        return response;
      })
      .catch(function (error) {
        return new ErrorMessage(error);
      });
  }

  static async forgotPassword(email) {
    const params = {
      "email": email
    }

    return await API.patch("/users/recovery-password", params)
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        return new ErrorMessage(error);
      });
  }

  static async updatePassword(currentPassword, newPassword, confirmationPassword) {
    const params = {
      "current_password": currentPassword,
      "password": newPassword,
      "password_confirmation": confirmationPassword
    }

    return await API.put("/users/password", params)
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        return new ErrorMessage(error);
      });
  }

  static async isLoggedIn() {
    let accesstoken = localStorage.getItem("at");
    let client = localStorage.getItem("c");
    let contenttype = localStorage.getItem("ct");
    let resourcetype = localStorage.getItem("rt");
    let uid = localStorage.getItem("uid");
    let admin = localStorage.getItem("admin");

    if (accesstoken && client && contenttype && resourcetype && uid && admin)
      return true;
    else
      return false;
  }
}

export default AuthApi;
