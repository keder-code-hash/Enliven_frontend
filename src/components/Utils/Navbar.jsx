import React, { Component } from 'react';
import '../../css/navbar.css'
import { useDispatch,useSelector } from "react-redux";
import { logOutUser } from '../../redux/actions/auth-action/logOutAction';
import {Routes, Route, useNavigate} from 'react-router-dom';


function Navbar() {
    const dispatch=useDispatch(); 
    const logOut = () => {
        dispatch(logOutUser())
        .then(res => {
            window.location="/";
        })
        .catch(err => { 
            alert(err);
        });
      };
     
    return (
        <React.Fragment>
            <div className="hero-anime">	
                <div className="navigation-wrap bg-light start-header start-style">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12">
                                <nav className="navbar navbar-expand-md navbar-light">
                                    <a className="navbar-brand" href="/" ><img src={process.env.PUBLIC_URL + "assets/images/logo/enliven_transparent_rembg.png"} alt="enliven logo" width="100px"/> </a>
                                    
                                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                        <span className="navbar-toggler-icon"></span>
                                    </button>
                                    
                                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                        <ul className="navbar-nav ml-auto py-4 py-md-0">
                                            <CustomLink href="/">Home</CustomLink>
                                            <CustomLink href="/testing">General Testing</CustomLink>
                                            <CustomLink href="/about">About Us</CustomLink>
                                            {isLoggedIn()
                                                ?<></>
                                                :<CustomLink href="/signup">
                                                    Signup &nbsp;
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-plus" viewBox="0 0 16 16">
                                                        <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
                                                        <path fillRule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"/>
                                                    </svg>
                                                </CustomLink>
                                            }
                                            
                                            {isLoggedIn() 
                                                ?
                                                <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                                                    <a className="nav-link" onClick={logOut} type="button">
                                                        Logout &nbsp;
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box-arrow-in-right" viewBox="0 0 16 16">
                                                            <path fillRule="evenodd" d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z"/>
                                                            <path fillRule="evenodd" d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
                                                        </svg>
                                                    </a>
                                                </li>
                                                :<CustomLink href="/login">
                                                    Login &nbsp;
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box-arrow-in-right" viewBox="0 0 16 16">
                                                        <path fillRule="evenodd" d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z"/>
                                                        <path fillRule="evenodd" d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
                                                    </svg>
                                                </CustomLink> 
                                            }
                                            
                                        </ul>
                                    </div>
                                    
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

function CustomLink({href, children, ...props}) {
    const path = window.location.pathname;
    return(
        <li className={path === href ? "nav-item pl-4 pl-md-0 ml-0 ml-md-4 active" : "nav-item pl-4 pl-md-0 ml-0 ml-md-4"}>
            <a href={href} {...props} className="nav-link">{children}</a>
        </li>
    );
}
function isLoggedIn(){  
    return (localStorage.getItem("token")!==null &&  localStorage.getItem("refreshToken")!==null)
}
export default Navbar;