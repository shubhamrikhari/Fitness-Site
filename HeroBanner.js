import React from 'react'
import {Stack, Typography, Box } from '@mui/material'

import logo from "../assets/banner.png";

const HeroBanner = () => {
  return (
    <Stack direction="row" spacing={30}>
        <Box sx={{mt : {lg : "212px", xs : "70px"}, ml : {sm : "50px"}}} position="relative" p="20px">
            <Typography color="#FF2625" fontWeight="600" fontSize="26px">
                Fitness Club
            </Typography>
            <Typography fontWeight={700} sx={{fontSize : {lg : "44px", xs : "40px"}}} mb="20px" mt="30px">
                Sweat, Smile <br/> and Repeat
            </Typography>
            <Typography fontSize="22px" LineHeight="35px" mb="10px" mt="25px">
                Check out the most effective exercises
            </Typography>
            <Stack>
                <a href="#exercises" style={{ marginTop: '25px', textDecoration: 'none', width: '200px', textAlign: 'center', background: '#FF2625', padding: '14px', fontSize: '22px', textTransform: 'none', color: 'white', borderRadius: '4px' }}>Explore Exercises</a>
            </Stack>
        </Box>
        <img src={logo} alt="banner" className="hero-banner-img"/>
    </Stack>
  )
}

export default HeroBanner;
