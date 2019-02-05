import API from '../../guidelines/api.instance';
import ErrorMessage from '../error.model'
import Axios from 'axios';
//import Establishment from './order.model'
const host = 'http://amobeaga.ioasys.com.br';

class EstablishmentApi {

  static async destroy(id) {
    return await API.delete(`/places/${id}`, {}).
      then((response) => response.data).
      catch((response) => new ErrorMessage(response));
  };

  static async showCategories(id) {
    return await Axios.get(`${host}/places/categories`, {})
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        return new ErrorMessage(error);
      });
  }

  static async showEstablishmentDetails(id) {
    return await API.get(`/places/${id}`, {})
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        return new ErrorMessage(error);
      });
  }
  static async showEstablishment(page) {
    return await API.get(`/places?perPage=10&page=${page}`, {})
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        return new ErrorMessage(error);
      });
  }


  static async search(params, page) {
    return await API.get(`/places/search?type=${params.type}&value=${params.value}&page=${page}`)
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        return new ErrorMessage(error);
      });
  }
  static async create(paramObj) {
    return await API.post("/places", paramObj)
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        return new ErrorMessage(error);
      });
  }

  static async updateEstablishment(paramObj) {
    return await API.put(`/places`, paramObj)
      .then(function (response) {
        return response.data;
      }).catch(function (error) {
        return new ErrorMessage(error);
      });
  }
  static async changeStatus(id) {
    return await API.patch(`/places/toggle`, id)
      .then(function (response) {
        return response.data;
      }).catch(function (error) {
        return new ErrorMessage(error);
      });
  }
}

export default EstablishmentApi;
