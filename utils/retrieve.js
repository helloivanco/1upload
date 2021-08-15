const axios = require('axios');

export async function getPost(cid) {
  let data;
  try {
    const response = await axios.get('https://ipfs.io/ipfs/' + cid);
    data = response.data;
  } catch (error) {
    console.error(error);
    data = '';
  }
  return data;
}
