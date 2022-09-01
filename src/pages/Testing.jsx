import React from 'react';

function Testing() {
    const backgroundImage = process.env.PUBLIC_URL + "assets/images/background/about-us.svg";
    return(
        <React.Fragment>
            <div className="text-center" style={{padding: "3rem", color: "white", backgroundColor: "#2026d2", marginTop:"3.8rem", backgroundImage : `url(${backgroundImage})`, backgroundRepeat : "no-repeat", backgroundSize : "cover", backgroundPositionY : "center"}}><h1>General Testing</h1></div>
            <div className="container" style={{height: "70vh", marginTop:"5rem"}}>
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

export default Testing;