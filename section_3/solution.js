const a = [1, 3, 5, 2, 4];

//Question 1: Given an array const a = [1, 3, 5, 2, 4] generate an array result1 from a, which should be equal to [1, 5, 4].
const result1 = a.filter((each, index) => index % 2 == 0);
console.log(`Result 1: ${result1}`);

//Question 2: Given an array const a = [1, 3, 5, 2, 4]generate an array result2 from a, which should be equal to [1, 9, 25, 4, 16].
const result2 = a.map((each) => {
  return each * each;
});
console.log(`Result 2: ${result2}`);

//Question 3: Given an array const a = [1, 3, 5, 2, 4]generate an array result3 from a, which should be equal to [1, 25, 16].
const result3 = a
  .filter((each, index) => index % 2 == 0)
  .map((each) => {
    return each * each;
  });
console.log(`Result 3: ${result3}`);
