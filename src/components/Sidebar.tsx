import { Select, Text, Textarea } from '@chakra-ui/react';
import type { FC } from 'react';

interface SidebarProps {}

const Sidebar: FC<SidebarProps> = ({}) => {
  return (
    <>
      <Textarea
        bg="white"
        border={2}
        borderColor="black"
        borderStyle="solid"
        rows={6}
        placeholder="请输入推流地址："
        className="resize-none"
      />
      <Select mt={6} bg="white" placeholder="Select option">
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </Select>
    </>
  );
};
export default Sidebar;
