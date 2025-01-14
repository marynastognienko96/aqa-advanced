// Task 2.1
function fetchTodo() {
    return fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json(); 
      })
      .then(data => {
        return data; 
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
        throw error; 
      });
  }

  fetchTodo()
  .then(todo => {
    console.log('Todo received:', todo); 
  })
  .catch(error => {
    console.error('Error:', error); 
  });

  // Task 2.2
  function fetchUser() {
    return fetch('https://jsonplaceholder.typicode.com/users/1')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        return data; 
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
        throw error;
      });

  }


function fetchUser() {
    return fetch('https://jsonplaceholder.typicode.com/users/1')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        return data; 
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
        throw error; 
      });
  }
  

  const promiseAll = Promise.all([fetchUser(), fetchUser()]);
  promiseAll
    .then(results => {
      console.log('Results from Promise.all:', results); 
    })
    .catch(error => {
      console.error('Error in Promise.all:', error);
    });
  

  const promiseRace = Promise.race([fetchUser(), fetchUser()]);
  promiseRace
    .then(result => {
      console.log('Result from Promise.race:', result); 
    })
    .catch(error => {
      console.error('Error in Promise.race:', error);
    });
  

  