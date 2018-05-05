import * as React from 'react'
import {
  Box,
  Text,
} from 'bundles/ui/core'
import ImagePreview from 'bundles/components/Content/ImagePreview'
import image1 from 'src/images/20160411_182114.jpg'
import image2 from 'src/images/20160411_182156.jpg'
import image3 from 'src/images/20171024_195531.jpg'
import image4 from 'src/images/20171024_200110.jpg'
import image5 from 'src/images/20171024_200447.jpg'
import image6 from 'src/images/20171024_200539.jpg'

const Lounge = () => {
  const maxColumns = 3
  const maxRows = 2
  const columns = Array.from({length: 3}, (x, i) => i + 1)
  const rows = Array.from({length: 2}, (x, i) => i + 1)

  let currentPicture = 0
  const allPictures = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
  ]

  const gridItems = []
  rows.forEach((row) => {
    columns.forEach((column) => {
      gridItems.push(
        <Box
          backgroundColor='white'
          gridColumnStart={column}
          gridColumnEnd={column + 1}
          gridRowStart={row}
          gridRowEnd={row + 1}
        >
          <ImagePreview image={allPictures[currentPicture]}/>
        </Box>
      )

      currentPicture += 1
    })
  })

  return (
    <Box
      display='grid'
      gridTemplateColumns={`repeat(${maxColumns}, 390px)`}
      gridColumnGap='15px'
      gridTemplateRows={`repeat(${maxRows}, 219px)`}
      gridRowGap='15px'
      backgroundColor='rgba(199,204,178,.6)'
      >
        {gridItems}
    </Box>
  )
}

export default Lounge
