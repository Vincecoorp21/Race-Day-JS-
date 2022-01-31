let raceNumber = Math.floor(Math.random() * 1000);

let registeredEarly = false;

let runnerAge = 19;

if (runnerAge > 18 && registeredEarly === true) {
  raceNumber = raceNumber + 1000;
}

if (runnerAge > 18 && registeredEarly === true) {
  console.log(`Your race number is ${raceNumber} and you starts at 9,30h`);
} else if (runnerAge > 18 && registeredEarly === false) {
  console.log(`Your race number is ${raceNumber} and you starts at 11,00h`);
} else if (runnerAge < 18) {
  console.log(`Your race number is ${raceNumber} and you starts at 12,30h`);
} else {
  console.log('Go to the desk to see the terms, please');
}
