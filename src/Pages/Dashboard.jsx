import React, { useEffect, useState } from 'react';
import { Box, Heading, SimpleGrid, Card, CardHeader, CardBody, CardFooter, Text, Button, HStack } from '@chakra-ui/react';
import apiClient from '../api/apiClient';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const [trips, setTrips] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchTrips = async () => {
            try {
                const response = await apiClient.get('/trips');
                setTrips(response.data);
            } catch (error) {
                console.error("Error fetching trips", error);
            }
        };
        fetchTrips();
    }, []);

    return (
        <Box p="10" maxW="1200px" m="auto">
            <Box display="flex" justifyContent="space-between" alignItems="center" mb="10">
                <Heading>My Trips</Heading>
                <HStack spacing={4}>
                    <Button colorScheme="blue" variant="outline" onClick={() => navigate('/find-buddy')}>Find a Buddy</Button>
                    <Button colorScheme="teal" onClick={() => navigate('/create-trip')}>Create New Trip</Button>
                </HStack>
            </Box>
            <SimpleGrid columns={[1, 2, 3]} spacing="10">
                {trips.map(trip => (
                    <Card key={trip.id} cursor="pointer" onClick={() => navigate(`/trip-workspace?trip_id=${trip.id}`)}>
                        <CardHeader>
                            <Heading size="md">{trip.name}</Heading>
                        </CardHeader>
                        <CardBody>
                            <Text>Destination: {trip.destination}</Text>
                            <Text>Dates: {trip.start_date} to {trip.end_date}</Text>
                        </CardBody>
                        <CardFooter>
                            <Button variant="ghost" colorScheme="blue">View Details</Button>
                        </CardFooter>
                    </Card>
                ))}
            </SimpleGrid>
            {trips.length === 0 && <Text textAlign="center" mt="10">No trips found. Start by creating one!</Text>}
        </Box>
    );
};

export default Dashboard;
