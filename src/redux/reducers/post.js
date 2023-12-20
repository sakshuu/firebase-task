import { FETCH_ALL_DATA_FAIL, FETCH_ALL_DATA_REQUEST, FETCH_ALL_DATA_SUCCESS, FETCH_SINGLE_DATA_FAIL, FETCH_SINGLE_DATA_REQUEST, FETCH_SINGLE_DATA_SUCCESS } from "../constans/post";

export const dataReducer = (
state = {data:[]},{type,payload}
) => {
    switch (type) {
        case FETCH_ALL_DATA_REQUEST: return {...state, loading: true}
        case FETCH_ALL_DATA_SUCCESS: return {...state, data:payload, loading: false}
        case FETCH_ALL_DATA_FAIL: return {...state, error:payload, loading: false}

        case FETCH_SINGLE_DATA_REQUEST: return {...state, loading: true}
        case FETCH_SINGLE_DATA_SUCCESS: return {...state, data:payload, loading: false}
        case FETCH_SINGLE_DATA_FAIL: return {...state, error:payload, loading: false}
    
        default: return state 
    }
}