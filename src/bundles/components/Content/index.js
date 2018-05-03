import * as React from 'react'
import {
  Box,
} from 'bundles/ui/core'
import BkgImage from './BkgImage'
import Menubar from './Menubar'
import About from './About'

const Content = () => {
  return (
    <Box position='relative'>
      <BkgImage/>
      <Box position='absolute' top={0} width='100%' height='100%' backgroundColor='rgba(0,0,0,0.4)'>
        <Box paddingTop={100} width='100%' marginLeft='auto' marginRight='auto'>
          <Menubar/>
        </Box>
        <Box paddingTop={75} maxWidth='1200px' marginLeft='auto' marginRight='auto'>
          <About/>
        </Box>
      </Box>
    </Box>
  )
}

export default Content
