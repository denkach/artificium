import { Box } from '../Box';
import {Logo, Title, Form, LoginFragment, Image, Text, Input, Networks, Network, ButtonLogin, InputRemember, Checkbox, Label, ForgotLink, Icon } from './Login.styled';

export const Login = () => {
    return (
        <Box display="flex" borderRadius="24px" width="1440px" position="relative">
            <Logo src="src/assets/Logo.svg" alt="Logo" />
            <Box width="50%" p="207px 112px" >
            <Title>
                Let's get <LoginFragment>creative!</LoginFragment>
            </Title>
            <Text>Log in to Artificium to start creating magic.</Text>

            <Form action="">
                <Input type="email" name="email" id="email" placeholder='Email' />
                <Input type="password" name="password" id="password" placeholder='Password' />
                <Box display="flex" alignItems="center" justifyContent="space-between" mt="48px">
                    <Box>
                        <Label htmlFor="">
                        <InputRemember type="checkbox" name="" id="" />
                        <Checkbox path="/src/assets/checkNone.svg" />
                            Remember me
                         </Label>
                    </Box>
                     <ForgotLink href="">Forgot Password?</ForgotLink>
                </Box>
                <ButtonLogin>Login</ButtonLogin>
                </Form>
                <Box>
                    <Networks>or continue with</Networks>
                    <Box display="flex" justifyContent="space-between">
                        <Network href="">
                            <Icon src="src/assets/google.svg" alt="" />
                            Google Account
                        </Network>
                        <Network href="">
                            <Icon src="src/assets/apple.svg" alt="" />
                            Apple Account
                        </Network>
                    </Box>
                </Box>
            </Box>
            <Box>
                <Image src="/src/assets/Illustration.jpg" alt="illustration1"/>
            </Box>
        </Box>
    )
}