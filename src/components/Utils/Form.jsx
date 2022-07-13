import React from 'react'

function Form(formImage, formContent) {
    return (
        <div className="customcontainer">
            <div className="signin-content">
                {formContent}
                {formImage}
            </div>
        </div>
    );
}

export default Form
