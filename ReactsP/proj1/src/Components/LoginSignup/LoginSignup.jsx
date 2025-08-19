import React, { useState } from 'react';
import './LoginSignup.css';

// Assets
import userIcon from '../Assets/user.png';
import emailIcon from '../Assets/email.png';
import passwordIcon from '../Assets/password.png';

const LoginSignup = () => {

  const[action,setAction] = useState("Sign Up");

  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action==="Login"?<div></div>:<div className="input">
          <img src={userIcon} alt="User icon" />
          <input type="text" placeholder="Username" />
        </div>}
        <div className="input">
          <img src={emailIcon} alt="Email icon" />
          <input type="email" placeholder="Email" />
        </div>
        <div className="input">
          <img src={passwordIcon} alt="Password icon" />
          <input type="password" placeholder="Password" />
        </div>
      </div>
      {action==="Sign Up"?<div></div>:<div className="forgot-password">
        Forgot Password? <span> Click here! </span>
      </div>}
        <div className="submit-container">
        <div className={action === "Login" ? "submit gray" : "submit"} onClick={() => setAction("Sign Up")}>Sign Up</div>
        <div className={action === "Sign Up" ? "submit gray" : "submit"} onClick={() => setAction("Login")}>Log In</div>
      </div>
    </div>
  );
};

export default LoginSignup;

