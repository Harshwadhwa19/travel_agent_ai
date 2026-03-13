import React, { useState } from "react";
import {
  Box,
  Text,
  Input,
  Button,
  Grid,
  GridItem,
  IconButton,
  useToast,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { fetchSafetyData } from "../../api/safetyAPI";

function SafetyRating() {
  const [searchTerm, setSearchTerm] = useState("");
  const [safetyData, setSafetyData] = useState(null);
  const [loading, setLoading] = useState(false);
  const toast = useToast();

  // Function to determine safety rating based on number of crimes
  const determineSafetyRating = (crimes) => {
    if (crimes < 500) return "Very High";
    if (crimes >= 500 && crimes < 1000) return "High";
    if (crimes >= 1000 && crimes < 3000) return "Moderately High";
    if (crimes >= 3000 && crimes < 5000) return "Moderate";
    if (crimes >= 5000 && crimes < 6500) return "Moderately Low";
    if (crimes >= 6500 && crimes < 8000) return "Low";
    if (crimes >= 8000 && crimes < 10000) return "Very Low";
    return "Extremely Low";
  };

  // Static weather data based on safety rating
  const weatherData = {
    "Very High": "Sunny",
    "High": "Partly Cloudy",
    "Moderately High": "Cloudy",
    "Moderate": "Overcast",
    "Moderately Low": "Light Rain",
    "Low": "Rainy",
    "Very Low": "Stormy",
    "Extremely Low": "Severe Storm",
  };

  // Static recommendations based on weather conditions
  const weatherRecommendations = {
    "Sunny": "Perfect weather for outdoor activities. Carry a hat and sunscreen.",
    "Partly Cloudy": "Good weather for most activities. Wear sunglasses and stay hydrated.",
    "Cloudy": "Mild weather. Consider carrying an umbrella just in case.",
    "Overcast": "Cool and cloudy. Dress warmly and carry an umbrella.",
    "Light Rain": "Bring a raincoat and umbrella. Roads might be slippery.",
    "Rainy": "Heavy rain expected. Stay indoors if possible. Carry an umbrella if you need to go out.",
    "Stormy": "Severe weather conditions. Avoid going out if possible.",
    "Severe Storm": "Extreme weather alert. Stay indoors and stay safe.",
  };

  // Updated disaster data based on safety rating
  const disasterData = {
    "Very High": "No Disaster Risk",
    "High": "No Disaster Risk",
    "Moderately High": "Minor Disaster Risk",
    "Moderate": "Minor Disaster Risk",
    "Moderately Low": "Minor Disaster Risk",
    "Low": "Moderate Disaster Risk",
    "Very Low": "Moderate Disaster Risk",
    "Extremely Low": "Moderate Disaster Risk",
  };

  // Disaster types corresponding to each risk level
  const disasterRecommendations = {
    "No Disaster Risk": "No significant natural disasters expected.",
    "Minor Disaster Risk": "Possible minor floods or minor weather-related events.",
    "Moderate Disaster Risk": "Risk of floods or moderate weather-related events.",
    "High Disaster Risk": "High risk of significant earthquakes, or severe weather events.",
  };

  // Updated disaster recommendations based on risk
  // const disasterRecommendations = {
  //   "No Disaster Risk": "No special precautions needed for natural disasters.",
  //   "Minor Disaster Risk": "Be aware of potential minor natural disasters. Have basic emergency supplies.",
  //   "Moderate Disaster Risk": "Prepare for possible natural disasters. Keep emergency supplies and a plan in place.",
  //   "High Disaster Risk": "Be highly prepared. Implement all recommended safety measures and stay updated on disaster alerts.",
  // };

  // Function to handle search and fetch safety data
  const handleSearch = async () => {
    if (searchTerm.trim() === "") {
      toast({
        title: "Please enter a location.",
        status: "warning",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    setLoading(true);

    try {
      const data = await fetchSafetyData(searchTerm);

      if (data && data.length > 0) {
        const locationData = data.find(
          (item) => item.district.toLowerCase() === searchTerm.toLowerCase()
        );

        if (locationData) {
          const rating = determineSafetyRating(locationData.crimes);
          const summary = `This location has a ${rating} safety rating based on historical data and user reviews.`;
          const tips = getSafetyTips(rating);
          const weather = weatherData[rating];
          const weatherRecommendation = weatherRecommendations[weather];
          const disasterRisk = disasterData[rating];
          const disasterRecommendation = disasterRecommendations[disasterRisk];

          setSafetyData({
            district: locationData.district,
            rating,
            summary,
            tips,
            weather,
            weatherRecommendation,
            disasterRisk,
            disasterRecommendation,
          });
        } else {
          toast({
            title: "No data found.",
            description: "No safety data available for the entered location.",
            status: "info",
            duration: 3000,
            isClosable: true,
          });
          setSafetyData(null);
        }
      } else {
        toast({
          title: "No data found.",
          description: "No safety data available for the entered location.",
          status: "info",
          duration: 3000,
          isClosable: true,
        });
        setSafetyData(null);
      }
    } catch (error) {
      toast({
        title: "Error fetching data.",
        description: "There was a problem fetching the safety rating.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      setSafetyData(null);
    } finally {
      setLoading(false);
    }
  };

  // Function to get safety tips based on the rating
  const getSafetyTips = (rating) => {
    switch (rating) {
      case "Very High":
        return "This area is extremely safe. Continue to stay alert and follow general safety practices.";
      case "High":
        return "This area is relatively safe. Continue to stay alert and follow general safety precautions.";
      case "Moderately High":
        return "Exercise caution in this area. Be aware of your surroundings and avoid risky situations.";
      case "Moderate":
        return "Be cautious in this area. Avoid traveling alone at night and stay aware of your surroundings.";
      case "Moderately Low":
        return "This area has a higher crime rate. Be very cautious, avoid traveling alone, and stay in well-populated areas.";
      case "Low":
        return "This area has a higher crime rate. Avoid traveling alone, be very cautious, and stay in well-populated areas.";
      case "Very Low":
        return "This area is not safe. Avoid traveling alone, stay in well-populated areas, and be extremely cautious at all times.";
      case "Extremely Low":
        return "This area is extremely unsafe. Avoid it if possible. If you must go, stay in well-populated areas and remain highly vigilant.";
      default:
        return "Safety rating not recognized. Follow standard safety precautions.";
    }
  };

  return (
    <Box bg="white" p="20px" mt="40px" borderRadius="8px" marginBottom="0px">
      <Box textAlign="center" mb="20px">
        <Text fontWeight="600" fontSize="2xl">
          Stay Safe, Travel Smart
        </Text>
        <Text fontSize="md" mt="5px">
          Check safety ratings based on historical data and user reviews.
        </Text>
      </Box>

      {/* Search Bar */}
      <Box mb="20px" display="flex" justifyContent="center">
        <Input
          placeholder="Search for a place"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          maxW="400px"
          mr="10px"
        />
        <IconButton
          mt="-2px"
          color="white"
          bg="black"
          rounded="25px"
          p="25px 25px"
          icon={<SearchIcon />}
          onClick={handleSearch}
          isLoading={loading}
          loadingText="Searching..."
        />
      </Box>

      {/* Safety Data Display */}
      {safetyData && (
        <Grid templateColumns="repeat(2, 1fr)" gap={6}>
          <GridItem
            w="100%"
            bg="white"
            p="20px"
            borderRadius="8px"
            boxShadow="md"
          >
            <Text fontWeight="600" fontSize="lg">
              Location: {safetyData.district}
            </Text>
            <Text fontWeight="500" fontSize="md" color="teal.500">
              Safety Rating: {safetyData.rating}
            </Text>
            <Text fontWeight="600" fontSize="lg" mt="10px">
              Weather: {safetyData.weather}
            </Text>
           
            <Text fontWeight="600" fontSize="lg" mt="10px">
              Disaster Risk: {safetyData.disasterRisk} 
            </Text>
            <Text fontSize="md" mt="10px">
              {safetyData.summary}
            </Text>
          </GridItem>
          <GridItem
            w="100%"
            bg="white"
            p="20px"
            borderRadius="8px"
            boxShadow="md"
          >
            <Text fontWeight="600" fontSize="lg">
              Safety Tips
            </Text>
            <Text fontSize="md" mt="10px">
              {safetyData.tips}
            </Text>
            <Text fontSize="md" mt="10px">
              Weather Recommendation: {safetyData.weatherRecommendation}
            </Text>
            <Text fontSize="md" mt="10px">
              Disaster Recommendation: {safetyData.disasterRecommendation}
            </Text>
            <Button
              mt="40px"
              fontWeight="700"
              color="white"
              bg="black"
              rounded="25px"
              p="23px 23px"
            >
              Learn More
            </Button>
          </GridItem>
        </Grid>
      )}

      {/* Default Message */}
      {!safetyData && !loading && (
        <Box textAlign="center" mt="40px">
          <Text fontSize="md" color="gray.600">
            Enter a location to see its safety rating.
          </Text>
        </Box>
      )}
    </Box>
  );
}

export default SafetyRating;
