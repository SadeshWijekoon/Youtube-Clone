import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { demoThumbnailUrl,demoVideoTitle,demoChannelTitle,demoVideoUrl,demoChannelUrl } from "../utils/constans";
import { Link } from "react-router-dom";
import { CheckCircle } from "@mui/icons-material";

const Videocard = ({video : {id:{videoId},snippet}}) => {
  
  
  return (
   <Card sx={{width:{xs:'100%',sm:'358px', md:'320px',},boxShadow:'none',borderRadius:'0'}}>
      <Link to={videoId?`/video/${videoId}`:demoVideoUrl}>
       <CardMedia 
         image={snippet?.thumbnails?.high?.url}
         alt={snippet?.title}
         sx={{width:{xs:'100%',sm:'358px',md:'320px'},height:180}}
         
         />
         
       
      </Link>
         <CardContent sx={{backgroundColor:'#1e1e1e',height:'106px'}}>
             <Link  to={videoId?`/video/${videoId}`:demoVideoUrl}>
               <Typography variant="Subtitile1"  color={"#fff"}>
                {snippet?.title.slice(0,60) || demoVideoTitle.slice(0,60)} 
                
               </Typography>
             </Link>
               <br/>
             <Link  to={snippet?.channelId?`/channel/${snippet?.channelId}`:demoChannelUrl}>
               <Typography variant="Subtitile2"  color={"gray"}>
                {snippet?.channelTitle || demoVideoTitle.slice(0,60)} 
                <CheckCircle sx={{fontSize:12,color:'garay',ml:'5px'}}/>
                
               </Typography>
                 
               
               
             </Link>
         </CardContent>

   </Card> 
  )
}

export default Videocard;