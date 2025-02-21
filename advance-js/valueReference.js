
// When a primitive value is assigned to a variable, a copy of the value is stored. Changing one variable doesn't affect the original value

let a = 1
a + 5 
let b = a

//console.log(b) // 1

// REFERENCES

let obj1 = { name: "Alice" };
let obj2 = obj1;  // obj2 now holds a reference to obj1

// Output: { name: "Alice" } { name: "Alice" }
obj2.name = "Bob";  // Changing obj2 also affects obj1

//console.log(obj1, obj2);  // Output: { name: "Bob" } { name: "Bob" }


let obj3 = {...obj1} // shaloow copy
obj3.name = 'vini'
console.log(obj2)
console.log(obj3)
// without change the original


