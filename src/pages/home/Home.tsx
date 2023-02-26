import { ArrowForwardIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Center,
  Grid,
  GridItem,
  Heading,
  Text
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import type { FC } from 'react';
import { useNavigate } from 'react-router-dom';

const cardData = [
  {
    title: 'WebRTC LiveStream Player',
    desc: 'WebRTC 直播推流',
    navUrl: '/page/webRTC-live-player'
  },
  {
    title: 'WebRTC HandShake',
    desc: 'WebRTC 握手',
    navUrl: '/page/hand-shake'
  },
  {
    title: 'WebRTC Video Call',
    desc: 'WebRTC 视频通话',
    navUrl: '/page/webRTC-live-player'
  }
];

const Home: FC = () => {
  const navigate = useNavigate();

  const handleNavigateByUrl = (url: string) => {
    navigate(url);
  };

  return (
    <Center flexDirection="column" className="h-screen">
      <Box mb={12} mt={32}>
        <Text fontSize={32} fontWeight={500}>
          WebRTC Player Demos
        </Text>
      </Box>
      <Grid templateRows="repeat(2, 1fr)" templateColumns="repeat(3, 1fr)" gap={6}>
        {cardData.map((i, idx) => (
          <GridItem
            key={idx}
            as={motion.div}
            initial={{
              opacity: 0,
              scale: 0.8,
              y: 20,
              rotate: 5
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
              rotate: 0
            }}
            transition={`1s ease ${idx * 0.05}s`}
            viewport={{ once: true }}
          >
            <Card border={2} borderColor="black" borderStyle="solid">
              <CardHeader>
                <Heading size="md">{i.title}</Heading>
              </CardHeader>
              <CardBody>
                <Text>{i.desc}</Text>
              </CardBody>
              <CardFooter>
                <Button
                  colorScheme="messenger"
                  gap={2}
                  onClick={() => handleNavigateByUrl(i.navUrl)}
                >
                  <Text>Go To</Text>
                  <motion.i
                    whileHover={{ scale: 1.2, rotate: 90 }}
                    whileTap={{
                      scale: 0.8,
                      rotate: -90
                    }}
                  >
                    <ArrowForwardIcon />
                  </motion.i>
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
        ))}
      </Grid>
    </Center>
  );
};
export default Home;
