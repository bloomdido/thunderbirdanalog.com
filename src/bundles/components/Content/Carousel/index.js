import * as React from 'react'
import {
  Box,
} from 'react-idic'
import ImagePreview from 'bundles/components/Content/ImagePreview'

const Carousel = ({allPictures, maxRows, maxColumns}) => {
  const gridItems = []

  allPictures.forEach((image) => {
    gridItems.push(
      <Box key={image}>
        <ImagePreview image={image}/>
      </Box>
    )
  })

  return (
    <Box
      display='grid'
      gridTemplateColumns={`repeat(${maxColumns}, 390px)`}
      columnGap='15px'
      gridTemplateRows={`repeat(${maxRows}, 219px)`}
      rowGap='15px'
      >
        {gridItems}
    </Box>
  )
}

export default Carousel
