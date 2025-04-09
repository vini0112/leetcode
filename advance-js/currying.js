

// INTEAD OF THAT 
// function add(a, b) {
//     return a + b;
//   }
  
//   add(2, 3); // returns 5

// CURRYING IS LIKE THIS BELOW

function curriedAdd(a) {
    return function(b) {
      return a + b;
    };
  }
  
  curriedAdd(2)(3); // returns 5

