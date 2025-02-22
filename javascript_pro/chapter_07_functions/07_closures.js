// Closures

function createComparisonFunction(propertyName) {
  return function (object1, object2) {
    var value1 = object1[propertyName];
    var value2 = object2[propertyName];

    if (value1 < value2) {
      return -1;
    } else if (value1 > value2) {
      return 1;
    } else {
      return 0;
    }
  };
}

// create function
var compareNames = createComparisonFunction('name');

// call function
var result = compareNames({ name: 'Nicholas' }, { name: 'Greg' });

console.log(result);  // 1

// dereference function - memory can now be reclaimed
compareNames = null;
