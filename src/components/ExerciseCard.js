import { Button, Stack, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const ExerciseCard = ({exercise}) => {
  return (
    <Link className="exercise-card" to={`/exercise/${exercise.id}`}>
        <img src={exercise.gifUrl} alt={exercise.name} loading='lazy'/>
        <Stack direction="row">
          <Button sx={{ml:"21px", color:"#FFff", 
          background:"#fff000", fontSize:"20px", borderRadius:"20px",
          textTransform:"capitalize"}}>
          {exercise.bodyPart}
        </Button>
        <Button sx={{ml:"21px", color:"#ffff", 
          background:"#6A5ACD", fontSize:"20px", borderRadius:"20px",
          textTransform:"capitalize"}}>
          {exercise.target}
        </Button>
        </Stack>
        <Typography ml="21px" color="#000" fontWeight="bold"
        fontSize="22px" textTransform="capitalize" mt="11"
        pb="10px"
        >
          {exercise.name}
        </Typography>
    </Link>
  )
}

export default ExerciseCard