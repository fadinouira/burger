import * as actionsTypes from '../actions/actionsTypes';
import updateObject from '../utility'
const initialState = {
    price : 0,
    ingredients : null,
    error : false
};

const reducer = (state = initialState , action) => {
    switch (action.type) {
        case actionsTypes.ADD_INGREDIENT:
            return {
                ...state,
                ingredients : {
                    ...state.ingredients,
                    [action.prop]: state.ingredients[action.prop] + 1
                },
                price : state.price + 1
            };
        case actionsTypes.REMOVE_INGREDIENT:
            return {
                ...state,
                ingredients : {
                    ...state.ingredients,
                    [action.prop]: state.ingredients[action.prop] - 1
                },
                price : state.price - 1
            };
        case actionsTypes.SET_INGREDIENTS:
            return {
                ...state,
                ingredients : action.ingredients,
                price : action.price
            }
        case actionsTypes.SET_ERROR:
            console.log(action.error);
            return {
                ...state,
                error : action.error
            }
        case actionsTypes.PURSHASE:
            return {
                ...state,
                price : 4,
                ingredients : null,
                error : false
            }
        default :
            return state ;
    }
};

export default reducer ;