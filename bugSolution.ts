function greeter(person: string): string {
  return "Hello, " + person;
}

let user = ["Jane", "Doe"];

//Solution 1:  Access the array element
console.log(greeter(user[0])); // Accessing the first element of the array

// Solution 2: Concatenate array elements into a single string
let userName = user.join(" ");
console.log(greeter(userName)); // 'Hello, Jane Doe'

//Solution 3: Modify the function signature to accept an array
function greeterArray(persons: string[]): string {
  return "Hello, " + persons.join(" ");
}
console.log(greeterArray(user));