import React, {useState, useEffect} from 'react'
import Pagination  from '@mui/material/Pagination'
import {Box, Stack, Typography} from '@mui/material'
import ExerciseCard from './ExerciseCard';
import {exerciseOptions, fetchData} from '../utils/fetchData';
const Exercises = ({exercises, setExercises, bodyPart}) => {
  console.log(exercises)
  const [currentPage, setCurrentPage] = useState(1);
  const exercisePerPage = 9;

  const indexofLastExercise = currentPage * exercisePerPage;
  const indexofFirstExercise = indexofLastExercise -  exercisePerPage;

  const currentExercises = exercises.slice(indexofFirstExercise, indexofLastExercise);
  const Paginate = (e, value) => {
    setCurrentPage(value);
    window.scrollTo({top : 1800, behaviour : "smooth"})
  }

  useEffect(()=> {
    const fetchExercisesData = async()=> {
      let exercisesData = [];
      if(bodyPart === 'all') {
        exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
      }
      else {
        exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseOptions);
      }

      setExercises(exercisesData);
    }

    fetchExercisesData();
  },[bodyPart]);

  return (
    <Box id="exercises" sx={{mt : {lg : '110px'}}}
   mt="50px" p="20px">
      <Typography variant='h3' mb="46px">
        Showing Results
      </Typography> 


      <Stack direction="row" sx={{gap : {lg : "110px" , xs : "50px"}}} flexWrap = "wrap" justifyContent="center">
        { currentExercises.map((exercise, index) => (
          <ExerciseCard key={index} exercise = {exercise}/>
        ))} 
      </Stack>
      
      <Stack mt="100px" alignItems="center">
        {exercises.length > 9 && (
          <Pagination color="standard" shape="rounded" defaultPage = {1}
          size = "large" count={Math.ceil(exercises.length/exercisePerPage)} page={currentPage} onChange={Paginate}>
          </Pagination>
        )}
      </Stack>  
    </Box>
  )
}

export default Exercises
