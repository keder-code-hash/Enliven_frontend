import React, { Component } from 'react'

class Testing extends Component {
    state = {}
    subComponent = (<></>)
    render() {

        return(
            <React.Fragment>
                <div className="container" style={{height: "70vh", marginTop:"6rem"}}>
                <h2>General Testing</h2><br/><br/>
                <form method="POST" action="/testing/query">
                    <div className="row">
                        <div className="col-8">
                            <div className="form-group">
                                <b>Question</b>
                                <input type="text" className="form-control" id="question" name="question"/>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="form-group">
                                <b>Marks</b>
                                <input type="number" className="form-control" id="Marks" name="marks"/>
                            </div>
                        </div>
                    </div>
                    <br/>
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="form-group">
                                <b>Standard Answer</b>
                                <textarea className="form-control" id="sdanswer" name="sdanswer"></textarea>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-group">
                                <b>Student Answer</b>
                                <textarea className="form-control" id="stanswer" name="stanswer"></textarea>
                            </div>
                        </div>
                    </div>
                    <br/>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
                </div>
            </React.Fragment>
        );
    }
}

export default Testing