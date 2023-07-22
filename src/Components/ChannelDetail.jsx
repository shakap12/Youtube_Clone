import React, { useEffect, useState } from 'react'
import { Box } from '@mui/material';
import {useParams} from 'react-router-dom';
import {fetchFromAPI} from '../utils/fetchFromAPI';
const ChannelDetail = () => {
    const {id} =useParams();
    const [channelDetail,setChannelDetail]=useState(null);
    useEffect(()=>{
        fetchFromAPI(`channels?part="snippet&id=${id}`)
        .then((data)=>setChannelDetail(data?.items[0]));
    },[id]);

    return (
        <Box>
            
        </Box>
    )
}

export default ChannelDetail