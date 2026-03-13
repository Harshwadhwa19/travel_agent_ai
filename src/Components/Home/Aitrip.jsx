import { SearchIcon } from "@chakra-ui/icons";
import { Box, Input, Button, Text, Link } from "@chakra-ui/react";

function Homeone() {
  return (
    <Box
      w="85%"
      m="auto"
      p="150px 100px"
      background="url(https://static.tacdn.com/img2/brand/home/homemar2022_dt_trans.webp) center/cover no-repeat"
      backgroundColor="rgba(0, 0, 0, 0.5)" // Adds a slight overlay for better text readability
      backgroundBlendMode="overlay"
      color="white" // Ensures text is readable
      textAlign="center"
      rounded="40px"
      marginBottom="100px"
    >
      {/* AI Trip Planner Headline */}
      <Text fontSize="4xl" fontWeight="bold" mb="4">
        Plan Your Dream Trip with AI
      </Text>

      {/* Subtext */}
      <Text fontSize="xl" mb="8">
        Get personalized travel itineraries tailored to your preferences.
      </Text>

      {/* Search Box */}
      <Box
        display="flex"
        rounded="40px"
        bg="white"
        p="8px 20px"
        w="85%"
        m="auto"
        alignItems="center"
        boxShadow="3xl"
      >
        <SearchIcon w={5} h={5} color="gray.500" />
        <Input
          border="none"
          placeholder="Where to?"
          size="lg"
          _placeholder={{ color: "gray.500" }}
          _focus={{ boxShadow: "none" }}
          color="black"
        />
        {/* CTA Button */}
        <Button
          mt="mt"
          fontWeight="700"
          color="white"
          bg="black"
          rounded="25px"
          p="23px 23px"
        >
          <Link href="Trip-Planning">Start Planning</Link>
        </Button>
      </Box>
    </Box>
  );
}

// function Homeone() {
//   return (
//     <Box
//       w="85%"
//       m="auto"
//       p="150px 100px"
//       background="url(https://static.tacdn.com/img2/brand/home/homemar2022_dt_trans.webp) center/cover no-repeat"
//       backgroundColor="red.100"
//     >
//       <Box
//         display="flex"
//         rounded="40px"
//         bg="white"
//         p="8px 20px"
//         w="85%"
//         m="auto"
//         alignItems="center"
//         boxShadow="3xl"
//       >
//         <SearchIcon w={5} h={5} />
//         <Input border="none" placeholder="Where to?" size="lg" />
//       </Box>
//     </Box>
//   );
// }

export default Homeone;
