let numbers = [1,2,3,4,5,7,8,9,10,11,14]

const filteredNums = numbers.filter((n) => {
        return n > 4 && n < 8
      });
      console.log("The first non-consecutive numbers are", filteredNums);
