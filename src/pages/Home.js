import { Box } from '@mui/material';
import React, { useState } from 'react';
import Banner from '../components/Banner';
import SearchDetail from '../components/SearchDetail';
import Exercises from "../components/Exercises.js"


const Home = () => {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState("all");

  return (
    <Box>
      <Banner/>
      <SearchDetail setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} />
      <Exercises exercises={exercises} setExercises={setExercises}  bodyPart={bodyPart}/>
    </Box>
  )
}

export default Home