import React, { Component } from 'react'
import Form from '../components/Utils/Form'

class Testing extends Component {
    state = {}
    render() {
        let formImage = (
            <div className="signin-image">
                <figure><img src={process.env.PUBLIC_URL + "assets/images/exam_vector.png"} alt="sign up"/></figure>
                <a href="#" className="signup-image-link">Create an account</a>
            </div>
        )

        let formContent = (
            <form method="POST" action="/testing/query">
                <input type="hidden" name="csrfmiddlewaretoken" value="fcNWtRvDLR4SR7aWhfjejk5NsXQYiSmIEqHZKFidbYQoJ2D7epms4rALeY6C2nqT"/>
                <div className="row">
                    <div className="col-8">
                        <div className="form-group">
                            <b><label for="question">Question</label></b>
                            <input type="text" className="form-control" id="question" name="question"/>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="form-group">
                            <b><label for="Marks">Marks</label></b>
                            <input type="number" className="form-control" id="Marks" name="marks"/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-6">
                        <div className="form-group">
                            <b><label for="sdanswer">Standard Answer</label></b>
                            <textarea className="form-control" id="sdanswer" name="sdanswer"></textarea>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <b><label for="stanswer">Student Answer</label></b>
                            <textarea className="form-control" id="stanswer" name="stanswer"></textarea>
                        </div>
                    </div>
                </div>
                
                
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        )

        return(
            <React.Fragment>
                <div className="container" style={{height: "69vh"}}>
                    {Form(formImage, formContent)}
                </div>
            </React.Fragment>
        );
    }
}

export default Testing