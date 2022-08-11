import React from 'react'
import '../../css/login-register.css'
import { useDispatch } from "react-redux";
import { registernewUser } from '../../redux/actions/auth-action/registerUser';


function Form(props) {
    const dispatch = useDispatch();
    const handleSubmit=(event)=>{
        event.preventDefault();
        const signUp = user => {
                dispatch(registernewUser(user))
                .then(res => {
                    console.log(res);
                    // toast.success(res, {
                    //     position: toast.POSITION.BOTTOM_LEFT,
                    //     transition: Slide
                    // });
                    // props.history.push("/");
                })
                .catch(err => {
                    // toast.error(err, {
                    //     position: toast.POSITION.BOTTOM_LEFT,
                    //     autoClose: false
                    // });
                });
            } 
        // console.log(signUp);
        signUp("kedernath.mallick.tint022@gmail.com","Keder@1234");
    }
    
    return (
        <div className="customcontainer"> 
            <div className="form-content">
                <div className="form-body">
                    <h2 className="form-title">{props.title}</h2>
                    <form className="register-form" id={props.formid} onSubmit={handleSubmit}>
                        {props.children}
                    </form>
                </div>
                <div className="form-image">
                    <figure><img src={process.env.PUBLIC_URL + props.imglink} style={{height:props.imgHeight}}/></figure>
                    {props.subComponent}
                </div>
            </div>
        </div>
    );
}

export default Form
