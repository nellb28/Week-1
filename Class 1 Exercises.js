/**
 * MATH
 */

// 1. Pagliacci charges $16.99 for a 13” pizza and $19.99 for a 17” pizza.
// What is the area for each of these pizzas? A = πr2
// (radius would be the listed size - i.e. 13" - divided by 2)
function calcCircleArea(radius) {
    return Math.PI * (Math.pow((radius/2), 2));
}

var formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  
    // These options are needed to round to whole numbers if that's what you want.
    minimumFractionDigits: 2, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  });
  
const SMALLPIZZADIAMETER = 13;
const LARGEPIZZADIAMETER = 17;
const SMALLPIZZACOST = 16.99;
const LARGEPIZZACOST = 19.99;

smallPizzaArea = calcCircleArea(SMALLPIZZADIAMETER);
console.log('small pizza area = ' + smallPizzaArea + " square inches");
largePizzaArea = calcCircleArea(LARGEPIZZADIAMETER);
console.log('small pizza area = ' + largePizzaArea + " square inches");

// 2. What is the cost per square inch of each pizza?
smallPizzaCostArea = SMALLPIZZACOST/smallPizzaArea;
console.log('small pizza cost per square inch = ' + formatter.format(smallPizzaCostArea));
largePizzaCostArea = LARGEPIZZACOST/largePizzaArea;
console.log('large pizza cost per square inch = ' + formatter.format(largePizzaCostArea));

// 3. Using the Math object, put together a code snippet
// that allows you to draw a random card with a value
// between 1 and 13 (assume ace is 1, jack is 11…)

function getRandomCard(){
    return Math.floor(Math.random() * 14);
}

console.log ('Random card = ' + getRandomCard());

// 4. Draw 3 cards and use Math to determine the highest
// card
cardOne = getRandomCard();
cardTwo = getRandomCard();
cardThree = getRandomCard();
console.log (`CardValues = [${cardOne}, ${cardTwo}, ${cardThree}] MAX value = ${Math.max(cardOne, cardTwo, cardThree)}`);

/**
 * ADDRESS LINE
 */

// 1. Create variables for firstName, lastName,
// streetAddress, city, state, and zipCode. Use
// this information to create a formatted address block
// that could be printed onto an envelope.


// 2. You are given a string in this format:
// firstName lastName(assume no spaces in either)
// streetAddress
// city, state zip(could be spaces in city and state)
// 
// Write code that is able to extract the first name from this string into a variable.
// Hint: use indexOf, slice, and / or substring


/**
 * FIND THE MIDDLE DATE
 */
// On your own find the middle date(and time) between the following two dates:
// 1/1/2020 00:00:00 and 4/1/2020 00:00:00
//
// Look online for documentation on Date objects.

// Starting hint:
const ENDDATE = new Date(2019, 3, 1);
// I used getTime from here https://www.w3schools.com/jsref/jsref_gettime.asp

function getMidDate(startDate, endDate){
    return new Date((startDate.getTime() + endDate.getTime()) / 2);
}    
console.log('mid date = ' + getMidDate(new Date("08/14/2020"),  new Date("09/14/2020")));