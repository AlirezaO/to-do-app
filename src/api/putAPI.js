import axios from 'axios';

export const updateTasks = async () => {
  try {
    const response = await axios.get('http://localhost:3002/tasks'); // Replace the URL with your JSON server endpoint
    const tasks = response.data;
    // Find the objects to be replaced (objects 3 and 6)
    const object3 = tasks.find((task) => task.id === 3);
    const object6 = tasks.find((task) => task.id === 6);
    console.log("This is object3 in put api: ", object3.array)
    console.log("This is object6 in put api: ", object6.array)
    // Swap the objects
    console.log("This is tasks in put api: ", tasks)
    const updatedTasks = tasks.map((task) => {
        let temp = {
            "task":'',
            "deadline":''
        }
        if (task.id === 3) {
            temp.task = object3.array.task
            temp.deadline = object3.array.deadline
            object3.array = object6.array
            console.log("This is temp in put api: ", temp)
            return object3
        } else if (task.id === 6) {
            object6.array.task = temp.task;
            object6.array.deadline = temp.deadline;
            return object6
        } else {
            return task;
        }
    });
    console.log("This is updatedtasks in put api: ", updatedTasks)
    
    // Perform the update by sending a PUT request to the JSON server
    await axios.put('http://localhost:3002/tasks', {tasks}); // Replace the URL with your JSON server endpoint

    console.log('Objects updated successfully!');
  } catch (error) {
    console.error('Error updating objects:', error);
  }
};
