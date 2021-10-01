const main = document.querySelector('main');

const getRandomNumber = (upper) => Math.floor(Math.random() * upper) + 1;

const randomNumber = getRandomNumber(10);

let guess;

let guessNumbers = 0;

let message;

do{

      guess = prompt(" Guess a number between 1 and 10. What would it be? ");
      guessNumbers++;

      if ( parseInt(guess) === randomNumber ) {
            message = ` <h3> Congr. You guessed correct number! </h3>
            <h2> The number was <strong> ${randomNumber} </strong> </h2> 
            <h2> It took you to have guessed <strong> ${guessNumbers} </strong> times! </h2> `;
            break;

      } else if ( guessNumbers === 10 ) {
            message = ` <h3> You are out of attempts </h3>
            <h2> The number was ${randomNumber} </h2>
 `;
            break;
      }


} while( guessNumbers < 10  )

main.insertAdjacentHTML("beforeend", message);










