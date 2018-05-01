import * as React from 'react'
import injectSheet from 'react-jss'
import {
  columnStyles,
  flexboxStyles,
  gridStyles,
  transformStyles,
  transitionStyles,
  universalStyles,
} from 'bundles/ui/core/styles'

const Box = ({classes, component, children, ...other}) => {
  const Component = component || "div"

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
    ...columnStyles,
    ...flexboxStyles,
    ...gridStyles,
    ...transformStyles,
    ...transitionStyles,
  },
}

export default injectSheet(styles)(Box)
