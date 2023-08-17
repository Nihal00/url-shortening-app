import { data } from "autoprefixer";
import * as type from "../action/actionType";

const initialState = {
    dataFetch: false,
    errorMsg: [],
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
                data: action.payload
            }
        case type.FETCHING_ERROR:
            return {
                ...state,
                errorMsg: action.payload,
            }
        default:
            return {
                state
            }
    }
}


export default reducer;