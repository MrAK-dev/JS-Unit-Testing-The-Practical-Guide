export function add(numbers) {
  let sum = 0;

  for (const number of numbers) {
    sum += parseFloat(number, 10);
  }
  return sum;
}
