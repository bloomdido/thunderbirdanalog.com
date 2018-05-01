import * as React from 'react'
import injectSheet from 'react-jss'
import {
  textStyles,
  transformStyles,
  transitionStyles,
  universalStyles,
} from 'bundles/ui/core/styles'

class Button extends React.PureComponent {
  componentWillMount() {
    this.setState({
      focus: false,
      hover: false,
    })
  }

  handleClick = (event) => {
    const {onClick} = this.props

    if (onClick) onClick(event)
  }

  handleFocus = (event) => {
    const {onFocus} = this.props

    this.setState({
      focus: true,
    })

    if (onFocus) onFocus(event)
  }

  handleBlur = (event) => {
    const {onBlur} = this.props

    this.setState({
      focus: false,
    })

    if (onBlur) onBlur(event)
  }

  handleMouseEnter = (event) => {
    const {onMouseEnter} = this.props

    this.setState({
      hover: true,
    })

    if (onMouseEnter) onMouseEnter(event)
  }

  handleMouseLeave = (event) => {
    const {onMouseLeave} = this.props

    this.setState({
      hover: false,
    })

    if (onMouseLeave) onMouseLeave(event)
  }

  render() {
    const {classes, component, children, ...other} = this.props
    const Component = component || "button"

    return (
      <Component
        className={classes.root}
        onClick={this.handleClick}
        onFocus={this.handleFocus}
        onBlur={this.handleBlur}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        {...other}
      >
        {children}
      </Component>
    )
  }
}

const styles = {
  root: {
    ...universalStyles,
    ...textStyles,
    ...transformStyles,
    ...transitionStyles,
  },
}

export default injectSheet(styles)(Button)
