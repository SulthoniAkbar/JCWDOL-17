//number 1
function getStats(arr: number[]): {
  lowest: number;
  highest: number;
  average: number;
} {
  let lowest = arr[0],
    highest = arr[0],
    sum = 0;

  for (let num of arr) {
    if (num < lowest) lowest = num;
    if (num > highest) highest = num;
    sum += num;
  }

  const average = sum / arr.length;
  return { lowest, highest, average };
}
console.log(getStats([12, 5, 23, 18, 4, 45, 32]));

//number 2
function concatenateWords(arr: string[]) {
  if (arr.length === 0) return "";
  if (arr.length === 1) return arr[0];
  return arr.slice(0, -1).join(", ") + ", and " + arr[arr.length - 1];
}
console.log(concatenateWords(["apple", "banana", "cherry", "date"]));

//number 3
function secondSmallest(numbers: number[]) {
  if (numbers.length < 2) return null;

  let [smallest, secondSmallest] = [Infinity, Infinity];
  for (let num of numbers) {
    if (num < smallest) {
      secondSmallest = smallest;
      smallest = num;
    } else if (num < secondSmallest && num !== smallest) {
      secondSmallest = num;
    }
  }
  return secondSmallest;
}

console.log(secondSmallest([5, 3, 1, 7, 2, 6]));
