function updateSortOrder(firstArray, secondArray) {
  const sortedArray = firstArray.map((item, index) => {
    const foundItem = secondArray.find(obj => obj.array.task === item);
    if (foundItem) {
      return { ...foundItem, id: index };
    } else {
      return null;
    }
  });

  return sortedArray.filter(item => item !== null);
}
export default updateSortOrder