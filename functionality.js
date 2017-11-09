



var scores, roundScores, activePlayer, gamePlaying, double;

init();


var lastDice;

document.querySelector('.btn-roll').addEventListener('click', function () {
    
    if (gamePlaying){
        
    // 1. Random number
    dice = Math.floor(Math.random() * 6) + 1; 

    
    // 2. Display the result
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';
    
    
    // 3. update round score only if the rolled number != 1
        
        if (dice === 6 && lastDice === 6){
        scores[activePlayer] = 0;
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
        nextPlayer();   
        } else if (dice !== 1) {
        // Add score
        roundScore += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;   
    } else {
        // Next player
        nextPlayer(); 
    }
        lastDice = dice;
    }
    
    lastDice = dice;
    
});

document.querySelector('.btn-hold').addEventListener('click', function (){
  if (gamePlaying){
    // Add current score to global score
    scores[activePlayer] += roundScore;
    
    // Update the UI
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
      
      
      var input = document.querySelector('.final-score').value;
     var winningScore;
      
      
      if (input){
           winningScore = input;
      } else {
          winningScore = 10;
      }
    
    //Check if player won the game
    if (scores[activePlayer] >= winningScore){
        document.querySelector('#name-' + activePlayer).textContent = 'Winner!!';  
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.player-'+ activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-'+ activePlayer + '-panel').classList.remove('active');
        gamePlaying = false;
    } else{
        
   // Next Player
    nextPlayer();
        
    }  
  }
});

document.querySelector('.btn-new').addEventListener('click', init);

function nextPlayer(){
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        roundScore = 0;
        
        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';
        
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        
        //document.querySelector('.player-0-panel').classList.remove('active');
        //document.querySelector('.player-1-panel').classList.add('active');
        
        document.querySelector('.dice').style.display = 'none';
}

function init(){
scores = [0,0];
roundScore = 0;
activePlayer = 0;
gamePlaying = true;

document.querySelector('.dice').style.display = 'none'; 

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';
document.getElementById('name-0').textContent = 'Player 1';  
document.getElementById('name-1').textContent = 'Player 2';
document.querySelector('.player-0-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('winner');
document.querySelector('.player-0-panel').classList.remove('active');
document.querySelector('.player-0-panel').classList.add('active');
document.querySelector('.player-1-panel').classList.remove('active');
}









//document.querySelector('#current-' + activePlayer).textContent = dice;

//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';

//var x = document.querySelector('#score-0').textContent;
//console.log(x);

























