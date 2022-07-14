import React from 'react'
import '../../css/login-register.css'

function Form(props) {
    let isHidden = ""
    if (props.image === "")
        isHidden = "form-image hidden";

    if(props.left === "true")
        return (
            <div className="customcontainer">
                <div className="form-content">
                    <div className={isHidden}>
                        <figure><img src={process.env.PUBLIC_URL + props.imglink} style={{height:props.imgHeight}}/></figure>
                        {props.subComponent}
                    </div>
                    <div className="form-body">
                        <h2 className="form-title">{props.title}</h2>
                        <form method="POST" className="register-form" id={props.formid} action={props.endpoint}>
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
                    <div className="form-body">
                        <h2 className="form-title">{props.title}</h2>
                        <form method="POST" className="register-form" id={props.formid} action={props.endpoint}>
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
