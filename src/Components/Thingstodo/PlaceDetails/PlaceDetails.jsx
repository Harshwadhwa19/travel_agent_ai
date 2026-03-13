import React from 'react';
import { Image, Text, Card, CardBody, Flex, Icon, HStack, Stack, Tag, Button } from '@chakra-ui/react';
import { MdLocationOn, MdPhone } from 'react-icons/md';
import { StarIcon } from '@chakra-ui/icons';
import apiClient from '../../../api/apiClient';
import axios from 'axios';
import { getPlacesData } from '../../../api';
const PlaceDetails = ({ place, selected, refProp }) => {
    if (selected) refProp?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });

    return (
        <Card borderWidth="1px" borderRadius="lg" overflow="hidden" boxShadow="md">
            <Image 
                src={place?.photo ? place.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'} 
                alt={place.name} 
                width="100%" 
                height="200px" 
                objectFit="cover" 
            />
            <CardBody>
                <Stack spacing={3}>
                    <Text fontSize="lg" fontWeight="bold">
                        {place.name}
                    </Text>
                    <HStack spacing={1}>
                        {place.rating && Array.from({ length: 5 }, (_, i) => (
                            <StarIcon 
                                key={i}
                                color={i < Math.round(place.rating) ? 'teal.400' : 'gray.300'}
                            />
                        ))}
                        <Text fontSize="md" color="gray.600">
                            {place.num_reviews} review{place.num_reviews > 1 && 's'}
                        </Text>
                    </HStack>
                    {/* {place.price_level && (
                        <Text fontSize="md" color="green.500">
                            Price: {place.price_level}
                        </Text>
                    )} */}
                    {place.ranking && (
                        <Text fontSize="md" color="gray.600">
                            Ranking: {place.ranking}
                        </Text>
                    )}
                    {place.awards && place.awards.map((award) => (
                        <Flex key={award.display_name} align="center" my={1}>
                            <Image src={award.images.small} alt={award.display_name} boxSize="24px" />
                            <Text fontSize="sm" color="gray.600" ml={2}>
                                {award.display_name}
                            </Text>
                        </Flex>
                    ))}
                    {place.cuisine && place.cuisine.map(({ name }) => (
                        <Tag key={name} size='sm' colorScheme="teal">
                            {name}
                        </Tag>
                    ))}
                    {place.address && (
                        <Flex align="center">
                            <Icon as={MdLocationOn} mr={2} />
                            <Text fontSize="md" color="gray.600">
                                {place.address}
                            </Text>
                        </Flex>
                    )}
                    {place.phone && (
                        <Flex align="center">
                            <Icon as={MdPhone} mr={2} />
                            <Text fontSize="md" color="gray.600">
                                {place.phone}
                            </Text>
                        </Flex>
                    )}
                    <Flex mt={3}>
                        <Button 
                            size="xs" 
                            colorScheme="blue" 
                            onClick={async () => {
                                const tId = new URLSearchParams(window.location.search).get('trip_id');
                                if (!tId) return alert("Open via Trip Workspace");
                                try {
                                    await apiClient.post(`/trips/${tId}/activity`, {
                                        day_number: 1,
                                        location: place.name,
                                        time: "10:00",
                                        description: `Saved: ${place.address || ''}`
                                    });
                                    alert("Saved!");
                                } catch (e) { alert("Error saving"); }
                            }}
                        >
                            Save to Trip
                        </Button>
                    </Flex>
                </Stack>
            </CardBody>
        </Card>
    );
};

export default PlaceDetails;
