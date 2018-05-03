import * as React from 'react'
import {
  Box,
} from 'bundles/ui/core'
import Logo from './Logo'

const Menubar = () => {
  return (
    <Box backgroundColor='rgba(210,180,140,.5)' position='relative' height={47} paddingLeft={50}>
      <Box position='absolute' top={-17}>
        <Logo/>
      </Box>
    </Box>
  )
}

export default Menubar
