import { Box, Stack, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import {Sidebar,Video}from '../componts'
import {fetchFromAPI} from '../utils/fetchFromApi'


const Feed = () => {
  const [selectedCategory,setSelectedCategory] = useState("New")
  const [video,setVideo] = useState([])

  useEffect(()=>{
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
    .then((data)=>setVideo(data.items))
  },[selectedCategory])
  return (
    
    <Stack sx={{ flexDirection:{sx:'column',md:'row'}}}>
      <Box sx={{height:{sx:'auto',md:'92vh'},
      borderRight:'1px solid #3d3d3d',px:{sx:0,md:2}}}>
      
      <Sidebar
       selectedCategory={selectedCategory}
       setSelectedCategory={setSelectedCategory}
      />
      <Typography className='copyright' variant='body2' sx={{mt:1.5,color:'#fff'}}>
        Copyright 2024 @ Sadesh Wijekoon
      </Typography>

      </Box>
      <Box p={2} sx={{height:'98vh',flex:2,overflowY:'auto'}} >

        <Typography   variant='h4' fontWeight={'bold'} mb={2} sx={{color:'white'}}>
           {selectedCategory} <span style={{color:'#f31503'}}>Video</span>
        </Typography>

         <Video video={video}/>
      </Box>

    </Stack>
  )
}

export default Feed;


