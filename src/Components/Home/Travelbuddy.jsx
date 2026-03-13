import React from "react";
import { Box, Text, Button, VStack, Heading, HStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function TravelBuddyMatching() {
  const navigate = useNavigate();

  return (
    <Box
      w="85%"
      m="auto"
      p="60px"
      mt="40px"
      bgGradient="linear(to-r, teal.500, blue.500)"
      borderRadius="24px"
      color="white"
      marginBottom="100px"
      boxShadow="2xl"
      textAlign="center"
      position="relative"
      overflow="hidden"
    >
      <Box 
        position="absolute" 
        top="-20%" 
        right="-10%" 
        w="400px" 
        h="400px" 
        bg="whiteAlpha.100" 
        borderRadius="full" 
      />
      
      <VStack spacing={6}>
        <Badge colorScheme="whiteAlpha" p={2} borderRadius="full">NEW FEATURE: SMART MATCHING</Badge>
        <Heading size="2xl" fontWeight="900">Solo Traveler? Don't Go Alone! 🤝</Heading>
        <Text fontSize="xl" maxW="700px">
          Our AI now detects other solo explorers heading to the same destinations as you. 
          Connect, chat, and plan your adventures together.
        </Text>
        
        <HStack spacing={4}>
          <Button 
            size="lg" 
            bg="white" 
            color="teal.600" 
            px={10} 
            rounded="full"
            _hover={{ bg: 'gray.100', transform: 'scale(1.05)' }}
            onClick={() => navigate('/find-buddy')}
          >
            Find My Travel Buddy
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            color="white" 
            borderColor="white" 
            px={10} 
            rounded="full"
            _hover={{ bg: 'whiteAlpha.200' }}
          >
            How it Works
          </Button>
        </HStack>
      </VStack>
    </Box>
  );
}

const Badge = ({ children, colorScheme, ...props }) => (
    <Box 
        bg={`${colorScheme}.200`} 
        color={`${colorScheme}.800`} 
        fontSize="xs" 
        fontWeight="bold" 
        px={3} 
        py={1} 
        borderRadius="full" 
        textTransform="uppercase"
        display="inline-block"
        {...props}
    >
        {children}
    </Box>
);

export default TravelBuddyMatching;
