function updateSortOrder(firstArray, secondArray) {
    const sortedSecondArray = [];
    for (let i = 0; i < firstArray.length; i++) {
      const item = firstArray[i];
      const index = secondArray.findIndex(obj => obj.array.task === item);
      if (index !== -1) {
        sortedSecondArray.push(secondArray[index]);
      }
    }
    return sortedSecondArray;
  }
export default updateSortOrder