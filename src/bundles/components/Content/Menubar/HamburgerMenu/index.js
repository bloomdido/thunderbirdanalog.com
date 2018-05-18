import * as React from 'react'
import {Transition} from 'react-transition-group'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/fontawesome-free-solid'
import {
  Box,
  Button,
  List,
  ListItem,
  Text,
}
from 'bundles/ui/core'

class HamburgerMenu extends React.PureComponent {
  handleClick = () => {
    console.log('clicked!')
  }

  render () {
    return (
      <Box>
        <Button
          onClick={this.handleClick}
          backgroundColor="transparent"
          color="white"
          border="none"
          focusOutline="none"
        >
          <FontAwesomeIcon icon={faBars} size="4x"/>
        </Button>
        <Box
          width="80%"
          height="100%"
          backgroundColor="rgba(0, 77, 0, 0.75)"
          opacity={0.75}
          position="fixed"
          top={0}
          right={0}
          borderLeft="solid"
        >
          <Text
            component='h1'
            paddingTop={30}
            paddingLeft={30}
          >
            menu item 1
          </Text>
          <Text
            component='h1'
            paddingTop={30}
            paddingLeft={30}
          >
            menu item 2
          </Text>
        </Box>
      </Box>
    )
  }
}

export default HamburgerMenu
