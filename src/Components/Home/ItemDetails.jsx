import React from 'react';
import { useParams } from 'react-router-dom';
import { Box, Image, Text, Stack, Divider, Button, Flex, VStack } from "@chakra-ui/react";
import { FaStar } from 'react-icons/fa';

const data = [
    {
        id: 1,
        img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/33/fc/f0/goa.jpg?w=300&h=300&s=1",
        title: "Goa Beach and Water Sports Adventure",
        review: "78",
        price: "from ₹3,200 per adult",
        description: "Enjoy a day of adventure and fun on the beautiful beaches of Goa. Activities include water sports, beach games, and relaxation."
      },
      {
        id: 2,
        img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/a3/3b/8a/screenshot-2017-09-12.jpg?w=300&h=-1&s=1",
        title: "Jaipur Cultural Walking Tour with Local Guide",
        review: "45",
        price: "from ₹1,500 per adult",
        description: "Explore the rich culture and heritage of Jaipur with a knowledgeable local guide. Visit historical landmarks and experience local traditions."
      },
      {
        id: 3,
        img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/4e/55/e6/chhatrapati-shivaji-terminus.jpg?w=300&h=300&s=1",
        title: "Mumbai Street Food Tour",
        review: "59",
        price: "from ₹2,800 per adult",
        description: "Discover the vibrant street food scene of Mumbai. Enjoy a variety of local dishes and experience the city’s culinary delights."
      },
      {
        id: 4,
        img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/82/bc/d0/caption.jpg?w=300&h=300&s=1",
        title: "Kerala Backwaters Houseboat Cruise",
        review: "87",
        price: "from ₹10,000 per adult",
        description: "Relax on a houseboat and explore the serene backwaters of Kerala. Enjoy picturesque views, local cuisine, and tranquil surroundings."
      },
      {
        id: 5,
        img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/78/a4/44/caption.jpg?w=300&h=300&s=1",
        title: "Rajasthan Desert Safari and Camel Ride",
        review: "68",
        price: "from ₹7,500 per adult",
        description: "Experience the thrill of a desert safari and camel ride in Rajasthan. Enjoy a unique adventure through the dunes and witness local desert life."
      },
      {
        id: 6,
        img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/07/dc/79/thangshing-valley-with.jpg?w=300&h=300&s=1",
        title: "Sikkim Mountain Trekking Adventure",
        review: "34",
        price: "from ₹12,000 per adult",
        description: "Embark on a thrilling trekking adventure in the mountains of Sikkim. Explore stunning landscapes and enjoy the challenge of high-altitude trekking."
      },
      {
        id: 7,
        img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/b7/fb/23/rishikesh-river-rafting.jpg?w=300&h=300&s=1",
        title: "Rishikesh River Rafting and Camping",
        review: "102",
        price: "from ₹3,500 per adult",
        description: "Enjoy an exhilarating river rafting experience in Rishikesh, followed by camping under the stars. Perfect for adventure enthusiasts."
      },
      {
        id: 8,
        img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/10/2d/b8/andaman-and-nicobar-islands.jpg?w=300&h=300&s=1",
        title: "Andaman Islands Scuba Diving Experience",
        review: "55",
        price: "from ₹8,000 per adult",
        description: "Explore the vibrant underwater world of the Andaman Islands with a scuba diving experience. Discover colorful marine life and coral reefs."
      },
];

function ItemDetails() {
  const { id } = useParams(); // Get ID from URL

  // Find the item with the matching ID
  const item = data.find((el) => el.id === parseInt(id));

  if (!item) {
    return <Text>Item not found</Text>;
  }

  return (
    <Box w="90%" m="auto" mt="40px" mb="100px">
      <Flex direction={{ base: "column", md: "row" }} align="center" justify="center" spacing={6}>
        <Image
          src={item.img}
          alt={item.title}
          borderRadius="md"
          boxShadow="lg"
          w={{ base: "100%", md: "50%" }}
          h={{ base: "300px", md: "400px" }}
          objectFit="cover"
          mb={{ base: "4", md: "0" }}
        />
        <Box
          bg="white"
          p={6}
          borderRadius="md"
          boxShadow="lg"
          w={{ base: "100%", md: "50%" }}
          ml={{ md: "6" }}
          textAlign="left"
        >
          <Text fontWeight="700" fontSize="3xl" mb="4">
            {item.title}
          </Text>
          <Stack spacing={4}>
            <Stack spacing={1}>
              <Text fontSize="lg" fontWeight="600">
                Price: {item.price}
              </Text>
              <Text fontSize="lg" fontWeight="600">
                Reviews: {item.review}
              </Text>
              <Box display="flex" alignItems="center" color="yellow.400">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} style={{ marginRight: '2px' }} />
                ))}
                <Text fontSize="md" color="gray.600" ml="2">
                  (Based on {item.review} reviews)
                </Text>
              </Box>
            </Stack>
            <Divider />
            <Text fontSize="md" color="gray.800">
              {item.description}
            </Text>
            <Button colorScheme="teal" size="lg" mt="4" w="full">
              Book Now
            </Button>
          </Stack>
        </Box>
      </Flex>
    </Box>
  );
}

export default ItemDetails;
