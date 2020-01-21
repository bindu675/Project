const initialState = {
    employeeNo: '',
    password: ''
}

export default (state = initialState, action) => {
    switch (action.type) {

        case "Login": {
            return {
                ...state, employeeNo: action.payload.employeeNo,
                password: action.payload.password

            }
        }
        default:
            return state;
    }

}


