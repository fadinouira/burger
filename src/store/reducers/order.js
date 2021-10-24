import * as actionsTypes from '../actions/actionsTypes';

const initialState = {
    orders : null,
    loading : false,
}

const reducer = (state = initialState , action)=> {
    switch (action.type) {
        case actionsTypes.PURSHASE:
            return {
                ...state,
                loading : false,
            }
        case actionsTypes.PURSHASE_ERROR:
            console.log(action.error);
            return {
                ...state,
                loading : false,
            }
        case actionsTypes.LOADING:
            return {
                ...state,
                loading : true,
            }
        case actionsTypes.GET_ORDERS:
            return {
                loading : false,
                orders : action.orders
            }
        case actionsTypes.AUTH_SUCCESS :
            return {
                ...state,
                loading : false
            }
        case actionsTypes.AUTH_FAILED :
            return {
                ...state,
                loading : false
            }
        case actionsTypes.LOG_OUT :
            return {
                ...state,
                orders : null
            }
        default :
            return state ;
    }
}

export default reducer;