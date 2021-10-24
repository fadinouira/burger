import * as actionTypes from "./actionsTypes";
import { startLoading } from "./order";
import axios from "axios";

export const authStart = ()=> {
    return {
        type: actionTypes.AUTH_START
    }
};

const authSuccess = (authData)=> {
    return {
        type : actionTypes.AUTH_SUCCESS,
        authData : authData
    }
};

const authFail = (error)=> {
    return {
        type: actionTypes.AUTH_FAILED,
        error : error 
    }
};

export const logOut = ()=> {
    localStorage.removeItem('token');
    localStorage.removeItem('expire');

    return {
        type : actionTypes.LOG_OUT 
    }
}
export const auth = (email,password,sign)=> {
    console.log(email + password)
    return dispatch => {
        dispatch(startLoading());
        const data = {
            email : email,
            password : password,
            returnSecureToken : true
        }
        let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyC3hmyzCEzn4kpEbsDecSXhxs2gd7bVq00'
        if(sign === "Sign In")
            url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyC3hmyzCEzn4kpEbsDecSXhxs2gd7bVq00'
        axios.post(url,data)
            .then((res)=>{
                dispatch(authSuccess(res.data));
                const expire = new Date().getTime() + res.data.expiresIn * 1000;
                localStorage.setItem('token',res.data.idToken);
                localStorage.setItem('expire',expire);
                localStorage.setItem('userId',res.data.localId);

            })
            .catch((error)=>{
                console.log(error);
                dispatch(authFail());
            })
    }
};

export const authCheckState = ()=>{
    return dispatch => {
        const token = localStorage.getItem("token");
        const id = localStorage.getItem("userId");
        if(!token){
            return
        }
        else {
            const expiration = localStorage.getItem("expire");

            if(expiration > new Date().getTime()) {
                const data = {
                    idToken : token,
                    localId : id
                }
                dispatch(authSuccess(data));
            }
        }
    }
}
