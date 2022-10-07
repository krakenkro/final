import { FETCH_UNIS, FETCH_UNIS_SUCCESS, FETCH_UNIS_ERROR } from "../reducers/UnisReducer";
import axios from "axios";

export const fetchUnis = () => {
    return async (dispatch) => {
        try {
            dispatch({type: FETCH_UNIS});
            const response = await axios.get("http://universities.hipolabs.com/search");
            console.log(response.data)
            dispatch({type: FETCH_UNIS_SUCCESS, payload: response.data})
        } catch (e) {
            dispatch({type: FETCH_UNIS_ERROR, payload: "FETCHING MOVIES ERROR"})
        }
    }
}