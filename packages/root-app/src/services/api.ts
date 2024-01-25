import axios from 'axios';

function axiosClient() {
  const axiosClient = axios.create({
    baseURL: import.meta.env.VITE_APP_BASE_API_URL,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return axiosClient;
}
export const api = axiosClient();
