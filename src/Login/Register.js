import React from "react";
// import { icons } from "react-icons/lib";
// import loginImg from "./login.svg";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from 'firebase/auth';

// import "./login.css";
// import {FaFacebookF,FaGooglePlus,FaLinkedin} from 'react-icons/fa';
// import firebase from "./firebase";
import { GoogleAuthProvider,signInWithPopup } from 'firebase/auth';
import app, {auth} from "./firebase";
class Register extends React.Component {
	state = {
		activePanel : false,
		userCredentials : {
			email:'',
			password:''
		},
		loginCredentials : {
			email:'1@gmail.com',
			password:'aryan@123'
		}
	};

	googleLogin = () => {
		const provider = new GoogleAuthProvider();;
		console.log(provider);
		signInWithPopup(auth,provider).then((result) => {
			const credential = GoogleAuthProvider.credentialFromResult(result);
			const user  = result.user;
			console.log(user);
			localStorage.setItem('login-email' , user.displayName)
			localStorage.setItem('login-name' , user.email)
			window.location.href = '/'
			
		}).catch((error) => {
			console.error(error);
		});
	}

	onSuccessGoogleLogin = (data) => {
		console.log(data);
		if (data && data.idToken) {
			// const referralCode = queryString.parse(this.props.location.search).referralCode || '';
			// this.props.socialLogin('google', { idToken: data.idToken, referralCode: referralCode });
		}
	}

    render(){
		const {activePanel} = this.state;
        return (
			<div className="signup-content">
			
       <div className={` ${activePanel ? 'right-panel-active container' : 'container'}`}>
        <div className="form-container sign-up-container">
	 	<form>
			<h1>Create Account</h1>
			{/* <div className="social-container">
			<div className="button"><FaFacebookF  size={"25px"}/></div>
            <div className="button"><FaGooglePlus size={"25px"}/></div>
            <div className="button"> <FaLinkedin size={"25px"}/></div>
       </div> */}
	 		
			<span>or use your email for registration</span>
	 		<input type="text"  placeholder="Name" />
		<input type="email" onChange={(e) => this.handleChange(e,'email')} placeholder="Email" /> 
	<input type="password" onChange={(e) => this.handleChange(e,'password')} placeholder="Password" />
	<div className="login-btn">
	<button type="button" className="btn-login"   onClick={() => this.handleRegisterUser()}>Sign Up</button>
		<div><button 
			onClick={this.googleLogin}
		type="button" className="btn-login google"><li className="list-style">Sign up<a href="#"> 
		<i className="fa fa-google-plus white p-left12"></i></a></li>
		</button></div>
	</div>
		
		
 	</form>
 </div>
	<div className="form-container sign-in-container">
	 	<form>
	 		<h1>Sign in</h1>
	 		<div className="social-container">
	 			{/* <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
	 			<a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
	 			<a href="#" className="social"><i className="fab fa-linkedin-in"></i></a> */}
	 		</div>
	 		<span>or use your account</span>
	 		<input onChange={(e) => this.handleLoginChange(e,'email')} type="email" placeholder="Email" />
	 		<input onChange={(e) => this.handleLoginChange(e,'password')} type="password" placeholder="Password" />
	 		<a href="/">Forgot your password?</a>
	 		<button onClick={() => this.handleLoginUser()} type="button" className="btn-login" > Sign In</button>
	 	</form>
 </div>
	 <div className="overlay-container">
	 	<div className="overlay">
			<div className="overlay-panel overlay-left">
				<h1>Welcome Back!</h1>
				<p>To keep connected with us please login with your personal info</p>
	 			<button className="btn-login ghost" onClick={() => this.setState({activePanel : !activePanel})}>Sign In</button>
	 		</div>
	 		<div className="overlay-panel overlay-right">
				<h1>Hello, Friend!</h1>
 			<p>Enter your personal details and start journey with us</p>
			<button className="btn-login ghost"  onClick={() => this.setState({activePanel : !activePanel})}>Sign Up</button>
			</div>
</div>
 </div>
            
          
        </div>
		</div>
        )
    }

	handleSwap = () => {
	
	}

	handleChange = (value,key) => {
		this.setState({
			userCredentials:{
				...this.state.userCredentials,
				[key] : value.target.value
			}
		})
		localStorage.setItem('signup-email',this.state.userCredentials.email);
	}

	handleLoginChange = (value,key) => {
		this.setState({
			loginCredentials:{
				...this.state.loginCredentials,
				[key] : value.target.value
			}
		})
	}

	handleRegisterUser = () => {
		createUserWithEmailAndPassword(auth, this.state.userCredentials.email, this.state.userCredentials.password)
  .then((userCredential) => {
	  console.log(userCredential);
    // Signed in 
	this.setState({activePanel : !this.state.activePanel})
    const user = userCredential.user;
    // ...
  })

 
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
	}

	handleLoginUser = () => {
		signInWithEmailAndPassword(auth, this.state.loginCredentials.email, this.state.loginCredentials.password)
		.then((userCredential) => {
			console.log(userCredential);
		localStorage.setItem('login-email',this.state.loginCredentials.email);
		// Signed in 
		//   this.setState({activePanel : !this.state.activePanel})
		  const user = userCredential.user;
		  window.location.href = '/'
		  // ...
		})
		.catch((error) => {
		  const errorCode = error.code;
		  const errorMessage = error.message;
		  console.log(error);
		  // ..
		});
	}
}

export default Register;