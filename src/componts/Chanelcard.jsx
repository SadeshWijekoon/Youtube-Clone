import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import { demoProfilePicture } from "../utils/constans";
import { Link } from "react-router-dom";
import { CheckCircle } from "@mui/icons-material";

const Chanelcard = ({chanelDetail}) => {
  return (
    <Box sx={{
      boxShadow:'none',
      borderRadius:'20px'
    }}>
      <Link to={`/channel/${chanelDetail?.id?.channelId}`}>
      <CardContent sx={{display:'flex',flexDirection:'column',
        justifyContent:'center',textAlign:'center',color:'#fff'}}>
          <CardMedia
          image={chanelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
          alt={chanelDetail?.snippet?.title}
          sx={{borderRadius:'50%',height:'180px',width:'180px',mb:2,
            border:'1px solid #e3e3e3'
          }}/>
          <Typography variant="h6">
            {chanelDetail?.snippet?.title}
            <CheckCircle sx={{fontSize:14,color:'garay',ml:'5px'}}/>
          </Typography>
            
      </CardContent>
      </Link>
    </Box>
  )
}

export default Chanelcard;