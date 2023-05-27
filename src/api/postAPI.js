import axios from 'axios';

const addArrayToEnd = (array) => {
  axios.post('http://localhost:3001/tasks', {
    tasks: [...array]
  })
    .then(response => {
      console.log('POST request successful:', response.data);
    })
    .catch(error => {
      console.error('Error adding array:', error);
    });
};

export default addArrayToEnd

