import * as React from 'react'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/fontawesome-free-solid'
import {
  Button,
}
from 'bundles/ui/core'

class HamburgerMenu extends React.PureComponent {
  handleClick = () => {
    console.log('clicked!')
  }

  render () {
    return (
      <Button
        onClick={this.handleClick}
        backgroundColor="transparent"
        border="none"
      >
        <FontAwesomeIcon icon={faBars} size="4x"/>
      </Button>
    )
  }
}

export default HamburgerMenu
