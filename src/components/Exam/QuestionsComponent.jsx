import React, { Component } from 'react';

class Questions extends Component {
    state = {  } 
    render() { 
        return (
            <React.Fragment>
                <strong>Q: {this.props.question}</strong>
                <br/>
                <br/> 
            </React.Fragment>
        );
    }
}
 
export default Questions;