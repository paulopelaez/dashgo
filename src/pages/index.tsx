import { Button, Flex, Stack } from "@chakra-ui/react";
import Image from "next/image";
import { Input } from "../components/form/Input";

export default function SignIn() {
  return (
    <Flex w="100vw" h="100vh" alignItems={"center"} justifyContent={"center"}>
      <Flex
        as="form"
        width="100%"
        maxWidth={360}
        bg="gray.800"
        padding={8}
        borderRadius={8}
        flexDirection={"column"}
      >
        <Image
          width="100%"
          height={100}
          src={"/assets/logo.png"}
          objectFit="contain"
        />
        <Stack spacing={4}>
          <Input
            name="email"
            type="email"
            label="E-mail"
            placeholder="pelaez@querywork.team"
          />
          <Input
            name="password"
            type="password"
            label="Senha"
            placeholder="********"
          />
        </Stack>
        <Button type="submit" marginTop={6} colorScheme={"purple"} size={"lg"}>
          Entrar
        </Button>
      </Flex>
      <Flex> </Flex>
    </Flex>
  );
}
