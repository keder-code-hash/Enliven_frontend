import React, { Component } from 'react';
import { useDispatch,useSelector } from "react-redux";
import { loginUser } from '../../redux/actions/auth-action/loginAction';
import '../../css/login-register.css';

function LoginComponent(props){
    const state = {  } 
    const subComponent = (<><a href="#" className="signup-image-link">Create an account</a></>);
    const dispatch=useDispatch();
    const handleLogin=(event)=>{
        event.preventDefault();
        const signIn = usr => {
            dispatch(loginUser(usr))
            .then(res => {
                console.log(usr); 
            })
            .catch(err => { 
            });
        }
        let usr={
            email:event.target.email.value,
            password:event.target.password.value,
        } 
        signIn({email:usr.email,password:usr.password});
    }
    return (
        <React.Fragment>
            <section className="sign-in">
                <div className="customcontainer"> 
                    <div className="form-content">
                        <div className="form-body">
                            <h2 className="form-title">Sign In</h2>
                            <form className="register-form" onSubmit={handleLogin}>
                                <div className="form-group">
                                    <label htmlFor="email"><i className="zmdi zmdi-account material-icons-name"></i></label>
                                    <input type="text" name="email" id="email" placeholder="Your Email"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="your_pass"><i className="zmdi zmdi-lock"></i></label>
                                    <input type="password" name="password" id="your_pass" placeholder="Password"/>
                                </div>
                                <div className="form-group">
                                    <input type="checkbox" name="remember-me" id="remember-me" className="agree-term" />
                                    <label htmlFor="remember-me" className="label-agree-term"><span><span></span></span>Remember me</label>
                                </div>
                                <div className="form-group form-button">
                                    <input type="submit" name="signin" id="signin" className="form-submit" value="Log in"/>
                                </div>
                                <div className="social-login">
                                    <span className="social-label">Or login with</span>
                                    <ul className="socials">
                                        <li><a href="#"><i className="display-flex-center zmdi zmdi-facebook"></i></a></li>
                                        <li><a href="#"><i className="display-flex-center zmdi zmdi-twitter"></i></a></li>
                                        <li><a href="#"><i className="display-flex-center zmdi zmdi-google"></i></a></li>
                                    </ul>
                                </div>
                            </form>
                        </div>
                        <div className="form-image">
                            <figure><img src={process.env.PUBLIC_URL + "assets/images/signup-image.jpg"} style={{height:"250px"}}/></figure>
                            {subComponent}
                        </div>
                    </div>     
                </div>
            </section>
        </React.Fragment>
    );
}

export default LoginComponent;