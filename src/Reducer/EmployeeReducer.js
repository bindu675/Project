const initialState={
    SIno:'',
    EmpId:'',
    FirstName:'',
    LastName:'',
    Date_of_Birth:'',
    Sex:'',
    JoiningDate:'',
    email_id:'',
    MobileNo:''

    }
    
    export default(state = initialState,action)=>{
    switch(action.type){
    
    case "REGISTER":{
    return{...state,SIno:action.payload.SIno,
        EmpId:action.payload.EmpId,
        FirstName:action.payload.FirstName,
        LastName:action.payload.LastName,
        Date_of_Birth:action.payload.Date_of_Birth,
        Sex:action.payload.Sex,
        JoiningDate:action.payload.JoiningDate,
        email_id:action.payload.email_id,
        MobileNo:action.payload.MobileNo
    }
    }
    default:
    return state;
    }
    
    }