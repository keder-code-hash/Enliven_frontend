import React, { Component } from 'react';
function About() {
    const backgroundImage = process.env.PUBLIC_URL + "assets/images/about-us.svg"
    return (
        <React.Fragment>
            <div className="text-center" style={{padding: "3rem", color: "white", backgroundColor: "#2026d2", marginTop:"3.8rem", backgroundImage : `url(${backgroundImage})`, backgroundRepeat : "no-repeat", backgroundSize : "cover", backgroundPositionY : "center"}}><h1>About Us</h1></div>
            <div className="container">
                <div className="row md-10 about-card">
                    <div className="col md-5" style={{display: "block", margin: "auto"}}>
                    <figure><img src="https://swiftsku.com/assets/images/about/founders/mit.jpg" style={{height:"250px"}}/></figure>
                    </div>
                    <div className="col md-4" style={{backgroundColor: "#F8F9FA", padding: "30px"}}>
                        <div className="h1">Mit Patel (CEO)</div>
                        <div className="h4">Founder</div>
                        Mit Patel has been in the c-store industry for most of his life. He has extensive experience in managing convenience stores and creating automation & process improvement software for businesses ranging from c-stores to large enterprises.
                    </div>
                </div>
                <div className="row md-10 about-card">
                <div className="col md-5" style={{backgroundColor: "#F8F9FA", padding: "30px"}}>
                    <div className="h1">Mit Patel (CEO)</div>
                    <div className="h4">Founder</div>
                    Mit Patel has been in the c-store industry for most of his life. He has extensive experience in managing convenience stores and creating automation & process improvement software for businesses ranging from c-stores to large enterprises.
                </div>
                    <div className="col md-5" style={{display: "block", margin: "auto"}}>
                        <figure><img src="https://swiftsku.com/assets/images/about/founders/mit.jpg" style={{height:"250px"}}/></figure>
                    </div>
                </div>
                <div className="row md-10 about-card">
                <div className="col md-5" style={{display: "block", margin: "auto"}}>
                    <figure><img src="https://swiftsku.com/assets/images/about/founders/mit.jpg" style={{height:"250px"}}/></figure>
                    </div>
                    <div className="col md-4" style={{backgroundColor: "#F8F9FA", padding: "30px"}}>
                        <div className="h1">Mit Patel (CEO)</div>
                        <div className="h4">Founder</div>
                        Mit Patel has been in the c-store industry for most of his life. He has extensive experience in managing convenience stores and creating automation & process improvement software for businesses ranging from c-stores to large enterprises.
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default About;