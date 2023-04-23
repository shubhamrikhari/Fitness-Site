import React, {useContext} from 'react'
import {Box, Typography} from '@mui/material';
import BodyPart from './BodyPart';
import {ScrollMenu, VisibilityContext} from 'react-horizontal-scrolling-menu';
import './App.css'
import RightArrowIcon from '../assets/right-arrow.png';
import LeftArrowIcon from '../assets/left-arrow.png';

import ExerciseCard from './ExerciseCard';


const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollPrev()} className="right-arrow">
      <img src={LeftArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollNext()} className="left-arrow">
      <img src={RightArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

const HorizontalScrollBar = ({data, bodyPart, setBodyPart, isBodyParts}) => {
  
  return (
    <Box className="bars">
      <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {
          data.map((item) => (
              <Box m="0 40px" key={item.id || item} itemId={item.id || item} title={item.id || item}>
                  {isBodyParts ? <BodyPart item={item} bodyPart = {bodyPart} setBodyPart = {setBodyPart} />
                    : <ExerciseCard exercise={item}/>
                  }
              </Box>
            )
          )}
      </ScrollMenu>
    </Box>
  )
}

export default HorizontalScrollBar;
