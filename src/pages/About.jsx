import React, { Component } from 'react';
function About() {
    const backgroundImage = process.env.PUBLIC_URL + "assets/images/background/about-us.svg"
    return (
        <React.Fragment>
            <div className="text-center" style={{padding: "3rem", color: "white", marginTop:"3.8rem", backgroundImage : `url(${backgroundImage})`, backgroundRepeat : "no-repeat", backgroundSize : "cover", backgroundPositionY : "center"}}><h1>About Us</h1></div>
            <div className="container">
                <div className="row about-card">
                    <div className="col-sm-6">
                    <figure><img src={process.env.PUBLIC_URL + "assets/images/us/we.png"} style={{width:"300px", padding : "2rem"}}/></figure>
                    </div>
                    <div className="col-sm-6" style={{backgroundColor: "#F8F9FA", padding: "30px"}}>
                        Enliven was founded by team Sudoers, a team of three guys.
                    </div>
                </div>
                <div className="row md-10 about-card">
                <div className="col md-5" style={{backgroundColor: "#F8F9FA", padding: "30px"}}>
                    <div className="h1">Keder Nath Mallick</div>
                    <div className="h4">Founder</div>
                    Mit Patel has been in the c-store industry for most of his life. He has extensive experience in managing convenience stores and creating automation & process improvement software for businesses ranging from c-stores to large enterprises.
                </div>
                    <div className="col md-5" style={{display: "block", margin: "auto"}}>
                        <figure><img src="https://res.cloudinary.com/dvcjj1k7a/image/upload/v1637041151/profile_ghmeps.jpg" style={{height:"250px"}}/></figure>
                    </div>
                </div>
                <div className="row md-10 about-card">
                <div className="col md-5" style={{display: "block", margin: "auto"}}>
                    <figure><img src="https://purnadip-manna.github.io/img/dp.jpg" style={{height:"250px"}}/></figure>
                    </div>
                    <div className="col md-4" style={{backgroundColor: "#F8F9FA", padding: "30px"}}>
                        <div className="h1">Purnadip Manna</div>
                        <div className="h4">Founder</div>
                        Mit Patel has been in the c-store industry for most of his life. He has extensive experience in managing convenience stores and creating automation & process improvement software for businesses ranging from c-stores to large enterprises.
                    </div>
                </div>
                <div className="row md-10 about-card">
                    <div className="col md-4" style={{backgroundColor: "#F8F9FA", padding: "30px"}}>
                        <div className="h1">Arghya Sahoo</div>
                        <div className="h4">Founder</div>
                        Mit Patel has been in the c-store industry for most of his life. He has extensive experience in managing convenience stores and creating automation & process improvement software for businesses ranging from c-stores to large enterprises.
                    </div>
                    <div className="col md-5" style={{display: "block", margin: "auto"}}>
                    <figure><img src="https://arghyasahoo.carrd.co/assets/images/image02.jpg?v=fbdb59f8" style={{height:"250px"}}/></figure>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default About;