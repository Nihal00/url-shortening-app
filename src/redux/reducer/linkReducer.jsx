import * as type from "../action/actionType";

const initialState = {
    dataFetch: false,
    errorMsg: false,
    data: [],
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case type.FETCHING_DATA:
            return {
                ...state,
                dataFetch: true,
            }
        case type.FETCHING_SUCCESSFULL:
            return {
                ...state,
                data: action.payload,
                errorMsg: false
            }
        case type.FETCHING_ERROR:
            return {
                ...state,
                errorMsg: true,
            }
        default:
            return {
                state
            }
    }
}


export default reducer;