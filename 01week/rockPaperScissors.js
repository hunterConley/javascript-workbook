'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

/*
Define a function named rockPaperScissors()
rockPaperScissors() will accept two parameters: hand1, hand2
Using conditional statements, compare the two hands to one another
 */
const rockPaperScissors = (hand1, hand2) => {

    //Convert user input to lowercase and trim whitespace
    hand1 = hand1.toLowerCase().trim();
    hand2 = hand2.toLowerCase().trim();

    //Functions that will be called by the conditional output and display the result
    const itsATie = () => "It's a tie!";
    const handOneWins = () => "Hand One Wins!";
    const handTwoWins = () => "Hand Two Wins!";
    const invalidHand = () => "Invalid Input!";

    //Conditional statement to test for a tie.
    if (hand1 === hand2) {
        return itsATie();
    }

    //Using a conditional statement, determine the winner of the rock paper scissors match.
    if (hand1 === 'rock') {
        if (hand2 === 'scissors') {
            return handOneWins();
        } else if (hand2 === 'paper') {
            return handTwoWins();
        }
    } else if (hand1 === 'paper') {
        if (hand2 === 'rock') {
            return handOneWins();
        } else if (hand2 === 'scissors') {
            return handTwoWins();
        }
    } else if (hand1 === 'scissors') {
        if (hand2 === 'rock') {
            return handTwoWins();
        } else if (hand2 === 'paper') {
            return handOneWins();
        }
    } else {
        return invalidHand();
    }




}

function getPrompt() {
  rl.question('Select Hand One (Rock, Paper, or Scissors): ', (answer1) => {
    rl.question('Select Hand Two (Rock, Paper, or Scissors): ', (answer2) => {
      rockPaperScissors(answer1, answer2);
      getPrompt();
    });
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#rockPaperScissors()', () => {
    it('should detect a tie', () => {
      assert.equal(rockPaperScissors('rock', 'rock'), "It's a tie!");
      assert.equal(rockPaperScissors('paper', 'paper'), "It's a tie!");
      assert.equal(rockPaperScissors('scissors', 'scissors'), "It's a tie!");
    });
    it('should detect which hand won', () => {
      assert.equal(rockPaperScissors('rock', 'paper'), "Hand Two Wins!");
      assert.equal(rockPaperScissors('paper', 'scissors'), "Hand Two Wins!");
      assert.equal(rockPaperScissors('rock', 'scissors'), "Hand One Wins!");
    });
    it('should scrub input to ensure lowercase with "trim"ed whitepace', () => {
      assert.equal(rockPaperScissors('rOcK', ' paper '), "Hand Two Wins!");
      assert.equal(rockPaperScissors('Paper', 'SCISSORS'), "Hand Two Wins!");
      assert.equal(rockPaperScissors('rock ', 'sCiSsOrs'), "Hand One Wins!");
    });
  });
} else {

  getPrompt();

}
