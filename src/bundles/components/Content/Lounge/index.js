import * as React from 'react'
import {
  Box,
  Text,
} from 'bundles/ui/core'

const Lounge = () => {
  return (
     <Box display='flex' backgroundColor='rgba(199,204,178,.6)'>
      <Box padding={40} width='50%'>
        <Text component='h1' paddingBottom={30}>Lounge</Text>
      </Box>
    </Box>
  )
}

export default Lounge
