import * as actionsTypes from '../actions/actionsTypes'
const initialState = {
    token : null,
    userId : null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionsTypes.AUTH_SUCCESS :
            console.log(action.authData)
            return {
                ...state,
                token : action.authData.idToken,
                userId : action.authData.localId
            }
        case actionsTypes.LOG_OUT :
            return {
                ...state,
                token : null,
                userId : null
            }
        default :
            return state ; 
    }
}

export default reducer ;