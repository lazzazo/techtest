import axios from 'axios';
import { TOKEN_URL } from './config';

export const fetchTokens = async () => {
  try {
    const response = await axios.get(TOKEN_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching:', error);
    throw error;
  }
};
