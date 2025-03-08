const axios = require('axios');

const sendRequest = async (url) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw new Error('Request error: ' + error.message);
  }
};

module.exports = sendRequest;
