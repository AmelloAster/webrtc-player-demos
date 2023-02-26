import { Alert, Box, Button, Grid, GridItem, Heading, Tag, Text, Textarea } from '@chakra-ui/react';
import type { ChangeEvent, FC } from 'react';
import { useRef, useState } from 'react';
import { useMount } from 'react-use';

import HostVideo from './components/HostVideo';
import RemoteVideo from './components/RemoteVideo';

interface HandShakeProps {}

const servers = {
  iceServers: [
    {
      urls: ['stun:stun1.l.google.com:19302', 'stun:stun2.l.google.com:19302']
    }
  ]
};
const peerConnection = new RTCPeerConnection();
const localStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
const remoteStream = new MediaStream();

localStream.getTracks().forEach((track) => {
  peerConnection.addTrack(track, localStream);
});
peerConnection.ontrack = (e) => {
  e.streams[0].getTracks().forEach((t) => {
    remoteStream.addTrack(t);
  });
};

const HandShake: FC<HandShakeProps> = () => {
  const [offer, setOffer] = useState('');
  const [answer, setAnswer] = useState('');

  const handleCreateOffer = async () => {
    peerConnection.onicecandidate = async (e) => {
      if (e.candidate) {
        setOffer(JSON.stringify(peerConnection.localDescription));
      }
    };

    const offerTemp = await peerConnection.createOffer();
    await peerConnection.setLocalDescription(offerTemp);
  };

  const handleCreateAnswer = async () => {
    if (!offer) {
      throw Error('please input a offer');
    }
    peerConnection.onicecandidate = async (e) => {
      if (e.candidate) {
        setAnswer(JSON.stringify(peerConnection.localDescription));
      }
    };

    await peerConnection.setRemoteDescription(JSON.parse(offer));

    const answerTemp = await peerConnection.createAnswer();
    await peerConnection.setLocalDescription(answerTemp);
  };

  const handleAddAnswer = () => {
    if (!answer) {
      throw Error('please input a answer');
    }

    if (!peerConnection.currentRemoteDescription) {
      peerConnection.setRemoteDescription(JSON.parse(answer));
    }
  };

  const onChangeOffer = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setOffer(e.target.value);
  };

  const onChangeAnswer = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setAnswer(e.target.value);
  };

  return (
    <Box p={12}>
      <Heading pb={6}>WebRTC, Passing SDP with no signaling.</Heading>
      <Text mb={12}>
        Instructions: Start by opening two tabs side by side and follow the steps below to pass SDP
        offer and answer. I will refer to each tab as <b>User 1</b> and <b>User 2</b>.
      </Text>
      <Grid
        justifyContent="center"
        templateRows="repeat(1, 1fr)"
        templateColumns="repeat(2, 1fr)"
        gap={12}
      >
        <HostVideo mediaStream={localStream} />
        <RemoteVideo mediaStream={remoteStream} />
      </Grid>
      <Alert my={6} rounded="base" status="warning">
        <Text>
          <b>Step 1:</b> User 1, click &quot;Create offer&quot; to generate SDP offer and copy offer
          from text area below.
        </Text>
      </Alert>
      <Button color="messenger" onClick={handleCreateOffer}>
        Create Offer
      </Button>
      <Textarea
        value={offer}
        my={4}
        className="resize-none"
        borderWidth={2}
        borderColor="black"
        rows={6}
        onChange={onChangeOffer}
      />
      <Alert rounded="base" status="warning" mb={6}>
        <Text>
          <b>Step 2:</b> User 2, paste SDP offer generated by user 1 into text area above, then
          click &quot;Create Answer&quot; to generate SDP answer and copy the answer from the text
          area below.
        </Text>
      </Alert>
      <Button color="messenger" onClick={handleCreateAnswer}>
        Create Answer
      </Button>
      <Textarea
        value={answer}
        my={4}
        className="resize-none"
        borderWidth={2}
        borderColor="black"
        rows={6}
        onChange={onChangeAnswer}
      />
      <Alert rounded="base" status="warning" mb={6}>
        <Text>
          <b>Step 3:</b> User 1, paste SDP offer generated by user 2 into text area above and then
          click &quot;Add Answer&quot;
        </Text>
      </Alert>
      <Button color="messenger" onClick={handleAddAnswer}>
        Add Answer
      </Button>
    </Box>
  );
};
export default HandShake;
