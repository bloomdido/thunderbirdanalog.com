import * as React from 'react'
import {Switch, Route} from 'react-router-dom'
import {
  Box,
  Text,
} from 'react-idic'
import BkgImage from './BkgImage'
import Menubar from './Menubar'
import About from './About'
import Gear from './Gear'
import Lounge from './Lounge'
import Studio from './Studio'

class Content extends React.Component {
  renderHome = () => {
    return (
      <About/>
    )
  }

  renderGear = () => {
    return (
      <Gear/>
    )
  }

  renderLounge = () => {
    return (
      <Lounge/>
    )
  }

  renderStudio = () => {
    return (
      <Studio/>
    )
  }

  render() {
    return (
      <Box position="relative">
        <BkgImage/>
        <Box
          position="absolute"
          top={0}
          width="100%"
          height="100%"
          backgroundColor="rgba(0,0,0,0.4)">
          <Box paddingTop={50} width="100%" marginLeft="auto" marginRight="auto">
            <Menubar/>
          </Box>
          <Box paddingTop={75} maxWidth="1200px" marginLeft="auto" marginRight="auto">
            <Switch>
              <Route path="/gear" render={() => this.renderGear()}/>
              <Route path="/lounge" render={() => this.renderLounge()}/>
              <Route path="/studio" render={() => this.renderStudio()}/>
              <Route render={() => this.renderHome()}/>
            </Switch>
          </Box>
        </Box>
      </Box>
    )
  }
}


export default Content
