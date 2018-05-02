import * as React from 'react'
import {
  Box,
} from 'bundles/ui/core'
import BkgImage from './BkgImage'
import Menubar from './Menubar'
import Body from './Body'

const Content = () => {
  return (
    <Box position='relative'>
      <BkgImage/>
      <Box position='absolute' top={0}>
        <Box paddingTop={100}>
          <Menubar/>
        </Box>
        <Box paddingTop={50}>
          <Body/>
        </Box>
      </Box>
    </Box>
  )
}

export default Content
