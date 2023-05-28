import axios from 'axios';

const addArrayToEnd = async (array) => {
  try {
    const response = await axios.post('http://localhost:3001/tasks', {
      array
    });
    
    console.log('POST request successful:', response.data);
  } catch (error) {
    console.error('Error adding array:', error);
  }
};

export default addArrayToEnd

