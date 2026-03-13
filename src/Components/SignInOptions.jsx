import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Text,
  useDisclosure,
  Image,
} from "@chakra-ui/react";
import React from "react";
import Signin from "./Signin"; // Import Signin component

function SignInOptions() {
  const { isOpen, onOpen, onClose } = useDisclosure(); // For Sign-in-options modal
  const {
    isOpen: isSigninOpen,
    onOpen: onSigninOpen,
    onClose: onSigninClose,
  } = useDisclosure(); // For Sign-in Modal

  // Function to handle modal state changes
  const handleContinueWithEmail = () => {
    onClose(); // Close Sign-in-options Modal
    setTimeout(() => {
      onSigninOpen(); // Open Sign-in Modal with a slight delay
    }, 200);
  };

  return (
    <>
      {/* Sign In Options Button */}
      <Button
        onClick={onOpen}
        fontWeight="500"
        bg="black"
        p="8px 15px"
        borderRadius="3xl"
        color="white"
        fontSize="md"
      >
        Sign in
      </Button>

      {/* Sign In Options Modal */}
      <Modal isOpen={isOpen} onClose={onClose} size="lg">
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody pb={6} p="20px 40px">
            <Text fontSize="2xl" fontWeight="500" textAlign="center" mb="20px">
              Sign in to unlock the best.
            </Text>

            {/* Continue with Google Button */}
            <Button
              w="100%"
              mb="15px"
              p="25px"
              fontSize="lg"
              fontWeight="500"
              borderRadius="full"
              border="1px solid"
              borderColor="gray.300"
              leftIcon={
                <Image
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
                  alt="Google Logo"
                  boxSize="20px"
                />
              }
            >
              Continue with Google
            </Button>

            {/* Continue with Email Button */}
            <Button
              w="100%"
              p="25px"
              fontSize="lg"
              fontWeight="500"
              borderRadius="full"
              border="1px solid"
              borderColor="gray.300"
              onClick={handleContinueWithEmail}
              leftIcon={
                <Image
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Font_Awesome_5_solid_envelope.svg/512px-Font_Awesome_5_solid_envelope.svg.png"
                  alt="Email Icon"
                  boxSize="20px"
                />
              }
            >
              Continue with email
            </Button>

            <Text mt="25px" textAlign="center" fontSize="xs">
              By proceeding, you agree to our <u>Terms of Use</u> and confirm
              you have read our <u>Privacy and Cookie Statement</u>.
            </Text>

            <Text mt="15px" textAlign="center" fontSize="xs">
              This site is protected by reCAPTCHA and the Google{" "}
              <u>Privacy Policy</u> and <u>Terms of Service</u> apply.
            </Text>
          </ModalBody>
        </ModalContent>
      </Modal>

      {/* Sign-in Modal */}
      <Signin isOpen={isSigninOpen} onClose={onSigninClose} />
    </>
  );
}

export default SignInOptions;
