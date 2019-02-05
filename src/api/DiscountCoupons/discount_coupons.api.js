import API from '../../guidelines/api.instance';
import ErrorMessage from '../error.model'

class DiscountCoupons {

  static async destroy(id) {
    return await API.delete(`/order/${id}`, {}).
      then((response) => response.data).
      catch((response) => new ErrorMessage(response));
  };

  static async showDiscountCoupons(params, page) {
    return await API.get(`/coupons/search?type=${params.type}&name=${params.name}&page=${page}`, {})
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        return new ErrorMessage(error);
      });
  }

  static async codePromotional(paramObj) {
    return await API.post("/coupons", paramObj)
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        return new ErrorMessage(error);
      });
  }

  static async search(paramObj) {
    return await API.post("/coupons", paramObj)
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        return new ErrorMessage(error);
      });
  }
  static async create(paramObj) {
    return await API.post("/coupons", paramObj)
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        return new ErrorMessage(error);
      });
  }

  static async update(id, paramObj) {
    return await API.put(`/coupons/${id}`, paramObj)
      .then(function (response) {
        return response.data;
      }).catch(function (error) {
        return new ErrorMessage(error);
      });
  }

  static deleteCoupon(id) {
    return API.delete(`/coupons/${id}`);
  }
}

export default DiscountCoupons;
