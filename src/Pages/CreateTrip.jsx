import React, { useState } from 'react';
import { Box, Button, Input, VStack, Heading, FormControl, FormLabel, NumberInput, NumberInputField, useToast } from '@chakra-ui/react';
import apiClient from '../api/apiClient';
import { useNavigate } from 'react-router-dom';

const CreateTrip = () => {
    const [formData, setFormData] = useState({
        name: '',
        destination: '',
        start_date: '',
        end_date: '',
        budget: 0
    });
    const navigate = useNavigate();
    const toast = useToast();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await apiClient.post('/trips', formData);
            toast({ title: "Trip created successfully", status: "success", duration: 3000 });
            navigate('/dashboard');
        } catch (error) {
            const errorMsg = error.response?.data?.error || "Failed to create trip";
            toast({ 
                title: "Failed to create trip", 
                description: errorMsg,
                status: "error", 
                duration: 5000,
                isClosable: true
            });
        }
    };

    return (
        <Box maxW="500px" m="auto" mt="50px" p="10" border="1px solid #ddd" borderRadius="md">
            <Heading mb="5" textAlign="center">Plan a New Trip</Heading>
            <form onSubmit={handleSubmit}>
                <VStack spacing="4">
                    <FormControl isRequired>
                        <FormLabel>Trip Name</FormLabel>
                        <Input value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} />
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel>Destination</FormLabel>
                        <Input value={formData.destination} onChange={(e) => setFormData({...formData, destination: e.target.value})} />
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel>Start Date</FormLabel>
                        <Input type="date" value={formData.start_date} onChange={(e) => setFormData({...formData, start_date: e.target.value})} />
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel>End Date</FormLabel>
                        <Input type="date" value={formData.end_date} onChange={(e) => setFormData({...formData, end_date: e.target.value})} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Budget ($)</FormLabel>
                        <NumberInput min={0}>
                            <NumberInputField value={formData.budget} onChange={(e) => setFormData({...formData, budget: parseFloat(e.target.value)})} />
                        </NumberInput>
                    </FormControl>
                    <Button colorScheme="teal" type="submit" w="full">Create Trip</Button>
                </VStack>
            </form>
        </Box>
    );
};

export default CreateTrip;
