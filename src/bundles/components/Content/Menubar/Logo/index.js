import * as React from 'react'
import {Link} from 'react-router-dom'
import {
  Image,
} from 'react-idic'
import LogoImage from './thunderbird-logo.png'

const Logo = () => {
  return (
    <Link to="/">
      <Image src={LogoImage}/>
    </Link>
  )
}

export default Logo
