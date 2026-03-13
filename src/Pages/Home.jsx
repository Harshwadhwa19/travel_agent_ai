import { Box } from "@chakra-ui/react";
import React from "react";
import Homeeight from "../Components/Home/Homeeight";
import Homefive from "../Components/Home/Suggestions";
import Homefour from "../Components/Home/AskALocal";
import Homeone from "../Components/Home/Aitrip";
import Homeseven from "../Components/Home/Homeseven";
import Homesix from "../Components/Home/Homesix";
import Homethree from "../Components/Home/GetoutThere";
import Hometwo from "../Components/Home/ExploreDestinations";
import SafetyRatingsPage from "../Components/Home/SafteyRating";
import TravelBuddyMatching from "../Components/Home/Travelbuddy";
import { ChakraProvider } from "@chakra-ui/react";
import SouvenirMarketplace from "../Components/Home/SouvenirMarketplace";
import Marketplace from "../Components/MarketPlace/Marketplace";
const Home = () => {
  return (
    <Box>
      <Homeone />
      <Hometwo />
      <Homethree />
      <Homefour />
      <Homefive />
      <Homesix />
      <TravelBuddyMatching />
      <ChakraProvider>
        <Box bg="#000000">
          <SouvenirMarketplace />
        </Box>
      </ChakraProvider>

      <Homeeight />
      <SafetyRatingsPage />
    </Box>
  );
};

export default Home;
