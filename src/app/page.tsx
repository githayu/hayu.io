import Box from '@mui/material/Box'
import React from 'react'

import { Footer, Intro, Works } from './_components'

export default function HomePage() {
  return (
    <>
      <Intro />

      <Box id="content" sx={{ bgcolor: 'background.default', color: 'text.primary' }}>
        <Works />
        <Footer />
      </Box>
    </>
  )
}
