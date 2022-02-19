// 判斷是否為回文數值 =>
// ex: 121 回文為 121 => true; 123 回文為 321 => false;

const getIsPalindromeNumber = (x) => {
  let tmp = x;
  let reversedNum = 0;
  let lastDigit = 0;
  let times = x.toString().length;
  for (let i = 0; i < times; i++) {
    lastDigit = tmp % 10;
    reversedNum = reversedNum * 10 + lastDigit;
    tmp = parseInt(tmp / 10);
  }
  return x === reversedNum;
};

console.log("getIsPalindromeNumber(123)", getIsPalindromeNumber(123));
console.log("getIsPalindromeNumber(121)", getIsPalindromeNumber(121));

// 以 123 為例
// lastDigit    3  | 2  | 1
// reversedNum  3  | 32 | 321
// tmp          12 | 1  | 1
