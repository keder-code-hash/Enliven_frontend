import React from 'react'
import '../../css/login-register.css'

function Form(props) {
    if(props.left === "true")
        return (
            <div className="customcontainer">
                <div className="form-content">
                    <div className="signin-image">
                        <figure><img src={process.env.PUBLIC_URL + props.imglink} style={{height:props.imgHeight}}/></figure>
                        {props.subComponent}
                    </div>
                    <div className="signin-form">
                        <h2 className="form-title">{props.title}</h2>
                        <form method="POST" className="register-form" id="login-form" action={props.endpoint}>
                            {props.children}
                        </form>
                    </div>
                </div>
            </div>
        );
    else
        return (
            <div className="customcontainer">
                <div className="form-content">
                    <div className="signin-form">
                        <h2 className="form-title">{props.title}</h2>
                        <form method="POST" className="register-form" id="login-form" action={props.endpoint}>
                            {props.children}
                        </form>
                    </div>
                    <div className="signin-image">
                        <figure><img src={process.env.PUBLIC_URL + props.imglink} style={{height:props.imgHeight}}/></figure>
                        {props.subComponent}
                    </div>
                </div>
            </div>
        );
}

export default Form
