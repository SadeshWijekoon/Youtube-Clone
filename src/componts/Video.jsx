import { Box, Stack } from "@mui/material";
import {Videocard,ChannelCard} from '../componts'


const Video = ({video,direction}) => {

  
  
  return (
    <Stack direction={direction || "row"} flexWrap={'wrap'} justifyContent={'start'}
    gap={2}>
     {video.map((item,idx)=>(
      <Box key={idx}>
        {item.id.videoId && <Videocard video={item}/>}
        {item.id.channelId && <ChannelCard chanelDetail={item}/>}
      </Box>
     ))}
    </Stack>

    
  )
}

export default Video;