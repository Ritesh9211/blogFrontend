import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./register.css";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
   
    try {
      const res = await axios.post("https://blogbackend-79of.onrender.com/api/auth/register", {
        username,
        email,
        password,
        cpassword
      });
      console.log("res",res);
      if (res.status === 200 || res.status === 201) {
        window.alert(
          res.data.message
        );
        window.location.replace("/");
      } else {
        window.alert("Invalid Credentials");
      }     
    } catch (error) {
      setError(true);
      console.log("error",error.response.data)
      console.log(error.toJSON());
      window.alert(error.response.data.error)  //axios error handelling
    }
  };
  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          type="text"
          className="registerInput"
          placeholder="Enter your username..."
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>Email</label>
        <input
          type="text"
          className="registerInput"
          placeholder="Enter your email..."
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password</label>
        <input
          type="password"
          className="registerInput"
          placeholder="Enter your password..."
          onChange={(e) => setPassword(e.target.value)}
        />
        <label>ConfirmPassword</label>
        <input
          type="password"
          className="registerInput"
          placeholder="Confirm your password..."
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button className="registerButton" type="submit">
          Register
        </button>
      </form>
      <button className="loginRegisterButton">
         <Link className="link" to="/login">
          Login
        </Link>
      </button>
      {error && <span style={{color:"red", marginTop:"10px"}}>Something went wrong!</span>}
    </div>
  );
}
