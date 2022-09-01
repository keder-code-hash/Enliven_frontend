import React from 'react'
import Webcam from "react-webcam";
import Questions from './QuestionsComponent';
import Sidepane from './SidepaneComponent';
import Answer from './AnswerComponent';

function ExamPage(props) {
    const videoConstraints = {
        width: 1280,
        height: 720,
        facingMode: "user"
    };
    return (
        <div className="container" style={{marginTop:"5rem", marginBottom:"5rem"}}>
            <div className='row'> 
                <div className='col-sm-9'>
                    <h3>Exam: {props.examname}</h3>
                    <br/>
                    <h5>Full Marks: {props.fullmarks}</h5>
                    <h5>Remaining Time: <span className="badge badge-warning">{props.time}</span></h5>
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
                <div className='col-sm-9' style={{boxShadow: "rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset", padding: "15px", borderRadius:"8px", marginTop:"2rem"}}>
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
 
export default ExamPage;