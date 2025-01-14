// Task 3.1
async function fetchTodo() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
      
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      
      const todo = await response.json();
      
      return todo; 
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
      throw error; 
    }
  }
  
  fetchTodo()
  .then(todo => {
    console.log('Todo received:', todo); 
  })
  .catch(error => {
    console.error('Error:', error); 
  });

// Task 3.2
async function fetchUser() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
      
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      
      const user = await response.json();
      
      return user; 
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
      throw error; 
    }
  }

  fetchUser()
  .then(user => {
    console.log('User received:', user); 
  })
  .catch(error => {
    console.error('Error:', error); 
  });

  
