import { Card, CardMedia } from "@mui/material";
import { demoThumbnailUrl,demoVideoTitle,demoChannelTitle,demoVideoUrl,demoChannelUrl } from "../utils/constans";
import { Link } from "react-router-dom";

const Videocard = ({video : {id:{videoId},snippet}}) => {
  
  
  return (
   <Card>
      <Link to={videoId?`/video/${videoId}`:demoVideoUrl}>
       <CardMedia 
         image={snippet?.thumbnails?.high?.url}
         alt={snippet?.title}
         sx={{width:358,height:180}}
         
         
         />
         
       
      </Link>
   </Card> 
  )
}

export default Videocard;