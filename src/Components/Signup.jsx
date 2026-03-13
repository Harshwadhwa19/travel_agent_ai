import { ViewIcon } from "@chakra-ui/icons";
import Signin from "./Signin";
import { useDisclosure, useToast } from "@chakra-ui/react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import { useAuth } from "../context/AuthContext";

function Signup({ isOpen, onClose, onSignIn }) {
  const initialRef = useRef(null);
  const finalRef = useRef(null);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const { signup } = useAuth();
  const toast = useToast();

  const {
    isOpen: isSigninOpen,
    onOpen: onSigninOpen,
    onClose: onSigninClose,
  } = useDisclosure();

  async function handleSignUp() {
    if (!username || !email || !password) {
      toast({ title: "Error", description: "All fields are required", status: "error", duration: 3000 });
      return;
    }
    
    setIsLoading(true);
    try {
      await signup(username, email, password);
      toast({ title: "Successfully Signed Up", description: "You can now sign in.", status: "success", duration: 3000 });
      handleSignInClick(); // Switch to sign in modal
    } catch (error) {
      const errorMsg = error.response?.data?.msg || "Signup failed. Try another username/email.";
      toast({ title: "Signup Failed", description: errorMsg, status: "error", duration: 5000 });
    } finally {
      setIsLoading(false);
    }
  }

  // Handle the transition to the Sign-in modal with a delay
  function handleSignInClick() {
    onClose(); // Close the current (Sign-up) modal
    setTimeout(() => {
      onSignIn(); // Open the Sign-in modal after a short delay
    }, 200); // Adjust the delay as necessary (200ms works well for smooth transition)
  }

  return (
    <Modal
      initialFocusRef={initialRef}
      finalFocusRef={finalRef}
      isOpen={isOpen}
      onClose={onClose}
      size="lg"
      scrollBehavior="inside"
    >
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <ModalBody pb={6} p="10px 60px">
          <Text fontSize="3xl" color="black" mb="20px" fontWeight="500">
            Create an Account
          </Text>

          <FormControl isRequired>
            <FormLabel fontWeight="600" fontSize="md">
              Username
            </FormLabel>
            <Input
              outline="none"
              ref={initialRef}
              placeholder="Username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </FormControl>

          <FormControl mt={3} isRequired>
            <FormLabel fontWeight="600" fontSize="md">
              Email address
            </FormLabel>
            <Input 
              outline="none" 
              placeholder="Email" 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>

          <FormControl mt={3} isRequired>
            <FormLabel fontWeight="600" fontSize="md">
              Password
            </FormLabel>
            <Box display="flex" alignItems="center">
              <Input 
                outline="none" 
                type="password" 
                placeholder="Password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <ViewIcon ml="-25px" />
            </Box>
          </FormControl>

          <FormControl textAlign="center">
            <Button
              onClick={handleSignUp}
              isLoading={isLoading}
              fontWeight="700"
              bg="black"
              p="27px 25px"
              w="80%"
              m="auto"
              mt="20px"
              borderRadius="3xl"
              color="white"
              fontSize="md"
              _hover={{ bg: "gray.700" }}
            >
              Sign up
            </Button>
          </FormControl>

          <Text
            mt="20px"
            textAlign="center"
            fontSize="md"
            cursor="pointer"
            onClick={handleSignInClick} // Use the function with a delay for smooth transition
          >
            Already a member?{" "}
            <u>
              <b style={{ cursor: "pointer" }}>
                Sign in
              </b>
            </u>
          </Text>

          <Text mt="25px" textAlign="center" fontSize="xs">
            By creating an account, you agree to our <u>Terms of Use</u> and
            confirm you have read our <u>Privacy and Cookie Statement</u>.
          </Text>

          <Text mt="15px" textAlign="center" mb="20px" fontSize="xs">
            This site is protected by reCAPTCHA and the Google{" "}
            <u>Privacy Policy</u> and <u>Terms of Service</u> apply.
          </Text>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}


export default Signup;
