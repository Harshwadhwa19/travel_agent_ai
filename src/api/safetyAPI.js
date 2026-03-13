import apiClient from './apiClient';

export const fetchSafetyData = async (searchTerm) => {
  try {
    const response = await apiClient.get('/discovery/safety', {
      params: { district: searchTerm },
    });
    return response.data;
  } catch (error) {
    console.error('There was a problem with the request:', error);
    throw error;
  }
};
