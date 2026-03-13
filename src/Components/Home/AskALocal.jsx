import { Box, Image, Text, Button } from "@chakra-ui/react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useNavigate } from "react-router-dom";

function Homefour() {
  const navigate = useNavigate();

  return (
    <Box
      w="85%"
      m="auto"
      textAlign="left"
      mt="40px"
      bg="#F7F7F7"
      color="black"
      p="20px"
      borderRadius="8px"
      marginBottom="100px"
    >
      <Text fontWeight="600" fontSize="2xl">
        Ask a Local
      </Text>
      <Text fontSize="md" mt="10px">
        Have questions about customs, etiquette, or local tips? Connect with a
        local resident or cultural expert directly through our live chat
        feature.
      </Text>
      <Box
        display="flex"
        flexDirection="column"
        mt="20px"
        p="10px"
        borderRadius="8px"
        boxShadow="md"
        bg="#FFFFFF"
      >
        <Text fontWeight="500" fontSize="lg">
          How it works
        </Text>
        <Box mt="10px">
          <Text fontSize="md" mb="5px">
            1. Choose a destination or topic you need advice on.
          </Text>
          <Text fontSize="md" mb="5px">
            2. Connect with a local resident or expert who has knowledge about
            your query.
          </Text>
          <Text fontSize="md" mb="5px">
            3. Ask your questions and get personalized responses in real-time.
          </Text>
        </Box>
        <Box mt="20px">
          <Text fontWeight="500" fontSize="lg">
            Start Chatting Now
          </Text>
          <Button
            mt="40px"
            fontWeight="700"
            color="white"
            bg="black"
            rounded="25px"
            p="23px 23px"
            onClick={() => navigate("/city-selection")}
          >
            Connect with a Local
          </Button>
        </Box>
      </Box>
      <Box mt="40px" textAlign="center">
        <Text fontSize="lg" fontWeight="500">
          Have a question? Get in touch with us via our live chat!
        </Text>
      </Box>
    </Box>
  );
}

export default Homefour;
