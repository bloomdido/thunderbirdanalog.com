import * as React from 'react'
import {
  Box,
} from 'bundles/ui/core'
import Logo from './Logo'
import MenubarButton from './MenubarButton'

const Menubar = () => {
  return (
    <Box backgroundColor='rgba(199,204,178,.6)' position='relative' height={47} paddingLeft={50} paddingRight={50}>
      <Box position='absolute' top={-17}>
        <Logo/>
      </Box>
      <Box float='right' display='flex'>
        <MenubarButton label='GEAR'/>
        <Box paddingLeft={100} paddingRight={100}>
          <MenubarButton label='LOUNGE'/>
        </Box>
        <MenubarButton label='STUDIO'/>
      </Box>
    </Box>
  )
}

export default Menubar
