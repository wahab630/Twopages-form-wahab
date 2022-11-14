import React from 'react'
import { Button } from '@mui/material'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate=useNavigate();

  useEffect(()=>{
    let authToken= sessionStorage.getItem("auth")
    if(!authToken){
      navigate("/login")
    }
  },[]);
  const logout =()=>{
    sessionStorage.removeItem("auth")
    navigate("/login")
  }
  return (
    <>
 
 <Button onClick={logout}>sign out</Button>
    
    </>
  )
}

export default Home