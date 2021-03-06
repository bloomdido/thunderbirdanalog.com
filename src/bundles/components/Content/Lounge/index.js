import * as React from 'react'
import Carousel from 'bundles/components/Content/Carousel'
import image1 from 'src/images/20160411_182114.jpg'
import image2 from 'src/images/20160411_182156.jpg'
import image3 from 'src/images/20171024_195531.jpg'
import image4 from 'src/images/20171024_200110.jpg'
import image5 from 'src/images/20171024_200447.jpg'
import image6 from 'src/images/20171024_200539.jpg'

const Lounge = () => {
  const maxColumns = 3
  const maxRows = 2

  const allPictures = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
  ]

  return (
    <Carousel
      allPictures={allPictures}
      maxRows={maxRows}
      maxColumns={maxColumns}
    />
  )
}

export default Lounge
