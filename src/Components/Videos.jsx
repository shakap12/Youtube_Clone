import React from 'react'
import { Stack, Box } from '@mui/material'
const Videos = ({ videos }) => {
  return (
    <Stack direction="row" flexWrap="wrap" justifyContent="start" gap={2}>
      {videos.map((item, idx) => (
        <Box key={idx}>
          {item.idx.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetil={item}/>}
        </Box>
      ))}
    </Stack>

  )
}

export default Videos