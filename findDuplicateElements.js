
let numbers = [1, 2, 3, 4, 5, 3, 2, 6, 7, 8, 1];


let duplicates = numbers.filter((value, index, self) => {    // Using filter to find duplicates
    return self.indexOf(value) !== index;
});


let uniqueDuplicates = [...new Set(duplicates)];  // Using Set to remove duplicate entries in the duplicates array

console.log("Original array:", numbers);
console.log("Duplicate elements:", uniqueDuplicates);


