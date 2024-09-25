function getDistinctIntegers(...arrays) {
    const countMap = new Map();
  
    // Count occurrences of each integer
    arrays.forEach(array => {
      array.forEach(num => {
        countMap.set(num, (countMap.get(num) || 0) + 1);
      });
    });
  
    // Filter out integers that appear more than once
    const distinctIntegers = [];
    for (const [num, count] of countMap) {
      if (count === 1) {
        distinctIntegers.push(num);
      }
    }
  
    return distinctIntegers;
  }
  
  // Example usage:
  const arr1 = [1, 2, 3];
  const arr2 = [2, 3, 4];
  const arr3 = [3, 4, 5];
  
  console.log(getDistinctIntegers(arr1, arr2, arr3)); // Output: [1, 5]
  