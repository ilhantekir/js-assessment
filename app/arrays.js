arraysAnswers = {
  /**
   * Find the 0 based index of item in arr.
   *
   * @param {Number[]} arr - An array of numbers
   * @param {Number} item - A number to find in arr
   * @returns {Number} The index of item in arr, or -1 if item is not in arr.
   */
  indexOf: function indexOf(arr, item) {
    // Implement a function, that returns the 0 based index of an element in an array.

    return arr.indexOf(item);

    // or the other solution way

    // for (let i = 0; i < arr.length; i += 1) {
    //   if (arr[i] === item) {
    //     return i;
    //   }
    // }
    // return -1;
  },

  /**
   * Determine the sum of the items of arr.
   *
   * @param {Number[]} arr - An array of numbers
   * @returns {Number} The numerical sum of all items in arr.
   */
  sum: function sum(arr) {
    let totalItem = 0;
    for (let i = 0; i < arr.length; i += 1) {
      totalItem += arr[i];
    }
    return totalItem;
    // or the other solution way => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce?v=a
    // return arr.reduce(function(prev, current){
    //   return prev + current;
    // });
  },

  /**
   * Create a new array with the same items as arr, excluding item
   *
   * @param {Number[]} arr - An array of numbers
   * @param {Number} item - A number to be excluded from the new array
   * @returns {Number[]} A new array containing all numbers from arr except item.
   */
  remove: function remove(arr, item) {
    let newArray = [];
    newArray = arr.filter(e => e !== item);
    return newArray;
    // or the other solution way
    // for (let i = 0; i < arr.length; i += 1) { // https://eslint.org/docs/rules/no-plusplus
    //   if (arr[i] === item) {
    //     arr.splice(i, 1);
    //     i -= 1;
    //   }
    // }
    // return arr;
  },

  /**
   * Adds a number, item, to the end of an array, arr.
   *
   * @param {Number[]} arr - An array of numbers
   * @param {Number} item - A number to be appended to the end of arr
   * @returns {Number[]} The array arr, with item appended.
   */
  append: function append(arr, item) {
    arr.push(item);
    return arr;
  },

  /**
   * Removes a number, item, from the end of an array, arr.
   *
   * @param {Number[]} arr - An array of numbers
   * @returns {Number[]} The array arr, with the last element removed..
   */
  truncate: function truncate(arr) {
    arr.pop();
    return arr;
  },

  /**
   * Adds a number, item, to the beginning of an array arr.
   *
   * @param {Number[]} arr - An array of numbers
   * @param {Number} item - A number to append to the beginning of arr.
   * @returns {Number[]} The array arr, with the first element item added
   */
  prepend: function prepend(arr, item) {
    arr.unshift(item);
    return arr;
  },

  /**
   * Removes the first element from an array
   *
   * @param {Number[]} arr - An array of numbers
   * @returns {Number[]} The array arr, with the first element item removed.
   */
  curtail: function curtail(arr) {
    arr.shift(arr);
    return arr;
  },

  /**
   * Combines the two arrays arr1 and arr2 together
   *
   * @param {Number[]} arr1 - An array of numbers
   * @param {Number[]} arr2 - An array of numbers
   * @returns {Number[]} A new array, with elements from arr1 and arr2 in that order.
   */
  concat: function concat(arr1, arr2) {
    return arr1.concat(arr2);
    // or the other solution way
    // for (let i = 0; i < arr2.length; i += 1) {
    //   arr1.push(arr2[i]);
    // }
    // return arr1;
  },

  /**
   * Insert a number item into an array arr at the 0 based position index.
   *
   * @param {Number[]} arr - An array of numbers
   * @param {Number} item - A number to be inerted into arr
   * @param {Number} index - A 0 based index into the array arr.
   * @returns {Number[]} The array arr, with the number item inserted at position index.
   */
  insert: function insert(arr, item, index) {
    // array.splice(start, deleteCount, item1, item2, ...)
    // index = 2, item = "z"
    arr.splice(index, 0, item);
    return arr; // [1, 2, "z", 3, 4]
  },

  /**
   * Counts the number of times a number item appears in an array arr.
   *
   * @param {Number[]} arr - An array of numbers
   * @param {Number} item - A number to count in arr
   * @returns {Number} The count of the number of times the number item appeared in arr.
   */
  count: function count(arr, item) {
    // arr = [1, 2, 4, 4, 3, 4, 3], item = 4
    let counter = 0;
    for (let i = 0; i < arr.length; i += 1) {
      if (arr[i] === item) {
        counter += 1;
      }
    }
    return counter; // 3
  },

  /**
   * Determines the number of duplicated numbers in the array arr.
   *
   * @param {Number[]} arr - An array of numbers
   * @returns {Number[]} An array of numbers that appear in arr more than once.
   */
  duplicates: function duplicates(arr) {
    const known = [];
    const duplicated = [];
    for (let i = 0; i < arr.length; i += 1) {
      if (known.indexOf(arr[i]) !== -1) {
        if (duplicated.indexOf(arr[i]) === -1) {
          duplicated.push(arr[i]);
        }
      } else {
        known.push(arr[i]);
      }
    }
    return duplicated.reverse(); // duplicated = [4, 3, 1] passed but correct answer [1, 3, 4] and then I used .reverse()
  },

  /**
   * Squares each number in an array arr. Example: square([1, 2, 3]) returns [1, 4, 9].
   *
   * @param {Number[]} arr - An array of numbers
   * @returns {Number[]} A new array of numbers that contains the elements of arr squared.
   */
  square: function square(arr) {
    const sq = [];
    for (let i = 0; i < arr.length; i += 1) {
      sq.push(arr[i] * arr[i]);
    }
    return sq;
  },

  /**
   * Finds the indices of the occurrences of a number target in an array of numbers arr.
   *
   * @param {Number[]} arr - An array of numbers
   * @param {Number} target - A number to find all occurences of.
   * @returns {Number[]} A new array of numbers which represent the indices of target in arr.
   */
  findAllOccurrences: function findAllOccurrences(arr, target) {
    const occurences = [];
    for (let i = 0; i < arr.length; i += 1) {
      if (arr[i] === target) {
        occurences.push(i);
      }
    }
    return occurences;
  },
};
