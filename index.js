// Write your code in this file!
function scuberGreetingForFeet(rideLength) {
    let message;
    if (rideLength > 2500){
        message = "No can do."
    } else if(rideLength > 2000){
        message = "I will gladly take your thirty bucks.";
    } else if(rideLength <= 400){
        message = "This one is on me!";
    }

    return message;
};

function ternaryCheckCity(city){
    let message;
    if(city === 'NYC'){
        message = 'Ok, sounds good.'
    }else {
        message ='No go.'
    }
    return message;
};

function switchOnCharmFromTip(tip){
    let message;
    switch (tip){
        case "generous":
            message = "Thank you so much.";
            break; 
        case "not as generous":
            message = 'Thank you.';
            break;
        default:
            message = "Bye."
            break;
    }

    return message;
}