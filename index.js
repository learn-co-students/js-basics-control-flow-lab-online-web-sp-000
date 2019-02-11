function scuberGreetingForFeet(feet) {
  switch (true) {
    case feet <= 400:
      return "This one is on me!";
      break;
    case feet > 2500:
      return "No can do.";
      break;
    case feet > 2000:
      return "I will gladly take your thirty bucks.";
      break;
  }
}

function ternaryCheckCity(city) {
  return city === "NYC" ? "Ok, sounds good." : "No go.";
}

function switchOnCharmFromTip(tip) {
  switch (tip) {
    case "generous":
      return "Thank you so much.";
      break;
    case "not as generous":
      return "Thank you.";
      break;
    default:
      return "Bye.";
  }
}
