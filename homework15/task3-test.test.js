const sendRequest = require('./task3-request');
const axios = require('axios');

jest.mock('axios');

describe('sendRequest', () => {
  
  it('test3', async () => {
    axios.get.mockResolvedValue({ data: 'Success' });

    const result = await sendRequest('https://blabla.com/data');
    
    expect(result).toBe('Success');
  });

  it('test4', async () => {
    axios.get.mockRejectedValue(new Error('Network Error'));

    await expect(sendRequest('https://blabla.com/data')).rejects.toThrow('Request error: Network Error');
  });

});
