import axios from 'axios';

export default async function getAllEvents(url: string) {
  try {
    const events = await axios(url);

    return events;
  } catch (error) {
    throw new Error('error');
  }
}
