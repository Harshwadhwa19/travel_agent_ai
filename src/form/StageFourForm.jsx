import React, { useState } from "react";
import { Box, Text, VStack, Button, Grid, GridItem, Flex } from "@chakra-ui/react";
import { INTEREST } from "../data";

const StageFourForm = ({ formData, handleChange, onPlaceSelect: onSubmit }) => {
  const [selectedInterests, setSelectedInterests] = useState(formData.interests || []);

  const toggleInterest = (interest) => {
    let updatedInterests;

    if (selectedInterests.includes(interest)) {
      updatedInterests = selectedInterests.filter((item) => item !== interest);
    } else {
      updatedInterests = [...selectedInterests, interest];
    }

    setSelectedInterests(updatedInterests);

    handleChange({ target: { name: "interests", value: updatedInterests } });
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      p={8}
      maxW="600px"
      mx="auto"
      bg="white"
      borderRadius="xl"
      boxShadow="2xl"
    >
      <Text
        as="h1"
        fontSize="3xl"
        fontWeight="extrabold"
        textAlign="center"
        mb={6}
      >
        What Are You Interested In?
      </Text>
      <Text fontSize="lg" color="gray.600" textAlign="center" mb={8}>
        Select the options that match your preferences.
      </Text>

      <Grid templateColumns="repeat(2, 1fr)" gap={4} width="100%">
        {INTEREST.map((interest, index) => (
          <GridItem key={index}>
            <Button
              onClick={() => toggleInterest(interest)}
              variant="solid"
              size="lg"
              width="100%"
              bg={selectedInterests.includes(interest) ? "black" : "gray.100"}
              color={
                selectedInterests.includes(interest) ? "white" : "gray.700"
              }
              _hover={{ bg: "black", color: "white" }}
              borderRadius="md"
              boxShadow="md"
            >
              <Text fontSize="lg" fontWeight="medium">
                {interest}
              </Text>
            </Button>
          </GridItem>
        ))}
      </Grid>
      
      <Flex justify="center" mt={10} width="100%">
        <Button
          colorScheme="teal"
          size="lg"
          onClick={onSubmit}
          isDisabled={selectedInterests.length === 0}
          width="100%"
        >
          Create My Itinerary
        </Button>
      </Flex>
    </Box>
  );
};

export default StageFourForm;
