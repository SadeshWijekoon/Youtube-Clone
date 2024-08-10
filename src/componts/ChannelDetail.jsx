import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchFromAPI } from "../utils/fetchFromApi";
import ChannelCard from "./Channelcard";



const ChannelDetail = () => {
  const {id} = useParams();
  const [channelDetail,setChannelDetail]= useState(null)
  const [videos,setVideos]= useState([])

  console.log(channelDetail);
  console.log(videos);
  

  useEffect(()=>{
    fetchFromAPI(`channels?part=snippet&id=${id}`)
    .then((data)=>setChannelDetail(data?.items[0]))

    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
    .then((data)=>setVideos(data?.items))
  },[id])
  return (
    <Box minHeight='95vh'>
     <Box>
       <div style={{
        background: 'linear-gradient(90deg, rgba(246,81,5,1) 7%, rgba(0,228,41,1) 53%, #ff3700 99%)',
        zIndex:10,
        height:'300px'
      }} 
       
       />
       <ChannelCard chanelDetail={channelDetail} marginTop="-110px"/> {/*sending the marginTop style to the chanelcard via prop. */}
     </Box>
     <Box display={'flex'} p='2'>
       <Box sx={{mr:{sm:'100px'}}}>
       {/* <Video/>    */}
       </Box>
     </Box>
    
    </Box>
  )
}

export default ChannelDetail;