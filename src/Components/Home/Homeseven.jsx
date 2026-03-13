import React, { useState, useEffect } from "react";
import { Box, Image, Text, Spinner } from "@chakra-ui/react";
import apiClient from "../../api/apiClient";

function Homeseven() {
  const [rentals, setRentals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRentals = async () => {
      try {
        const response = await apiClient.get('/discovery/rentals');
        setRentals(response.data);
      } catch (error) {
        console.error("Error fetching rentals", error);
      } finally {
        setLoading(false);
      }
    };
    fetchRentals();
  }, []);

  if (loading) return <Box textAlign="center" py="20px"><Spinner /></Box>;

  return (
    <Box w="85%" m="auto" textAlign="left" mt="50px" mb="50px" marginBottom="100px">
      <Text fontWeight="700" fontSize='3xl'>Home Rentals Near You</Text>
      <Box display="grid" justifyContent="space-between" gridTemplateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" }} gap="15px" mt="25px">
        <Box>
          <Text fontWeight="700" fontSize='2xl'>We think you'd enjoy these homes for a quick trip out of town.</Text>
        </Box>
        {rentals.map((el) => (
          <Box key={el.id} borderRadius="lg" overflow="hidden" boxShadow="md" _hover={{ transform: "scale(1.03)", transition: "0.3s" }}>
            <Image h="200px" w="100%" src={el.image} alt={el.title} objectFit="cover" />
            <Text fontWeight="700" fontSize='lg' mt="2">{el.title}</Text>
            <Text fontWeight="500" fontSize='md' color="gray.600">{el.count}</Text>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default Homeseven;