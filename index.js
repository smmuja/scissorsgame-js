let name = prompt('Hello, what\'s your name?');
alert('Hi ' +name+',' + ' Welcome to Scissors Game!');


// Game start 
let ask = true;
while (ask) {

    // Player choice
    let player = prompt('Choose one : \nrock \npaper \nscissors')




    // Computer choice
    // Generate random numbers 
    let comp = Math.random();

    if (comp < 0.34 ) {
        comp = 'rock';
    }
    else if (comp >= 0.34 && comp < 0.67) {
        comp = 'paper'
    }
    else {
        comp = 'scissors'
    }

    // console.log(comp)


    let result = '';
    // Generate game rules
    if ( player == comp) {
        result = 'DRAW!';
    }
    else if (player == 'rock'){
        // if (comp == 'paper') {
        //     result = 'YOU LOSE!';
        // }
        // else {
        //     result = 'YOU WIN!';
        // }
        result 
        = (comp == 'paper') ? 'YOU LOSE!' : 'You win!';
    }
    else if (player == 'paper') {
        if (comp == 'scissors') {
            result = 'YOU LOSE!';
        }
        else {
            result = 'YOU WIN!';
        }
    }
    else if (player == 'scissors'){
        if (comp == 'rock'){
            result = 'YOU LOSE!';
        }
        else {
            result = 'YOU WIN!';
        }
    }
    else {
        result = 'WRONG INPUT!';
    }



    // Generate results
    alert('You choose : '+ player + '\nComputer choose : ' +comp+ '\n\nThe result is: \n' +result)

    ask = confirm('again?');
}

alert('Thank you for playing <3');