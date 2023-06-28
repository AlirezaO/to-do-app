import axios from 'axios';

async function updateTasksInJsonServer(updatedTasks) {
  try {
    const response = await axios.put('http://localhost:3002/tasks',  updatedTasks );
    console.log('JSON object updated successfully:', response.data);
  } catch (error) {
    console.error('Failed to update JSON object:', error);
  }
}

export default updateTasksInJsonServer