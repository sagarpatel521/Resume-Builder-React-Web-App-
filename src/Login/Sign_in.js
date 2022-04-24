import React from "react";
import './login.css';
// import loginImg from "./login.svg";
import {FaFacebookF,FaGooglePlus,FaLinkedin} from 'react-icons/fa';

 
let isLoggedin = false;

class Login extends React.Component{

    constructor(props){
        super(props);
    }
    render(){
        return (

       <div className="container">
	{/* //     <div class="form-container sign-up-container">
	// 	<form action="#">
	// 		<h1>Create Account</h1>
	// 		<div class="social-icons">
    //         <div className="button"><FaFacebookF  size={"25px"}/></div>
    //         <div className="button"><FaGooglePlus size={"25px"}/></div>
    //         <div className="button"> <FaLinkedin size={"25px"}/></div>
    //         </div>
    //         <p className="register">or use your email for Registration</p>
    //         <input type="text" placeholder="Name"/>
    //         <input type="email" placeholder="Email" />
	// 	 	<input type="password" placeholder="Password" />
    //        <div className="btn"><button className="button1">Sign UP</button></div>
    //         </form>
    //         </div>
    //         <div className="form-container .sign-in-container">
    //         <form action="#">
	// 		<h1>Sign in</h1>
	// 		<div class="social-icons">
    //         <div className="button"><FaFacebookF  size={"25px"}/></div>
    //         <div className="button"><FaGooglePlus size={"25px"}/></div>
    //         <div className="button"> <FaLinkedin size={"25px"}/></div>
    //         </div>
    //         <p className="register">or use your email for Registration</p>
    //         <input type="email" placeholder="Email" />
	// 		<input type="password" placeholder="Password" />
	// 		<a href="#">Forgot your password?</a>
	// 		<button>Sign In</button>
    //         </form>
    //         </div>
    //         <div class="overlay-container">
	// 	<div class="overlay">
	// 		<div class="overlay-panel overlay-left">
	// 			<h1>Welcome Back!</h1>
	// 			<p>To keep connected with us please login with your personal info</p>
	// 			<button class="ghost" id="signIn">Sign In</button>
	// 		</div>
	// 		<div class="overlay-panel overlay-right">
	// 			<h1>Hello, Friend!</h1>
	// 			<p>Enter your personal details and start journey with us</p>
	// 			<button class="ghost" id="signUp">Sign Up</button>
	// 		</div>
	// 	</div>
	// </div> */}
            </div>
           
        
        )
    }
    handleSubmit = (name,pass) => {
        if(name === 'janvikalavadiya@gmail.com' && pass === 'Test@123'){
            isLoggedin = true
        }
        else {
            isLoggedin = false
        }
    }
}

export default Login;