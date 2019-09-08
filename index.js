// Write your code in this file!
function scuberGreetingForFeet(distance) { 
  if (distance <= 400) {return 'This one is on me!'}
  else if (distance > 2000 && distance <= 2500) {return 'I will gladly take your thirty bucks.'}
  else if (distance > 2500) {return 'No can do.'}
}

function ternaryCheckCity(city) {
  let response
  city === 'NYC' ? response = "Ok, sounds good." : response = "No go.";
  return response;
}
//returns "Ok, sounds good." when the city is NYC
//should return "No go." if the destination city is not NYC

function switchOnCharmFromTip(tip) {
  //let response;
  switch (tip) {
  case 'generous':
    //response = "Thank you so much."
  return "Thank you so much.";
  //break;
  case 'not as generous':
    //response = "Thank you."
  return "Thank you.";
  //break;
  default:
  //response = "Bye."}
  //return response;
  return "Bye."}
}