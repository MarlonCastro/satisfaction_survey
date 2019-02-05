import API from '../../guidelines/api.instance';
import ErrorMessage from '../error.model'
import Axios from 'axios';
//import Establishment from './order.model'

class EstablishmentApi {

  static async destroy(id) {
    return await API.delete(`/places/${id}`, {}).
      then((response) => response.data).
      catch((response) => new ErrorMessage(response));
  };


  static async showPromotionEstablishment(params, page) {
    return await API.get(`/places/deals/search?placeId=${params.id}&page=${page}&title=${params.title}&perPage=10`, {})
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        return new ErrorMessage(error);
      });
  }

  static async showPromotionDetails(id) {
    return await API.get(`/places/coupons_by_deal?dealId=${id}`, {})
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
  static async create(jsonGeneral) {
    return await API.post("/places/deals", jsonGeneral)
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        return new ErrorMessage(error);
      });
  }
  static async update(id, jsonGeneral) {
    return await API.put("/places/deals/" + id, jsonGeneral)
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

  static togglePromotionStatus(id) {
    return API.patch(`/places/deals/${id}`);
  }
}

export default EstablishmentApi;
