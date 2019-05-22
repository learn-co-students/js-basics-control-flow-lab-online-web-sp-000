function scuberGreetingForFeet(distance) {
  let greeting;

  if (distance <= 400) {
      return 'This one is on me!';
  }
  else if ((distance < 2500) && (distance > 2000)) {
  return 'I will gladly take your thirty bucks.';
  }
  else {
    return 'No can do.';
  }
}

function ternaryCheckCity(city) {
  let result;
  city === 'NYC' ? result = 'Ok, sounds good.' : result = 'No go.';
  return result;
}

function switchOnCharmFromTip(tip) {
  switch (tip) {
    case 'generous':
      return 'Thank you so much.';
    case 'not as generous':
        return 'Thank you.';
    default:
        return 'Bye.';
  }
}
