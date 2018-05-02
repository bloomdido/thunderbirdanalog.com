import * as React from 'react'
import BackgroundImage from './20171024_200039.jpg'
import {Image} from 'bundles/ui/core'

const BkgImage = () => {
  return (
    <Image objectFit="cover" width="100%" height="100vh">{BackgroundImage}</Image>
  )
}

export default BkgImage
