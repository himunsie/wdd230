const requestURL = 'https://himunsie.github.io/wdd230/chamber/data.json';
const cards = document.querySelector('.cards');

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);

        const members = jsonObject['chamberMembers']; //store converted response into array called prophets
        members.forEach(displayMembers); //loop through each record and process into own card

    });

    function displayMembers(member) {
        // Create elements to add to the document
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let image = document.createElement('img');
        let h3 = document.createElement('h3');
        let h4 = document.createElement('h4');
        let h5 = document.createElement('h5');

      
        // Change the textContent property of the h2 element to contain the prophet's full name
        h2.textContent = ` ${member.name}`;
        h3.textContent = ` ${member.website}`;
        h4.textContent =` ${member.address}`;
        h5.textContent = `Phone: ${member.phone}`;
      
        // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
        image.setAttribute('src', member.imageurl);
        image.setAttribute('alt', `${member.name} logo`);
        image.setAttribute('loading', 'lazy');
      
        // Add/append the section(card) with the h2 element
        card.appendChild(h2);
        card.appendChild(image);
        card.appendChild(h3);
        card.appendChild(h4);
        card.appendChild(h5);
      
        // Add/append the existing HTML div with the cards class with the section(card)
        document.querySelector('div.cards').appendChild(card);
      }