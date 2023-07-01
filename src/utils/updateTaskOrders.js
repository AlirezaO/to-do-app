function updateSortOrder(firstArray, secondArray, temp) {
  let sortedArray
  if (temp === 1) {
    sortedArray = firstArray.map((item, index) => {
      const foundItem = secondArray.find(obj => obj.array.task === item);
      if (foundItem) {
        // console.log("Here1")
        return { ...foundItem, id: index };
      } else {
        return null;
      }
    })
  } else {
    sortedArray = firstArray.map((item, index) => {
      const foundItem = secondArray.find(obj => obj.array.deadline === item);
      if (foundItem) {
        // console.log("Here2")
        return { ...foundItem, id: index };
      } else {
        return null;
      }
    })
  }


  return sortedArray.filter(item => item !== null);
}
export default updateSortOrder