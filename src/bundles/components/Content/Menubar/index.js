import * as React from 'react'
import {
  Box,
} from 'bundles/ui/core'
import Logo from './Logo'
import MenubarButton from './MenubarButton'

const Menubar = () => {
  return (
    <Box backgroundColor='rgba(199,204,178,.6)' position='relative' height={47} paddingLeft={50}>
      <Box position='absolute' top={-17}>
        <Logo/>
      </Box>
      <MenubarButton label='GEAR'/>
      <MenubarButton label='LOUNGE'/>
      <MenubarButton label='STUDIO'/>
    </Box>
  )
}

export default Menubar
