import React, { Component } from 'react'; 
import { useDispatch,useSelector } from "react-redux";
import { registernewUser } from '../../redux/actions/auth-action/registerUser';
import '../../css/login-register.css';


function RegisterComponent(props) {  
    // loading the globally stored state.
    const { token, user, auth,loading, error,success } = useSelector(state => state.userred);

    const dispatch=useDispatch();
    const handleSubmit=(event)=>{
        event.preventDefault();
        const signUp = usr => {
            dispatch(registernewUser(usr))
            .then(res => {
                console.log(token); 
            })
            .catch(err => { 
            });
        }
        let usr={
            name:event.target.name.value,
            email:event.target.email.value,
            password:event.target.pass.value,
            term_policy:event.target.value
        } 
        signUp({email:usr.email,password:usr.password});
    }
    const subComponent = (<><a href="#" className="signup-image-link">I am already a member</a></>)
    return (
        <React.Fragment>
            <section className="signup"> 
                <div className="customcontainer"> 
                    <div className="form-content">
                        <div className="form-body">
                            <h2 className="form-title">Sign up</h2>
                            <form className="register-form" onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="name"><i className="zmdi zmdi-account material-icons-name"></i></label>
                                    <input type="text" name="name" id="name" placeholder="Your Name"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email"><i className="zmdi zmdi-email"></i></label>
                                    <input type="email" name="email" id="email" placeholder="Your Email"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="pass"><i className="zmdi zmdi-lock"></i></label>
                                    <input type="password" name="pass" id="pass" placeholder="Password"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="re-pass"><i className="zmdi zmdi-lock-outline"></i></label>
                                    <input type="password" name="re_pass" id="re_pass" placeholder="Repeat your password"/>
                                </div>
                                <div className="form-group">
                                    <input type="checkbox" name="agree-term" id="agree-term" className="agree-term" />
                                    <label htmlFor="agree-term" className="label-agree-term"><span><span></span></span>I agree all statements in  <a href="#" className="term-service">Terms of service</a></label>
                                </div>
                                <div className="form-group form-button">
                                    <input type="submit" name="signup" id="signup" className="form-submit" value="Register"/>
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
 
export default RegisterComponent;