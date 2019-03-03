// Write your code in this file!
function scuberGreetingForFeet(value) {
  if (value <= 400) {
    return 'This one is on me!'
  } else if (value > 2500) {
    return 'No can do.'
  } else if (value > 2000) {
    return 'I will gladly take your thirty bucks.'
  }
}

function ternaryCheckCity(cityvalue) {
  return (cityvalue == 'NYC' ? 'Ok, sounds good.' : 'No go.');
}

function switchOnCharmFromTip(tip) {
  switch (tip) {
    case 'generous':
      return 'Thank you so much.';
      break;
    case 'not as generous':
      return 'Thank you.';
      break;
    default:
      return 'Bye.';
      break;
  }
}
