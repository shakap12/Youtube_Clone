import React from 'react'
import { Stack, Box } from '@mui/material'
import { VideoCard, ChannelCard } from './';
const Videos = ({ videos }) => {
  console.log(videos);
  videos[0].map((item, idx) => console.log(item.id));
  return (
    <Stack direction="row" flexWrap="wrap" justifyContent="start" alignItems="start" gap={2}>
      {/* {videos[0].map((item, idx) => (
        <Box key={idx}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))} */}
    </Stack>
  )
}

export default Videos