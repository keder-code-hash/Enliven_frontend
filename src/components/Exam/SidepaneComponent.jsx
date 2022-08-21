import React, { Component } from 'react'

class Sidepane extends Component {
    state = {  } 
    render() { 
        return (
            <div style={{boxShadow: "rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset", padding: "15px", borderRadius:"8px", marginTop:"2rem"}}>
                {[...Array(Number(this.props.qno))].map((el, index) => <button className='btn btn-primary' style={{margin:"5px"}}>{index+1}</button>)}
            </div>
        );
    }
}
 
export default Sidepane;