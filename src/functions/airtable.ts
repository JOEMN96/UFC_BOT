import dotenv from 'dotenv';
import Airtable from 'airtable';

dotenv.config();

export default new Airtable({ apiKey: process.env.AIRTABLE_API }).base(process.env.AIRTABLE_BASE_ID);
