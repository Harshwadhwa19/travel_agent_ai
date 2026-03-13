import React, { useState, useEffect } from "react";
import { Box, Image, Text, Spinner } from "@chakra-ui/react";
import apiClient from "../../api/apiClient";

function Homesix() {
  const [beaches, setBeaches] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBeaches = async () => {
      try {
        const response = await apiClient.get('/discovery/beaches');
        setBeaches(response.data);
      } catch (error) {
        console.error("Error fetching beaches", error);
      } finally {
        setLoading(false);
      }
    };
    fetchBeaches();
  }, []);

  if (loading) return <Box textAlign="center" py="20px"><Spinner /></Box>;

  return (
    <Box w="85%" m="auto" pt="15px" textAlign="left" mt="40px" marginBottom="100px">
      <Text fontWeight="700" fontSize='2xl'>Top destinations for beach lovers</Text>
      <Text fontSize='md' color="gray.600">Recommended based on your activity</Text>
      <Box display="grid" justifyContent="space-between" gridTemplateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" }} gap="15px" mt="15px">
        {beaches.map((el) => (
          <Box key={el.id} bg="white" pb="30px" position="relative" textAlign="left" borderRadius="lg" overflow="hidden" boxShadow="md" _hover={{ transform: "scale(1.03)", transition: "0.3s" }}>
            <Image filter='auto' brightness='65%' src={el.image} alt={el.title} w="100%" h="200px" objectFit="cover" />
            <Text left="10px" color="white" position="absolute" bottom="30px" fontWeight="900" fontSize='3xl' px="10px">{el.title}</Text>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default Homesix;