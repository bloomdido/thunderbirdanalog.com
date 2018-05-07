import * as React from 'react'
import {
  Box,
  Text,
} from 'bundles/ui/core'

const Gear = () => {
  return (
     <Box display='flex' backgroundColor='rgba(199,204,178,.6)'>
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
     </Box>
     <Box padding={40} width='50%'>
       <Text component='h1' paddingBottom={30}>Contact</Text>
       <Text>Thunderbird Analog Recording Studio rates start at $100/hr, or by project. Contact Thomas to book time, schedule a tour or discuss your project.</Text>
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

export default Gear
