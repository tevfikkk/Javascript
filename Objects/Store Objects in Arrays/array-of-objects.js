const arr = [
      { 
            question: 'Who is the strongest viking?',
            answer: 'Thors'
      },
      { 
            question: 'Who is the largest viking?',
            answer: 'Thorkell'
      },
      { 
            question: 'Who is the viking with wearing a helmet?', 
            answer: 'Bjorn'
      }
];

let correct = [];
let incorrect = [];
let correctAnswers = 0;

for ( let i = 0; i < arr.length; i++ ) {

      let question = arr[i].question;
      let answer = arr[i].answer;
      let respond = prompt(question);
      
      if ( respond == answer ) {
            correctAnswers++;
            correct.unshift(question);
      }

      else {
            incorrect.unshift(question);
      }

}

function createListItems(arr1) {
      let items = '';
      for (let i = 0; i < arr1.length; i++) {
            items += `<li>${arr1[i]}</li>`
      }
      return items;
}

document.querySelector('main').innerHTML = `

      <h1> You got ${correctAnswers} question(s) correct </h1>
      <h2> You got these questions right: </h2>
      <ol>
            ${createListItems(correct)}
      </ol>

      <h2> You got these questions wrong: </h2>
      <ol>
            ${createListItems(incorrect)}
      </ol>
`;