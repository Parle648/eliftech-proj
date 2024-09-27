import axios from 'axios';

export default async function createUser(data: any) {
  const users = await axios.post('http://localhost:3000/user', data, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return users;
}
