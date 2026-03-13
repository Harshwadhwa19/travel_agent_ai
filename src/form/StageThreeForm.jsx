import React from "react";
import { Box, Text, Flex } from "@chakra-ui/react";
import { TRIPTYPE } from "../data";

const StageThreeForm = ({ formData, onTripSelect, handleChange }) => {
  const onTrip = (trip) => {
    onTripSelect();
    handleChange({
      target: { name: "trip_Type", value: trip.trip_type },
    });
  };
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      p={4}
      maxW="1200px"
      mx="auto"
    >
      <Box mb={6}>
        <Text as="h1" fontSize="2xl" fontWeight="bold" mb={2}>
          What kind of trip are you planning?
        </Text>
        <Text as="h6" fontSize="md" color="gray.600">
          Select One
        </Text>
      </Box>
      <Flex wrap="wrap" gap={4} justifyContent="space-between" width="100%">
        {TRIPTYPE.map((trip, index) => (
          <Box
            key={index}
            p={4}
            borderRadius="md"
            boxShadow="md"
            bg="white"
            display="flex"
            flexDirection="column"
            alignItems="center"
            textAlign="center"
            width="calc(25% - 16px)"
            cursor="pointer"
            _hover={{
              boxShadow: "lg",
              transform: "scale(1.05)",
              transition: "transform 0.2s, box-shadow 0.2s",
            }}
            onClick={() => onTrip(trip)} // Call onTripSelect when a trip is selected
          >
            <Box mb={2} fontSize="2xl">
              {trip.icon}
            </Box>
            <Text fontSize="md" fontWeight="bold">
              {trip.trip_type}
            </Text>
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default StageThreeForm;
