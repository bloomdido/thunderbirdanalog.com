import * as React from 'react'
import injectSheet from 'react-jss'
import {
  listStyles,
  transformStyles,
  transitionStyles,
  universalStyles,
} from 'bundles/ui/core/styles'

const List = ({classes, component, children, ...other}) => {
  const Component = component || "ul"

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
    ...listStyles,
    ...transformStyles,
    ...transitionStyles,

    // overrides
    margin: props => props.margin || 0,
    padding: props => props.padding || 0,
    listStyle: props => props.listStyle || 'none',
  }
}

export default injectSheet(styles)(List)
