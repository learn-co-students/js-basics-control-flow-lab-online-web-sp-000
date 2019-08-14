// Write your code in this file!
function scuberGreetingForFeet(distance) {
  let result;
  
  if (distance <= 400) {
    result = 'This one is on me!';
  } else if (distance > 2500) {
    result = 'No can do.';
  } else if (distance > 2000) {
    result = 'I will gladly take your thirty bucks.'
  } 
  return result;
  
}

function ternaryCheckCity(city) {
  return city === 'NYC' ? 'Ok, sounds good.':'No go.'
}

function switchOnCharmFromTip(tip) {
  let result;
  switch (tip) {
    case 'generous':
      result = "Thank you so much.";
      break;
    case 'not as generous':
      result = "Thank you.";
      break;
    default:
      result ="Bye.";
  }
  return result;

}