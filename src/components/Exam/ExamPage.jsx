import React, { Component } from 'react'
import Webcam from "react-webcam";
import Questions from './QuestionsComponent';
import Sidepane from './SidepaneComponent';
import Answer from './AnswerComponent';

const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: "user"
};

class ExamPage extends Component {
    state = {  } 
    render() { 
        return (
            <div className="container" style={{marginTop:"5rem", marginBottom:"5rem"}}>
                <div className='row'> 
                    <div className='col-sm-9'>
                        <h3>Exam: {this.props.examname}</h3>
                        <br/>
                        <h5>Full Marks: {this.props.fullmarks}</h5>
                        <h5>Remaining Time: <span className="badge badge-warning">{this.props.time}</span></h5>
                    </div>
                    <div className='col-sm-3'>
                    <p align="center">
                    <Webcam
                            audio={false}
                            screenshotFormat="image/jpeg"
                            width={230}
                            videoConstraints={videoConstraints}
                    />
                    </p>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-sm-9'>
                        <Questions question="What is OS?"/>
                        <Answer/>
                    </div>
                    <div className='col-sm-3'>
                        <Sidepane qno="5" />
                    </div>
                </div>
            </div>
       );
    }
}
 
export default ExamPage;