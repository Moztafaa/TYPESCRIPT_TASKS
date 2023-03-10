type mix = string | number;
type mixArr = string[] | number[];

// Concatenate two arrays

const concatArr = (arr1: mixArr, arr2: mixArr): mix[] => {
  return [...arr1, ...arr2];
};

// Add numbers in an array

const addArr = (arr: number[]): number => {
  let total: number = 0;
  arr.forEach((x: number) => {
    total += x;
  });
  return total;
};

// Find the largest number in an array
const lgNum = (arr: number[]): number => {
  let largest: number = 0;
  arr.forEach((x: number) => {
    if (x > largest) {
      largest = x;
    }
  });
  return largest;
};

// Remove the 3rd item from an array
const cut3 = (arr: number[]): number[] => {
  arr.splice(2, 1);
  return arr;
};

module.exports = {
  concatArr,
  addArr,
  lgNum,
  cut3,
};
