import * as React from 'react'
import {
  Button,
} from 'bundles/ui/core'

const MenubarButton = ({label}) => {
  return (
    <Button
      backgroundColor='transparent'
      marginTop={12}
      border='none'
      fontSize={18}
      color='white'
      padding={0}
    >
      {label}
    </Button>
  )
}

export default MenubarButton
