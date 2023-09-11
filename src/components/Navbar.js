import { Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import ogo from "../assets/images/ogo.png";

import React from 'react'

const Navbar = () => {
  return (
    <Stack direction="row" justifyContent="space-between" display="flex" alignItems="center" sx={{gap:{sm:"123px", xs:"40px"}, mt:{sm:"32px", xs:"20px"}, justifyContent:"none"}} px="20px" >
      <Link>
        <img src={ogo} alt='logo-name' style={{width: "80px", height:"90px", margin:"0px, 20px" } }/>
      </Link>
      <Stack 
      direction="row"
      gap="40px"
      fontFamily="alegreya"
      fontSize="24px"
      alignItems="flex-end"
      >
        <Link to="/" style={{textDecoration:"none", color:"#3A1212", borderBottom:"3px solid"}}>
          Home
        </Link>
        <a href='#exercises' style={{textDecoration:"none", color: '#3A1212', borderBottom:"3px solid"}}>
          Exercise
        </a>
      </Stack>
    </Stack>
  )
}

export default Navbar