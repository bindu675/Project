// const initialState={
//     EmployeeNo:'',
//     password:''
    
// }
// export default(state = initialState,action)=>{

//     switch(action.type){
//         case "LOGIN":{

//         return{...state,
//             EmployeeNo:action.payload.EmployeeNo, 
//             password:action.payload.password
//         }
//     }
//     default:
//         return state;
//     }  
// }


const initialState={
    employeeNo:'',
    password:''
    }
    
    export default(state = initialState,action)=>{
    switch(action.type){
    
    case "Login":{
    return{...state,employeeNo:action.payload.employeeNo,
    password:action.payload.password
    
    }
    }
    default:
    return state;
    }
    
    }


// import LoginReducer from './LoginReducer'
// import { combineReducers } from 'redux';

// export default combineReducers({
//     LoginReducer
// })