let people = [4, 3, 6];
let limit = 6;

var numRescueBoats = function (people, limit) {
  if (people.length >= 1 && people.length <= 5 * Math.pow(10, 4)) {
    let summ;
    let count = 0;
    people.sort((a, b) => a - b);
    for (let i = 0; i < people.length; i++) {
      for (let y = people.length - 1; y > 0; y--) {
        if (
          (people[i] && people[y]) >= 1 &&
          limit >= (people[i] && people[y]) &&
          limit <= 3 * Math.pow(10, 4)
        ) {
          summ = people[i] + people[y];
          if (summ <= limit) {
            people.splice(y, 1);
            people.splice(i, 1);
            count++;
          }
        }
      }
    }
    return count + people.length;
  }
};

console.log(numRescueBoats(people, limit));

/**
 3, 2, 2, 1 - 3 = 3
 1,2 - 3 = 1
 3,5,3,4 - 5 = 4
 2,2 - 6 = 1
 5,1,4,2 - 3 = 2
 3,8,7,1,4 - 9 = 3
 4,3,6 - 6 = 3



 console.log("summ: ", summ);
            console.log("limit: ", limit);
            console.log("i: ", i);
            console.log("y: ", y);
console.log(count);
  console.log(people);
  console.log("Result: ", count + people.length);


 let start = false;
          if (summ == limit) {
            people.splice(y, 1);
            people.splice(i, 1);
            count++;
            i = 0;
            y = 0;
            start = true;
          }
          if (summ < limit && start == true) {
            people.splice(y, 1);
            people.splice(i, 1);
            count++;
            i = 0;
            y = 0;
          }


 */
