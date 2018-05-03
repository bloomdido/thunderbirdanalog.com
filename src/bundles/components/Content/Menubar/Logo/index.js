import * as React from 'react'
import {Link} from 'react-router-dom'
import {
  Image,
} from 'bundles/ui/core'
import LogoImage from './thunderbird-logo.png'

const Logo = () => {
  return (
    <Link to="/">
      <Image>{LogoImage}</Image>
    </Link>
  )
}

export default Logo
