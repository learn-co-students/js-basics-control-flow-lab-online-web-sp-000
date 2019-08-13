function scuberGreetingForFeet(numOfFeet) {
  let greeting;
  if (numOfFeet <= 400) {
    greeting = "This one is on me!";
  } else if (numOfFeet > 2500) {
    greeting = "No can do.";
  } else if (numOfFeet > 2000) {
    greeting = "I will gladly take your thirty bucks.";
  }
  return greeting;
}

function ternaryCheckCity(city) {
  let response;
  city === 'NYC' ? (response = "Ok, sounds good.") : (response = "No go.");
  return response;
}

function switchOnCharmFromTip(tip) {
  let response = "Bye.";
  switch (tip) {
    case 'generous' :
      response = "Thank you so much.";
      break;
    case 'not as generous' :
      response = "Thank you.";
      break;
  }
  return response;
}
