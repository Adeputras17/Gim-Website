// import { Box } from '@mui/material'
// import React, { useEffect, useState } from 'react'
// import Detail from '../components/Detail'
// import ExercisesYoutube from '../components/ExercisesYoutube'
// import ExercisesSimilar from '../components/ExercisesSimilar'
// import { useParams } from 'react-router-dom'
// import { exerciseOptions, fetchData } from '../utils/FetchData'

// const ExerciseDetail = () => {

//   const [exerciseDetail, setExerciseDetail] = useState({});
//   const {id} = useParams();

//   useEffect(()=>{
//     const fetchExercisesData = async ()=>{
//       const exercisesDbUrl = "https://exercisedb.p.rapidapi.com";
//       const exerciseYoutubeurl = "youtube-search-and-download.p.rapidapi.com";

//       const exercisesDetailData = await fetchData(`${exercisesDbUrl}/exercises/exercise/${id}`, exerciseOptions);
//       setExerciseDetail(exercisesDetailData);

//     }

//     fetchExercisesData();
//   },[id])

//   return (
//     <Box>
//       <Detail exerciseDetail={exerciseDetail}/>
//       <ExercisesYoutube/>
//       <ExercisesSimilar/>
//     </Box>
//   )
// }

// export default ExerciseDetail

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';

import { exerciseOptions, fetchData, youtubeOptions } from '../utils/FetchData.js';
import Detail from '../components/Detail';
import ExerciseVideos from '../components/ExerciseVideos';
import SimilarExercises from '../components/SimilarExercises';

const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const fetchExercisesData = async () => {
      const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
      const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';

      const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions);
      setExerciseDetail(exerciseDetailData);

      const exerciseVideosData = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name} exercise`, youtubeOptions);
      setExerciseVideos(exerciseVideosData.contents);

      const targetMuscleExercisesData = await fetchData(`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`, exerciseOptions);
      setTargetMuscleExercises(targetMuscleExercisesData);

      const equimentExercisesData = await fetchData(`${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`, exerciseOptions);
      setEquipmentExercises(equimentExercisesData);
    };

    fetchExercisesData();
  }, [id]);

  if (!exerciseDetail) return <div>No Data</div>;

  return (
    <Box sx={{ mt: { lg: '96px', xs: '60px' } }}>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name} />
      <SimilarExercises targetMuscleExercises={targetMuscleExercises} equipmentExercises={equipmentExercises} />
    </Box>
  );
};

export default ExerciseDetail;
