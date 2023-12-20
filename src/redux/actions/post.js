import { FETCH_ALL_DATA_FAIL, FETCH_ALL_DATA_REQUEST, FETCH_ALL_DATA_SUCCESS } from "../constans/post"
import axios from "axios";

// export const posts = () => async dispatch => {
//     try {
//         dispatch({type:FETCH_ALL_DATA_REQUEST})
//         const {data} = await axios.get("https://jsonplaceholder.typicode.com/posts")
//         dispatch({type:FETCH_ALL_DATA_SUCCESS, payload:data})
//     } catch (error) {
//         dispatch({type:FETCH_ALL_DATA_FAIL, payload:error.message})
//     }

// }

export const posts = (page = 1, limit = 12) => async (dispatch) => {
    try {
        dispatch({ type: FETCH_ALL_DATA_REQUEST });
        const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}`);
        dispatch({ type: FETCH_ALL_DATA_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: FETCH_ALL_DATA_FAIL, payload: error.message });
    }
};
