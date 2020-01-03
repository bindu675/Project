import * as ActionTypes from './type';


 export function login(employeename) {
    return dispatch => {
        dispatch(request({ employeename }));
                error => {
                    dispatch(failure(error.toString()));
                }
    };
}




