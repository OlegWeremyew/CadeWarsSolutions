function oddOrEven(array) {
    if ( (array.reduce( (sum, current) =>sum + current, 0 ) ) % 2 == 0 ) {
      return "even";
    } else if ( (array.reduce( (sum, current) =>sum + current, 0 ) ) % 2 != 0 ) {
      return "odd";
    } else {
      return "even";
    }
  }