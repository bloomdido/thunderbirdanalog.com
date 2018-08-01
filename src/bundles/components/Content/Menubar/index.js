import * as React from 'react'
import injectSheet from 'react-jss'
import {Link, matchPath, withRouter} from 'react-router-dom'
import MediaQuery from 'react-responsive'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/fontawesome-free-solid'
import {
  Box,
  Text,
} from 'react-idic'
import Logo from './Logo'
import Desktop from './Desktop'
import Mobile from './Mobile'

const Menubar = ({classes, location}) => {
  const links = [
    {path: '/gear', name: 'GEAR'},
    {path: '/lounge', name: 'LOUNGE'},
    {path: '/studio', name: 'STUDIO'},
   ]

  const linkComponents = links.map((l) => {
    const linkClasses = [classes.link]
    const matchedPath = matchPath(location.pathname, {path: l.path})
    if (matchedPath) {
      linkClasses.push(classes.selected)
    }

    return (
      <Link className={linkClasses.join(" ")} to={l.path}>{l.name}</Link>
    )
  })

  const combinedClasses = [classes.link]

  return (
    <Box>
      <MediaQuery key="desktop" minWidth="1225px">
        <Desktop linkComponents={linkComponents}/>
      </MediaQuery>
      <MediaQuery key="mobile" maxWidth="1224px">
        <Mobile linkComponents={linkComponents}/>
      </MediaQuery>
    </Box>
  )
}

const styles = {
  link: {
    display: 'block',
    color: 'white',
    fontSize: 18,
    textDecoration: 'none',
  },
  selected: {
    paddingBottom: 2,
    borderBottom: [1, 'solid', 'white'],
  },
}

export default injectSheet(styles)(withRouter(Menubar))
