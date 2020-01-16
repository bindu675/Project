import axios from 'axios'
export function questionHandle(payload){
    debugger
const options = {
url: 'http://localhost:9001/question',
method: 'POST',

data: payload
};

return function(dispatch)
{
axios(options)
.then(response => {
console.log(response.status);
});
dispatch({type:'REGISTER',payload:payload});
}
}

