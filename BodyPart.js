import React from 'react'
import {Stack, Typography} from '@mui/material';
import Icon from "../assets/gym.png"


const BodyPart = ({item, bodyPart, setBodyPart}) => {
  return (
    <Stack onClick={()=>{
      setBodyPart(item);
      window.scrollTo({top : 1800, left : 100, behaviour : 'smooth'})
    }}
      sx = {bodyPart === item ? { borderTop : '4px solid #ff2625', backgroundColor : "#fff", borderBottomLeftRadius : "20px", width : "270px", height : " 280px", cursor : "pointer", gap : "47px"} : { background : "#fff", borderBottomLeftRadius : "20px", width : "270px", height : " 280px", cursor : "pointer", gap : "47px"}} type="button" justifyContent="center" alignItems="center" className="bodyPart-card">
      <img src={Icon} alt="dumbbell" className="body-part-icon" style = {{width : "40px", height : "40px"}}/>
      <Typography fontSize="24px" fontWeight="bold" color="#3A1212" textTransform = "capitalize">{item}</Typography>
    </Stack>
  )
}

export default BodyPart
