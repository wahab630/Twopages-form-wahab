import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from '@mui/material/Button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import TextField from "@mui/material/TextField";

const Login = () => {
  
  const navigate = useNavigate()
  const authentication  =getAuth();
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const handleAction =()=>{
      signInWithEmailAndPassword(authentication,email,password).then(
        (res)=>{
          sessionStorage.setItem("auth",res._tokenResponse.refreshToken)
          navigate('/home')
        }).catch(e =>{
          if(e.code== "auth/wrong-password"){
            toast.error('please check your password')
          }
          if(e.code== "auth/user-not-found"){
            toast.error('please check your email')
          }
        });
    }
  return (
    <>
      <div className="login">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 d-block m-auto my-5 border">
            
                <h1>
                    Login page
                    </h1>
                <Box
                  component="form"
                  sx={{
                    "& > :not(style)": { m: 1, width: "25ch" },
                  }}
                  noValidate
                  autoComplete="off"
                >
                 
                  <TextField
                    id="filled-basic"
                    label="Email"
                    variant="filled"
                    setEmail={setEmail}
                    onChange={(e)=>setEmail(e.target.value)}
                    />
                 <TextField
                    id="filled-basic"
                    label="Password"
                    setPassword={setPassword}
                    onChange={(e)=> setPassword(e.target.value)}
                    variant="filled"
                  />
                   <Button variant="contained" onClick={handleAction} >Login</Button>
                   <ToastContainer />
                </Box>
           
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
