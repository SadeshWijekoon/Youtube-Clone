import { Box, Stack } from "@mui/material";
import {Videocard,Chanelcard} from '../componts'


const Video = ({video}) => {

  
  
  return (
    <Stack direction={'row'} flexWrap={'wrap'} justifyContent={'start'}
    gap={2}>
     {video.map((item,idx)=>(
      <Box key={idx}>
        {item.id.videoId && <Videocard video={item}/>}
        {item.id.channelId && <Chanelcard chanelDetail={item}/>}
      </Box>
     ))}
    </Stack>

    
  )
}

export default Video;