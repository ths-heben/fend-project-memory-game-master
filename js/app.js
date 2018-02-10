/*
 * Create a list that holds all of your cards
 */
var cards = [
    "fa-diamond",
    "fa-paper-plane-o",
    "fa-anchor",
    "fa-bolt",
    "fa-cube",
    "fa-leaf",
    "fa-bicycle",
    "fa-bomb"
];

var turn = 0;       // Each click on a card is a turn
var symbols = [];   // Array saves symbol classes of opened cards

/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

// create deck two times for 8 pair of cards
for (i = 0; i < 2; i++) {
    cards = shuffle(cards);
    cards.forEach(function(card){
        $('.deck').append('<li class="card"><i class="fa ' + card + '"></i></li>'); // card HTML
    });
}

// listener for a card
$('.card').click(openCard);


function openCard() {
    let symbolClassName = $(this).find('i').attr('class'); // Name of symbol
    symbols.push(symbolClassName);

    if (turn % 2 === 0 && turn !== 0) {
        console.log('turn back');
        $(this).toggleClass("show open");

        if ($('li').hasClass("open")) {
            $('li').removeClass("show open");
            $(this).toggleClass("show open");
        }


    }
    else {
        $(this).toggleClass("show open");

        if (turn % 2 === 1) {

            function symbolMatchCheck(symbolsArray) {
                for (i = 0; i < symbolsArray.length; i++) {
                    if (symbolsArray[i] === symbolsArray[i-1])
                        $('.show').addClass('match');
                }
                symbolsArray.length = 0; // Symbols array has to be empty for next Check
            }
            symbolMatchCheck(symbols);

            //console.log('Check match');
            //console.log(symbols);
        }
    }

    console.log(turn); // log each turn
    addTurn(); // turn++
}

function addTurn() {
    turn++;

    // TODO: Add star configuration here
}

/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
