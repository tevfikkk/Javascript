const person = {
      name: 'Reggie',
      role: 'Software developer',
      skills: ['JavaScript', 'HTML', 'CSS'],
      isTeacher: true
    };
    
    // Store the keys of the `person` object in `personProps`
    const personProps = Object.keys(person); 
    console.log(personProps);
    console.log(personProps.length);

    const personProps1 = Object.values(person);
    console.log(personProps1);