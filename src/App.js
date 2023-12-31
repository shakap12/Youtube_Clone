import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Box} from '@mui/material';

import {Navbar,Feed,VideoDetail,ChannelDetail,SearchFeed} from './Components'
const App = () => {
  return (

    <BrowserRouter>
    <Box sx={{backgroundColor:'#000'}}>
        <Navbar />
        <Routes>
            <Route path="/" exact element={<Feed />}></Route>
            <Route path="/video/:id" element={<VideoDetail />}></Route>
            <Route path="/channel/:id" element={<ChannelDetail />}></Route>
            <Route path="/seacrh/:searchTerm" element={<SearchFeed ></SearchFeed>}></Route>
        </Routes>
    </Box>
    </BrowserRouter>
  )
}

export default App