import './LoginUi.css';
import profile from "./../image/a.png";
import emaill from "./../image/emaill.jpg";
import password from "./../image/passw.jpg";
function LoginUi() {
  return (
    <div className="main">
     <div className="sub-main">
       <div>
         <div className="imgs">
           {/* <div className="container-image">
             <img src={profile} alt="profile" className="profile"/>

           </div> */}


         </div>
         <div className="downn">
           <div className="email-div" >
             <img src={emaill} alt="email" className="email"/>
             <input type="text" placeholder="Email" className="name"/>
           </div>
           <div className="second-input">
             <img src={password} alt="pass" className="email"/>
             <input type="password" placeholder="Password" className="name"/>
           </div>
            <p className="link">
            <input type="checkbox" id="check" className="checkbox-round"/>
            <a href="#">Remember Me</a> &nbsp;&nbsp;&nbsp; <a href="#">Forgot Password?</a>
            </p>
            <div className="login-button">
          <button>Login</button>
          </div>
          <p className="signup">
            <a href="i">Don't have an account? <u>Sign up</u></a>
          </p>
          </div>
       </div>
     </div>
    </div>
  );
}

export default LoginUi;
