const defaultState = {
    unis: [],
    loading: false,
    error: null
}
export const FETCH_UNIS = "FETCH_UNIS";
export const FETCH_UNIS_SUCCESS = "FETCH_UNIS_SUCCESS";
export const FETCH_UNIS_ERROR = "FETCH_UNIS_ERROR";

export const unisReducer = (state = defaultState, action) => {
    switch (action.type) {
        case FETCH_UNIS:
            return {loading: true, error: null, unis: []}
        case FETCH_UNIS_SUCCESS:
            return {loading: false, error: null, unis: action.payload}
        case FETCH_UNIS_ERROR:
            return {loading: false, error: action.payload, unis: []}
       
        default:
            return state;
    }
}

export const fetchUnisAction = (payload) => ({type: FETCH_UNIS, payload: payload});

