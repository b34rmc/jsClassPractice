/* 
Challenge 10/18/2022:

Create a "user" object with the following attributes:
 - firstName: "your name"
 - lastName: "your name"
 - city: "your city"
 - semesters <object>
   - semesterOne: "incomplete"
   - semesterTwo: "incomplete"
   - semesterThree: "incomplete"
   - semesterFour: "incomplete"

Then, change the applicable semesters to "complete".
Delete the semesterFour attribute.
To the first level of your object, add a "favoriteLanguage" attribute, and set it equal to a string with your favorite programming language.

Log your user object after each of the processes
*/

let user = {
  firstName: "Matt",
  lastName: "Caldwell",
  city: "Vernal",
  semesters: {
    semesterOne: "incomplete",
    semesterTwo: "incomplete",
    semesterThree: "incomplete",
    semesterFour: "incomplete",
  },
};
console.log(user);
console.log(user.semesters);

user = { favlang: "js", ...user };
user.semesters["semesterOne"] = "completed";
user.semesters["semesterTwo"] = "in Progress";
delete user.semesters["semesterFour"];

console.log(user);
console.log(user.semesters);
