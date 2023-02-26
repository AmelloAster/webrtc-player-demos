import { Box, Grid, GridItem } from '@chakra-ui/react';

import Sidebar from './components/Sidebar';
import Toolbar from './components/Toolbar';

function WebRTCPlayer() {
  return (
    <>
      <Box bg="blue" py={4} px={24} color="white" fontWeight={500} as="header">
        WebRTC Player
      </Box>
      <Box
        bg={'gray.100'}
        rounded="base"
        mx="auto"
        my={6}
        h="90vh"
        maxW="95%"
        as="main"
        shadow="base"
        overflow="hidden"
        overflowY="auto"
      >
        <Grid
          p={4}
          templateAreas={{
            sm: `"input" "video" "videoInfo"`,
            md: `"input video" "input videoInfo"`
          }}
          gridTemplateRows={{ sm: '1fr 1fr 1fr', md: '1fr 0.6fr' }}
          gridTemplateColumns={{ sm: '1fr', md: '0.5fr 1fr' }}
          gap="2"
        >
          <GridItem rounded="base" pl="2" area={'input'}>
            <Sidebar />
          </GridItem>
          <GridItem rounded="base" p="2" area={'video'}>
            <Toolbar />
          </GridItem>
          <GridItem rounded="base" pl="2" area={'videoInfo'}>
            Footer
          </GridItem>
        </Grid>
      </Box>
    </>
  );
}

export default WebRTCPlayer;
