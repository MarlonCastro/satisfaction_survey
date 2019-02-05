import API from '../../guidelines/api.instance';
import ErrorMessage from '../error.model'

class UsersApi {

  static async destroy(id) {
    return await API.delete(`/order/${id}`, {}).
      then((response) => response.data).
      catch((response) => new ErrorMessage(response));
  };

  static async showUserDetails(id) {
    return await API.get(`/users/${id}`, {})
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        return new ErrorMessage(error);
      });
  }
  static async showUsers() {
    return await API.get(`/users/`, {})
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        return new ErrorMessage(error);
      });
  }

  static async sendNotification(paramObj) {
    return await API.post(`/send-notification/`, paramObj)
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        return new ErrorMessage(error);
      });
  }

  static async search(params) {
    return await API.post(`/users/search`, params)
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        return new ErrorMessage(error);
      });
  }

  static async create(paramObj) {
    return await API.post("/users", paramObj)
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        return new ErrorMessage(error);
      });
  }

  static async update(id, paramObj) {
    return await API.put(`/order/${id}`, paramObj)
      .then(function (response) {
        return response.data;
      }).catch(function (error) {
        return new ErrorMessage(error);
      });
  }
  static async changeStatus(id) {
    return await API.patch(`/users/toggle`, id)
      .then(function (response) {
        return response.data;
      }).catch(function (error) {
        return new ErrorMessage(error);
      });
  }
}

export default UsersApi;
