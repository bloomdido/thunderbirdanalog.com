import * as React from 'react'
import injectSheet from 'react-jss'
import {Link, matchPath, withRouter} from 'react-router-dom'
import {
  Box,
  Text,
} from 'bundles/ui/core'
import Logo from './Logo'

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
    <Box
      display="flex"
      justifyContent="space-between"
      backgroundColor="rgba(199,204,178,.6)"
      position="relative"
      height={47}
      paddingLeft={50}
      paddingRight={50}
    >
      <Box
        marginTop={-17}
        flexGrow={1}
        flexShrink={0}
      >
        <Logo/>
      </Box>
      <Box
        flexGrow={2}
        flexShrink={1}
      />
      <Box
        flexGrow={1}
        flexShrink={0}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        maxWidth={350}
      >
        {linkComponents}
      </Box>
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
