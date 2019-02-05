import API from '../../guidelines/api.instance';
import ErrorMessage from '../error.model'
import Axios from 'axios';
const host = 'https://api.amobeaga.com.br';
class AddressApi {
  static async searchCep(cep) {
    return Axios.get(`${host}/cep?cep=${cep}`)
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        return new ErrorMessage(error);
      });
  }
  static async getCities() {
    return Axios.get(`${host}/cities`)
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        return new ErrorMessage(error);
      });
  }
}

export default AddressApi;
