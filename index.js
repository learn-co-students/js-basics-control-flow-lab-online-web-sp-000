function scuberGreetingForFeet(number){
  if (number <= 400){
    return "This one is on me!";
  } else if (number > 2000 && number < 2500){
      return 'I will gladly take your thirty bucks.';
  } else {
    return 'No can do.';
  }
}



function ternaryCheckCity(city){
  let canTravel;
   city === "NYC" ? (canTravel='Ok, sounds good.') : (canTravel='No go.');
   return canTravel
}

function switchOnCharmFromTip(tip){
  switch (tip) {
      case 'generous':
          return 'Thank you so much.'
          break;
      case 'not as generous':
          return 'Thank you.'
          break;
      default:
      return 'Bye.'
  }}
