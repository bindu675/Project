const initialState={
    text:''
    }
    
    export default(state = initialState,action)=>{
    switch(action.type){
    
    case "REGISTER":{
    return{...state,text:action.payload.text
    }
    }
    default:
    return state;
    }
    
    }