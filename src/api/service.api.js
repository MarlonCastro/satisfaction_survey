
import Axios from 'axios';
import ErrorMessage from './error.model'

const host = 'http://storage.googleapis.com/dito-questions/survey-responses.json'

class ServiceApi {
  static async showSearchs() {
    return await Axios.get(host, {})
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        return new ErrorMessage(error);
      });
  }

}

export default ServiceApi;
