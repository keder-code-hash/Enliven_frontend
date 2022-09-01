import React from 'react';
 
function Questions(props) {
    return (
        <React.Fragment>
            <strong>Q: {props.question}</strong>
            <br/>
            <br/>
        </React.Fragment>
    );
}

export default Questions;