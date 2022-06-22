import { client } from './client';

export async function getOrkz() {
  const response = await client
    .from('orkz')
    .select('*');

  return response.data;
}


export async function getBeers() {
  const response = await client
    .from('craft_beers')
    .select('*');

  return response.data;
}


export async function getAlbums() {
  const response = await client
    .from('records')
    .select('*');

  return response.data;
}