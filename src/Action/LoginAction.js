// import axios from 'axios';

// export function registerHandle(payload){
// const options = {
// url: 'http://localhost:9001/user_login',
// method: 'POST',
// // headers: {
// // 'Accept': 'application/json',
// // 'Content-Type': 'application/json;charset=UTF-8'
// // },
// data: payload
// };

// return function(dispatch)
// {console.log(payload)
// axios(options)
// .then(response => {
// console.log(response.status);
// });
// dispatch({type:'LOGIN',payload:payload});
// }
// }


import axios from 'axios'
export function loginHandle(payload){
const options = {
url: 'http://localhost:9001/user_login',
method: 'POST',

data: payload
};

return function(dispatch)
{
axios(options)
.then(response => {
console.log(response.status);
});
dispatch({type:'Login',payload:payload});
}
}