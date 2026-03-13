import React from "react";
import {
  Box,
  InputGroup,
  InputLeftElement,
  Input,
  Icon,
  Text,
  Image,
  Flex,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { WHERETOGO } from "../data";

const StageOneForm = ({ formData, handleChange, onPlaceSelect }) => {
  const handlePlaceClick = (place) => {
    // Call the callback function to move to the next step
    handleChange({ target: { name: "selectedPlace", value: place.name } });
    onPlaceSelect();
  };

  return (
    <Box maxW="600px" mx="auto" display="flex" flexDirection="column" mt={10}>
      <Box mb={6}>
        <Text as="h1" fontSize="2xl" fontWeight="bold" mb={2}>
          Where do you want to go?
        </Text>
        <Text as="p" fontSize="md" color="gray.600">
          Search or get inspired by popular destinations.
        </Text>
      </Box>
      <Box mb={6}>
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <Icon as={SearchIcon} color="gray.300" />
          </InputLeftElement>
          <Input
            type="text"
            placeholder="Search by City or Town"
            value={formData.selectedPlace || ""}
            onChange={(e) =>
              handleChange({
                target: { name: "selectedPlace", value: e.target.value },
              })
            }
          />
        </InputGroup>
      </Box>
      <Box
        display="flex"
        flexWrap="wrap"
        gap={4}
        justifyContent="space-between"
      >
        {WHERETOGO.filter((place) =>
          place.name
            .toLowerCase()
            .includes((formData.selectedPlace || "").toLowerCase())
        ).map((place, index) => (
          <Flex
            cursor="pointer"
            key={index}
            direction="row"
            alignItems="center"
            p={4}
            borderRadius="md"
            boxShadow="md"
            bg="white"
            width="calc(50% - 8px)" // Adjust the width to fit two cards per row
            transition="transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out"
            _hover={{
              transform: "scale(1.05)",
              boxShadow: "lg",
            }}
            onClick={() => handlePlaceClick(place)}
          >
            <Image
              src={place.image}
              alt={place.name}
              boxSize="60px"
              borderRadius="md"
            />
            <Box ml={4} flex="1">
              <Text as="h1" fontSize="md" fontWeight="bold">
                {place.name}
              </Text>
              <Text as="h3" fontSize="sm" color="gray.500">
                {place.location}
              </Text>
            </Box>
          </Flex>
        ))}
        {WHERETOGO.filter((place) =>
          place.name
            .toLowerCase()
            .includes((formData.selectedPlace || "").toLowerCase())
        ).length === 0 && (
          <Text textAlign="center" width="100%" mt={4} color="gray.500">
            No destinations found.
          </Text>
        )}
      </Box>
    </Box>
  );
};

export default StageOneForm;
