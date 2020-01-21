import axios from 'axios'
export function loginHandle(payload) {
    const options = {
        url: 'http://localhost:9001/user_login',
        method: 'POST',

        data: payload
    };

    return function (dispatch) {
        axios(options)
            .then(response => {
                console.log(response.status);
            });
        dispatch({ type: 'Login', payload: payload });
    }
}