import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react';
import { exerciseOptions, fetchData } from '../utils/FetchData';
import HorizontalScrollBar from './HorizontalScrollBar';



const SearchDetail = ({ setExercises, bodyPart, setBodyPart}) => {

  const [search, setSearch] = useState("");
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(()=>{
    const fetchExercisesData = async ()=>{
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);
      setBodyParts(["all", ...bodyPartsData]);
    }

    fetchExercisesData();
  },[])

  const handleSearch = async ()=>{
    if(search){
      const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions )

      const searchedExercises = exercisesData.filter(
        (exercises) => exercises.name.toLowerCase().includes(search)
        || exercises.target.toLowerCase().includes(search)
        || exercises.equipment.toLowerCase().includes(search)
        || exercises.bodyPart.toLowerCase().includes(search)
      )
      
      setSearch("");
      setExercises(searchedExercises);
      
    }
}

  return (
    
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography fontWeight={700} mb="50px" textAlign="center" sx={{fontSize:{lg:"44px", xs:"33px"}}} justifyContent="center">
        Awesome Exercise You <br/>Should Know
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
        height = "76px"
        sx={{input: {fontWeight:"700", border:"none", borderRadius:"4px"}, width:{lg:"800px", xs:"350px"}, background:'#fff', borderRadius:"40px"}}
        value={search}
        onChange={(e)=>setSearch(e.target.value.toLowerCase())}
        placeholder='Search Exercises'
        type='text'
        />
        <Button className='search-btn' sx={{bgcolor:"#FF2625", color:"#fff", textTransform:"none", width:{lg:"173px", xs:"80px"}, height:"56px", position:"absolute", right:"0px", fontSize:{lg:"20px", xs:"14px"}}} onClick={handleSearch}>
          Search
        </Button>
        
      </Box>
      <Box sx={{ position:"relative", width:"100%", p:"20px"}} >
        <HorizontalScrollBar data={bodyParts} bodyParts bodyPart={bodyPart} setBodyPart={setBodyPart}/>
      </Box>
    </Stack>
   
  )
}

export default SearchDetail