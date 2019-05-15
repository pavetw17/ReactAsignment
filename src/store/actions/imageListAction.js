import axios from 'axios'
import * as actionTypes from './actionTypes';
const accessKey = 'FuG74WHq1QdFUXq62J2gnqpMjeqx5lVa';
const linkGIPHY = 'https://api.giphy.com/v1/gifs/trending?api_key'
const getLink = `${linkGIPHY}=${accessKey}`

export const saveResult = ( res ) => {
    return {
        type: actionTypes.STORE_RESULT,
        results: res
    }
};

export const fetchData = () => {
    return (dispatch, getState) => {
        const imageItemsState = getState().imageFromGIF.imageItems;
        const startState = getState().imageFromGIF.start;
        axios.get(getLink + "&limit="+ imageItemsState +"&offset=" + startState)
        .then(res => {
                dispatch(saveResult(res.data.data))
            }
        );
    }
}
