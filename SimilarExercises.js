import { Typography } from '@mui/material'
import React from 'react'
import {Stack, Box} from '@mui/material';
import HorizontalScrollBar from '././HorizontalScrollBar'
import Loader from './Loader';
const SimilarExercises = ({targetMuscleExercises, equipmentExercises}) => {
  return (
    <Box sx={{mt : {lg : "100px" , xs : "0"}}}>
      <Typography   mb="2" variant="h3">Exercises that target the same <span style={{color : "#ff2625", textTransform : "capitalize"}}>muscle group</span></Typography>
      <Stack direction="row" sx={{p : "2", position : "relative"}}>
        {targetMuscleExercises.length ? <HorizontalScrollBar data={targetMuscleExercises}/>: <Loader/> }
      </Stack>
      <Typography mt="50px" mb="2" variant="h3">Exercises that target the same <span style={{color : "#ff2625"}} >Equipment</span></Typography>
      <Stack direction="row" sx={{p : "2", position : "relative"}}>
        {equipmentExercises.length ? <HorizontalScrollBar data={equipmentExercises}/>: <Loader/> }
      </Stack>
    </Box>
  )
}

export default SimilarExercises
