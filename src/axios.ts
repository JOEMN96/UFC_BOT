import axios from "axios"
import dotenv from 'dotenv';

dotenv.config();

const instance = axios.create({
    baseURL: 'https://api.sportsdata.io/v3/mma/scores/json/',
  });

  export default instance;  