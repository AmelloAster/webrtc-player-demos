import { GridItem } from '@chakra-ui/react';
import type { FC } from 'react';
import { useRef } from 'react';
import { useMount } from 'react-use';

interface HostVideoProps {
  mediaStream: MediaStream;
}

const HostVideo: FC<HostVideoProps> = ({ mediaStream }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useMount(() => {
    if (videoRef.current) {
      videoRef.current.srcObject = mediaStream;
    }
  });

  return (
    <GridItem h={64}>
      <video
        ref={videoRef}
        className=" m-auto rounded bg-black h-full"
        id="host"
        src=""
        autoPlay
        playsInline
      ></video>
    </GridItem>
  );
};
export default HostVideo;
