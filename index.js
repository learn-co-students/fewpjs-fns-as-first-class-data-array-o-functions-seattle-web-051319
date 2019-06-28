// console.log("Wake Byron the poodle");
function wakeDog(dogName, dogBreed) {
   console.log(`Wake ${dogName} the ${dogBreed}`);
   return `Wake ${dogName} the ${dogBreed}`;
}

// console.log("Leash Byron the poodle");
function leashDog(dogName, dogBreed) {
  console.log(`Leash ${dogName} the ${dogBreed}`);
  return `Leash ${dogName} the ${dogBreed}`;
}

// console.log("Walk to the park with Byron the poodle");
function walkToPark(dogName, dogBreed) {
  console.log(`Walk to the park with ${dogName} the ${dogBreed}`);
  return `Walk to the park with ${dogName} the ${dogBreed}`;
}

// console.log("Throw the frisbee for Byron the poodle");
function throwFrisbee(dogName, dogBreed) {
  console.log(`Throw the frisbee for ${dogName} the ${dogBreed}`);
  return `Throw the frisbee for ${dogName} the ${dogBreed}`;
}

// console.log("Walk home with Byron the poodle");
function walkHome(dogName, dogBreed) {
  console.log(`Walk home with ${dogName} the ${dogBreed}`);
  return `Walk home with ${dogName} the ${dogBreed}`;
}

// console.log("Unleash Byron the poodle");
function unleashDog(dogName, dogBreed) {
  console.log(`Unleash ${dogName} the ${dogBreed}`);
  return `Unleash ${dogName} the ${dogBreed}`;
}

const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog];

function exerciseDog(dogName, dogBreed){
  return routine.map(functio => functio(dogName, dogBreed))
}


//
// let dogName = "Joe";
// let dogBreed = "show";
// wakeDog(dogName, dogBreed)
