// Task 1

function calculateSumAndAverage(numbers) {
  // if array is empty
  if (numbers.length === 0) {
      return { sum: 0, average: 0 }; 
  }

  const sum = numbers.reduce((accumulator, current) => accumulator + current, 0);

  const average = sum / numbers.length;

  return { sum, average };
}

const numbers = [10, 20, 30, 40, 50];
const result = calculateSumAndAverage(numbers);
console.log(`Total Sum: ${result.sum}`);
console.log(`Average: ${result.average}`);


// Task 2

function removeDuplicates(arr) {
  return arr.filter((item, index) => arr.indexOf(item) === index);
}

const duplicatesStrings = ["Computer", "Laptop", "Mobile", "Computer", "Mac", "Mobile"];
const uniqueStrings = removeDuplicates(duplicatesStrings);
console.log(uniqueStrings);
