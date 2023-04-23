import React from 'react';
import {Box, Stack, Typography} from '@mui/material';
const ExerciseVideos = ({exerciseVideos, name}) => {
  console.log(exerciseVideos)
  if(!exerciseVideos.length) return 'Loading....';


  return (

    <Box sx={{ marginTop : {lg : "200px", xs : "200px"}}} p ="20px">
      <Typography variant="h4" mb="60px">
        Watch <span className = "big" style = {{color : "#ff2625" }}>{name}</span> Exercise Videos
      </Typography>
      <Stack sx = {{flexDirection : {lg : "row"}, gap : {lg : "120px", xs : "0"}}} justifyContent="flex-start" flexWrap="wrap" alignItems="center">
        
        
        {exerciseVideos?.slice(0, 9).map((item, index) =>  (
          <a key={index} className="exercise-video" href={`https://www.youtube.com/watch?v=${item.video.videoid}`} target="_blank" rel="noreferrer">
            <img src={item.video.thumbnails[0].url} alt={item.video.title}/>
            <Box>

              <Typography mt="20px" textAlign = "center" fontSize="20px" color="#000">
                {item.video.channelName}
              </Typography>
            </Box>
          </a>
        ))}


      </Stack>
    </Box>
  )
}

export default ExerciseVideos
