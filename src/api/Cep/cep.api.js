import API from '../../guidelines/api';
import ErrorMessage from '../error.model'
import Axios from 'axios';

class CepApi {
  static async searchCep(cep) {
    return Axios.get(`https://viacep.com.br/ws/${cep}/json`)
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        return new ErrorMessage(error);
      });
  }
}

export default CepApi;
