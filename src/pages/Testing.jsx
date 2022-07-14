import React, { Component } from 'react'
import Form from '../components/Utils/Form'

class Testing extends Component {
    state = {}
    subComponent = (<></>)
    render() {

        return(
            <React.Fragment>
                <div className="container" style={{height: "100vh"}}>
                    <Form
                        left="false"
                        imglink="assets/images/exam_vector.png"
                        imgHeight="250px"
                        subComponent={this.subComponent}
                        title="Testing"
                        endpoint="/"
                    >
                        <div className="form-group">
                            <label for="your_name"><i className="zmdi zmdi-account material-icons-name"></i></label>
                            <input type="text" name="your_name" id="your_name" placeholder="Your Name"/>
                        </div>
                        <div className="form-group">
                            <label for="your_name"><i className="zmdi zmdi-account material-icons-name"></i></label>
                            <input type="text" name="your_name" id="your_name" placeholder="Your Name"/>
                        </div>
                        <div className="form-group form-button">
                            <input type="submit" name="signin" id="signin" className="form-submit" value="Submit"/>
                        </div>
                    </Form>
                </div>
            </React.Fragment>
        );
    }
}

export default Testing