function scuberGreetingForFeet(distance){
  // Write your code here!
  if (distance <= 400){
    return "This one is on me!";
  } else if (distance > 2000 && distance <= 2500){
    return "I will gladly take your thirty bucks.";
  } else if (distance > 2500){
    return "No can do.";
  }
}

function ternaryCheckCity(city){
  // Write your code here!
  let string;
  city === 'NYC' ? string = 'Ok, sounds good.' : string = 'No go.';
  return string;
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  switch (tip) {
    case 'generous':
      return "Thank you so much.";
    case 'not as generous':
      return "Thank you.";
    default:
      return "Bye.";
  }
}