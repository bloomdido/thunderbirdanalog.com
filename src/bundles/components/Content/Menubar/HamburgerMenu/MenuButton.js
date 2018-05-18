import * as React from 'react'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/fontawesome-free-solid'
import {
  Button,
}
from 'bundles/ui/core'

const MenuButton = ({onClick}) => {
  return (
    <Button
      onClick={onClick}
      backgroundColor="transparent"
      color="white"
      border="none"
      focusOutline="none"
    >
      <FontAwesomeIcon icon={faBars} size="4x"/>
    </Button>
  )
}

export default MenuButton
