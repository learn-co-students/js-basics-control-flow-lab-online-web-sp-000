function scuberGreetingForFeet(feet){
  if (feet <= 400){
    return "This one is on me!";
  } else if (feet >= 2000 && feet < 2500) {
    return "I will gladly take your thirty bucks."
  } else {
    return "No can do."
  }
}

function ternaryCheckCity(cityName){
  return cityName === 'NYC' ? "Ok, sounds good." : "No go."
}

function switchOnCharmFromTip(tipAmount){
  switch(tipAmount){
    case 'generous':
      return 'Thank you so much.';
    case 'not as generous':
      return 'Thank you.';
    default:
      return "Bye.";
  }
}