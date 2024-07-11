import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:3001/register", { name, email, password })
      .then((response) => {
        if (response.status === 200) {
          console.log("Registration successful");
          navigate("/");
        }
      })
      .catch((error) => {
        console.error("There was an error registering!", error);
      });
  };

  return (
    <div className="body-2">
      <div className="form-1">
        <h4>Register Your Account</h4>
        <form onSubmit={handleSubmit}>
          <label>Enter Your Name :</label>
          <input
            type="text"
            id="name"
            className="name mt-2 inp2"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <br />
          <label>Enter Your Email :</label>
          <input
            type="email"
            id="email"
            className="email mt-2 inp2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <br />
          <label className="mt-2">Enter Your Password :</label>
          <input
            type="password"
            id="password"
            className="password inp2"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <br />
          <input type="submit" className="mt-3 but-2" />
        </form>
      </div>
    </div>
  );
}
