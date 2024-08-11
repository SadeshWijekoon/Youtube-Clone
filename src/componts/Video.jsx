import { Box, Stack } from "@mui/material";
import {Videocard,ChannelCard} from '../componts'


const Video = ({video,direction}) => {

  console.log(video);
  
  
  return (
    <Stack direction={direction || "row"} flexWrap={'wrap'} justifyContent={'start'}
    gap={2}>
     {video.map((item,idx)=>( // idx = index
      <Box key={idx}>
        {item.id.videoId && <Videocard video={item}/>}
        {item.id.channelId && <ChannelCard chanelDetail={item}/>}
      </Box>
     ))}
    </Stack>

    
  )
}

export default Video;