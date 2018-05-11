import * as React from 'react'
import MediaQuery from 'react-responsive'
import {
  Box,
  Text,
} from 'bundles/ui/core'

const analogH1 = 'Thunderbird Analog'

const analogText1 = 'Thunderbird Analog Recording Studio is located in Oceanside, CA and was founded by Thomas Yearsley (of Paladins fame) in 2007. Thunderbird is a full service analog recording studio and performance venue featuring an abundance of classic equipment, 70s style lounge and full kitchen. With over 3000 square feet of recording space Thunderbird can accommodate any size group from a podcast to a power trio to an orchestra.'

const analogText2 = 'The Thunderbird approach to recording starts with the goal of perfectly capturing your voice and music just the way it is in your head, and finishes on 2” tape in a pure analog process. Thomas can guide you from conception to recording, mixing and mastering. It’s a collaborative process between the artist, the engineer, the gear and the room.'

const vintageH1 = 'Modern Vintage'

const vintageText = 'In addition to a plethora of vintage gear, Thunderbird also has all the conveniences you would expect from a modern studio. The lounge area has been decorated in a “1970s space vintage” theme and features a kitchen, private bathrooms, and wall art Thomas has personally collected during his years as am internationally touring musician. Tours are available by appointment Monday through Friday during normal business hours.'

const About = () => {
  return (
    <Box>
      <MediaQuery key="desktop" minWidth="1225px">
        <Box display='flex' backgroundColor='rgba(199,204,178,.6)'>
          <Box padding={40} width='50%'>
            <Text component='h1' paddingBottom={30}>{analogH1}</Text>
            <Text paddingBottom={20}>{analogText1}</Text>
            <Text paddingBottom={20}>{analogText2}</Text>
          </Box>
          <Box padding={40} width='50%'>
            <Text component='h1' paddingBottom={30}>{vintageH1}</Text>
            <Text>{vintageText}</Text>
          </Box>
        </Box>
      </MediaQuery>
      <MediaQuery key="mobile" maxWidth="1224px">
        <Box display='flex' backgroundColor='rgba(199,204,178,.6)'>
         <Box padding={40} width='100%'>
           <Text component='h1' paddingBottom={30}>{analogH1}</Text>
           <Text paddingBottom={20}>{analogText1}</Text>
           <Text component='h1' paddingBottom={30}>{vintageH1}</Text>
           <Text>{vintageText}</Text>
         </Box>
        </Box>
      </MediaQuery>
    </Box>
  )
}

export default About
