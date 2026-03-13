import React from "react";
import { Button, useToast } from "@chakra-ui/react";

const AddToCart = ({ productId }) => {
  const toast = useToast();

  const handleAddToCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const existingIndex = cart.findIndex(item => item.id === productId);
    
    if (existingIndex > -1) {
      cart[existingIndex].quantity += 1;
    } else {
      cart.push({ id: productId, quantity: 1 });
    }
    
    localStorage.setItem('cart', JSON.stringify(cart));
    toast({
        title: "Added to cart",
        status: "success",
        duration: 2000,
        isClosable: true,
    });
  };

  return (
    <Button
      onClick={handleAddToCart}
      fontWeight="700"
      color="white"
      bg="black"
      rounded="25px"
      p="23px 23px"
      _hover={{ transform: "translateY(-2px)", boxShadow: "lg" }}
    >
      Add to Cart
    </Button>
  );
};

export default AddToCart;
