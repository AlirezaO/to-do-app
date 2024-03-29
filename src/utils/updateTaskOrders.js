function updateSortOrder(firstArray, secondArray, temp) {
  console.log("completedList: ", firstArray, " and fullComplete: ", secondArray)
  let sortedArray
  if (temp === 1) {
    sortedArray = firstArray.map((item, index) => {
      const foundItem = secondArray.find(obj => obj.array.task[0] === item[0]);
      if (foundItem) {
        // console.log("Here1")
        return { ...foundItem, id: index };
      } else {
        return null;
      }
    })
  } else if (temp === 2) {
    sortedArray = firstArray.map((item, index) => {
      const foundItem = secondArray.find(obj => obj.array.deadline === item);
      if (foundItem) {
        return { ...foundItem, id: index };
      } else {
        return null;
      }
    })
  } else if (temp === 3) {
    sortedArray = firstArray.map((item, index) => {
      const foundItem = secondArray.find(obj => obj.id === index);
      if (foundItem) {
        return { ...foundItem, id: index };
      } else {
        return null;
      }
    })
  }


  return sortedArray.filter(item => item !== null);
}
export default updateSortOrder