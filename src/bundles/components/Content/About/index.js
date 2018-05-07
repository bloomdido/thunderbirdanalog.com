import * as React from 'react'
import {
  Box,
  Text,
} from 'bundles/ui/core'

const About = () => {
  return (
     <Box display='flex' backgroundColor='rgba(199,204,178,.6)'>
      <Box padding={40} width='50%'>
        <Text component='h1' paddingBottom={30}>Thunderbird Analog</Text>
        <Text paddingBottom={20}>
        Thunderbird Analog Recording Studio is located in Oceanside, CA and was founded by Thomas Yearsley (of Paladins fame) in 2007. Thunderbird is a full service analog recording studio and performance venue featuring an abundance of classic equipment, 70s style lounge and full kitchen. With over 3000 square feet of recording space Thunderbird can accommodate any size group from a podcast to a power trio to an orchestra.
        </Text>
        <Text paddingBottom={20}>
        The Thunderbird approach to recording starts with the goal of perfectly capturing your voice and music just the way it is in your head, and finishes on 2” tape in a pure analog process. Thomas can guide you from conception to recording, mixing and mastering. It’s a collaborative process between the artist, the engineer, the gear and the room.</Text>
      </Box>
      <Box padding={40} width='50%'>
        <Text component='h1' paddingBottom={30}>Modern Vintage</Text>
        <Text>In addition to a plethora of vintage gear, Thunderbird also has all the conveniences you would expect from a modern studio. The lounge area has been decorated in a “1970s space vintage” theme and features a kitchen, private bathrooms, and wall art Thomas has personally collected during his years as am internationally touring musician. Tours are available by appointment Monday through Friday during normal business hours.
        </Text>
      </Box>
    </Box>
  )
}

export default About
