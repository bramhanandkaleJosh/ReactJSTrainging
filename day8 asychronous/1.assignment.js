// Write a function that can stop execution of a function for the number of milliseconds sent as an argument

const func = async (timeLap) => {

console.log('printing value of entered from UI....', timeLap);

  console.log('printing before.... ',Date.now());
  //Call your function here eg. sleep(3000)
  setTimeout(() => console.log("Delayed for given time lapse second.", Date.now()), timeLap);
  console.log('printing after set timeout : ', Date.now());
}
