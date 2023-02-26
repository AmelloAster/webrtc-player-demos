import { Button, Stack, Wrap, WrapItem } from '@chakra-ui/react';
import type { FC } from 'react';

interface ToolbarProps {}

const Toolbar: FC<ToolbarProps> = () => {
  return (
    <Stack direction="column">
      <Wrap spacing={4}>
        <WrapItem>
          <Button colorScheme="messenger">Play</Button>
        </WrapItem>
        <WrapItem>
          <Button colorScheme="red">Stop</Button>
        </WrapItem>
      </Wrap>
    </Stack>
  );
};
export default Toolbar;
