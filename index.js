// Write your code in this file!
function scuberGreetingForFeet(distance) {
    let ride;
    if (distance <= 400) {
        ride = "This one is on me!";
    } else if (distance > 2000 && distance < 2500) {
        ride = "I will gladly take your thirty bucks.";
    } else if (distance > 2500) {
        ride = "No can do.";
    }
    return ride;
}

function ternaryCheckCity(city) {
    return (city === 'NYC' ? "Ok, sounds good." : "No go.");
}

// function switchOnCharmFromTip(tip) {
//      switch (tip) {
//          case 'generous':
//          reply = 'Thank you so much.';
//          break;
//          case 'not as generous':
//          reply = 'Thank you.';
//          break;
//          default:
//          reply = 'Bye.';
//          break;
//      }
//      return reply;
// }

function switchOnCharmFromTip (tip) {
    switch (tip) {
      case 'generous':
        return 'Thank you so much.';
      case 'not as generous':
        return 'Thank you.';
      default:
        return 'Bye.';
    }
}