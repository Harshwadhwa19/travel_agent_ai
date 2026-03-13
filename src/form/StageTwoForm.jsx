import React, { useState } from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  Text,
  IconButton,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

const StageTwoForm = ({ formData, handleChange, onPlaceSelect: onDateSelect }) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [startMonth, setStartMonth] = useState(new Date());
  const [endMonth, setEndMonth] = useState(new Date());

  const getMonthName = (date) => {
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    return `${monthNames[date.getMonth()]} ${date.getFullYear()}`;
  };

  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getStartDayOfWeek = (year, month) => {
    return new Date(year, month, 1).getDay();
  };

  const renderHeader = (date, setDate) => (
    <Flex justify="space-between" align="center" mb={4}>
      <IconButton
        icon={<ChevronLeftIcon />}
        aria-label="Previous month"
        size="sm"
        variant="ghost"
        onClick={() =>
          setDate(new Date(date.getFullYear(), date.getMonth() - 1))
        }
      />
      <Text fontSize="lg" fontWeight="bold">
        {getMonthName(date)}
      </Text>
      <IconButton
        icon={<ChevronRightIcon />}
        aria-label="Next month"
        size="sm"
        variant="ghost"
        onClick={() =>
          setDate(new Date(date.getFullYear(), date.getMonth() + 1))
        }
      />
    </Flex>
  );

  const renderDays = () => {
    const daysOfWeek = ["M", "T", "W", "T", "F", "S", "S"];
    return (
      <Grid templateColumns="repeat(7, 1fr)" mb={2}>
        {daysOfWeek.map((day, i) => (
          <GridItem key={i} textAlign="center">
            <Text fontSize="sm" fontWeight="bold" color="gray.600">
              {day}
            </Text>
          </GridItem>
        ))}
      </Grid>
    );
  };

  const renderCells = (date, selectedDate, setSelectedDate, dateType) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const daysInMonth = getDaysInMonth(year, month);
    const startDayOfWeek = getStartDayOfWeek(year, month);

    let days = [];

    for (let i = 0; i < startDayOfWeek; i++) {
      days.push(
        <GridItem key={`empty-${i}`} textAlign="center">
          <Button variant="ghost" size="sm" disabled>
            &nbsp;
          </Button>
        </GridItem>
      );
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const currentDate = new Date(year, month, day);
      const isSelected =
        selectedDate &&
        selectedDate.toDateString() === currentDate.toDateString();

      days.push(
        <GridItem key={day} textAlign="center">
          <Button
            variant={isSelected ? "solid" : "ghost"}
            colorScheme={isSelected ? "blackAlpha" : "gray"}
            size="sm"
            onClick={() => {
              setSelectedDate(currentDate);
              const formattedDate = currentDate.toISOString().split("T")[0];
              handleChange({
                target: {
                  name: dateType,
                  value: formattedDate,
                },
              });
              
              // If we are setting the end date and start date is already set, or vice-versa
              if (dateType === "endDate" && formData.startDate) {
                // We have both dates
              } else if (dateType === "startDate" && formData.endDate) {
                // We have both dates
              }
            }}
          >
            {day}
          </Button>
        </GridItem>
      );
    }

    return (
      <Grid templateColumns="repeat(7, 1fr)" gap={1}>
        {days}
      </Grid>
    );
  };

  return (
    <Box maxW="800px" mx="auto" mt={8} p={4}>
      <Heading mb={4} fontSize="lg">
        When do you want to go?
      </Heading>
      <Text fontSize="sm" color="gray.600" mb={4}>
        Choose a date range or length of stay, up to 7 days.
      </Text>

      <Flex justify="space-between" mb={4}>
        <Box>
          <Text mb={2}>Start Date</Text>
          <Input
            value={
              startDate ? startDate.toLocaleDateString() : "Select start date"
            }
            readOnly
            mb={4}
            placeholder="Start Date"
          />
        </Box>
        <Box>
          <Text mb={2}>End Date</Text>
          <Input
            value={endDate ? endDate.toLocaleDateString() : "Select end date"}
            readOnly
            mb={4}
            placeholder="End Date"
          />
        </Box>
      </Flex>

      <Flex justify="space-between" gap={4}>
        {/* Start Date Calendar */}
        <Box flex="1">
          {renderHeader(startMonth, setStartMonth)}
          {renderDays()}
          {renderCells(startMonth, startDate, setStartDate, "startDate")}
        </Box>

        {/* End Date Calendar */}
        <Box flex="1">
          {renderHeader(endMonth, setEndMonth)}
          {renderDays()}
          {renderCells(endMonth, endDate, setEndDate, "endDate")}
        </Box>
      </Flex>

      <Flex justify="center" mt={10}>
        <Button
          colorScheme="teal"
          size="lg"
          onClick={onDateSelect}
          isDisabled={!formData.startDate || !formData.endDate}
          width="100%"
        >
          Proceed to Trip Type
        </Button>
      </Flex>
    </Box>
  );
};

export default StageTwoForm;
