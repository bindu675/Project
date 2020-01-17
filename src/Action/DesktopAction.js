import axios from 'axios'
import BrowserHistory from "../Components/Utils/BrowserHistory";

export function questionHandle(payload){
    debugger
const options = {
url: 'http://localhost:9001/Desktop',
method: 'POST',

data: payload
};

return function(dispatch)
{
axios(options)
.then(response => {
console.log(response.status);
BrowserHistory.push('./EmployeeList'); 
});
dispatch({type:'REGISTER',payload:payload});
}
}

