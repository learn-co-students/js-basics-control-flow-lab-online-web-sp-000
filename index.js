function scuberGreetingForFeet(density_level){
    if (density_level <= 400) {
        return "This one is on me!";
    } else if (density_level < 2500) {
        return "I will gladly take your thirty bucks.";
    } else {
        return "No can do.";
    }

}

function ternaryCheckCity(city){
    return city === "NYC" ? "Ok, sounds good." : "No go.";
}

function switchOnCharmFromTip(charm){
    switch (charm){
        case "generous":
            return "Thank you so much."
            break;
        case "not as generous": // case !"generous":
            return "Thank you."
            break;
        default:
            return "Bye.";
    }

}
