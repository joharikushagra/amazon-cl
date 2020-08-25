import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../../Firebase";
function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = (e) => {
    e.preventDefault();
    //login logic
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        //logged in,redirect to home page
        history.push("/");
      })
      .catch((e) => alert(e.message));
  };

  const register = (e) => {
    e.preventDefault();
    //register logic
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        //create a user and logged in...,redirect to home page
        history.push("/");
      })
      .catch((err) => alert(err.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login-logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG6.png"
        />
      </Link>
      <div className="login-container">
        <h1>Sign In</h1>
        <form>
          <h5>Email</h5>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="login-signinbutton" onClick={login}>
            Sign In
          </button>
        </form>
        <p>
          By signing in you agree to Amazon's Conditions of Use & Sale. Please
          read our Privacy notice, our Cookies Notice and out Internet-Based Ads
          notice.
        </p>
        <button className="login-registerbutton" onClick={register}>
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
