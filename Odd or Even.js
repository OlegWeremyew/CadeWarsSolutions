/*
Given a list of integers, determine whether the sum of its elements is odd or even.

Give your answer as a string matching "odd" or "even".

If the input array is empty consider it as: [0] (array with a zero).
*/
function oddOrEven(array) {
    if ( (array.reduce( (sum, current) =>sum + current, 0 ) ) % 2 == 0 ) {
      return "even";
    } else if ( (array.reduce( (sum, current) =>sum + current, 0 ) ) % 2 != 0 ) {
      return "odd";
    } else {
      return "even";
    }
  }