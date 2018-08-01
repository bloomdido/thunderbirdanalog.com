import * as React from 'react'
import {
  Box,
  Image,
} from 'react-idic'

const ImagePreview = ({image}) => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      backgroundColor="white"
      borderRadius={5}
    >
      <Image
        src={image}
        width="370px"
        height="208px"
        paddingLeft={10}
        paddingRight={10}
        paddingTop={5}
        paddingBottom={5}
      />
    </Box>
  )
}

export default ImagePreview
