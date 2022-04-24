import React , {useEffect,useState} from "react";
import { NavLink } from "react-router-dom";
import { Link } from 'react-router-dom';
import "./layout.css";
// import{GiHamburgerMenu} from "react-icons/gi";
// import {Menu} from "src/assets/svgIcons/svgIcons";
// import {Facebook} from "react-icons/fa";
// import { Facebook } from 'react-feather';

import { checkLogin, getAuthData } from '../../shared/services/auth.service';


const Layout = (props) => {
  const isLogIn = checkLogin();
  const userData = getAuthData();
  const [isLoggedIn , setIsLoggedIn] = useState(false)


  useEffect(() => {
    setIsLoggedIn(checkLogin())
  } , [])



  return (
    <>
      <nav className="main-nav">
        {/* first logo part */}
        <div class="container-width">

        <div className="logo">
          <h2>Resume</h2>
        </div>
        {/* second logo part */}
        <div className="menu-link">
          <ul className="ul-link">
            <li className="list">
                <Link to='/'>Home</Link>
            </li>
            <li className="list">
                <Link to='/resume-builder'>Resume Templates</Link>
            </li>
            {/* <li className="list">
              <a href="#">About us</a>
            </li>
            <li className="list">
              <a href="#">FAQ</a>
            </li> */}

            {/* button for login */}
            {/* <button className="btn button1" onClick={() => {window.location.href('./register')}}>Register</button> */}
            {(!isLogIn || !isLoggedIn) && (
              <>
                <NavLink to="register" className="btn button1" >
                  Register
                </NavLink>
                {/* <button className="btn button1 btn-sign">
                Sign In
                </button> */}
              </>
            )}
            {isLogIn && (
              <p className="logout-para">
                {userData}
                <button onClick={() => {
                  // window.location.reload = true
                  localStorage.removeItem('login-email');
                  setIsLoggedIn(false)
                }} className="btn button1 btn-sign">Log Out</button>
              </p>
              
            )}
          </ul>
          </div>
        </div>
      </nav>

      {props.children}

      {/* footer */}

      <div className="footer">
        <div className="footer-content container-width">
          <div className="footersection1">
            <div className="white ">
              <h2 className="white f-40size m-left">Resume</h2>
            </div>
            <div className=" m-left white">Connect with us on social media</div>
            <ul className="footer-links">
              <li><a href="mailto:sagarlimbasiya125@gmail.com"> <i className="fa fa-envelope"></i></a></li>
              <li><a href="https://www.linkedin.com/in/sagarkumar-limbasiya/" target="_blank"> <i className="fa fa-linkedin"></i></a></li>
              <li><a href="https://twitter.com/Sagarlimbasiya5" target="_blank"> <i className="fa fa-twitter"></i></a></li>
              <li><a href="#"> <i className="fa fa-google-plus"></i></a></li>
              <li><a href="#"> <i className="fa fa-instagram"></i></a></li>
            </ul>
          </div>
          <div className="footersection2">
            <div className="white">
              <h2 className="f-20size mt-40">Job seekers</h2>
            </div>
            <div className="white">
              <p>Create Resume</p>
              <p>Resume Examples</p>
              <p>Resume Templates</p>
              <p>Cover Letter Templates</p>
            </div>
          </div>
          <div className="footersection3">
            <div className="white">
              <h2 className="mt-40 f-20size">Support</h2>
            </div>
            <div className=" white">
              <p>About</p>
              <p>Contact</p>
              <p>FAQ</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
