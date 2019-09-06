// function scuberGreetingForFeet(){
//   // Write your code here!
// }

// function ternaryCheckCity(){
//   // Write your code here!
// }

// function switchOnCharmFromTip(){
//   // Write your code here!
// }

function scuberGreetingForFeet(someNumber) {
  let result
  if (someNumber <= 400) {
    result = 'This one is on me!'
  }
  else if (someNumber > 2000 && someNumber < 2500 ) {
    result = 'I will gladly take your thirty bucks.'
  }
  else {
    result = 'No can do.'
  }
  return result
}

function ternaryCheckCity(someCity) {
  let result
  if (someCity === 'NYC') {
    result = 'Ok, sounds good.'
  }
  else {
    result = 'No go.'
  }
  return result
}

function switchOnCharmFromTip(someTip) {
  let result
  if (someTip === 'generous') {
    result = 'Thank you so much.'
  }
  else if (someTip === 'not as generous') {
    result = 'Thank you.'
  }
  else {
    result = 'Bye.'
  }
  return result
}
