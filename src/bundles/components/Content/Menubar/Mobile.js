import * as React from 'react'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/fontawesome-free-solid'
import Logo from './Logo'
import {
  Box,
} from 'bundles/ui/core'

const Mobile = ({linkComponents}) => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      backgroundColor="rgba(199,0,0,.6)"
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
        <FontAwesomeIcon icon={faBars} size="2x"/>
      </Box>
    </Box>
  )
}

export default Mobile
