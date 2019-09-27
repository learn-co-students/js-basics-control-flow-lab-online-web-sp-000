function scuberGreetingForFeet(feet){
  let result
  if (feet <= 400) {
    result = "This one is on me!"
  }
  else if (1999 < feet && feet < 2500) {
    result = "I will gladly take your thirty bucks."
  }
  else {
    result = "No can do."
  }
  return result;
}

function ternaryCheckCity(city){
  if (city == "NYC") {
    return "Ok, sounds good."
  }
  else {
    return "No go."
  }
}

function switchOnCharmFromTip(tip){
  if (tip == "generous") {
    return "Thank you so much."
  }
  else if (tip == "not as generous") {
    return "Thank you."
  }
  else {
    return "Bye."
  }
}
