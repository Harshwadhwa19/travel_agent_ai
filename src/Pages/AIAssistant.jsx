import React, { useState, useEffect } from 'react';
import { Box, Button, Input, VStack, Heading, Text, Grid, GridItem, Spinner, List, ListItem, Divider, useToast, Badge, HStack } from '@chakra-ui/react';
import apiClient from '../api/apiClient';

const AIAssistant = () => {
    const query = new URLSearchParams(window.location.search);
    const tripIdFromUrl = query.get('trip_id');

    const [input, setInput] = useState({
        destination: '',
        days: 3,
        budget: 500,
        interests: ''
    });
    const [itinerary, setItinerary] = useState(null);
    const [loading, setLoading] = useState(false);
    const [trips, setTrips] = useState([]);
    const [selectedTrip, setSelectedTrip] = useState(tripIdFromUrl || '');
    const [isContextMode, setIsContextMode] = useState(!!tripIdFromUrl);
    const toast = useToast();

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch all trips for selection dropdown
                const tripsRes = await apiClient.get('/trips');
                setTrips(tripsRes.data);

                // If trip_id exists in URL, fetch specific trip context
                if (tripIdFromUrl) {
                    const tripRes = await apiClient.get(`/trips/${tripIdFromUrl}`);
                    const trip = tripRes.data;
                    
                    // Calculate days
                    const start = new Date(trip.start_date);
                    const end = new Date(trip.end_date);
                    const diffTime = Math.abs(end - start);
                    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1;

                    setInput({
                        destination: trip.destination,
                        days: diffDays,
                        budget: 1000, // Default budget if not specified
                        interests: ''
                    });
                    setIsContextMode(true);
                    setSelectedTrip(tripIdFromUrl);
                }
            } catch (error) {
                console.error("Failed to fetch context", error);
            }
        };
        fetchData();
    }, [tripIdFromUrl]);

    const generatePlan = async () => {
        setLoading(true);
        try {
            const interestsArray = input.interests.split(',').map(i => i.trim());
            const response = await apiClient.post('/ai/generate-itinerary', {
                ...input,
                interests: interestsArray
            });
            setItinerary(response.data);
        } catch (error) {
            toast({ title: "AI Generation failed", status: "error", duration: 3000 });
        } finally {
            setLoading(false);
        }
    };

    const handleSaveToTrip = async () => {
        if (!selectedTrip) {
            toast({ title: "Please select a trip first", status: "warning" });
            return;
        }
        try {
            await apiClient.post('/ai/apply-itinerary', {
                trip_id: parseInt(selectedTrip),
                ...itinerary
            });
            toast({ title: "Itinerary saved to trip!", status: "success" });
            window.location.href = `/trip-workspace?trip_id=${selectedTrip}`;
        } catch (error) {
            toast({ title: "Failed to save itinerary", status: "error" });
        }
    };

    return (
        <Box maxW="900px" m="auto" mt="40px" p="8" borderRadius="2xl" border="1px solid #eee" boxShadow="xl" bg="white">
            {isContextMode ? (
                <Box mb="8" p="6" bg="blue.50" borderRadius="xl" border="1px solid" borderColor="blue.100">
                    <Heading size="md" color="blue.700" mb="2">Planning for: {input.destination}</Heading>
                    <HStack spacing={4}>
                        <Badge colorScheme="blue">{input.days} Days</Badge>
                        <Badge colorScheme="green">${input.budget} Budget</Badge>
                    </HStack>
                    <Text mt="4" fontSize="sm" color="gray.600">
                        We've detected your trip details. Just tell us your **interests** below and we'll design the perfect plan!
                    </Text>
                </Box>
            ) : (
                <Heading mb="8" textAlign="center" color="purple.700">Agentic AI Travel Assistant</Heading>
            )}

            <VStack spacing="5" mb="10">
                <Box w="full" p="4" bg="purple.50" borderRadius="lg">
                    <Text fontSize="sm" color="purple.600" mb="2" fontWeight="bold">
                        {isContextMode ? "DESCRIBE YOUR VIBE" : "QUICK GENERATE"}
                    </Text>
                    <Grid templateColumns="repeat(2, 1fr)" gap="4">
                        {!isContextMode && (
                            <>
                                <GridItem colSpan={2}>
                                    <Input placeholder="Destination (e.g. Paris, Tokyo)" bg="white" value={input.destination} onChange={(e) => setInput({...input, destination: e.target.value})} />
                                </GridItem>
                                <Input placeholder="Duration (Days)" type="number" bg="white" value={input.days} onChange={(e) => setInput({...input, days: parseInt(e.target.value)})} />
                                <Input placeholder="Budget ($)" type="number" bg="white" value={input.budget} onChange={(e) => setInput({...input, budget: parseInt(e.target.value)})} />
                            </>
                        )}
                        <GridItem colSpan={2}>
                            <Input 
                                placeholder="What do you love? (e.g. Beaches, History, Nightlife, Hidden Gems)" 
                                bg="white" 
                                value={input.interests} 
                                onChange={(e) => setInput({...input, interests: e.target.value})} 
                                autoFocus={isContextMode}
                            />
                        </GridItem>
                    </Grid>
                    <Button colorScheme="purple" mt="4" w="full" onClick={generatePlan} isLoading={loading}>
                        {isContextMode ? "Re-Design My Itinerary" : "Design My Trip"}
                    </Button>
                </Box>
            </VStack>

            {loading && <Spinner m="auto" display="block" size="xl" color="purple.500" thickness="4px" />}
            
            {itinerary && (
                <Box p="6" border="2px solid" borderColor="purple.100" borderRadius="xl" bg="gray.50" animation="fadeIn 0.5s">
                    <Heading size="md" mb="6" color="purple.600">Generated Itinerary for {input.destination}</Heading>
                    <VStack align="stretch" spacing="6" mb="8">
                        {itinerary.days?.map(day => (
                            <Box key={day.day_number} p="4" bg="white" borderRadius="md" borderLeft="4px solid" borderColor="purple.400" boxShadow="xs">
                                <Heading size="xs" mb="3">DAY {day.day_number}</Heading>
                                <List spacing={2}>
                                    {day.activities.map((act, idx) => (
                                        <ListItem key={idx} fontSize="sm">
                                            <Text fontWeight="bold" display="inline">{act.time} - {act.location}</Text>
                                            <Text mt="1" color="gray.600">{act.description}</Text>
                                        </ListItem>
                                    ))}
                                </List>
                            </Box>
                        ))}
                    </VStack>
                    
                    <Divider mb="6" />
                    
                    <Box bg="white" p="5" borderRadius="lg" border="1px solid #eee">
                        <Heading size="sm" mb="4">Save to Workspace</Heading>
                        <VStack spacing="4">
                            <select 
                                style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #ddd' }}
                                value={selectedTrip}
                                onChange={(e) => setSelectedTrip(e.target.value)}
                            >
                                <option value="">Select a trip to update...</option>
                                {trips.map(t => (
                                    <option key={t.id} value={t.id}>{t.name} ({t.destination})</option>
                                ))}
                            </select>
                            <Button colorScheme="blue" w="full" onClick={handleSaveToTrip} isDisabled={!selectedTrip}>Update Trip Itinerary</Button>
                        </VStack>
                    </Box>
                </Box>
            )}
        </Box>
    );
};

export default AIAssistant;
