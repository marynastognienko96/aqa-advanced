// 5 queries 
const axios = require('axios');

describe("Homework", () => {
    // GET
    test("firstQuery", async() => {
        var response = await axios.get(`https://jsonplaceholder.typicode.com/photos/1`);
        console.log(response.data);
        expect(response.status).toBe(200);
        expect(response.data.id).toBeDefined();
    });

    // GET
    test("secondQuery", async() => {
        var response = await axios.get('https://jsonplaceholder.typicode.com/users/5');
        console.log(response.data);
        expect(response.status).toBe(200);
        expect(response.data.username).toBe("Kamren");
    });

    // GET
    test("thirdQuery", async() => {
        var response = await axios.get('https://jsonplaceholder.typicode.com/posts/2');
        console.log(response.data);
        expect(response.status).toBe(200);
        expect(response.data.body).toBeDefined();
    });

    // POST
    test("fourthQuery", async() => {
        var response = await axios.post('https://jsonplaceholder.typicode.com/users');
        { 
            [
                {
                  "id": 123,
                  "name": "John Lee",
                  "username": "LeeJ",
                  "email": "Lalala@april.biz",
                  "address": {
                  "street": "Kulas Light",
                  "suite": "Apt. 556",
                  "city": "Gwenborough",
                  "zipcode": "92998-3874",
                  "geo": {
                          "lat": "-37.3159",
                          "lng": "81.1496"
                        }
                  },
                  "phone": "1-770-736-8031 x56442",
                  "website": "hildegard.org",
                  "company": {
                       "name": "Romaguera-Crona",
                       "catchPhrase": "Multi-layered client-server neural-net",
                       "bs": "harness real-time e-markets"
                   }
                }
            ]
        }
        console.log(response.data);
        expect(response.status).toBe(201);
    });

    // POST
    test("thirdQuery", async() => {
        var response = await axios.post('https://jsonplaceholder.typicode.com/photos');
        {
            [
                [
                    {
                      "albumId": 12345,
                      "id": 456,
                      "title": "This is just a test",
                      "url": "https://via.placeholder.com/600/92c952",
                      "thumbnailUrl": "https://via.placeholder.com/150/92c952"
                    }
                  ]
            ]
        }
        console.log(response.data);
        expect(response.status).toBe(201);
    });
})

