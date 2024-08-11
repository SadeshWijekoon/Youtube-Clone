
import { Box, Stack, Typography } from '@mui/material';
import {Video} from '../componts';
import { fetchFromAPI } from '../utils/fetchFromApi';
import ReactPlayer from 'react-player';
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { CheckCircle } from '@mui/icons-material';


const VideoDetail = () => {
  const {id}= useParams()
  const [videoDetail,setVideoDetail] = useState(null)
  const [video,setvideo]= useState(null)

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
    .then((data)=>setVideoDetail(data.items[0]))

    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
    .then((data)=>setvideo(data.items))
  }, [id])
  
  if(!videoDetail?.snippet) return 'Loading ...'
 
const {snippet:{title,channelTitle,channelId},
statistics:{viewCount,likeCount}}= videoDetail;

  return (
    <Box minHeight={'95vh'}>
      <Stack direction={{xs:'colum',md:'row'}}>
        <Box flex={1}>
          <Box sx={{width:'100%',position:'sticky',top:'86px'}}>
            <ReactPlayer url={`http://www.youtube.com/watch?v=${id}`} 
            className='react-player' controls />
             <Typography color={'#fff'} variant='h5' fontWeight={'bold'} p={2}>
             {title}
             </Typography>
             <Stack direction={'row'} justifyContent={'space-between'}
             sx={{color:'#fff', py:'1', px:'2'}}>
               <Link to={`/channel/${channelId}`}>
               <Typography variant={{sm:'subtitle', md:'h6'}} color={'#fff'} p={2} >
                {channelTitle}
                <CheckCircle sx={{fontSize:'12px' , color:'gray', ml:'5px'}}/>
               </Typography>
               </Link>
               <Stack direction={'row'} gap={'20px'} alignItems={'center'}>
                 <Typography variant='body1' sx={{opacity:'0.7'}}>
                    {parseInt(viewCount).toLocaleString()} Views {/* toLocaleString method is devidde number in to thousands */}
                 </Typography>
                 <Typography variant='body1' sx={{opacity:'0.7'}}>
                    {parseInt(likeCount).toLocaleString()} Lilkes {/* toLocaleString method is devidde number in to thousands */}
                 </Typography>
               </Stack>
             </Stack>
          </Box>
        </Box>
        <Box px={2} py={{md:1,sm:5}} justifyContent={"center"} alignItems={"center"}>
         <Video video={video} direction={"column"}/>
        </Box>
      </Stack>


    </Box>
  )
}

export default VideoDetail;