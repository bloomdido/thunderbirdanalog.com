import * as React from 'react'
import BackgroundImage from './20171024_200039.jpg'
import {Image} from 'react-idic'

const BkgImage = () => {
  return (
    <Image src={BackgroundImage} objectFit="cover" width="100%" height="100vh"/>
  )
}

export default BkgImage
