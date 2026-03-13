import React, { useState, useEffect } from "react";
import { Box, Image, Text, Spinner } from "@chakra-ui/react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Link } from "react-router-dom";
import apiClient from "../../api/apiClient";

function Hometwo() {
  const [experiences, setExperiences] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchExperiences = async () => {
      try {
        const response = await apiClient.get('/discovery/experiences');
        setExperiences(response.data);
      } catch (error) {
        console.error("Error fetching experiences", error);
      } finally {
        setLoading(false);
      }
    };
    fetchExperiences();
  }, []);

  if (loading) return <Box textAlign="center" py="40px"><Spinner /></Box>;

  return (
    <Box w="85%" m="auto" textAlign="left" mt="40px" marginBottom="100px">
      <Text fontWeight="600" fontSize="2xl">
        Explore Top Destinations
      </Text>
      <Text fontSize="md" color="gray.600">
        Discover the best things to do at your chosen destination.
      </Text>
      <Box
        display="grid"
        gridTemplateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" }}
        gap="20px"
        mt="20px"
      >
        {experiences.map((el) => {
            return (
              <Link
                key={el.id}
                to={`/details/${el.id}`}
                style={{ textDecoration: 'none' }}
              >
                <Box
                  bg="white"
                  borderRadius="lg"
                  overflow="hidden"
                  boxShadow="md"
                  position="relative"
                  _hover={{
                    boxShadow: "xl",
                    transform: "scale(1.05)",
                    transition: "0.3s ease-in-out",
                  }}
                  height="100%"
                >
                  <Image
                    src={el.image || "https://images.unsplash.com/photo-1512343802231-9162133823cd?w=400"}
                    alt={el.title}
                    w="100%"
                    h="200px"
                    objectFit="cover"
                  />
                  <Box p="10px">
                    <Text fontWeight="600" fontSize="lg" mb="2" noOfLines={2}>
                      {el.title}
                    </Text>
                    <Box display="flex" alignItems="center" mb="2">
                      <Box
                        display="flex"
                        gap="2px"
                        alignItems="center"
                        color="green.400"
                      >
                        {[...Array(5)].map((_, i) => (
                          <Box
                            key={i}
                            boxSize="12px"
                            bg={i < 4 ? "green.400" : "gray.300"}
                            rounded="50%"
                          />
                        ))}
                      </Box>
                      <Text fontSize="sm" ml="5px">
                        {el.reviews} reviews
                      </Text>
                    </Box>
                    <Text fontWeight="500" fontSize="md" color="gray.700">
                      {el.price}
                    </Text>
                  </Box>
                  <Box
                    p="8px"
                    bg="white"
                    borderRadius="full"
                    boxShadow="md"
                    position="absolute"
                    top="10px"
                    right="10px"
                    cursor="pointer"
                  >
                    <FavoriteBorderIcon />
                  </Box>
                </Box>
              </Link>
            );
          })}
      </Box>
    </Box>
  );
}

export default Hometwo;
