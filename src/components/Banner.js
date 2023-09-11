import { Box, Stack, Typography } from '@mui/material'
import React from 'react';
import Bannergim from "../assets/images/b1.png";

const Banner = () => {
  return (
    <Box sx={{mt:{lg:"212px", xs:"70px"}, ml:{sm:"50px"}}} position="relative" p="20px">
        <Typography color="#FF2625" fontWeight="600" fontSize="26px">
            Fitness Club
        </Typography>
        <Typography fontWeight={700} sx={{fontSize:{lg:"44px", xs:"40px"}}} mb="23px" mt="30px">
            Sweat, Smile <br/>
            And Repeat
        </Typography>
        <Typography fontSize="22px" fontFamily="Alegreya" lineHeight="35px">
        Check out the most effective exercises personalized to you
        </Typography>
        <Stack>
            <a href='#exercises' style={{marginTop:"45px", textDecoration:"none", background:'#FF2625', textAlign:"center", width:"200px", fontSize:"22px", borderRadius:"4px", padding:"4px", color:"white", textTransform:"none"}}>Explore Exercises</a>
        </Stack>
        <Typography fontWeight={700} sx={{opacity:"0.1", display:{lg:"block", xs:"none"}}} fontSize="200px" >
            Exercise
        </Typography>
        <img src={Bannergim} alt='banner' className='hero-banner-img'/>
    </Box>
  )
}

export default Banner