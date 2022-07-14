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
                        imglink=""
                        imgHeight="250px"
                        subComponent={this.subComponent}
                        title="Testing"
                        endpoint="/"
                        formid="testing-form"
                    >
                        <div className="form-group row">
                            <div className="col-sm-6">
                                <label for="testing_question"></label>
                                <input type="text" name="testing_question" id="testing_question" placeholder="Question"/>
                            </div>
                            <div className="col-sm-6">
                                <label for="testing_marks"></label>
                                <input type="text" name="testing_marks" id="testing_marks" placeholder="Marks"/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label for="testing_standard_answer"></label>
                            <input type="text" name="testing_standard_answer" id="testing_standard_answer" placeholder="Standard Answer"/>
                            <label for="testing_student_answer"></label>
                            <input type="text" name="testing_student_answer" id="testing_student_answer" placeholder="Student Answer"/>
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