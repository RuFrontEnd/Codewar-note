// leetcode #9 Palindrome Number
// 判斷是否為回文數值
// ex: 121 回文為 121 => true; 123 回文為 321 => false;

const getIsPalindromeNumber = (x) => {
  let tmp = x;
  let reversedNum = 0; // X 反轉後的數值
  let lastDigit = 0; // x 的最後一位數
  let times = x.toString().length;
  for (let i = 0; i < times; i++) {
    lastDigit = tmp % 10;
    reversedNum = reversedNum * 10 + lastDigit;
    tmp = parseInt(tmp / 10);
  } // 取得反轉後字串
  return x === reversedNum;
};

console.log("getIsPalindromeNumber(123)", getIsPalindromeNumber(123));
console.log("getIsPalindromeNumber(121)", getIsPalindromeNumber(121));

// 以 123 為例
// lastDigit    3  | 2  | 1
// reversedNum  3  | 32 | 321
// tmp          12 | 1  | 1

// 參考 https://www.code-recipe.com/post/palindrome-number 解法 1
