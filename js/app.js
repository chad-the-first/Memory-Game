/*
 * Create a list that holds all of your cards
 */
const diamond = "<li class='card'><i class='fa fa-diamond'></i></li>";
const plane = "<li class='card'><i class='fa fa-paper-plane-o'></i></li>";
const anchor = "<li class='card'><i class='fa fa-anchor'></i></li>";
const bolt = "<li class='card'><i class='fa fa-bolt'></i></li>";
const cube = "<li class='card'><i class='fa fa-cube'></i></li>";
const leaf = "<li class='card'><i class='fa fa-leaf'></i></li>";
const bicycle = "<li class='card'><i class='fa fa-bicycle'></i></li>";
const bomb = "<li class='card'><i class='fa fa-bomb'></i></li>";

let list = [diamond, plane, anchor, bolt, cube, leaf, bicycle, bomb, diamond, plane, anchor, bolt, cube, leaf, bicycle, bomb];

let class1 = "";
let choice1 = "";
let choice2 = "";


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

shuffle(list);

for(let x = 0; x < list.length; x++){
    $(".deck").prepend(list[x]);
}

// click function to match cards
$("li").click(function(){
    if(this.getAttribute("class") === "card match"){
        
    }else{
        if ($(this).attr("class") === "card open show"){
            if(choice2 === ""){
                console.log($(this));
                $(this).removeClass("open show");
                class1 = "";
                choice1 = "";      
            }else{
                console.log($(this)); 
                choice1.removeClass("open show");
                class1 = "";
                choice1 = "";
                choice2.removeClass("open show");
                choice2 = "";   
            }   
        }else{
            if(class1 === ""){
                if(choice1 === ""){
                    $(this).addClass("open show");
                    choice1 = $(this);
                    class1 = $(this).children('i').attr("class");
                    console.log(choice1);
                }else{
                    if(choice2 === ""){
                       choice1.removeClass("open show");
                        $(this).addClass("open show");
                        choice1 = $(this);
                        class1 = $(this).children('i').attr("class");
                        console.log(choice1); 
                    }else{
                        choice1.removeClass("open show");
                        choice2.removeClass("open show");
                        choice2 = "";
                        $(this).addClass("open show");
                        choice1 = $(this);
                        class1 = $(this).children('i').attr("class");
                        console.log(choice1);
                    }  
                }
            }else if($(this).children('i').attr("class") === class1){
                $(this).removeClass("open show");
                $(this).addClass("match");
                choice1.addClass("match");
                choice1.removeClass("open show")
                class1 = "";
            }else{
                $(this).addClass("open show");
                choice2 = $(this);
                class1 = "";
            }

        }
    }
})

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
