import { client } from './client';

export async function getOrkz() {
  const response = await client
    .from('orkz')
    .select('*');

  return response.data;
}