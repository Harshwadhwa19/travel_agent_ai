import React from "react";
import { Text, Box, Button, Image, Grid, Heading, Badge, VStack } from "@chakra-ui/react";

const tours = [
    {
        id: 1,
        title: "Private Goa Sightseeing Tour",
        price: "₹3,500",
        rating: "4.9",
        image: "https://images.unsplash.com/photo-1515238152791-8216bfdf89a7?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 2,
        title: "Grand Island Scuba Diving",
        price: "₹2,800",
        rating: "4.8",
        image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 3,
        title: "Dudhsagar Falls Jeep Safari",
        price: "₹4,200",
        rating: "4.7",
        image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 4,
        title: "Dinner Cruise on Mandovi River",
        price: "₹1,500",
        rating: "4.6",
        image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=800&q=80"
    }
];

function Homethree(){
    return (
        <Box w="85%" m="auto" mt="80px" mb="100px">
            <Box display="flex" justifyContent="space-between" bg="#FAF1ED" borderRadius="2xl" overflow="hidden" mb="40px">
                <Box textAlign="left" p="40px">
                    <Heading fontWeight="800" fontSize='4xl' mb="2">Get out there</Heading>
                    <Text fontWeight="400" fontSize='lg' color="gray.600">Best of the Best tours, attractions & activities you won't want to miss.</Text>
                    <Button mt="30px" fontWeight="700" color="white" bg="black" rounded="full" px="8" py="6" _hover={{ bg: "gray.800" }}>Explore All</Button>
                </Box>
                <Image w="45%" h="300px" objectFit="cover" src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/f7/1d/4d/caption.jpg?w=1000&h=-1&s=1" alt="hero" />
            </Box>

            <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" }} gap={8}>
                {tours.map(tour => (
                    <Box key={tour.id} borderRadius="xl" overflow="hidden" shadow="md" transition="all 0.3s" _hover={{ transform: "translateY(-5px)", shadow: "xl" }} bg="white">
                        <Image src={tour.image} h="200px" w="100%" objectFit="cover" alt={tour.title} />
                        <VStack p="5" align="start" spacing={2}>
                            <Badge colorScheme="teal" variant="subtle" borderRadius="full" px="2">Top Rated</Badge>
                            <Heading size="sm" noOfLines={2}>{tour.title}</Heading>
                            <Box display="flex" alignItems="center" w="100%" justifyContent="space-between">
                                <Text fontWeight="700" color="teal.600">{tour.price}</Text>
                                <Text fontSize="sm" color="gray.500">⭐ {tour.rating}</Text>
                            </Box>
                        </VStack>
                    </Box>
                ))}
            </Grid>
        </Box>
    );
}

export default Homethree;