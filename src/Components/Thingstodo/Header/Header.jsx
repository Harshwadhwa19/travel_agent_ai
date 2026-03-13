import React from 'react';
import { Box, Input, IconButton, Text, Flex, useBreakpointValue } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

const Header = ({ onLoad, onPlaceChanged }) => {
    const placeholder = useBreakpointValue({ base: 'Search...', md: 'Search for places...' });

    return (
        <Box as="header" color="white" py={4} px={6}>
            <Flex justify="space-between" align="center" maxW="1200px" mx="auto">
                <Text fontSize={{ base: 'lg', sm: '2xl' }} color={'black'}  fontWeight="bold" display={{ base: 'block', sm: 'block' }}>
                    Things To Do
                </Text>
                <Flex align="center" ml="auto" direction="row">
                    <Text fontSize={{ base: 'md', sm: 'lg' }} display={{ base: 'none', sm: 'block' }} mr={4}>
                        Explore new places
                    </Text>
                    <Flex align="center" bg="white" borderRadius="md" overflow="hidden" _hover={{ bg: 'gray.100' }} width="full" maxWidth="md" ml={{ base: 0, sm: 4 }}>
                        <IconButton aria-label="Search" icon={<SearchIcon />} variant="outline" color="black" borderRadius="none" _hover={{ bg: 'gray.100' }} size="md" />
                        <Input placeholder={placeholder} variant="unstyled" px={4} py={2} border="none" borderRadius="none" focusBorderColor="transparent" color="black" />
                    </Flex>
                </Flex>
            </Flex>
        </Box>
    );
};

export default Header;
