import * as React from 'react'
import {
  Box,
} from 'bundles/ui/core'
import ImagePreview from 'bundles/components/Content/ImagePreview'

const Carousel = ({allPictures, maxRows, maxColumns}) => {
  const gridItems = []

  allPictures.forEach((image) => {
    gridItems.push(
      <Box>
        <ImagePreview image={image}/>
      </Box>
    )
  })

  return (
    <Box
      display='grid'
      gridTemplateColumns={`repeat(${maxColumns}, 390px)`}
      gridColumnGap='15px'
      gridTemplateRows={`repeat(${maxRows}, 219px)`}
      gridRowGap='15px'
      >
        {gridItems}
    </Box>
  )
}

export default Carousel
