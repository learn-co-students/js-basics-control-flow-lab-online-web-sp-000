// Write your code in this file!

function scuberGreetingForFeet(num) {
  if(num <= 400) {
    str = 'This one is on me!';
  }
  else if(num >= 2500) {
    str = 'No can do.';
  }
  else if(num >= 2000) {
    str = 'I will gladly take your thirty bucks.';
  }
  else {
    str = 'other';
  }
  return str;
}

function ternaryCheckCity(destination) {
  if(destination === 'NYC') {
    str = 'Ok, sounds good.';
  } else {
    str = 'No go.';
  }
  return str;
}

function switchOnCharmFromTip(quantity) {
  if(quantity === 'generous') {
    str = 'Thank you so much.';
  } else if(quantity == 'not as generous') {
    str = 'Thank you.';
  } else {
    str = 'Bye.';
  }
  return str;
}
