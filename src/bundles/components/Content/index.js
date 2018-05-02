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
      <Box position='absolute' top={0} width='100%'>
        <Box paddingTop={100} width='100%' marginLeft='auto' marginRight='auto'>
          <Menubar/>
        </Box>
        <Box paddingTop={50} maxWidth='1200px' marginLeft='auto' marginRight='auto'>
          <Body/>
        </Box>
      </Box>
    </Box>
  )
}

export default Content
