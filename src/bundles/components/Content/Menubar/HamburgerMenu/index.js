import * as React from 'react'
import {Transition} from 'react-transition-group'
import {Box} from 'bundles/ui/core'
import MenuButton from './MenuButton'
import Drawer from './Drawer'

class HamburgerMenu extends React.PureComponent {
  handleClick = () => {
    console.log('closing')
  }

  render () {
    return (
      <Box>
        <MenuButton onClick={this.handleClick}/>
        <Drawer/>
      </Box>
    )
  }
}

export default HamburgerMenu
