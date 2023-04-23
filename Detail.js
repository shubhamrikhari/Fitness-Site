import React from 'react';
import { Typography, Stack, Button } from '@mui/material';

import BodyPartImage from "../assets/body-part.png";
import TargetImage from "../assets/target.png";
import EquipmentImage from "../assets/equipment.png";

const Detail = ({exerciseDetail}) => {
    const {bodyPart, gifUrl, name, target, equipment} = exerciseDetail;
    const extraDetail = [
        {
            icon : BodyPartImage,
            name : bodyPart
        },

        {
            icon : TargetImage,
            name : target
        }, 

        {
            icon : EquipmentImage,
            name : equipment
        }
    ]
  
    return (
    <Stack gap="60px" sx={{flexDirection : {lg : "row"}, p : "20px", alignItems : "center"}}>
        <img src={gifUrl} alt={name} loading = "lazy" className="detail-image"/>
        <Stack mt = "40px" ml="30px">
            <Typography variant='h3' textTransform="capitalize" mb="25px">
                {name}
            </Typography>
            <Typography variant="h6" mb="35px">
                Exercises keep you strong. <span className="big">{name}</span>{' '}
                is one of the best
                exercises to target your {target}. It will help you improve your mood
                and gain energy.
            </Typography>

            {
                extraDetail.map((item) => (
                    <Stack key={item.name} direction="row" gap="24px" alignItems="center">
                        <Button sx={{background : "#fff2db", borderRadius : "50%", width : "100px", height : "100px"}}>
                            <img src={item.icon} alt={bodyPart} style={{width : "50px", height : "50px"}}/>
                        </Button>
                        <Typography textTransform="capitalize" variant="h5">
                            {item.name}
                        </Typography>
                    </Stack>
                ))
            }
        </Stack>
    </Stack>
  )
}

export default Detail
