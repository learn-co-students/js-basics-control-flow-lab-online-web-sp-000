// Write your code in this file!
 function scuberGreetingForFeet(distance){

    if (distance > 2500){
      return 'No can do.';
    }

    else if (distance > 2000) {
       return 'I will gladly take your thirty bucks.';
    }
     else if (distance <= 400)
       return 'This one is on me!';
   // if somevalue <= 400 {
   //
   // }
 }


 function ternaryCheckCity(city){

   return city === "NYC" ? 'Ok, sounds good.' : 'No go.';

// //             'Ok, sounds good.'
//
// => true

 }

 function  switchOnCharmFromTip(tip){

  switch (tip) {
    case 'generous':
        return 'Thank you so much.';
        break;
    case 'not as generous':
        return 'Thank you.';
        break;
    case 'thanks for everything':
        return 'Bye.';
        break;
}
// => "lasagna"

}

  // switch (tip) {
  //   case 'generous':
  //       'Thank you so much.'
  //       break;


// => "lasagna"
