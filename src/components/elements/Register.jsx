import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore"; 
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { db } from "../../firebase";
import TextField from "@mui/material/TextField";

const Register = () => {
  const navigate = useNavigate();
  const authentication = getAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleAction = () => {
    createUserWithEmailAndPassword(authentication, email, password).then(
      (res) => {
        sessionStorage.setItem("auth", res._tokenResponse.refreshToken);
        navigate("/home")
        addDoc(collection(db, "users"), {
         email,password
        }).then(() => console.log('data saved'))
      }
    );
  };
  return (
    <>
      <div className="register">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 d-block m-auto my-5 border">
        
                <h1>Register Page</h1>
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
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <TextField
                    id="filled-basic"
                    label="Password"
                    setPassword={setPassword}
                    onChange={(e) => setPassword(e.target.value)}
                    variant="filled"
                  />
                  <Button variant="contained" onClick={handleAction}>
                    Register
                  </Button>
                </Box>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
