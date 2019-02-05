class ErrorMessage {
  constructor(error) {
    this.error = error;
    this.code = (error.response && error.response.status) ? error.response.status : 0;
    this.message = error.message;
    this.messageApi = error.response.data ? error.response.data.message : ''
  }
}

export default ErrorMessage;