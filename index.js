// Write your code in this file!
function scuberGreetingForFeet(feet){
    let greeting; 
    if(feet <= 400){
        greeting = "This one is on me!";
    }else if(feet > 2000 && feet < 2500){
        greeting = "I will gladly take your thirty bucks.";
    } else if(feet > 2500){
        greeting = "No can do.";
    }
    return greeting;
}

function ternaryCheckCity(city){
    let response;
    city === "NYC" ? (response = 'Ok, sounds good.') : (response = "No go.");
    return response
}

function switchOnCharmFromTip(tip){
    let response;
    if(tip === "generous"){
        response = "Thank you so much.";
    }else if(tip === "not as generous"){
        response = "Thank you.";
    }else{
        response = "Bye.";
    }
    return response
}