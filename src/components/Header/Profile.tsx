import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align={"center"}>
      <Box mr="4" textAlign="right">
        <Text> Paulo Pelaez</Text>
        <Text color="gray.300" fontSize="small">
          pelaez@querywork.team
        </Text>
      </Box>
      <Avatar
        size="md"
        name="Paulo Pelaez"
        src="https://github.com/paulopelaez.png"
      />
    </Flex>
  );
}
