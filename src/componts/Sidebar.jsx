import { Stack } from "@mui/material";

import { categories } from "../utils/constans";



const Sidebar = ({selectcategory,setSelectedCategory}) => 
   (
    <Stack
    direction='row'
    sx={{overflowY:'auto',
    height:{sx:'auto',md:'95%'},
    flexDirection:{md:'column'}}}>
        
    {categories.map((ele)=>(
     <button 
     key={ele.name}
     className="category-btn"
     onClick={()=>setSelectedCategory(ele.name)}
     style={{background:ele.name === selectcategory && '#FC1503',
     color:'white',
     }}>
        <span style={{color:ele.name === selectcategory ? 'white':'red',
            marginRight:'15px'
        }}>
         {/* main thing is set icon color is red and when the hover it become white */}   {ele.icon}</span>
        <span style={{opacity:ele.name === selectcategory ? '1':'0.9' }}>{ele.name}</span>
     </button>
    ))}
    </Stack>
  )


export default Sidebar;