import { Button, Flex, Stack } from "@chakra-ui/react";
import Image from "next/image";
import { Input } from "../components/form/Input";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

type SignInFormData = {
  email: string;
  password: string;
};

const signInFormSchema = yup.object().shape({
  email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
  password: yup.string().required("Senha obrigatória"),
});

export default function SignIn() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(signInFormSchema),
  });

  const { errors } = formState;

  const handleSignIn: SubmitHandler<SignInFormData> = async (values) => {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    console.log(values);
  };

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
        onSubmit={handleSubmit(handleSignIn)}
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
            error={errors.email}
            placeholder="pelaez@querywork.team"
            {...register("email")}
          />
          <Input
            name="password"
            type="password"
            label="Senha"
            error={errors.password}
            placeholder="********"
            {...register("password")}
          />
        </Stack>
        <Button
          type="submit"
          marginTop={6}
          colorScheme={"purple"}
          size={"lg"}
          isLoading={formState.isSubmitting}
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
}
