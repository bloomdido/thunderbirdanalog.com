import * as React from 'react'
import Logo from './Logo'
import {
  Box,
  Button,
} from 'react-idic'
import HamburgerMenu from './HamburgerMenu'

const Mobile = ({linkComponents}) => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      backgroundColor="rgba(199,204,178,.6)"
      position="relative"
      height={47}
      paddingLeft={50}
      paddingRight={50}
    >
      <Box
        marginTop={-17}
        flexGrow={1}
        flexShrink={0}
      >
        <Logo/>
      </Box>
      <Box
        flexGrow={2}
        flexShrink={1}
      />
      <Box
        flexGrow={0}
        flexShrink={0}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <HamburgerMenu/>
      </Box>
    </Box>
  )
}

export default Mobile
