import axios from 'axios';

export function loginHandle(payload) {
  const options = {
    url: 'http://localhost:9001/admin_login',
    method: 'POST',
    data: payload
  };

  return function (dispatch) {
    console.log(payload)
    axios(options)
      .then(response => {
        console.log(response.status);
      });
    dispatch({ type: 'LOGIN', payload: payload });
  }
}
