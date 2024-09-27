import axios from 'axios';

export default async function getUsers(url: string) {
  const users = await axios(url);

  return users;
}
