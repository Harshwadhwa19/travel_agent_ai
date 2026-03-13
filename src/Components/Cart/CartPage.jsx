import React, { useState, useEffect } from "react";
import { Box, Button, Image, Text, Flex, Divider, Spinner } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import apiClient from "../../api/apiClient";

function CartPage () {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCartData = async () => {
      try {
        const storedCart = JSON.parse(localStorage.getItem('cart') || '[]');
        if (storedCart.length === 0) {
          setCartItems([]);
          setLoading(false);
          return;
        }

        const response = await apiClient.get('/discovery/products');
        const allProducts = response.data;

        const itemsWithDetails = storedCart.map((cartItem) => {
          const product = allProducts.find((p) => p.id === cartItem.id);
          return product ? { ...product, quantity: cartItem.quantity } : null;
        }).filter(item => item !== null);

        setCartItems(itemsWithDetails);
      } catch (error) {
        console.error("Error fetching cart data", error);
      } finally {
        setLoading(false);
      }
    };
    fetchCartData();
  }, []);

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => {
        const price = parseFloat(item.price.replace('₹', '').replace(',', ''));
        return total + (isNaN(price) ? 0 : price) * item.quantity;
      },
      0
    ).toFixed(2);
  };

  const removeFromCart = (id) => {
    const updatedCart = cartItems.filter(item => item.id !== id);
    setCartItems(updatedCart);
    const storedCart = JSON.parse(localStorage.getItem('cart') || '[]');
    const newStoredCart = storedCart.filter(item => item.id !== id);
    localStorage.setItem('cart', JSON.stringify(newStoredCart));
  };

  if (loading) return <Flex justify="center" p="100px"><Spinner size="xl" /></Flex>;

  return (
    <Box bg="#FFF7E1" p="60px 0" minH="100vh">
      <Box w="85%" m="auto">
        <Text fontWeight="700" fontSize="4xl" mb="20px" color="black">
          Your Cart
        </Text>

        {cartItems.length === 0 ? (
          <Box textAlign="center" py="40px">
            <Text fontSize="lg" color="black" mb="20px">
              Your cart is empty.
            </Text>
            <Button as={Link} to="/marketplace" colorScheme="teal">Go Shopping</Button>
          </Box>
        ) : (
          <Flex direction="column" gap="20px">
            {cartItems.map((item) => (
              <Box
                key={item.id}
                bg="white"
                borderRadius="15px"
                boxShadow="lg"
                p="20px"
              >
                <Flex align="center" gap="20px">
                  <Image
                    src={item.image || "https://images.unsplash.com/photo-1544642899-f0d6e5f6ed6a?w=120"}
                    alt={item.name}
                    objectFit="cover"
                    w="120px"
                    h="120px"
                    borderRadius="lg"
                  />
                  <Box textAlign="left" flex="1">
                    <Text fontWeight="600" fontSize="xl" mb="5px" color="black">
                      {item.name}
                    </Text>
                    <Text fontWeight="700" fontSize="md" color="teal.800">
                      Quantity: {item.quantity}
                    </Text>
                    <Text fontWeight="700" fontSize="md" color="teal.800">
                      Price: {item.price} x {item.quantity}
                    </Text>
                  </Box>
                  <Button colorScheme="red" variant="ghost" onClick={() => removeFromCart(item.id)}>Remove</Button>
                </Flex>
                <Divider my="15px" />
                <Flex justify="space-between" align="center">
                  <Text fontWeight="700" fontSize="md" color="black">
                    Total:
                  </Text>
                  <Text fontWeight="700" fontSize="md" color="teal.800">
                    ₹{(parseFloat(item.price.replace('₹', '').replace(',', '')) * item.quantity).toFixed(2)}
                  </Text>
                </Flex>
              </Box>
            ))}
          </Flex>
        )}

        {cartItems.length > 0 && (
          <Box mt="40px">
            <Flex direction="column" align="flex-end">
              <Flex justify="flex-end" align="center" mb="15px" w="full">
                <Text fontWeight="700" fontSize="2xl" color="black" mr="10px">
                  Total:
                </Text>
                <Text fontWeight="700" fontSize="2xl" color="teal.800">
                  ₹{calculateTotal()}
                </Text>
              </Flex>
              <Flex justify="space-between" align="center" w="full">
                <Button
                  fontWeight="700"
                  color="black"
                  bg="gray.200"
                  rounded="25px"
                  p="15px 30px"
                  as={Link}
                  to="/marketplace"
                  _hover={{ bg: "gray.300" }}
                >
                  Continue Shopping
                </Button>
                <Button
                  fontWeight="700"
                  color="white"
                  bg="black"
                  rounded="25px"
                  p="15px 30px"
                  as={Link}
                  to="/checkout"
                >
                  Proceed to Checkout
                </Button>
              </Flex>
            </Flex>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default CartPage;
