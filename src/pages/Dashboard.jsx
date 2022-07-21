import React, { Component } from 'react';
import Exam from '../components/Dashboard/Exam';


class Dashboard extends Component {
    state = {  } 
    render() { 
        return (
            <React.Fragment>
                <h2 className='text-white text-center'>{this.props.title} DashBoard</h2>
                <div className="container" style={{height: "80vh", overflowY:"scroll"}}>
                    <div className="row">
                        <div className="col-sm-4 mt-5" key={1}>
                            <Exam
                                pid={1}
                                title={"Test 1"}
                                subject={"Computer Science"}
                                duration={"10mins"}
                                content={"General Test Exam..."}
                                date={"2021-12-31T13:45:29.747Z"}
                            />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
 
export default Dashboard;