function scuberGreetingForFeet(length){
  let cost;
  if (length <= 400) {
    return cost = 'This one is on me!';
  }
    else if (length > 2000 && length < 2500) {
      return cost = 'I will gladly take your thirty bucks.';
    }
      else {
        return cost = 'No can do.';
      }
}

function ternaryCheckCity(city){
  return city === 'NYC' ? ('Ok, sounds good.') : ('No go.');
}

function switchOnCharmFromTip(tip){
  let tipAnswer;
  switch (tip) {
    case 'generous' : return tipAnswer = 'Thank you so much.'
    case 'not as generous' : return tipAnswer = 'Thank you.'
    default : return tipAnswer = 'Bye.'
  }
}