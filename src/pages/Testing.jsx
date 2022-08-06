import React, { Component } from 'react'

class Testing extends Component {
    state = {}
    subComponent = (<></>)
    render() {

        return(
            <React.Fragment>
                <div className="container" style={{height: "69vh"}}>
                <h2>General Testing</h2><br/><br/>
                <form method="POST" action="/testing/query">
                    <div class="row">
                        <div class="col-8">
                            <div class="form-group">
                                <b>Question</b>
                                <input type="text" class="form-control" id="question" name="question"/>
                            </div>
                        </div>
                        <div class="col-4">
                            <div class="form-group">
                                <b>Marks</b>
                                <input type="number" class="form-control" id="Marks" name="marks"/>
                            </div>
                        </div>
                    </div>
                    <br/>
                    <div class="row">
                        <div class="col-sm-6">
                            <div class="form-group">
                                <b>Standard Answer</b>
                                <textarea class="form-control" id="sdanswer" name="sdanswer"></textarea>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="form-group">
                                <b>Student Answer</b>
                                <textarea class="form-control" id="stanswer" name="stanswer"></textarea>
                            </div>
                        </div>
                    </div>
                    <br/>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
                </div>
            </React.Fragment>
        );
    }
}

export default Testing