import * as actionTypes from '../actions/actionTypes';

const initialState = {
    images: [],
    imageItems: 20,
    start: 0,
};

const reducer = (state=initialState, action) => {
    switch( action.type ) {
        case actionTypes.STORE_RESULT:
            return {
                ...state,
                start : state.start + state.imageItems,
                images: [...state.images, ...action.results] 
            };
        default:
            return state;
    }
}
export default reducer;