import { getCurrentStatus, updateStatus } from './airtableApiCalls';

exports.handler = async (event) => {
  if (event.httpMethod === 'GET') {
    let res = await getCurrentStatus();
    return res;
  } else if (event.httpMethod == 'POST') {
    let res = await updateStatus(event);
    return res;
  }
};
