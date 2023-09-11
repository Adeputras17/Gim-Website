import { Box,  Stack, Typography } from '@mui/material';
import Pagination from '@mui/material/Pagination';
import React, { useEffect, useState } from 'react';
import { fetchData, exerciseOptions } from '../utils/FetchData';
import ExerciseCard from './ExerciseCard';

const Exercises = ({exercises, setExercises, bodyPart}) => {

  const[currentPage, setCurrentPage] = useState(1);
  const exercisePerPage = 9;

  const indexLastExercises = currentPage * exercisePerPage;
  const indexFirstExercises = indexLastExercises - exercisePerPage;
  const currentExercises = exercises.slice(indexFirstExercises, indexLastExercises);

  const paginate = (e, value)=>{
    setCurrentPage(value);

    window.scrollTo({top:"1800", behavior:"smooth"})
  };

  useEffect(()=>{
    const fetchExercisesData = async ()=>{
      let exerciseData = [];

      if(bodyPart === "all"){
        exerciseData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises`, exerciseOptions);
      }else{
        exerciseData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseOptions);
      }
      setExercises(exerciseData);
    }
    fetchExercisesData();
  },[bodyPart]);



  return (
    <Box id="exercises" 
      sx={{mt:{lg:'110px'}}} 
      mt="50px" 
      p="20px"
      >
      <Typography variant='h4' fontWeight="bold" sx={{fontSize:{lg:"44px", xs:"30px"}}} mb="46px">
        Showing Results
      </Typography>
      <Stack direction="row" sx={{gap:{lg:"50px", xs:"20px" }}} flexWrap="wrap" justifyContent="center">
        {currentExercises.map((exercises,index)=>(
          <ExerciseCard key={index} exercise={exercises}/>
        ))}
      </Stack>
      <Stack mt="100px" alignItems="center">
          {exercises.length > 9 && (
            <Pagination 
            color='standard'
            shape='rounded'
            defaultPage={1}
            count={Math.ceil(exercises.length / exercisePerPage)}
            page={currentPage}
            onChange={paginate}
            size='large'
            />
          )}
      </Stack>
    </Box>
  )
}

export default Exercises