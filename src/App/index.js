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
      fontFamily: '"Raleway", "Helvetica Neue", Helvetica, Arial, sans-serif',
      fontSize: 20,
      fontWeight: 100,
      letterSpacing: 1,
      lineHeight: 1.18,
      color: '#ffffff',
    },
    p: {
      margin: 0,
      textShadow: "black 1px 1px 5px",
    },
    h1: {
      fontWeight: 100,
      fontSize: 44,
      letterSpacing: 4,
      textShadow: "black 1px 1px 5px",
    },
    h2: {
      fontWeight: 100,
      fontSize: 32,
      letterSpacing: 4,
      textShadow: "black 1px 1px 5px",
    },
  },
}

export default injectSheet(styles)(App)
