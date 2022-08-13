import React from 'react'
import '../../css/login-register.css'


function Form(props) { 
    return (
        <div className="customcontainer"> 
            <div className="form-content">
                <div className="form-body">
                    <h2 className="form-title">{props.title}</h2>
                    <form className="register-form" id={props.formid}>
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
