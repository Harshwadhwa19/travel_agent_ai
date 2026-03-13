// import React from "react";
// import { Box, Image, Text, Grid, Button, Flex, Icon } from "@chakra-ui/react";
// import { StarIcon } from "@chakra-ui/icons";
// import { Link } from "react-router-dom";
// import jaipur from "../../assets/Jaipur.png";
// import madhubani from "../../assets/Madhubani (1).png";
// import pashmina from "../../assets/Pashmina.png";

// export const productData = [
//   {
//     id: 1,
//     name: "Madhubani Painting",
//     image: madhubani, // Use imported image
//     price: "₹2,500",
//     description: "Traditional Madhubani painting by artisans from Bihar.",
//     category: "Handicrafts",
//     rating: 4.8,
//   },
//   {
//     id: 2,
//     name: "Pashmina Shawl",
//     image: pashmina, // Use imported image
//     price: "₹5,000",
//     description: "Authentic Kashmiri Pashmina shawl.",
//     category: "Handicrafts",
//     rating: 4.5,
//   },
//   {
//     id: 4,
//     name: "Jaipur Blue Pottery Vase",
//     image: jaipur, // Use imported image
//     price: "₹1,200",
//     description:
//       "Handcrafted Blue Pottery vase from Jaipur, featuring intricate floral designs.",
//     category: "Handicrafts",
//     rating: 4.6,
//   },
//   // Add more products as needed
// ];

// const SouvenirMarketplace = () => {
//   return (
//     <Box bg="#FFF7E1" p="60px 0" mt="60px" marginBottom="100px">
//       <Box w="85%" m="auto" textAlign="center">
//         <Text fontWeight="700" fontSize="4xl" mb="10px" color="black">
//           Shop Local Treasures
//         </Text>
//         <Text fontSize="lg" color="black" mb="40px">
//           Discover unique souvenirs and support local artisans.
//         </Text>

//         <Grid templateColumns="repeat(3, 1fr)" gap="30px">
//           {productData.map((product) => (
//             <Box
//               key={product.id}
//               bg="white"
//               borderRadius="15px"
//               boxShadow="lg"
//               overflow="hidden"
//               position="relative"
//               _hover={{ transform: "scale(1.05)", transition: "all 0.3s" }}
//               height="400px" // Adjust height here
//             >
//               <Image
//                 src={product.image}
//                 alt={product.name}
//                 objectFit="cover"
//                 w="100%"
//                 h="250px" // Adjust height here
//               />
//               <Box p="20px" textAlign="left" height="calc(100% - 250px)" // Adjust padding here
//                 display="flex"
//                 flexDirection="column"
//                 justifyContent="space-between"
//               >
//                 <Text fontWeight="600" fontSize="2xl" mb="5px" color="black">
//                   {product.name}
//                 </Text>
//                 <Flex align="center" mb="10px">
//                   <Icon as={StarIcon} color="yellow.400" />
//                   <Text ml="2" fontSize="sm" color="gray.600">
//                     {product.rating} / 5
//                   </Text>
//                 </Flex>
//                 <Text fontSize="md" color="gray.600" mb="10px">
//                   {product.description}
//                 </Text>
//                 <Text fontWeight="700" fontSize="lg" mb="10px" color="teal.800">
//                   {product.price}
//                 </Text>
//                 <Button
//                   mt="auto"
//                   fontWeight="700"
//                   color="white"
//                   bg="black"
//                   rounded="25px"
//                   p="23px 23px"
//                   as={Link}
//                   to={`/marketplace/${product.id}`}
//                 >
//                   View Details
//                 </Button>
//               </Box>
//             </Box>
//           ))}
//         </Grid>
//         <Button
//           mt="40px"
//           fontWeight="700"
//           color="white"
//           bg="black"
//           rounded="25px"
//           p="23px 23px"
//           as={Link}
//           to="/marketplace"
//         >
//           Browse Marketplace
//         </Button>
//       </Box>
//     </Box>
//   );
// };

// export default SouvenirMarketplace;
import React, { useState, useEffect } from "react";
import { Box, Image, Text, Grid, Button, Flex, Icon, Spinner } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import apiClient from "../../api/apiClient";

const SouvenirMarketplace = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

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

  if (loading) return <Flex justify="center" p="100px"><Spinner size="xl" /></Flex>;

  return (
    <Box bg="#FFF7E1" p="60px 0" mt="60px" marginBottom="100px">
      <Box w="85%" m="auto" textAlign="center">
        <Text fontWeight="700" fontSize="4xl" mb="10px" color="black">
          Shop Local Treasures
        </Text>
        <Text fontSize="lg" color="black" mb="40px">
          Discover unique souvenirs and support local artisans.
        </Text>

        <Grid templateColumns="repeat(3, 1fr)" gap="30px">
          {products.map((product) => (
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
                h="250px"
              />
              <Box p="20px" textAlign="left" flex="1">
                <Text fontWeight="600" fontSize="2xl" mb="5px" color="black">
                  {product.name}
                </Text>
                <Flex align="center" mb="10px">
                  <Icon as={StarIcon} color="green.400" />
                  <Text ml="2" fontSize="sm" color="gray.600">
                    {product.rating} / 5
                  </Text>
                </Flex>
                <Text fontSize="md" color="gray.600" mb="10px" noOfLines={2}>
                  {product.description}
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
        <Button
          mt="40px"
          fontWeight="700"
          color="white"
          bg="black"
          rounded="25px"
          p="23px 23px"
          as={Link}
          to="/marketplace"
        >
          Browse Marketplace
        </Button>
      </Box>
    </Box>
  );
};

export default SouvenirMarketplace;
