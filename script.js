const makeChange = (c) => {
  // your name here
	  let change = {
    q: 0, // Quarters
    d: 0, // Dimes
    n: 0, // Nickels
    p: 0  // Pennies
  };

  // Calculate number of quarters
  change.q = Math.floor(c / 25);
  c %= 25; // Remainder after quarters

  // Calculate number of dimes
  change.d = Math.floor(c / 10);
  c %= 10; // Remainder after dimes

  // Calculate number of nickels
  change.n = Math.floor(c / 5);
  c %= 5; // Remainder after nickels

  // Calculate number of pennies
  change.p = c; // What's left is the number of pennies

  return change;

};

// Do not the change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));
