import axios from 'axios';

export function loginHandle(payload){
const options = {
url: 'http://localhost:8211/Signup',
method: 'POST',
// headers: {
// 'Accept': 'application/json',
// 'Content-Type': 'application/json;charset=UTF-8'
// },
data: payload
};

return function(dispatch)
{console.log(payload)
axios(options)
.then(response => {
console.log(response.status);
});
dispatch({type:'LOGIN',payload:payload});
}
}
