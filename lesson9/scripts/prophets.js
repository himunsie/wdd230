const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
const cards = document.querySelector('.cards');

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);

        const prophets = jsonObject['prophets']; //store converted response into array called prophets
        prophets.forEach(displayProphets); //loop through each record and process into own card

    });

    function displayProphets(prophet) {
        // Create elements to add to the document
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let image = document.createElement('img');
        let h3 = document.createElement('h3');
        let h4 = document.createElement('h4');

      
        // Change the textContent property of the h2 element to contain the prophet's full name
        h2.textContent = ` ${prophet.name} ${prophet.lastname}`;
        h3.textContent = `Date of Birth: ${prophet.birthdate}`;
        h4.textContent =`Place of Birth: ${prophet.birthplace}`;
      
        // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
        image.setAttribute('src', prophet.imageurl);
        image.setAttribute('alt', `Portait of ${prophet.name} ${prophet.lastname} - ${prophet.order}`);
        image.setAttribute('loading', 'lazy');
      
        // Add/append the section(card) with the h2 element
        card.appendChild(h2);
        card.appendChild(image);
        card.appendChild(h3);
        card.appendChild(h4);
      
        // Add/append the existing HTML div with the cards class with the section(card)
        document.querySelector('div.cards').appendChild(card);
      }