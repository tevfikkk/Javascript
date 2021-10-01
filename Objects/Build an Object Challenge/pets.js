const pet = [

      {
            name: 'Aussie',
            type: 'Dog',
            breed: 'Aussie',
            age: 5,
            photo: '<img src="img/aussie.jpg" alt="Australian Shepherd">'
      },

      {
            name: 'Dachshund',
            type: 'Dog',
            breed: 'Dachshund',
            age: 4,
            photo: '<img src="img/dachshund.jpg" alt="Australian Shepherd">'
      },

      {
            name: 'Golden',
            type: 'Dog',
            breed: 'Golden',
            age: 6,
            photo: '<img src="img/golden.jpg" alt="Australian Shepherd">'
      },

      {
            name: 'Persian',
            type: 'Cat',
            breed: 'Persian',
            age: 4,
            photo: '<img src="img/persian.jpg" alt="Australian Shepherd">'
      },

      {
            name: 'Pug',
            type: 'Dog',
            breed: 'Pug',
            age: 2,
            photo: '<img src="img/pug.jpg" alt="Australian Shepherd">'
      },

      {
            name: 'Tabby',
            type: 'Cat',
            breed: 'Tabby',
            age: 6,
            photo: '<img src="img/tabby.jpg" alt="Australian Shepherd">'
      }

];

let html;

for ( let prop in pet ) {
      
      html += 

      `<div>

            <h2> ${pet[prop].name} </h2>
            <h3> ${pet[prop].type} | ${pet[prop].breed}</h3>
            <p> Age: ${pet[prop].age} </p>
            ${pet[prop].photo}
      
      </div>`;

}

document.querySelector('main').innerHTML = html;


















