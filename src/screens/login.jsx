import React, { useState } from "react";
import LGIMAGE from "../images/Spring.png";
import "../styles/loginpage.css";
import { LoadingButton } from "@mui/lab";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [loading, setLoading] = useState(false);
  const [credentials, setCredentials] = useState({
    name: "",
    password: "",
  });
  const BACKEND = process.env.REACT_APP_BACKEND_URL;

  const navigate = useNavigate();
  const change = (event) => {
    setCredentials({
      ...credentials,
      [event.target.name]: event.target.value,
    });
  };
  console.log(credentials);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    const res = await fetch(`${BACKEND}/api/teams/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        name: credentials.name,
        password: credentials.password,
      }),
    });

    if (res.ok) {
      alert("Login Success");
      navigate("/corporate-crime");
      localStorage.setItem("token", true);
    } else {
      alert("Invalid Credentials");
      localStorage.removeItem("token");
    }

    // const val = await res.json();
    // if (val) {
    //   alert("Login Success");
    //   localStorage.setItem("token", val._id);
    //   navigate("/corporate-crime");
    // } else {
    //   alert("Something Went Wrong");
    // }
    setLoading(false);
  };

  return (
    <div className="main-div">
      <div className="logreg-main">
        <div className="logreg-out-left">
          <img src={LGIMAGE} alt="login_img" className="login-image" />
        </div>
        <div className="credentials-div">
          <div>
            <h2>Login</h2>
          </div>
          <div>
            <p>Username</p>
            <input
              type="email"
              className="text-black text-base px-2"
              name="name"
              value={credentials.name}
              onChange={change}
            />
          </div>
          <div>
            <p>Password</p>
            <input
              type="password"
              className="text-black text-base px-2"
              name="password"
              value={credentials.password}
              onChange={change}
            />
          </div>
          <div>
            <LoadingButton
              variant="contained"
              loading={loading}
              color="success"
              onClick={handleLogin}
            >
              Login
            </LoadingButton>
          </div>
        </div>
      </div>
    </div>
  );
}
