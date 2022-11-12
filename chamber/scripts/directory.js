const requestURL = 'https://himunsie.github.io/wdd230/chamber/data.json';
const cards = document.querySelector('.cards');


fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);

        const members = jsonObject['chamberMembers']; //store converted response into array called prophets
        members.forEach(displayMembers);
       //loop through each record and process into own card

    });

    function displayMembers(member) {
        // Create elements to add to the document
        let card = document.createElement('section');
      
        let busName = document.createElement('h3');
        let image = document.createElement('img');
        let web = document.createElement('a');
        let address = document.createElement('p');
        let phone = document.createElement('p');

      
        // Change the textContent property of the h2 element to contain the prophet's full name
        busName.textContent = ` ${member.name}`;
        web.textContent = ` ${member.website}`;
        address.textContent =` ${member.address}`;
        phone.textContent = `${member.phone}`;
      
        // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
        image.setAttribute('src', member.imageurl);
        image.setAttribute('alt', `${member.name} logo`);
        image.setAttribute('loading', 'lazy');

        // Build the website link attribute 

        web.setAttribute('href', member.website);
        web.setAttribute('target', 'blank');
      
        // Add/append the section(card) with the h2 element
        card.appendChild(image);
        card.appendChild(busName);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(web);
      
        // Add/append the existing HTML div with the cards class with the section(card)
        cards.appendChild(card);
      };
/* 
    function displayList(member) {
        // Create elements to add to the document
        let memList = document.createElement('section');
        // memList.classList.add("memList");
        let busName = document.createElement('h3');
        let web = document.createElement('a');
        let address = document.createElement('p');
        let phone = document.createElement('p');

      
        // Change the textContent property of the h2 element to contain the prophet's full name
        busName.textContent = ` ${member.name}`;
        web.textContent = ` ${member.website}`;
        address.textContent =` ${member.address}`;
        phone.textContent = `${member.phone}`;

        // Build the website link attribute 

        web.setAttribute('href', member.website);
        web.setAttribute('target', 'blank');
      
        // Add/append the section(card) with the h2 element
        memList.appendChild(busName);
        memList.appendChild(address);
        memList.appendChild(phone);
        memList.appendChild(web);
      
        // Add/append the existing HTML div with the cards class with the section(card)
        list.appendChild(memList);
      };  
 */
//toggle list view

const gridButton = document.querySelector('#gridBtn');
const listButton = document.querySelector('#listBtn');
const display = document.querySelector('.cards');


listButton.addEventListener("click", () => {
    display.classList.add("list");
    display.classList.remove("cards");
  });
  
gridButton.addEventListener("click", () => {
    display.classList.add("cards");
    display.classList.remove("list");
  })
