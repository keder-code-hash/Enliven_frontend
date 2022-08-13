import { REGISTER_USER_FAILURE, REGISTER_USER_SUCCESS } from "../types"
import { auth } from "./firebase";
import {createUserWithEmailAndPassword,} from "firebase/auth"
 

export const registernewUser = user => dispatch => {
    return new Promise((resolve, reject) => {
        createUserWithEmailAndPassword(auth,user.email,user.password)
        .then(res=>{
            const user=res.user;
            const message="successfully registered.";
            const token=user.accessToken;
            dispatch(registersuccessUser(user,message,token));
            resolve(message);
        }) 
        .catch(err=>{ 
            console.log(err);
            const user=null;
            const message="user can't be created at tihs moment";
            const token=null;
            dispatch(registerFailureUser(user,message,token));
            reject(message);
        })
    });
  };

const registersuccessUser=(user,message,token)=>{
    return {
        type:REGISTER_USER_SUCCESS,
        payload:{
            user,message,token
        }
    }
}

const registerFailureUser=(user,message,token)=>{
    return{
        type:REGISTER_USER_FAILURE,
        payload:{
            user,message,token
        }
    }
}