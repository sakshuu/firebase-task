import { SignIn_FAIL, SignIn_REQUEST, SignIn_SUCCESS, SignUp_FAIL, SignUp_REQUEST, SignUp_SUCCESS } from "../constans/auth"

export const authReducers = (
state = {auth :[]},
{type, payload}
) => {
    switch (type) {
        case SignIn_REQUEST : return {...state, loading:false}
        case SignIn_SUCCESS : return {...state, loading:false}
        case SignIn_FAIL : return {...state, loading:false}

        case SignUp_REQUEST : return {...state, loading:false}
        case SignUp_SUCCESS : return {...state, loading:false}
        case SignUp_FAIL : return {...state, loading:false}
              
    
        default: return state
    }
}