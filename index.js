
const routine = [
   wakeDog,
   leashDog,
   walkToPark,
   throwFrisbee,
    walkHome,
    unleashDog
]


function wakeDog(dogName, dogBreed) {
  console.log(`Wake ${dogName} the ${dogBreed}`);
  return (`Wake ${dogName} the ${dogBreed}`);
}

function leashDog(dogName, dogBreed) {
  console.log(`Leash ${dogName} the ${dogBreed}`);
  return (`Leash ${dogName} the ${dogBreed}`);

}
function walkToPark(dogName, dogBreed) {
  console.log(`Walk to the park with ${dogName} the ${dogBreed}`);
  return (`Walk to the park with ${dogName} the ${dogBreed}`);
}
function throwFrisbee(dogName, dogBreed) {
  console.log(`Throw the frisbee for ${dogName} the ${dogBreed}`);
  return (`Throw the frisbee for ${dogName} the ${dogBreed}`);
}
function walkHome(dogName, dogBreed) {
  console.log(`Walk home with ${dogName} the ${dogBreed}`);
  return (`Walk home with ${dogName} the ${dogBreed}`);
}
function unleashDog(dogName, dogBreed) {
  console.log(`Unleash ${dogName} the ${dogBreed}`);
  return (`Unleash ${dogName} the ${dogBreed}`);
}
// function stuff() {
//   console.log(`Wake ${dogName} the ${dogBreed}`);
// }


// 1) has a function wakeDog
//      2) has a function leashDog
//      3) has a function walkToPark
//      4) has a function throwFrisbee
//      5) has a function walkHome
//      6) has a function unleashDog
//      7) accepts 2 parameters for dogName and dogBreed
//    the array of functions
//      8) has variables for each activity
//      9) has an array called 'routine' that contains each activity
//    the function that runs the array o' functions
//      10) calls into the independent functions


function exerciseDog(dogName, dogBreed) {
  return routine.map(fn => fn(dogName, dogBreed))
}
