import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box, Image, Text, Button, Flex, Spinner } from "@chakra-ui/react";
import apiClient from "../../api/apiClient";
import AddToCart from "./AddToCart";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await apiClient.get('/discovery/products');
        const foundProduct = response.data.find(p => p.id === parseInt(id));
        setProduct(foundProduct);
      } catch (error) {
        console.error("Error fetching product", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  if (loading) return <Flex justify="center" p="100px"><Spinner size="xl" /></Flex>;
  if (!product) return <Text textAlign="center" p="40px">Product not found</Text>;

  return (
    <Box bg="#FFF7E1" p="60px 0" minH="100vh">
      <Box
        w="70%"
        m="auto"
        bg="white"
        p="40px"
        borderRadius="15px"
        boxShadow="lg"
      >
        <Flex direction={{ base: "column", md: "row" }} align="center">
          <Image
            src={product.image || "https://images.unsplash.com/photo-1544642899-f0d6e5f6ed6a?w=600"}
            alt={product.name}
            objectFit="cover"
            w={{ base: "100%", md: "50%" }}
            h="400px"
            mr={{ md: "40px" }}
            mb={{ base: "20px", md: "0" }}
            borderRadius="15px"
          />
          <Box textAlign="left">
            <Text fontWeight="700" fontSize="4xl" mb="10px" color="black">
              {product.name}
            </Text>
            <Text fontSize="lg" color="gray.600" mb="20px">
              {product.description}
            </Text>
            <Text fontWeight="700" fontSize="2xl" mb="20px" color="teal.800">
              {product.price}
            </Text>
            <AddToCart productId={product.id} />
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default ProductDetail;
