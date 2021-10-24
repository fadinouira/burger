import * as actionsTypes from './actionsTypes';
import BS from "../../axios-orders";


export const startLoading = () => {
    return {
        type : actionsTypes.LOADING,
    }
}

const onSucess = (id)=> {
    return {
        type : actionsTypes.PURSHASE,
        id : id
    }
}

const onError = (error)=> {
    return {
        type : actionsTypes.PURSHASE_ERROR,
        error : error
    }
}

const getOrders = (orders) => {
    const ordersArray = Object.keys(orders).map((key)=>{
        return (orders[key]);
    })

    
    

    console.log("[orders Array] :",ordersArray)

    return {
        type : actionsTypes.GET_ORDERS,
        orders : ordersArray
    }
}

export const onGetOrders = (token) => {
    return dispatch => {
        dispatch(startLoading());
        BS.get('/orders.json?auth='+ token)
        .then(
            (res) => {
                dispatch(getOrders(res.data));
            }
        )
        .catch(
            (error)=>{
                dispatch(onError(error.message));
            }
        )
    }
}

export const onPurchase = (order,token)=> {
    return dispatch => {
        dispatch(startLoading());
        BS.post('/orders.json?auth='+token,order)
        .then((res)=>{
            dispatch(onSucess(res.data));
        })
        .catch((error)=>{
            dispatch(onError(error.message));
        })
    }
    
}