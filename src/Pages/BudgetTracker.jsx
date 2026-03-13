import React, { useState, useEffect } from 'react';
import { Box, Heading, Table, Thead, Tbody, Tr, Th, Td, Input, Button, Text, Stat, StatLabel, StatNumber, StatGroup, useToast, Progress, Badge, HStack, Grid, GridItem, Select } from '@chakra-ui/react';
import { useLocation, useNavigate } from 'react-router-dom';
import apiClient from '../api/apiClient';

const BudgetTracker = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const query = new URLSearchParams(location.search);
    const tripId = query.get('trip_id');
    
    const [trips, setTrips] = useState([]);
    const [budgetData, setBudgetData] = useState({ total_budget: 0, total_spent: 0, remaining: 0, expenses: [] });
    const [newExpense, setNewExpense] = useState({ item: '', amount: 0, category: 'Food' });
    const toast = useToast();

    const fetchTrips = async () => {
        try {
            const response = await apiClient.get('/trips');
            setTrips(response.data);
        } catch (error) {
            console.error("Error fetching trips", error);
        }
    };

    const fetchBudget = async (id) => {
        try {
            const response = await apiClient.get(`/budget/${id}`);
            setBudgetData(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchTrips();
    }, []);

    useEffect(() => {
        if (tripId) {
            fetchBudget(tripId);
        }
    }, [tripId]);

    const handleTripChange = (e) => {
        const id = e.target.value;
        if (id) {
            navigate(`/budget?trip_id=${id}`);
        }
    };

    const percentSpent = Math.min((budgetData.total_spent / budgetData.total_budget) * 100, 100) || 0;

    const handleAddExpense = async () => {
        if (!newExpense.item || !newExpense.amount) return;
        try {
            await apiClient.post(`/budget/${tripId}`, newExpense);
            toast({ title: "Expense added", status: "success" });
            fetchBudget(tripId);
            setNewExpense({ item: '', amount: 0, category: 'Food' });
        } catch (error) {
            toast({ title: "Failed to add expense", status: "error" });
        }
    };

    return (
        <Box p="10" maxW="1100px" m="auto">
            <Box display="flex" justifyContent="space-between" alignItems="center" mb="8">
                <Heading color="teal.700">Financial Overview</Heading>
                <Box width="300px">
                    <Select 
                        placeholder="Switch Trip" 
                        value={tripId || ''} 
                        onChange={handleTripChange}
                    >
                        {trips.map(t => (
                            <option key={t.id} value={t.id}>{t.name} ({t.destination})</option>
                        ))}
                    </Select>
                </Box>
            </Box>

            {!tripId && (
                <Box textAlign="center" p="20" border="2px dashed" borderColor="teal.100" borderRadius="2xl" bg="teal.50">
                    <Text fontSize="xl" color="teal.600" mb="4">Select a trip from the dropdown to view its budget.</Text>
                </Box>
            )}

            {tripId && (
                <>
            
            <Grid templateColumns="repeat(3, 1fr)" gap="6" mb="10">
                <GridItem colSpan={2}>
                    <Box p="8" border="1px solid #eee" borderRadius="2xl" bg="white" boxShadow="sm">
                        <Text fontWeight="bold" mb="4">Spending Progress</Text>
                        <Progress value={percentSpent} colorScheme={percentSpent > 90 ? "red" : "teal"} height="24px" borderRadius="full" mb="4" />
                        <HStack justifyContent="space-between">
                            <Text color="gray.600">Total Spent: ${budgetData.total_spent}</Text>
                            <Text fontWeight="bold" color={budgetData.remaining < 0 ? "red.500" : "green.500"}>
                                {budgetData.remaining < 0 ? `Over budget by $${Math.abs(budgetData.remaining)}` : `$${budgetData.remaining} remaining`}
                            </Text>
                        </HStack>
                    </Box>
                </GridItem>
                <GridItem colSpan={1}>
                    <StatGroup p="8" border="1px solid #eee" borderRadius="2xl" bg="teal.50" textAlign="center">
                        <Stat>
                            <StatLabel fontWeight="bold">Trip Budget</StatLabel>
                            <StatNumber fontSize="4xl" color="teal.600">${budgetData.total_budget}</StatNumber>
                        </Stat>
                    </StatGroup>
                </GridItem>
            </Grid>

            <Box p="8" border="1px solid #eee" borderRadius="2xl" bg="white" boxShadow="sm" mb="10">
                <Heading size="md" mb="6">Add New Expense</Heading>
                <Grid templateColumns="repeat(4, 1fr)" gap="4">
                    <GridItem colSpan={2}>
                        <Input placeholder="What did you spend on?" value={newExpense.item} onChange={(e) => setNewExpense({...newExpense, item: e.target.value})} />
                    </GridItem>
                    <Input placeholder="Amount ($)" type="number" value={newExpense.amount} onChange={(e) => setNewExpense({...newExpense, amount: parseFloat(e.target.value)})} />
                    <Button colorScheme="teal" onClick={handleAddExpense}>Record Expense</Button>
                </Grid>
            </Box>

            <Box p="8" border="1px solid #eee" borderRadius="2xl" bg="white" boxShadow="sm">
                <Heading size="md" mb="6">Transaction History</Heading>
                <Table variant="simple">
                    <Thead bg="gray.50">
                        <Tr>
                            <Th>Item</Th>
                            <Th>Category</Th>
                            <Th>Date</Th>
                            <Th isNumeric>Amount</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {budgetData.expenses.map(exp => (
                            <Tr key={exp.id} _hover={{ bg: "gray.50" }}>
                                <Td fontWeight="medium">{exp.item}</Td>
                                <Td><Badge colorScheme="blue" borderRadius="full" px="3">{exp.category}</Badge></Td>
                                <Td color="gray.600">{new Date(exp.date).toLocaleDateString()}</Td>
                                <Td isNumeric fontWeight="bold">${exp.amount}</Td>
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
            </Box>
                </>
            )}
        </Box>
    );
};

export default BudgetTracker;
