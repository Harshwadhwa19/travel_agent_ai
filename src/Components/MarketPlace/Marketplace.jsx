import React, { useState, useEffect } from "react";
import { Box, Image, Text, Grid, Button, Flex, Select, Spinner } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import apiClient from "../../api/apiClient";

const Marketplace = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await apiClient.get('/discovery/products');
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  if (loading) return <Flex justify="center" p="100px"><Spinner size="xl" /></Flex>;

  return (
    <Box bg="#FFF7E1" p="60px 0" minH="100vh">
      <Box w="85%" m="auto">
        <Text fontWeight="700" fontSize="4xl" mb="10px" color="black">
          Full Marketplace
        </Text>
        <Text fontSize="lg" color="black" mb="20px">
          Browse through our collection of local treasures.
        </Text>

        <Select
          placeholder="Filter by Category"
          value={selectedCategory}
          onChange={handleCategoryChange}
          mb="40px"
          w="200px"
        >
          <option value="All">All</option>
          <option value="Handicrafts">Handicrafts</option>
          <option value="Local Food Products">Local Food Products</option>
        </Select>

        <Grid templateColumns="repeat(3, 1fr)" gap="30px">
          {filteredProducts.map((product) => (
            <Box
              key={product.id}
              bg="white"
              borderRadius="15px"
              boxShadow="lg"
              overflow="hidden"
              position="relative"
              _hover={{ transform: "scale(1.05)", transition: "all 0.3s" }}
              display="flex"
              flexDirection="column"
              justifyContent="space-between"
            >
              <Image
                src={product.image || "https://images.unsplash.com/photo-1544642899-f0d6e5f6ed6a?w=400"}
                alt={product.name}
                objectFit="cover"
                w="100%"
                h="200px"
              />
              <Box p="20px" textAlign="left" flex="1">
                <Text fontWeight="600" fontSize="2xl" mb="5px" color="black">
                  {product.name}
                </Text>
                <Text fontWeight="700" fontSize="lg" mb="10px" color="teal.800">
                  {product.price}
                </Text>
                <Button
                  mt="auto"
                  fontWeight="700"
                  color="white"
                  bg="black"
                  rounded="25px"
                  p="23px 23px"
                  as={Link}
                  to={`/marketplace/${product.id}`}
                >
                  View Details
                </Button>
              </Box>
            </Box>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Marketplace;
