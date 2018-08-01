import * as React from 'react'
import {
  Box,
} from 'react-idic'
import Logo from './Logo'

const Desktop = ({linkComponents}) => {
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
        key={1}
      >
        <Logo/>
      </Box>
      <Box
        flexGrow={2}
        flexShrink={1}
        key={2}
      />
      <Box
        flexGrow={1}
        flexShrink={0}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        maxWidth={350}
        key={3}
      >
        {linkComponents}
      </Box>
    </Box>
  )
}

export default Desktop
