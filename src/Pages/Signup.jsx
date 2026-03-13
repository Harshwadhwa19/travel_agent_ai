import React, { useState } from 'react';
import { Box, Button, Input, VStack, Heading, Text, useToast } from '@chakra-ui/react';
import { useAuth } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';

const Signup = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { signup } = useAuth();
    const navigate = useNavigate();
    const toast = useToast();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await signup(username, email, password);
            toast({ title: "Signup successful", description: "You can now login", status: "success", duration: 3000 });
            navigate('/login');
        } catch (error) {
            const errorMsg = error.response?.data?.msg || error.response?.data?.error || "Connection error. Please ensure the backend is running.";
            toast({ title: "Signup failed", description: errorMsg, status: "error", duration: 4000 });
        }
    };

    return (
        <Box maxW="400px" m="auto" mt="100px" p="5" border="1px solid #ddd" borderRadius="md">
            <Heading mb="5" textAlign="center">Signup</Heading>
            <form onSubmit={handleSubmit}>
                <VStack spacing="4">
                    <Input placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
                    <Input placeholder="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    <Input placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    <Button colorScheme="teal" type="submit" w="full">Signup</Button>
                    <Text>Already have an account? <Link to="/login">Login</Link></Text>
                </VStack>
            </form>
        </Box>
    );
};

export default Signup;
