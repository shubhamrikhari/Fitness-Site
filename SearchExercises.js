import {useEffect, useState} from 'react'
import {Box, Button, Stack, TextField, Typography} from '@mui/material';
import {fetchData, exerciseOptions} from '../utils/fetchData'
import HorizontalScrollBar from './HorizontalScrollBar';

const SearchExercises = ({setExercises, bodyPart, setBodyPart}) => {

  const [search, setSearch] = useState('')
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(()=> {
    const fetchExerciseData = async() => {
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions)
      setBodyParts(['all', ...bodyPartsData]);
    }
    fetchExerciseData();
  }, [])


  const handleSearch = async () => {
    if(search) {
      const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
      const searchedExercises = exercisesData.filter((item) => 
        item.name.toLowerCase().includes(search) ||
        item.bodyPart.toLowerCase().includes(search) || 
        item.equipment.toLowerCase().includes(search) ||
        item.target.toLowerCase().includes(search)
      );
      setSearch('');
      setExercises(searchedExercises);
    }
  }

  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
        <Typography fontWeight="700" sx={{ fontSize : { lg : "44px", xs : "30px"}}} mb="50px" textAlign="center">
          Awesome Exercises You <br/> Should Know
        </Typography>
        <Box>
          <TextField height="76px" value={search} placeholder="Search Exercises" type="text"
          sx={{input : {fontWeight : "700", border : "none", borderRadius : "4px"}, width : {lg : '1170px', xs : "350px"}, backgroundColor : "#fff", borderRadius : "40px"}}
          onChange={(e)=> {setSearch(e.target.value.toLowerCase())}}> 
          </TextField>
          <Button className="search-btn" sx={{ backgroundColor : "#FF2625", color : "#fff", textTransform : "none", width : {lg : "175px", xs : "100px"}, fontSize : {lg : '20px', xs : '14px'}, height : "56px", right : '0'}} onClick={handleSearch}>
            Search
          </Button>
        </Box>

        <Box sx = {{positon : 'relative', width : '100%', p : '20px'}}>
          <HorizontalScrollBar data={bodyParts} bodyPart = {bodyPart} setBodyPart = {setBodyPart} isBodyParts/>
        </Box>

    </Stack>
  )
}

export default SearchExercises;
