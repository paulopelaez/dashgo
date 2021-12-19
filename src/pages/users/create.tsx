import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  HStack,
  SimpleGrid,
  VStack,
} from "@chakra-ui/react";
import { Input } from "../../components/form/Input";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";

export default function CreateUser() {
  return (
    <Box>
      <Header />
      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <Box flex="1" borderRadius={8} bg="gray.800" p={["4", "6", "8"]}>
          <Heading size="lg" fontWeight="normal">
            Criar Usuário
          </Heading>
          <Divider my="6" borderColor="gray.700" />
          <VStack spacing={["4", "6", "8"]}>
            <SimpleGrid
              minChildWidth="240px"
              spacing={["4", "6", "8"]}
              w="100%"
            >
              <Input name="name" label="Nome Completo" />
              <Input name="email" label="E-mail" />
            </SimpleGrid>
            <SimpleGrid
              minChildWidth="240px"
              spacing={["4", "6", "8"]}
              w="100%"
            >
              <Input name="password" label="Senha" />
              <Input name="password_confirmation" label="Confirme sua senha" />
            </SimpleGrid>
          </VStack>

          <Flex mt="8" justify="flex-end">
            <HStack spacing="4">
              <Button colorScheme="whiteAlpha">Cancelar</Button>
              <Button colorScheme="purple">Salvar</Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}
