import {auth} from "./firebase";
import {LOGOUT_USER_FAILURE, LOGOUT_USER_SUCCESS } from "../types";


export const logOutUser = () => dispatch => {
    return new Promise((resolve, reject) => {
        if ((localStorage.getItem("token")===null ||  localStorage.getItem("refreshToken")===null)){
            const message="error with logout.please login again";
            dispatch(logOutUserFaliure(message));
            reject(message);
        }
        localStorage.removeItem("refreshToken");
        localStorage.removeItem("token");
        const message="successfully logged out.";
        dispatch(logOutUserSuccess(message));
        resolve(message);

    }).catch(err=>{
        const message="error with logout.please login again";
        dispatch(logOutUserFaliure(message)); 
    })
}

const logOutUserSuccess=(message)=>{
    return {
        type:LOGOUT_USER_SUCCESS,
        payload:{
            message
        }
    }
}

const logOutUserFaliure=(message)=>{
    return {
        type:LOGOUT_USER_FAILURE,
        payload:{
            message
        }
    }
}