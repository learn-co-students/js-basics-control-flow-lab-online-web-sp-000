// Write your code in this file!
function scuberGreetingForFeet(feet) {
  let result;
  if (feet <= 400) {
    result = 'This one is on me!';
  }
  else if (feet > 2000 && feet < 2500) {
    result = 'I will gladly take your thirty bucks.';
  }
  else if (feet > 2500) {
    result = 'No can do.';
  }
  return result
}

function ternaryCheckCity(city) {
  let message;
  if (city != 'NYC') {
    message = 'No go.';
  }
  else if (city == 'NYC') {
    message = 'Ok, sounds good.';
  }
  return message
}

function switchOnCharmFromTip(tip) {
  let reply;
  if (tip == 'generous') {
    reply = 'Thank you so much.';
  }
  else if (tip == 'not as generous') {
    reply = 'Thank you.';
  }
  else {
    reply = 'Bye.';
  }
  return reply
}
