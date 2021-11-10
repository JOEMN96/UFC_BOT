import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const instance = axios.create({
  baseURL: 'https://ufcapi.netlify.app/api/server',
});

export default instance;
