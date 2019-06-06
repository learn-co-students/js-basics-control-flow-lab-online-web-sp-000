// Write your code in this file!
function scuberGreetingForFeet(distance) {
  let response
  if (distance < 400) {
  response  = 'This one is on me!';
  }
  else if (distance > 2000  && distance < 2500) {
  response = 'I will gladly take your thirty bucks.';
  }
  else if (distance > 2500) {
    response = 'No can do.';
  }
  return response;
}

function ternaryCheckCity(destination) {
  let response
  if (destination == 'NYC') {
    response = 'Ok, sounds good.';
  }
  
  else {
    response = 'No go.';
  }
  return response;
}

function switchOnCharmFromTip(tip) {
  let response 
  if(tip == 'generous') {
    response = 'Thank you so much.';
  }
  else if (tip == 'not as generous') {
    response = 'Thank you.';
  }
  else {
    response = 'Bye.';
  }
  
   return response;
}
