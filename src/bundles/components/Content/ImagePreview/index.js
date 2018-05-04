import * as React from 'react'
import {
  Box,
  Image,
} from 'bundles/ui/core'

const ImagePreview = ({image}) => {
  return (
    <Box display="flex" justifyContent="center">
      <Image width="370px" height="208px">{image}</Image>
    </Box>
  )
}

export default ImagePreview
