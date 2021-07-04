function scuberGreetingForFeet(someNumber){

  let result;

  if (someNumber <= 400)

  {result = "This one is on me!"}



  else if (someNumber > 2000  && someNumber <=2500)

  {result = "I will gladly take your thirty bucks."}

  else if (someNumber > 2500)

  {result = "No can do."}


return result;

  // Write your code here!
}

function ternaryCheckCity(someCity){
  // Write your code here!

  let result;

  if (someCity === "NYC")

  {result = "Ok, sounds good."}



  else if (someCity != "NYC")

  {result = "No go."}



return result;
}

function switchOnCharmFromTip(someTip){

  // Write your code here!

let result;

switch (someTip) {
    case 'generous':
        result = 'Thank you so much.';
        break;
    case 'not as generous':
        result = 'Thank you.';
        break;
    default:
        result = 'Bye.';
        break;
}
return result;
}
