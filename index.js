// Write your code in this file!
function scuberGreetingForFeet(number){
  if (number <= 400){
    return "This one is on me!"
  }else if (number > 2000 && number <= 2500){
    return 'I will gladly take your thirty bucks.'
  }else {
    return 'No can do.'
  }
}

function ternaryCheckCity(city){
  return city === "NYC" ? "Ok, sounds good.": "No go."
}

function switchOnCharmFromTip(tip){
  if (tip == "generous"){
    return 'Thank you so much.'
  }else if (tip == "not as generous"){
    return "Thank you."
  }else {
    return "Bye."
  }

}
