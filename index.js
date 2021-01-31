function startBtn() {
   const firstNumb = document.getElementById('firstNumb');
   var number = Math.random();
   const playerOne = firstNumb.innerHTML = Math.round(number * 1000 + 1);

   const secondNumb = document.getElementById('secondNumb');
   var number = Math.random();
   const playerTwo = secondNumb.innerHTML = Math.round(number * 1000 + 1);

   if (playerOne > playerTwo) {
       document.getElementById('result').innerHTML = 'player 1 wins!!';
   } else {
       document.getElementById('result').innerHTML = 'player 2 wins!!';
   }
   if(playerOne == playerTwo) {
       document.getElementById('result').innerHTML = 'DRAW!!!'
   }

} 


    