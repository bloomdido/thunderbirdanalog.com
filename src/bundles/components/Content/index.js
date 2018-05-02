import * as React from 'react'
import {
  Box,
} from 'bundles/ui/core'
import BkgImage from './BkgImage'
import Menubar from './Menubar'

const Content = () => {
  return (
    <Box position='relative'>
      <BkgImage/>
      <Box position='absolute' top={0} paddingTop={100}>
        <Menubar/>
      </Box>
    </Box>
  )
}

export default Content
