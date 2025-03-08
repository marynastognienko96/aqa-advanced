const axios = require('axios');

const sendRequest = async (url, params, headers) => {
  try {
    const response = await axios.get(url, {
      params: params,
      headers: headers,
    });
    return response.data;
  } catch (error) {
    throw new Error('Error');
  }
};

module.exports = sendRequest;
