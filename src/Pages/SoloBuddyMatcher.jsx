import React, { useState, useEffect, useCallback } from "react";
import {
  Box, Text, Grid, Button, Avatar, VStack, HStack, Badge, useToast, Spinner, Divider, Input, Heading
} from "@chakra-ui/react";
import apiClient from "../api/apiClient";

function SoloBuddyMatcher() {
  const [matches, setMatches] = useState([]);
  const [chats, setChats] = useState([]);
  const [activeChat, setActiveChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [loading, setLoading] = useState(true);
  const toast = useToast();

  const fetchData = useCallback(async () => {
    try {
      const matchRes = await apiClient.get('/buddy/match-solo');
      setMatches(matchRes.data.matches);

      const chatRes = await apiClient.get('/buddy/chats');
      setChats(chatRes.data || []);
    } catch (error) {
      console.error("Error fetching buddy data", error);
    } finally {
      setLoading(false);
    }
  }, []);

  const refreshMessages = useCallback(async () => {
    if (!activeChat) return;
    try {
      const res = await apiClient.get(`/buddy/chats/${activeChat.match_id}/messages`);
      setMessages(res.data || []);
    } catch (e) {
      console.error("Poll error", e);
    }
  }, [activeChat]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  useEffect(() => {
    if (!activeChat) return;
    refreshMessages();
    const interval = setInterval(refreshMessages, 5000);
    return () => clearInterval(interval);
  }, [activeChat, refreshMessages]);

  const handleConnect = async (receiverId) => {
    try {
      await apiClient.post('/buddy/request-connection', { receiver_id: receiverId });
      toast({ title: "Request Sent!", status: "success" });
      fetchData();
    } catch (e) { 
      toast({ title: "Failed to connect", status: "error" }); 
    }
  };

  const sendMessage = async () => {
    if (!newMessage.trim() || !activeChat) return;
    try {
      await apiClient.post(`/buddy/chats/${activeChat.match_id}/messages`, { content: newMessage });
      setNewMessage("");
      refreshMessages();
    } catch (e) { 
      toast({ title: "Failed to send", status: "error" }); 
    }
  };

  if (loading) return <Box textAlign="center" p={10}><Spinner size="xl" /></Box>;

  return (
    <Box w="90%" m="auto" p={6} bg="white" borderRadius="2xl" shadow="2xl" mt={10} mb={20}>
      <VStack spacing={8} align="stretch">
        <Box textAlign="center">
          <Heading size="xl" color="teal.600">Travel Buddy Matcher ✨</Heading>
          <Text color="gray.500" mt={2}>We found solo travelers going to the same places as you!</Text>
        </Box>

        <Grid templateColumns={{ base: "1fr", md: "1fr 1.5fr" }} gap={10}>
          {/* Smart Matches Section */}
          <VStack align="stretch" spacing={6}>
            <Heading size="md" color="purple.600">Smart Matches</Heading>
            {matches.length === 0 ? (
              <Box p={6} border="2px dashed" borderColor="gray.200" borderRadius="xl" textAlign="center">
                <Text color="gray.400">No solo travelers found near your destination yet.</Text>
              </Box>
            ) : (
              matches.map((m) => (
                <Box key={m.user_id} p={4} border="1px solid" borderColor="gray.100" borderRadius="xl" shadow="sm" transition="all 0.2s" _hover={{ shadow: 'md' }}>
                  <HStack spacing={4}>
                    <Avatar name={m.username} size="lg" bg="teal.100" />
                    <VStack align="start" spacing={0} flex={1}>
                      <Text fontWeight="bold" fontSize="lg">{m.username}</Text>
                      <Badge colorScheme="purple">Solo in {m.destination}</Badge>
                      <Text fontSize="xs" color="gray.500">Trip: {m.trip_name}</Text>
                    </VStack>
                    <Button 
                      colorScheme={m.status === 'none' ? 'teal' : 'gray'} 
                      size="sm" 
                      onClick={() => handleConnect(m.user_id)}
                      isDisabled={m.status !== 'none'}
                    >
                      {m.status === 'none' ? 'Connect' : m.status.toUpperCase()}
                    </Button>
                  </HStack>
                </Box>
              ))
            )}

            <Divider />

            <Heading size="md" color="blue.600">My Connections</Heading>
            {chats.map(chat => (
              <Box 
                key={chat.match_id} 
                p={4} 
                bg={activeChat?.match_id === chat.match_id ? "blue.50" : "white"}
                cursor="pointer" 
                borderRadius="xl" 
                border="1px solid"
                borderColor={activeChat?.match_id === chat.match_id ? "blue.200" : "gray.100"}
                onClick={() => {
                  setActiveChat(chat);
                  setMessages([]);
                }}
              >
                <HStack>
                  <Avatar name={chat.other_username} size="sm" />
                  <Text fontWeight="bold">{chat.other_username}</Text>
                  {activeChat?.match_id === chat.match_id && <Badge colorScheme="green">CHAT OPEN</Badge>}
                </HStack>
              </Box>
            ))}
          </VStack>

          {/* Chat Section */}
          <Box border="1px solid" borderColor="gray.200" borderRadius="2xl" p={0} height="600px" display="flex" flexDirection="column" overflow="hidden">
            {activeChat ? (
              <>
                <Box p={4} bg="blue.500" color="white">
                  <HStack>
                    <Avatar size="sm" name={activeChat.other_username} />
                    <Text fontWeight="bold">Chat with {activeChat.other_username}</Text>
                  </HStack>
                </Box>
                <VStack flex={1} overflowY="auto" p={4} align="stretch" spacing={3} bg="gray.50">
                  {messages.map(msg => (
                    <Box 
                      key={msg.id} 
                      alignSelf={msg.sender_username === activeChat.other_username ? "flex-start" : "flex-end"}
                      maxW="80%"
                    >
                      <Box 
                        p={3} 
                        borderRadius="xl" 
                        bg={msg.sender_username === activeChat.other_username ? "white" : "teal.500"}
                        color={msg.sender_username === activeChat.other_username ? "black" : "white"}
                        shadow="sm"
                      >
                        <Text fontSize="sm">{msg.content}</Text>
                      </Box>
                      <Text fontSize="10px" color="gray.400" mt={1} textAlign={msg.sender_username === activeChat.other_username ? "left" : "right"}>
                        {new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </Text>
                    </Box>
                  ))}
                </VStack>
                <Box p={4} bg="white" borderTop="1px solid" borderColor="gray.100">
                  <HStack>
                    <Input 
                      placeholder="Discuss your plans..." 
                      value={newMessage} 
                      onChange={(e) => setNewMessage(e.target.value)} 
                      borderRadius="full"
                      onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                    />
                    <Button colorScheme="blue" borderRadius="full" px={8} onClick={sendMessage}>Send</Button>
                  </HStack>
                </Box>
              </>
            ) : (
              <VStack justify="center" align="center" h="full" spacing={4} color="gray.400">
                <Text fontSize="5xl">💬</Text>
                <Text fontWeight="bold">Select a buddy to start planning</Text>
              </VStack>
            )}
          </Box>
        </Grid>
      </VStack>
    </Box>
  );
}


export default SoloBuddyMatcher;
