import axios from 'axios';

const addArrayToEnd = async (array, func) => {
  if (func === 'append'){
    try {
        const response = await axios.post('http://localhost:3002/tasks', {
          array
      });
      
      console.log('POST request successful:', response.data);
    } catch (error) {
      console.error('Error adding array:', error);
    }
  } else if (func === 'replace'){
    try {
      const response = await axios.post('http://localhost:3002/tasks', {
        tasks = array
    });
    
      console.log('POST request successful:', response.data);
    } catch (error) {
      console.error('Error adding array:', error);
    }
  }
};

export default addArrayToEnd

