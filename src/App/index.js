import * as React from 'react'
import injectSheet from 'react-jss'
import Content from 'bundles/components/Content'

const App = () => {
  return (
    <Content/>
  )
}

const styles = {
  '@global': {
    html: {
      overflowX: 'hidden',
      height: '100%',
    },
    body: {
      overflowX: 'hidden',
      height: '100%',
      margin: 0,
      backgroundColor: '#333333',
      fontFamily: '"Oswald", "Helvetica Neue", Helvetica, Arial, sans-serif',
      fontSize: 15,
      color: '#ffffff'
    },
    p: {
      margin: 0,
    },
  },
}

export default injectSheet(styles)(App)
