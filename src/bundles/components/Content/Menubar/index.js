import * as React from 'react'
import injectSheet from 'react-jss'
import {Link} from 'react-router-dom'
import {
  Box,
  Text,
} from 'bundles/ui/core'
import Logo from './Logo'
import MenubarButton from './MenubarButton'

const Menubar = ({classes}) => {
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
      >
        <Link className={classes.link} to="/gear">GEAR</Link>
        <Link className={classes.link} to="/lounge">LOUNGE</Link>
        <Link className={classes.link} to="/studio">STUDIO</Link>
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
    // textAlign: 'right',
  },
}

export default injectSheet(styles)(Menubar)
