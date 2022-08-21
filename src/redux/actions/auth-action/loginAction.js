import { signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "./firebase";
import { LOGIN_USER_FAILURE, LOGIN_USER_SUCCESS, LOGOUT_USER_SUCCESS } from "../types";

export const loginUser = user => dispatch => {
    return new Promise((resolve, reject) => {
        signInWithEmailAndPassword(auth,user.email,user.password)
        .then(res=>{
            const user=res.user;
            const token=user.accessToken;
            const message="successfully logged in"
            // console.log(user);
            dispatch(loginUserSuccess(message,user,token));
            resolve(message);
        })
        .catch(err=>{
            const message="Error with logged in"
            dispatch(loginUserFaliure(message,null,null));
            reject(message);
        })
    })
}

const loginUserSuccess=(message,user,token)=>{
    return {
        type:LOGIN_USER_SUCCESS,
        payload:{
            user,message,token
        }
    }
}

const loginUserFaliure=(message,user,token)=>{
    return {
        type:LOGIN_USER_FAILURE,
        payload:{
            user,message,token
        }
    }
}