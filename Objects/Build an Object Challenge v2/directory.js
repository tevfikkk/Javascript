let html = '';
const main = document.querySelector('main');

for (let i = 0; i < pet.length; i++) {
      let pets = pet[i];

      html += `
      
            <h2> ${pets.name} </h2>
            <h3> ${pets.type} | ${pets.breed} </h3>
            <p> Age: ${pets.age} </p>
            ${pets.photo}

      `;

}

main.insertAdjacentHTML('beforeend', html);