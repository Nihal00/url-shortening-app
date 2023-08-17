import { FETCHING_DATA, FETCHING_SUCCESSFULL, FETCHING_ERROR } from "./actionType"
import axios from "axios";



export const fetchingStarted = () => {
    return {
        type: FETCHING_DATA,
        payload: true
    }
}

export const fetchingSuccess = (data) => {
    return {
        type: FETCHING_SUCCESSFULL,
        payload: data
    }
}

export const fetchingError = (err) => {
    return {
        type: FETCHING_ERROR,
        payload: err
    }
}

export const fetching = (url) => {
    return async function (dispatch) {
        dispatch(fetchingStarted());

        try {
            const data = await axios.get(`https://api.shrtco.de/v2/shorten?url= ${url}`)
            dispatch(fetchingSuccess(data));
            console.log('Data', data);
        } catch (err) {
            dispatch(fetchingError(err));
            console.log(err);
        }

    }
}