var Dice = {};

// diceIndex object contains an array of dice objects to be accessed by a random roll.
Dice.diceIndex = {
  dice: [
    {
      number: 1,
      index: 0,
      diceIMG: './resources/images/dice-1.png'
    },
    {
      number: 2,
      index: 1,
      diceIMG: './resources/images/dice-2.png'
    },
    {
      number: 3,
      index: 2,
      diceIMG: './resources/images/dice-3.png'
    },
    {
      number: 4,
      index: 3,
      diceIMG: './resources/images/dice-4.png'
    },
    {
      number: 5,
      index: 4,
      diceIMG: './resources/images/dice-5.png'
    },
    {
      number: 6,
      index: 5,
      diceIMG: './resources/images/dice-6.png'
    }
  ],

  // roll dice may be called to return a random member of the dice object in diceIndex
  rollDice: function() {
    var diceRoll = Math.floor(Math.random() * 6);
    var diceObj = document.querySelector('.dice');

    //make dice object shake after rolling
    diceObj.classList.add('shake');
    window.setTimeout(function(){
      diceObj.classList.remove('shake');
    }, 200);
    return this.dice[diceRoll];
  }
};
