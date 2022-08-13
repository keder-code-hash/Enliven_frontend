import { signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "./firebase";

export const loginUser = user => dispatch => {
    return new Promise((resolve, reject) => {
        signInWithEmailAndPassword(auth,email,password)
        .then(res=>{
            const user=res.user;
            const token=user.getIdToken(false);
            const refreshToken=user.refreshToken;
            
        })
    })
}