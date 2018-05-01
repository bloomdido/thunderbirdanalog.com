import * as React from 'react'
import injectSheet from 'react-jss'
import {
  transformStyles,
  transitionStyles,
  universalStyles,
} from 'bundles/ui/core/styles'

const Image = ({classes, component, children, ...other}) => {
  const Component = component || "img"

  return (
    <Component
      className={classes.root}
      src={children}
      {...other}
    />
  )
}

const styles = {
  root: {
    ...universalStyles,
    ...transformStyles,
    ...transitionStyles,
  },
}

export default injectSheet(styles)(Image)
