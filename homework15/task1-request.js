const axios = require('axios');

const sendRequest = async () => {
  try {
    const response = await axios.get('https://incorrect-url.com');
    return response.data;
  } catch (error) {
    throw new Error('Error: incorrect URL');
  }
};

module.exports = sendRequest;