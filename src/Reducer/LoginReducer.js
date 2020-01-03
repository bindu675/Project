import *as ActionTypes from '../Action/type';

const initialState = {
  Employee_Id: 'GF ',
  password:'245 '
  }
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case ActionTypes.Employee_Id:
        return { ...state, Employee_Id: 'GG' };
        case ActionTypes.password:
        return { ...state, password: '243' };
      default:
        return state;
    };
  }
export default reducer;
