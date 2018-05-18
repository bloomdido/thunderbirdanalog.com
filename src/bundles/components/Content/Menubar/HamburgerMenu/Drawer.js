import * as React from 'react'
import {
  Box,
  Text,
}
from 'bundles/ui/core'

const Drawer = () => {
  return (
    <Box
      width="80%"
      height="100%"
      backgroundColor="white"
      position="fixed"
      top={0}
      right={0}
      borderLeft="solid"
    >
      <Text
        component='h1'
        paddingTop={30}
        paddingLeft={30}
        color="black"
      >
        menu item 1
      </Text>
      <Text
        component='h1'
        paddingTop={30}
        paddingLeft={30}
        color="black"
      >
        menu item 2
      </Text>
    </Box>
  )
}

export default Drawer
