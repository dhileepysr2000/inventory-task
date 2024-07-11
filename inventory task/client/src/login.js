import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./login.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:3001/login', { email, password })
      .then(response => {
        if (response.data.auth) {
          localStorage.setItem("token", response.data.token);
          navigate('/navbar');
        } else {
          alert("Authentication failed");
        }
      })
      .catch(error => {
        console.error("There was an error logging in!", error);
      });
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-4">&nbsp;</div>
        <div className="col-lg-4 body-1">
          <h1 className="head-1">Login Your Account</h1>
          <form onSubmit={handleSubmit}>
            <label>Enter Your Email :</label>
            <input
              type="text"
              id="email"
              className="email mt-2 inp1"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <br />
            <label className="mt-2">Enter Your Password :</label>
            <input
              type="password"
              id="password"
              className="password inp1"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <br />
            <input type="submit" className="mt-3 but-1" />
          </form>
        </div>
        <div className="col-lg-4">&nbsp;</div>
      </div>
    </div>
  );
}
