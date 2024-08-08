import {BrowserRouter,Routes,Route} from 'react-router-dom'
import {Box} from '@mui/material'
import {Feed,VideoDetail,ChannelDetail,SearchFeed,Navbar} from './componts'

function App() {
  return (
    <BrowserRouter>
    <Box sx={{backgroundColor:'#000'}}>
      <Navbar/>
      <Routes>
        <Route path='/' exact element={<Feed/>}/>
        <Route path='/video/:id'element={<VideoDetail/>} />
        <Route path='/chanel/:id'element={<ChannelDetail/>} />
        <Route path='/search/:searchTerm'element={<SearchFeed/>} />
      </Routes>

    </Box>
    </BrowserRouter>
  );
}

export default App;
