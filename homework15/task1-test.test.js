const sendRequest = require('./task1-request');
const axios = require('axios');

jest.mock('axios');

describe('sendRequest', () => {
  it('test', async () => {
    axios.get.mockRejectedValue(new Error('Network Error'));

    await expect(sendRequest()).rejects.toThrow('Error: incorrect URL');
  });
});
