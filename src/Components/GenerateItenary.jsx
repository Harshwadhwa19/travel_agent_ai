import React, { useState } from "react";
import {
  Box,
  Flex,
  Text,
  Collapse,
  VStack,
  IconButton,
} from "@chakra-ui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import { useLocation } from "react-router-dom";
// Sample itinerary data
// let itineraryData = [
//   {
//     title: "Day 1: Arrival and Old Delhi",
//     activities: [
//       "Morning: Arrive at Indira Gandhi International Airport. Take a taxi or cab to your hotel.",
//       "Afternoon: Explore the bustling Old Delhi district. Visit the iconic Jama Masjid.",
//       "Evening: Enjoy a delicious dinner at a traditional Indian restaurant in Old Delhi.",
//     ],
//   },
//   {
//     title: "Day 2: New Delhi and Raj Ghat",
//     activities: [
//       "Morning: Visit the Red Fort, a UNESCO World Heritage Site.",
//       "Afternoon: Head to Raj Ghat, the memorial site of Mahatma Gandhi.",
//       "Evening: Enjoy a romantic dinner at a rooftop restaurant in New Delhi.",
//     ],
//   },
//   {
//     title: "Day 3: Humayun's Tomb and Lotus Temple",
//     activities: [
//       "Morning: Visit Humayun's Tomb, another UNESCO World Heritage Site.",
//       "Afternoon: Visit the Lotus Temple, a stunning Bahai House of Worship.",
//       "Evening: Indulge in a street food tour, sampling local delicacies.",
//     ],
//   },
//   {
//     title: "Day 4: Akshardham Temple and Departure",
//     activities: [
//       "Morning: Visit the Akshardham Temple, a magnificent Hindu temple complex.",
//       "Afternoon: Explore the nearby National Rail Museum.",
//       "Evening: Head to the airport for your return flight.",
//     ],
//   },
// ];
function parseItinerary(itineraryString) {
  try {
    // The backend now returns clean JSON: { days: [ { day_number: 1, activities: [...] } ] }
    const parsed = typeof itineraryString === "string" ? JSON.parse(itineraryString) : itineraryString;
    
    if (!parsed || !parsed.days) {
      console.warn("No 'days' array found in JSON", parsed);
      return [];
    }

    // Convert the Mistral JSON format to the format expected by the component UI
    return parsed.days.map(day => {
      // Format activities into simple strings if they are objects
      const activityStrings = day.activities.map(act => {
        if (typeof act === 'string') return act;
        const timeStr = act.time ? `${act.time} - ` : '';
        const locStr = act.location ? `${act.location}: ` : '';
        return `${timeStr}${locStr}${act.description || ''}`;
      });

      return {
        title: `Day ${day.day_number}`,
        activities: activityStrings,
      };
    });
  } catch (error) {
    console.error("Failed to parse itinerary JSON:", error);
    return [];
  }
}

const Itinerary = ({ data }) => {
  const [openIndex, setOpenIndex] = useState(null);
  const location = useLocation();
  
  // plannedItinerary is passed via state from TripPlannerForm
  let { plannedItinerary } = location.state || {};
  
  let itineraryData = parseItinerary(plannedItinerary);
  console.log("Parsed Itinerary Data:", itineraryData);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Box maxW="800px" mx="auto" p={5}>
      <VStack spacing={5}>
        {itineraryData.map((item, index) => (
          <Box
            key={index}
            border="1px solid #ddd"
            borderRadius="md"
            overflow="hidden"
            boxShadow="md"
            bg="white"
          >
            <Flex
              justify="space-between"
              align="center"
              p={4}
              cursor="pointer"
              onClick={() => handleToggle(index)}
              _hover={{ bg: "gray.100" }}
            >
              <Text fontSize="lg" fontWeight="bold" color="black">
                {item.title}
              </Text>
              <IconButton
                icon={
                  openIndex === index ? <ChevronUpIcon /> : <ChevronDownIcon />
                }
                aria-label="Toggle Details"
                variant="outline"
                size="sm"
                borderColor="gray.300"
                marginLeft={20}
                _hover={{ bg: "gray.200" }}
              />
            </Flex>
            <Collapse in={openIndex === index}>
              <Box p={4}>
                {item.activities.map((activity, idx) => (
                  <Text key={idx} fontSize="m" color="gray.700" mb={2}>
                    {activity}
                  </Text>
                ))}
              </Box>
            </Collapse>
          </Box>
        ))}
      </VStack>
    </Box>
  );
};

export default Itinerary;
