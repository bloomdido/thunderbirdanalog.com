import * as React from 'react'
import injectSheet from 'react-jss'
import {
  transformStyles,
  transitionStyles,
  universalStyles,
} from 'bundles/ui/core/styles'

const ListItem = ({classes, component, children, ...other}) => {
  const Component = component || "li"

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
    ...transformStyles,
    ...transitionStyles,

    // overrides
    display: props => props.display || 'inline-block',
  }
}

export default injectSheet(styles)(ListItem)
