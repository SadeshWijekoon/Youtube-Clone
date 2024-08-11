import { Box,Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import {Video}from '../componts'
import {fetchFromAPI} from '../utils/fetchFromApi'
import { useParams } from 'react-router-dom';



const SearchFeed = () => {
  const {searchTerm}= useParams()
  const [video,setVideo] = useState([])

  useEffect(()=>{
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
    .then((data)=>setVideo(data.items))
  },[searchTerm])
  console.log();
  
  return (
    
    <Box p={2} sx={{height:'98vh',flex:2,overflowY:'auto'}} >

        <Typography   variant='h4' fontWeight={'bold'} mb={2} sx={{color:'white'}}>
           Search Result For: <span style={{color:'#f31503'}}>{searchTerm}</span> Videos
        </Typography>

         <Video video={video}/>
      </Box>
  )
}

export default SearchFeed;


