'use strict';

let secertNumber=Math.trunc(Math.random()*20)+1
let score=20;
let highScore=0;

const displayMessage = function(message){
  document.querySelector('.message').textContent=message;
}

document.querySelector('.check').addEventListener('click',function(){
  const guess =Number( document.querySelector('.guess').value);
  if(!guess){
   displayMessage('🚫 No number');
  }
  else if(guess === secertNumber){
    displayMessage('👏 correct number');
    document.querySelector('body').style.backgroundColor='#60b347';
    document.querySelector('.number').style.width='30rem';
    document.querySelector('.number').textContent=secertNumber;
    if(score > highScore){
      highScore = score;
      document.querySelector('.highscore').textContent=highScore;
    }

  }
  else if (guess !== secertNumber){
    if(score > 1){
     displayMessage(guess > secertNumber ? '📈 Too High' : '📉 Too Low') 
      score = score-1;
    document.querySelector('.score').textContent= score;
    }
    else{
     displayMessage('🥵 You lost the game');
      document.querySelector('body').style.backgroundColor='red';
      document.querySelector('.score').textContent= 0; 
    }
  }
 /*  else if (guess > secertNumber){
    if(score > 1){
    document.querySelector('.message').textContent='📈 Too High'
    score = score-1;
    document.querySelector('.score').textContent= score
    }
    else{
      document.querySelector('.score').textContent= '🥵 You lost the game'
      document.querySelector('body').style.backgroundColor='red';
    }
  }
  else if (guess < secertNumber){
    if(score > 1){
      document.querySelector('.message').textContent='📉 Too Low'
      score = score-1;
      document.querySelector('.score').textContent= score;
      }
      
   
  } */
  console.log(guess);
})

document.querySelector('.again').addEventListener(
  'click', function(){
    
    
    score=20;
    secertNumber = Math.trunc(Math.random()*20)+1
    
    document.querySelector('.score').textContent= score;
    //console.log(document.querySelector('.score').textContent= 20);
    document.querySelector('.guess').value="";
    document.querySelector('body').style.backgroundColor='#222';
    document.querySelector('.number').style.width='15rem';
    displayMessage('Start guessing...');
    document.querySelector('.number').textContent='?';

    
  }
)