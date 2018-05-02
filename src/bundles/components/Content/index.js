import * as React from 'react'
import BkgImage from './BkgImage'
import {
  Box,
} from 'bundles/ui/core'

const Content = () => {
  return (
    <Box position='relative'>
      <BkgImage/>
      <Box position='absolute' top={0}>Welcome to Thunderbird Analog Recording Studios!</Box>
    </Box>
  )
}

export default Content
