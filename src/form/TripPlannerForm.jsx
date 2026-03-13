import React, { useState } from "react";
import apiClient from "../api/apiClient";
import {
  Box,
  Button,
  Stepper,
  StepIndicator,
  StepTitle,
  StepDescription,
  Flex,
  Center,
  Spinner,
  Text,
  useToast,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import StageOneForm from "./StageOneForm";
import StageTwoForm from "./StageTwoForm";
import StageThreeForm from "./StageThreeForm";
import StageFourForm from "./StageFourForm";

const steps = [
  { title: "First Step", description: "Enter your details" },
  { title: "Second Step", description: "Select the dates" },
  { title: "Third Step", description: "Enter Trip Type" },
  { title: "Final Step", description: "Select your Interests" },
];

const MultiStepForm = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const toast = useToast();

  const handleNext = () => {
    if (activeStep < steps.length - 1) {
      setActiveStep((prevStep) => prevStep + 1);
    } else {
      handleSubmit();
    }
  };

  const handleBack = () => {
    if (activeStep > 0) {
      setActiveStep((prevStep) => prevStep - 1);
    }
  };

  const handlePlaceSelection = () => handleNext();
  const handleDateSelection = () => handleNext();
  const handleTripSelect = () => handleNext();

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const startDate = formData.startDate;
      const endDate = formData.endDate;
      // Calculate number of days
      const start = new Date(startDate);
      const end = new Date(endDate);
      const days = Math.max(1, Math.round((end - start) / (1000 * 60 * 60 * 24)));

      const response = await apiClient.post('/ai/generate-itinerary', {
        destination: formData.selectedPlace,
        days: days,
        budget: formData.budget || 'flexible',
        interests: formData.interests ? [...formData.interests] : [],
      });

      navigate("/itinerary", { state: { plannedItinerary: JSON.stringify(response.data) } });
    } catch (error) {
      console.error("Error generating itinerary:", error);
      toast({
        title: "Failed to generate itinerary",
        description: error.response?.data?.error || "Please try again.",
        status: "error",
        duration: 4000,
        isClosable: true,
      });
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <Flex direction="column" align="center" h="100vh">
      <Box
        width="100%"
        p={4}
        boxShadow="md"
        borderWidth={1}
        borderRadius="md"
        bg="white"
      >
        <Center mb={6}>
          <Box width="100%" mt={15}>
            <Stepper size="lg" index={activeStep} mb="40px" width="100%">
              <Flex width="100%" align="center">
                {steps.map((step, index) => (
                  <React.Fragment key={index}>
                    <Flex direction="column" align="center" flex="1">
                      <StepIndicator>
                        <Box
                          w="40px"
                          h="40px"
                          display="flex"
                          alignItems="center"
                          justifyContent="center"
                          borderRadius="full"
                          bg={index <= activeStep ? "green.500" : "gray.300"}
                          color="white"
                          fontWeight="bold"
                        >
                          {index + 1}
                        </Box>
                      </StepIndicator>
                      <Box mt={2} textAlign="center">
                        <StepTitle>{step.title}</StepTitle>
                        <StepDescription>{step.description}</StepDescription>
                      </Box>
                    </Flex>
                    {index < steps.length - 1 && (
                      <Box
                        flex="1"
                        height="2px"
                        bg={index < activeStep ? "green.500" : "gray.300"}
                        mx={2}
                      />
                    )}
                  </React.Fragment>
                ))}
              </Flex>
            </Stepper>
          </Box>
        </Center>

        <Box>
          {activeStep === 0 && (
            <StageOneForm
              formData={formData}
              handleChange={handleChange}
              onPlaceSelect={handlePlaceSelection}
            />
          )}
          {activeStep === 1 && (
            <StageTwoForm
              formData={formData}
              handleChange={handleChange}
              onPlaceSelect={handleDateSelection}
            />
          )}
          {activeStep === 2 && (
            <StageThreeForm
              formData={formData}
              handleChange={handleChange}
              onTripSelect={handleTripSelect}
            />
          )}
          {activeStep === 3 && (
            <StageFourForm 
              formData={formData} 
              handleChange={handleChange} 
              onPlaceSelect={handleSubmit}
            />
          )}
        </Box>

        <Flex mt={4} justify="space-between">
          <Button onClick={handleBack} isDisabled={activeStep === 0 || loading}>
            Back
          </Button>
          <Button
            onClick={handleNext}
            isLoading={loading && activeStep === steps.length - 1}
            loadingText="Generating..."
            colorScheme="green"
          >
            {activeStep === steps.length - 1 ? "Generate Itinerary" : "Next"}
          </Button>
        </Flex>
      </Box>
    </Flex>
  );
};

export default MultiStepForm;
