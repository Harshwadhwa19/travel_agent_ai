import React, { useState } from 'react';
import { Box, Button, Input, VStack, Heading, Text, useToast } from '@chakra-ui/react';
import { useAuth } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();
    const toast = useToast();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await login(username, password);
            toast({ title: "Login successful", status: "success", duration: 3000 });
            navigate('/');
        } catch (error) {
            toast({ title: "Login failed", description: "Invalid credentials", status: "error", duration: 3000 });
        }
    };

    return (
        <Box maxW="400px" m="auto" mt="100px" p="5" border="1px solid #ddd" borderRadius="md">
            <Heading mb="5" textAlign="center">Login</Heading>
            <form onSubmit={handleSubmit}>
                <VStack spacing="4">
                    <Input placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
                    <Input placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    <Button colorScheme="teal" type="submit" w="full">Login</Button>
                    <Text>Don't have an account? <Link to="/signup">Signup</Link></Text>
                </VStack>
            </form>
        </Box>
    );
};

export default Login;
