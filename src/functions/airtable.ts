import dotenv from 'dotenv';
import Airtable from 'airtable';

dotenv.config();

const base = new Airtable({ apiKey: process.env.AIRTABLE_API }).base(process.env.AIRTABLE_BASE_ID);
const table = base('ufc');
export default table;
