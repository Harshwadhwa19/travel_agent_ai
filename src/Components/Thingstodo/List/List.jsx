import React from 'react';
import { Box, FormControl, Text, SimpleGrid, VStack, Badge, HStack, Button } from '@chakra-ui/react';
import PlaceDetails from '../PlaceDetails/PlaceDetails';

const List = ({ 
    places = [], 
    hotels = [],
    restaurants = [],
    childClicked, 
    setType, 
    setRating, 
    type, 
    rating,
    itineraryMarkers = [],
    activeRouteSource,
    setActiveRouteSource,
    activeRouteDestination,
    setActiveRouteDestination,
    selectedRoute,
    tripId,
    setCoordinates
}) => {
    return (
        <Box p={6} bg="gray.50" h="full">
            <Text fontSize="2xl" fontWeight="bold" mb={4}>
                Trip Itinerary & Navigation
            </Text>

            {/* Route Navigator Integration */}
            {tripId && (
                <Box 
                    bg="white" 
                    p={5} 
                    borderRadius="lg" 
                    mb={6} 
                    shadow="sm"
                    borderWidth="1px"
                    borderColor="blue.100"
                >
                    <Text fontWeight="bold" mb={4} fontSize="lg" color="blue.700">
                        🗺️ Route Navigator
                    </Text>
                    {itineraryMarkers.length > 0 ? (
                        <>
                            <VStack align="stretch" spacing={4}>
                                <Box>
                                    <Text fontSize="xs" color="gray.500" mb={1} fontWeight="semibold">FROM:</Text>
                                    <select 
                                        value={activeRouteSource || ''} 
                                        onChange={(e) => setActiveRouteSource(e.target.value)}
                                        style={{ width: '100%', padding: '8px', border: '1px solid #e2e8f0', borderRadius: '6px', fontSize: '14px' }}
                                    >
                                        {itineraryMarkers.map(m => (
                                            <option key={`src-${m.id}`} value={m.id}>Day {m.day} - {m.name} ({m.time})</option>
                                        ))}
                                    </select>
                                </Box>
                                <Box textAlign="center" fontSize="xl">⬇️</Box>
                                <Box>
                                    <Text fontSize="xs" color="gray.500" mb={1} fontWeight="semibold">TO:</Text>
                                    <select 
                                        value={activeRouteDestination || ''} 
                                        onChange={(e) => setActiveRouteDestination(e.target.value)}
                                        style={{ width: '100%', padding: '8px', border: '1px solid #e2e8f0', borderRadius: '6px', fontSize: '14px' }}
                                    >
                                        <option value="">Select Destination...</option>
                                        {itineraryMarkers.map(m => (
                                            <option key={`dst-${m.id}`} value={m.id}>Day {m.day} - {m.name} ({m.time})</option>
                                        ))}
                                    </select>
                                </Box>
                            </VStack>

                            {selectedRoute && (
                                <Box mt={5} p={3} bg="blue.50" borderRadius="md" borderLeft="4px solid" borderLeftColor="blue.400">
                                    <Box display="flex" justifyContent="space-between" mb={1}>
                                        <Text fontWeight="bold" color="blue.700" fontSize="sm">🚗 {selectedRoute.distance} km</Text>
                                        <Text fontWeight="bold" color="blue.700" fontSize="sm">⏱️ ~{selectedRoute.duration} mins</Text>
                                    </Box>
                                    <Text fontSize="xs" color="gray.600">
                                        Travel from <strong>{selectedRoute.startName}</strong> to <strong>{selectedRoute.endName}</strong>
                                    </Text>
                                </Box>
                            )}
                        </>
                    ) : (
                        <Text fontSize="sm" color="gray.500">
                            No itinerary items found. Plan your trip in <strong>AI Planning</strong> first!
                        </Text>
                    )}
                </Box>
            )}

            {/* Recommended Hotels Section */}
            {hotels.length > 0 && (
                <Box mb={8}>
                    <Text fontSize="xl" fontWeight="bold" mb={4} color="teal.700">
                        🏨 Recommended Hotels (Best Deals)
                    </Text>
                    <SimpleGrid columns={{ base: 1, sm: 2 }} spacing={6}>
                        {hotels.map((h, i) => (
                            <Box 
                                key={`hotel-${i}`} 
                                bg="white" 
                                p={4} 
                                borderRadius="xl" 
                                shadow="md" 
                                border="1px solid" 
                                borderColor="teal.50"
                                transition="all 0.2s"
                                _hover={{ transform: 'translateY(-4px)', shadow: 'lg', borderColor: 'teal.200' }}
                                cursor="pointer"
                                onClick={() => {
                                    if (h.latitude && h.longitude) {
                                        setCoordinates({ lat: parseFloat(h.latitude), lng: parseFloat(h.longitude) });
                                    }
                                }}
                            >
                                <VStack align="start" spacing={2}>
                                    <Text fontWeight="bold" fontSize="md" noOfLines={1}>{h.name}</Text>
                                    <Badge colorScheme="green" fontSize="xs">
                                        {h.price || "Check for Best Rates"} per night
                                    </Badge>
                                    <Text fontSize="xs" color="gray.500">⭐ {h.rating || "4.0"} rating</Text>
                                    
                                    <HStack spacing={2} width="100%" pt={2}>
                                        <Button 
                                            size="xs" 
                                            colorScheme="teal" 
                                            variant="outline"
                                            width="full"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                if (h.latitude && h.longitude) {
                                                    setCoordinates({ lat: parseFloat(h.latitude), lng: parseFloat(h.longitude) });
                                                }
                                            }}
                                        >
                                            View on Map
                                        </Button>
                                        {h.website && (
                                            <Button 
                                                size="xs" 
                                                colorScheme="blue" 
                                                width="full"
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    window.open(h.website, '_blank');
                                                }}
                                            >
                                                Website
                                            </Button>
                                        )}
                                    </HStack>
                                </VStack>
                            </Box>
                        ))}
                    </SimpleGrid>
                </Box>
            )}

            {/* Top Restaurants Section */}
            {restaurants.length > 0 && (
                <Box mb={8}>
                    <Text fontSize="xl" fontWeight="bold" mb={4} color="orange.700">
                        🍴 Top Restaurants & Dining 
                    </Text>
                    <SimpleGrid columns={{ base: 1, sm: 2 }} spacing={6}>
                        {restaurants.map((r, i) => (
                            <Box 
                                key={`rest-${i}`} 
                                bg="white" 
                                p={4} 
                                borderRadius="xl" 
                                shadow="md" 
                                border="1px solid" 
                                borderColor="orange.50"
                                transition="all 0.2s"
                                _hover={{ transform: 'translateY(-4px)', shadow: 'lg', borderColor: 'orange.200' }}
                                cursor="pointer"
                                onClick={() => {
                                    if (r.latitude && r.longitude) {
                                        setCoordinates({ lat: parseFloat(r.latitude), lng: parseFloat(r.longitude) });
                                    }
                                }}
                            >
                                <VStack align="start" spacing={2}>
                                    <Text fontWeight="bold" fontSize="md" noOfLines={1}>{r.name}</Text>
                                    <HStack spacing={2} wrap="wrap">
                                        <Badge colorScheme="orange" fontSize="px">
                                            {r.price_level || r.price || "$$"}
                                        </Badge>
                                        {r.cuisine && r.cuisine[0] && (
                                            <Badge colorScheme="blue" variant="outline" fontSize="px">
                                                {r.cuisine[0].name}
                                            </Badge>
                                        )}
                                    </HStack>
                                    <Text fontSize="xs" color="gray.500">⭐ {r.rating || "4.5"} rating</Text>
                                    
                                    <HStack spacing={2} width="100%" pt={2}>
                                        <Button 
                                            size="xs" 
                                            colorScheme="orange" 
                                            variant="outline"
                                            width="full"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                if (r.latitude && r.longitude) {
                                                    setCoordinates({ lat: parseFloat(r.latitude), lng: parseFloat(r.longitude) });
                                                }
                                            }}
                                        >
                                            View on Map
                                        </Button>
                                        {r.website && (
                                            <Button 
                                                size="xs" 
                                                colorScheme="blue" 
                                                width="full"
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    window.open(r.website, '_blank');
                                                }}
                                            >
                                                Website
                                            </Button>
                                        )}
                                    </HStack>
                                </VStack>
                            </Box>
                        ))}
                    </SimpleGrid>
                </Box>
            )}

            {/* Displaying the result status (Clean View) */}
            <FormControl mb={8}>
                <Text fontSize="sm" color="gray.600" fontWeight="semibold">
                    📋 Your Itinerary Locations ({itineraryMarkers.length})
                </Text>
            </FormControl>

            {/* Places Grid (Itinerary Details) */}
            <SimpleGrid columns={{ base: 1, sm: 2 }} spacing={6}>
                {places.map((place, i) => (
                    <PlaceDetails
                        key={i}
                        place={place}
                        selected={Number(childClicked) === i}
                    />
                ))}
            </SimpleGrid>
        </Box>
    );
};

export default List;
