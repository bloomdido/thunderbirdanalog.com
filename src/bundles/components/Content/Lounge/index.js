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
  return (
    <Box
      display='grid'
      gridTemplateColumns='repeat(3, 390px)'
      gridColumnGap='15px'
      gridTemplateRows='repeat(2, 219px)'
      gridRowGap='15px'
      backgroundColor='rgba(199,204,178,.6)'
      >
        <Box
          backgroundColor='white'
          gridColumnStart={1}
          gridColumnEnd={2}
          gridRowStart={1}
          gridRowEnd={2}
        >
          <ImagePreview image={image1}/>
        </Box>
        <Box
          backgroundColor='white'
          gridColumnStart={2}
          gridColumnEnd={3}
          gridRowStart={1}
          gridRowEnd={2}
        >
          <ImagePreview image={image2}/>
        </Box>
        <Box
          backgroundColor='white'
          gridColumnStart={3}
          gridColumnEnd={4}
          gridRowStart={1}
          gridRowEnd={2}
        >
          <ImagePreview image={image3}/>
        </Box>
        <Box
          backgroundColor='white'
          gridColumnStart={1}
          gridColumnEnd={2}
          gridRowStart={2}
          gridRowEnd={2}
        >
          <ImagePreview image={image4}/>
        </Box>
        <Box
          backgroundColor='white'
          gridColumnStart={2}
          gridColumnEnd={3}
          gridRowStart={2}
          gridRowEnd={2}
        >
          <ImagePreview image={image5}/>
        </Box>
        <Box
          backgroundColor='white'
          gridColumnStart={3}
          gridColumnEnd={4}
          gridRowStart={2}
          gridRowEnd={2}
        >
          <ImagePreview image={image6}/>
        </Box>
    </Box>
  )
}

export default Lounge
