import axios from 'axios';

const addArrayToEnd = (array) => {
  axios.post('https://my-json-server.typicode.com/AlirezaO/to-do-app/db', {
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

