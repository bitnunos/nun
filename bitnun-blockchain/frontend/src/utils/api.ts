import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000/api'; // Adjust the base URL as needed

export const fetchBlockchainStatus = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/blockchain/status`);
        return response.data;
    } catch (error) {
        console.error('Error fetching blockchain status:', error);
        throw error;
    }
};

export const fetchTransactionHistory = async (address) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/transactions/${address}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching transaction history:', error);
        throw error;
    }
};

export const submitTransaction = async (transactionData) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/transactions`, transactionData);
        return response.data;
    } catch (error) {
        console.error('Error submitting transaction:', error);
        throw error;
    }
};