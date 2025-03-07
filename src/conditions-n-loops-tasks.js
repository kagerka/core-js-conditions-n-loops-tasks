/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */
function isPositive(number) {
  if (Math.sign(number) === -1) {
    return false;
  }
  return true;
}

/**
 * Returns the maximum of three numbers without using Array and Math classes methods.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */
function getMaxNumber(a, b, c) {
  if (a > b && a > c) {
    return a;
  }
  if (b > a && b > c) {
    return b;
  }
  return c;
}

/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * See more details at https://en.wikipedia.org/wiki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 * @param {Object} queen - The position of the queen.
 * @param {Object} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 */
function canQueenCaptureKing(queen, king) {
  if (
    queen.x === king.x ||
    queen.y === king.y ||
    queen.x * king.x === queen.y * king.y ||
    Math.abs(queen.x - king.x) === Math.abs(queen.y - king.y)
  ) {
    return true;
  }
  return false;
}

/**
 * Determines whether a triangle is isosceles based on its side lengths.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 *
 * @example:
 *  1, 2, 3   => false
 *  3, 1, 2   => false
 *  2, 3, 2   => true
 *  3, 2, 2   => true
 *  2, 2, 3   => true
 *  2, 2, 5   => false
 *  3, 0, 3   => false
 */
function isIsoscelesTriangle(a, b, c) {
  if (
    (a === b && a + b > c && c > 0) ||
    (a === c && a + c > b && b > 0) ||
    (b === c && b + c > a && a > 0)
  ) {
    return true;
  }
  return false;
}

/**
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 *
 * @example:
 *  1   => I
 *  2   => II
 *  5   => V
 *  10  => X
 *  26  => XXVI
 */
function convertToRomanNumerals(num) {
  const romanNums = {
    39: 'XXXIX',
    38: 'XXXVIII',
    37: 'XXXVII',
    36: 'XXXVI',
    35: 'XXXV',
    34: 'XXXIV',
    33: 'XXXIII',
    32: 'XXXII',
    31: 'XXXI',
    30: 'XXX',
    29: 'XXIX',
    28: 'XXVIII',
    27: 'XXVII',
    26: 'XXVI',
    25: 'XXV',
    24: 'XXIV',
    23: 'XXIII',
    22: 'XXII',
    21: 'XXI',
    20: 'XX',
    19: 'XIX',
    18: 'XVIII',
    17: 'XVII',
    16: 'XVI',
    15: 'XV',
    14: 'XIV',
    13: 'XIII',
    12: 'XII',
    11: 'XI',
    10: 'X',
    9: 'IX',
    8: 'VIII',
    7: 'VII',
    6: 'VI',
    5: 'V',
    4: 'IV',
    3: 'III',
    2: 'II',
    1: 'I',
    0: '',
  };
  const result = romanNums[num];
  return result;
}

/**
 * Converts a number to a string, replacing digits with words.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} numberStr - The number as a string.
 * @return {string} The number with digits replaced by words.
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */
function convertNumberToString(numberStr) {
  let result = '';
  const numbers = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    '.': 'point',
    ',': 'point',
    '-': 'minus',
  };

  switch (true) {
    case numberStr.length === 1:
      result = `${numbers[numberStr[0]]}`;
      return result;
    case numberStr.length > 1:
      for (let i = 0; i < numberStr.length; i += 1) {
        if (i === 0) {
          result = `${numbers[numberStr[i]]}`;
        }
        if (i > 0) {
          result += ` ${numbers[numberStr[i]]}`;
        }
      }
      return result;
    default:
      break;
  }
  return result;
}

/**
 * Determines whether a string is a palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 */
function isPalindrome(str) {
  let reverseStr = '';
  for (let i = str.length - 1; i >= 0; i -= 1) {
    reverseStr += str[i];
  }
  if (str === reverseStr) {
    return true;
  }
  return false;
}

/**
 * Finds the first occurrence of a letter in a string.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 'е'     => 4
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, letter) {
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === letter) {
      return i;
    }
  }
  return -1;
}

/**
 * Checks if a number contains a specific digit.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 */
function isContainNumber(num, digit) {
  const numToString = `${num}`;
  const digitToString = `${digit}`;
  for (let i = 0; i < numToString.length; i += 1) {
    if (digitToString === numToString[i]) {
      return true;
    }
  }
  return false;
}

/**
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
 */
function getBalanceIndex(/* arr */) {
  throw new Error('Not implemented');
  // console.log(arr);
  // let leftPosition = 0;
  // let rightPosition = arr.length - 1;
  // let leftSum = 0;
  // let rightSum = 0;
  // if (arr[0] === arr[arr.length - 1] && arr.length === 3) {
  //   return 1;
  // }
  // if (arr.length > 3) {
  //   leftSum = arr[leftPosition];
  //   rightSum = arr[rightPosition];
  //   while (leftPosition < rightPosition) {
  //     if (rightPosition - leftPosition > 2) {
  //       if (leftSum === -rightSum) {
  //         leftPosition += 1;
  //         leftSum += arr[leftPosition];
  //         rightPosition -= 1;
  //         rightSum += arr[rightPosition];
  //         console.log(leftPosition);
  //         console.log(rightPosition);
  //         console.log(leftSum);
  //         console.log(rightSum);
  //       }
  //       if (leftSum > rightSum) {
  //         rightPosition -= 1;
  //         rightSum += arr[rightPosition];
  //         console.log(leftPosition);
  //         console.log(rightPosition);
  //         console.log(leftSum);
  //         console.log(rightSum);
  //       }
  //       if (leftSum < rightSum) {
  //         leftPosition += 1;
  //         leftSum += arr[leftPosition];
  //         console.log(leftPosition);
  //         console.log(rightPosition);
  //         console.log(leftSum);
  //         console.log(rightSum);
  //       }
  //     }
  //     if (leftSum === rightSum && rightPosition - leftPosition === 2) {
  //       console.log(leftPosition);
  //       console.log(rightPosition);
  //       console.log(leftSum);
  //       console.log(rightSum);
  //       console.log('result: ', leftPosition + 1);
  //       return leftPosition + 1;
  //     }
  //     if (leftSum !== rightSum && rightPosition - leftPosition === 2) {
  //       console.log(leftPosition);
  //       console.log(rightPosition);
  //       console.log(leftSum);
  //       console.log(rightSum);
  //       console.log('result: ', -1);
  //       return -1;
  //     }
  //   }
  // }
  // console.log('result: ', -1);
  // return -1;
}

// const array = [1, 2, 5, 3, 0]; // 2
// const array = [2, 3, 9, 5]; // 2
// const array = [1, 2, 3, 4, 5]; // -1
// const array = [1, 1]; // -1
// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9] // -1
// const array = [] // -1
// const array = [-9, 0, -4, 8, -9, -1, 6, 7, -22]; // 6
// const a = -9 + 0 - 4 + 8 - 9;
// const b = -22;
// console.log('leftSum: ', a);
// console.log('rightSum: ', b);
// getBalanceIndex(array);
/**
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 */
function getSpiralMatrix(size) {
  const result = [];

  for (let i = 0; i < size; i += 1) {
    result[i] = [];
  }

  let xStart = 0;
  let xEnd = size - 1;
  let yStart = 0;
  let yEnd = size - 1;
  let num = 1;

  while (xStart <= xEnd && yStart <= yEnd) {
    for (let i = xStart; i < xEnd; i += 1) {
      result[xStart][i] = num;
      num += 1;
    }
    xStart += 1;

    for (let i = yStart; i <= yEnd; i += 1) {
      result[i][yEnd] = num;
      num += 1;
    }
    yEnd -= 1;

    for (let i = yEnd; i >= yStart; i -= 1) {
      result[xEnd][i] = num;
      num += 1;
    }
    xEnd -= 1;

    for (let i = yEnd; i > yStart; i -= 1) {
      result[i][yStart] = num;
      num += 1;
    }
    yStart += 1;
  }
  return result;
}

/**
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */
function rotateMatrix(matrix) {
  const origMatrix = JSON.parse(JSON.stringify(matrix));
  const result = matrix;

  for (let i = matrix.length - 1, k = 0; i >= 0; i -= 1, k += 1) {
    for (let j = 0; j < matrix.length; j += 1) {
      result[j][i] = origMatrix[k][j];
    }
  }
  return result;
}

/**
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */
// function sort(leftArr, rightArr) {
//   const sortedArr = [];
//   let leftIndex = 0;
//   let rightIndex = 0;

//   while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
//     if (leftArr[leftIndex] < rightArr[rightIndex]) {
//       sortedArr.push(leftArr[leftIndex]);
//       leftIndex += 1;
//     }
//     if (rightArr[rightIndex] < leftArr[leftIndex]) {
//       sortedArr.push(rightArr[rightIndex]);
//       rightIndex += 1;
//     }
//   }
//   return [
//     ...sortedArr,
//     ...leftArr.slice(leftIndex),
//     ...rightArr.slice(rightIndex),
//   ];
// }

function sortByAsc(/* arr */) {
  throw new Error('Not implemented');
  // if (arr.length < 2) {
  //   return arr;
  // }

  // let left = [];
  // let right = [];
  // left = arr.slice(0, arr.length / 2);
  // right = arr.slice(arr.length / 2);

  // const result = sort(sortByAsc(left), sortByAsc(right));

  // return result;
}

// sortByAsc([-10, 9, 5, -4, -2, 7, 1]); // ?

/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */
function shuffleChar(str, iterations) {
  let m = 0;
  let n = 0;
  let result = str;
  let temp = '';
  const repeat = [];
  const arr = [];

  for (let i = 0; i < iterations; i += 1) {
    if (result === str) {
      repeat[m] = i;
      m += 1;
    }
    for (let j = 0; j < str.length; j += 2) {
      temp += result[j];
    }
    for (let j = 1; j < str.length; j += 2) {
      temp += result[j];
    }

    result = temp;
    temp = '';
    arr[n] = result;
    n += 1;
    if (repeat.length === 2) {
      break;
    }
  }

  const tail = iterations % repeat[1];
  if (tail !== 0) {
    result = arr[tail - 1];
  }

  if (repeat.length === 1) {
    result = str;
    for (let i = 0; i < iterations; i += 1) {
      for (let j = 0; j < str.length; j += 2) {
        temp += result[j];
      }
      for (let j = 1; j < str.length; j += 2) {
        temp += result[j];
      }
      result = temp;
      temp = '';
    }
  }

  return result;
}

shuffleChar('012345', 8); // ?
// shuffleChar(
//   '9187397600645826336523164812517981502384822264086522635648474056558066277071278215463963060044782702',
//   5
// ); // ?
// shuffleChar(
//   '782125968929965796394260710839560771967549727182885182215301904061798043736630994859235970311239064738899964698202776884985159801309974723431716837267958178653340656052175977064813894836640525153302883069603090132707863305098941628063013676397768368162630284419175547615196233066256160007118729328003197876429556899345807860192402883030252611024890718951310331270681969597197120679209524663899284041650532735450100130630912259476967402888584153104588719041563727916867066088248871490144724770583452170614524225662240706999377965134243217110169341702095818332180323716085485323892690439180313197133674238154878150419986422108987864632393958466188743625700976003079229195824360658594166242937575921754408110437731639082292813972033979795579407937053478146315061729192360324348796291115006215884251116911827687304089243950456331442059357414154054933189730308047644461608697113585312987937961181779787666931958041337821129855121172242028688687054771742902906533204839464078642629672648677582793563056825',
//   10000
// ); // ?

// -8129725423314947674563875512711551093343739769487046610415838183144457372577109290209476452454563040
// +8657193919104319872473476763659171040041489512737425712423317424044247583264768153535555840379596400
/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 */

function getNearestBigger(number) {
  let left = [];
  let num = [];
  let right = [];
  const numbers = [...`${number}`];
  for (let i = numbers.length - 2; i >= 0; i -= 1) {
    if (numbers[i] < numbers[i + 1]) {
      left = numbers.splice(0, i);
      num = numbers.splice(0, 1);
      right = numbers.splice(0);
      break;
    }
  }

  right = right.sort((a, b) => a - b);
  const rightNum = right.find((el) => el > num[0]);
  const rightNumIndex = right.findIndex((el) => el > num[0]);
  if (rightNum) {
    const buf = num[0];
    num[0] = right[rightNumIndex];
    right[rightNumIndex] = buf;
    right.sort((a, b) => a - b);
  }
  const result = +[...left, ...num, ...right].join('');
  return result;
}

module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};
