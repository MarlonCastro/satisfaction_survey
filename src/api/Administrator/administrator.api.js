import API from '../../guidelines/api.instance';
import ErrorMessage from '../error.model'

class AdministratorApi {
  static async getAdministrators() {
    return await API.get('/users/admin', {})
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        return new ErrorMessage(error);
      });
  }

  static async create(paramObj) {
    return await API.post("/users/admin", paramObj)
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        return new ErrorMessage(error);
      });
  }

  static async update(id, paramObj) {
    return await API.put("/users/admin/" + id, paramObj)
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        return new ErrorMessage(error);
      });
  }

  static async update_password(email, password, password_confirmation) {
    return await API.patch("/update-password-admin", { email: email, password: password, passwordConfirmation: password_confirmation })
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        return new ErrorMessage(error);
      });
  }

  static async show(id) {
    return await API.get("/users/admin/" + id, {})
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        return new ErrorMessage(error);
      });
  }

  static async destroy(id) {
    return await API.delete(`/users/admin/${id}`, {}).
      then((response) => response.data).
      catch((response) => new ErrorMessage(response));
  };
}

export default AdministratorApi;
