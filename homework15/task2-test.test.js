// axiosRequest.test.js
const sendRequest = require('./task2-request');
const axios = require('axios');

jest.mock('axios');

describe('sendRequest', () => {
  it('test2', async () => {
    const url = 'https://blablabla.com/data';
    const params = { userId: 123, page: 2 };
    const headers = { Authorization: 'Bearer token123' };

    axios.get.mockResolvedValue({ data: 'success' });
    
    await sendRequest(url, params, headers);

    expect(axios.get).toHaveBeenCalledWith(url, expect.objectContaining({
      params: params,   
      headers: headers, 
    }));
  });
});
