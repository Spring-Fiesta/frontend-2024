import React, { useState } from 'react'
import LGIMAGE from "../images/Spring.png"
import "../styles/loginpage.css"
import { Button } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [loading, setLoading] = useState(false);
  const [credentials, setCredentials] = useState({
    lemail: "",
    lpassword: "",
    remail: "",
    rpassword: ""
  });
  const [login, setLogin] = useState(false);
  const navigate=useNavigate();
  const change = (event) => { 
    setCredentials({
      ...credentials,
      [event.target.name]: event.target.value
    })
  }
  console.log(credentials);

  
  const HandleRegister = async (e) => {
    e.preventDefault()
    setLoading(true)
    const res = await fetch("https://spring-fiesta-2k24-backend.onrender.com/register", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: credentials.remail,
        password: credentials.rpassword
      })
    })
    const val = await res.json()
    if(val.success){
      alert("Registration Success")
      localStorage.setItem("token",val.token);
      navigate("/") 
    }else{
        alert(val.error)
    }
    setLoading(false)
  }

  const handleLogin = async (e) => {
    e.preventDefault()
    setLoading(true)
        const res = await fetch("https://spring-fiesta-2k24-backend.onrender.com/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: credentials.lemail,
                password: credentials.lpassword
            }),
        })   
        const val = await res.json()
        console.log(val.success)
        if(val.success){
            alert("Login Success")
            localStorage.setItem("token",val.token);
            navigate("/") 
        }else{ 
        alert(val.token) 
        }
    setLoading(false)
  }


  return (
    <div className='main-div'>
      {login ? 
      <>
        <div className="logreg-main">
          <div className='logreg-out-left'>
            <img src={LGIMAGE} alt="login_img" className='login-image' />
          </div>
          <div className='credentials-div'>
            <div>
              <h2>Login</h2>
            </div>
            <div>
              <p>E-mail</p>
              <input type='email' name="lemail" value={credentials.lemail} onChange={change} />
            </div>
            <div>
              <p>Password</p>
              <input type='password' name="lpassword" value={credentials.lpassword} onChange={change} />
            </div>
            <div>
              <LoadingButton variant="contained" loading={loading} color="success" onClick={handleLogin}>Login</LoadingButton>
            </div>
            <div style={{display:"flex",textAlign:"center",}}>
              OR
            </div>
            <div>
                <Button variant="contained" color='error' onClick={()=>{setLogin(false)}}>Register</Button>
            </div> 
          </div>
        </div>
      </>
       : 
      <div className="logreg-main">
        <div className="logreg-out-left">
          <img src={LGIMAGE} alt="login_img" className='login-image' />
        </div>
        <div className='credentials-div'>
          <div>
            <h2>Register</h2>
          </div>
          <div>
            <p>E-mail</p>
            <input type='email' name="remail" value={credentials.remail} onChange={change} />
          </div>
          <div>
            <p>Password</p>
            <input type='password' name="rpassword" value={credentials.rpassword} onChange={change} />
          </div>
          <div>
            <LoadingButton variant="contained" color="success" loading={loading} onClick={HandleRegister}>Register</LoadingButton>
          </div>
          <div style={{display:"flex",textAlign:"center",}}>
              OR
            </div>
          <div>
              <Button variant='contained' color="error" onClick={()=>{setLogin(true)}}> Login </Button>
          </div>
        </div>
      </div>
      }
    </div>
  )
}
