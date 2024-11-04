//exercise 1
console.log("=============================================================");
function createSequentialTrianglePattern(height: number) {
  let currentNumber = 1;

  for (let i = 1; i <= height; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += (currentNumber < 10 ? "0" : "") + currentNumber + " ";
      currentNumber++;
    }
    console.log(row.trim());
  }
}
createSequentialTrianglePattern(4);

console.log("=============================================================");
//exercise 2
function fizzBuzz(n: number) {
  const result: string[] = [];

  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      result.push("FizzBuzz");
    } else if (i % 3 === 0) {
      result.push("Fizz");
    } else if (i % 5 === 0) {
      result.push("Buzz");
    } else {
      result.push(i.toString());
    }
  }

  console.log(result.join(", "));
}
fizzBuzz(6);

console.log("=============================================================");
//ecercise 3
function calculateBMI(weight: number, height: number): string {
  const bmi = weight / (height * height);
  if (bmi < 18.5) return "less weight";
  if (bmi >= 18.5 && bmi <= 24.9) return "ideal";
  if (bmi >= 25.0 && bmi <= 29.9) return "overweight";
  if (bmi >= 30.0 && bmi <= 39.9) return "very overweight";
  return "obesity";
}
console.log(calculateBMI(70, 1.75));

console.log("=============================================================");
//exercise 4
function removeOddNumbers(arr: number[]): number[] {
  return arr.filter((num) => num % 2 === 0);
}
console.log(removeOddNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

console.log("=============================================================");
//exercise 5
function stringToArray(str: string) {
  return str.split(" ");
}
console.log(stringToArray("Hello World"));
