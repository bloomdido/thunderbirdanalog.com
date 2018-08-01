import * as React from 'react'
import {Transition} from 'react-transition-group'
import {Box} from 'react-idic'
import MenuButton from './MenuButton'
import Drawer from './Drawer'

class HamburgerMenu extends React.PureComponent {
  componentWillMount() {
    this.setState({
      showDrawer: false,
    })
  }

  handleOpen = () => {
    this.setState({
      showDrawer: true,
    })
  }

  handleClose = () => {
    this.setState({
      showDrawer: false,
    })
  }

  render () {
    return (
      <Box>
        <MenuButton onClick={this.handleOpen}/>
        <Drawer onClick={this.handleClose} showDrawer={this.state.showDrawer}/>
      </Box>
    )
  }
}

export default HamburgerMenu
