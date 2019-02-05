
import ErrorMessage from '../error.model'
import axios from 'axios'

import API from '../../guidelines/api.instance';
class PhotoApi {

  /*static async imgS3Action(file) {
    let responseUrl = await axios.get("http://amobeaga-admin-api.ioasys.com.br/presign")
      .then(function (response) {
        return response
      })
      .catch(function (error) {
        return new ErrorMessage(error);
      });

    if (responseUrl) {
      let sendImage = await axios.put(responseUrl.data.url, file)
        .then(function (response) {
          return responseUrl.data.url;
        })
        .catch(function (error) {
          return new ErrorMessage(error);
        });

      return sendImage
    }
  }*/
  static async uploadPhotoApi(paramObj) {
    return await API.post("/places/uploadPhoto", paramObj)
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        return new ErrorMessage(error);
      });
  }

}

export default PhotoApi;
