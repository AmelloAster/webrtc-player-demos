import { Box, Button, Center, Heading, Input, Text } from '@chakra-ui/react';
import type { FC } from 'react';

const PrepRoom: FC = () => {
  return (
    <Center w="full" className="h-screen" bg="#214646" m="auto">
      <Center
        rounded="base"
        py={12}
        px={24}
        bg="#e1bd94"
        flexDirection="column"
        gap={12}
        border={4}
        borderStyle="solid"
        borderColor="#000000"
        color="blackAlpha.800"
        fontSize={16}
        className="shadow-[10px_15px_0_0_black]"
      >
        <Heading size="lg">开始会议通话</Heading>
        <Box display="flex" alignItems="center">
          <Text w={32} as="label">
            会议室 ID:
          </Text>
          <Input
            variant="unstyled"
            px={6}
            py={2}
            bg="white"
            placeholder="请输入会议室 ID"
            _placeholder={{
              color: '#666'
            }}
          />
        </Box>
        <Box display="flex" gap={6}>
          <Button
            colorScheme="blackAlpha"
            variant="ghost"
            color="black"
            className="border border-black shadow-[5px_8px_0_0_black] active:shadow-[1px_2px_0_0_black] transition-all"
          >
            创建房间
          </Button>
          <Button
            colorScheme="blackAlpha"
            variant="ghost"
            color="black"
            className="border border-black shadow-[5px_8px_0_0_black] active:shadow-[1px_2px_0_0_black] transition-all"
          >
            加入房间
          </Button>
        </Box>
      </Center>
    </Center>
  );
};
export default PrepRoom;
