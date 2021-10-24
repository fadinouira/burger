import * as actionsTypes from './actionsTypes'
import BS from "../../axios-orders";

export const addIngredient = (name)=> {
    return {
        prop : name ,
        type : actionsTypes.ADD_INGREDIENT
    }
}

export const removeIngredient = (name)=> {
    return {
        prop : name ,
        type : actionsTypes.REMOVE_INGREDIENT
    }
};

const setIngredients = (ings) => {
    return {
        type : actionsTypes.SET_INGREDIENTS,
        ingredients : ings.ingredients,
        price : ings.price

    }
}

const setError = (error) => {
    return {
        type : actionsTypes.SET_ERROR,
        error : error
    }
}

export const initIngredients = () => {
    return dispatch => {
        BS.get('burger/-MmbpIiDJQUmL5RvBxbv.json')
            .then(res => {
                dispatch(setIngredients(res.data))
            })
            .catch(error => {
                dispatch(setError(error.message))
            })
    }
}