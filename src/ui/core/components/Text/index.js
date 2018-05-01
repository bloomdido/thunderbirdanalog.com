import * as React from 'react'
import injectSheet from 'react-jss'
import {
  textStyles,
  transformStyles,
  transitionStyles,
  universalStyles,
} from 'bundles/ui/core/styles'

const Text = ({classes, component, children, ...other}) => {
  const Component = component || "p"

  return (
    <Component
      className={classes.root}
      {...other}
    >
      {children}
    </Component>
  )
}

const styles = {
  root: {
    ...universalStyles,
    ...textStyles,
    ...transformStyles,
    ...transitionStyles,
  }
}

export default injectSheet(styles)(Text)
