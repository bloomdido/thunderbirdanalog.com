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
        <Text component='h2' paddingBottom={20}>Modern Vintage</Text>
        <Text>In addition to a plethora of vintage gear, Thunderbird also has all the conveniences you would expect from a modern studio. The lounge area has been decorated in a “1970s space vintage” theme and features a kitchen, private bathrooms, and wall art Thomas has personally collected during his years as am internationally touring musician. Tours are available by appointment Monday through Friday during normal business hours.
        </Text>
      </Box>
      <Box padding={40} width='50%'>
        <Text component='h1' paddingBottom={30}>Gear</Text>
        <Text>MCI JH 24 Track 2” Tape Machine</Text>
        <Text>32 Input Console</Text>
        <Text>Various Vintage Snares and Cymbals</Text>
        <Text>1970 Slingerland Standard Drum Kit</Text>
        <Text>Various Vintage Snares and Cymbals</Text>
        <Text>An Assortment of Percussion</Text>
        <Text>Hammond Organ</Text>
        <Text>Leslie Cabinet</Text>
        <Text>Grand Piano</Text>
        <Text>Plate Reverb</Text>
        <Text>3500 square feet of tracking</Text>
        <Text>Vocal Isolation Booth</Text>
        <Text>Studio quality vocal and instrument microphones</Text>
        <Text>An assortment of vintage amps, classic guitars and basses</Text>
        <Text paddingTop={20}>Thunderbird Analog Recording Studio rates start at $100/hr, or by project. Contact Thomas to book time, schedule a tour or discuss your project.</Text>
        <Text paddingTop={20}>Phone:  760.458.5682</Text>
        <Text>Email:  ThomasYearsley@hotmail.com</Text>
        <Text>Thunderbird Analog Recording Studio</Text>
        <Text>1715 S Freeman St</Text>
        <Text>Oceanside, CA 92054</Text>
        <Text paddingTop={20}>www.thunderbirdanalog.com</Text>
        <Text>@ThunderbirdAnalog</Text>
        <Text>Leave us a review on Yelp.com</Text>
      </Box>
    </Box>
  )
}

export default About
