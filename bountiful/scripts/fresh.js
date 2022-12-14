const requestURL = "https://brotherblazzard.github.io/canvas-content/fruit.json";
const response = document.querySelector('.response');
const form = document.querySelector('.formbody');
const button = document.querySelector('.submitBtn');
let selectionList = []
    async function fetchFruitApi() {
    try {
        const response = await fetch(requestURL);
        if (response.ok) {
        const fruitData = await response.json();
        console.log(fruitData);
        
        


        let fruit1 = document.querySelector("#dropdown1");
        let fruit2 = document.querySelector("#dropdown2");
        let fruit3 = document.querySelector("#dropdown3");
        
        // Loop through Object ref: https://www.codebyamir.com/blog/populate-a-select-dropdown-list-with-json
        for (let i = 0; i < fruitData.length; i++) {
            let option1 = document.createElement("option");
            option1.textContent = fruitData[i].name;
            option1.value = fruitData[i].name;
            fruit1.add(option1);
        
            let option2 = document.createElement("option");
            option2.textContent = fruitData[i].name;
            option2.value = fruitData[i].name;
            fruit2.add(option2);
        
            let option3 = document.createElement("option");
            option3.textContent = fruitData[i].name;
            option3.value = fruitData[i].name;
            fruit3.add(option3);
        }
        
       

        } else {
        throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
    }
    
    fetchFruitApi();
    
/*     function displayDropdown(data) {
    
    let fruit1 = document.querySelector("#dropdown1");
    let fruit2 = document.querySelector("#dropdown2");
    let fruit3 = document.querySelector("#dropdown3");
    
    // Loop through Object 
    for (let i = 0; i < data.length; i++) {
        let option1 = document.createElement("option");
        option1.textContent = data[i].name;
        option1.value = data[i].name;
        fruit1.add(option1);
    
        let option2 = document.createElement("option");
        option2.textContent = data[i].name;
        option2.value = data[i].name;
        fruit2.add(option2);
    
        let option3 = document.createElement("option");
        option3.textContent = data[i].name;
        option3.value = data[i].name;
        fruit3.add(option3);
    }
    } */
/*displayOrder(data)*/
    function displayOrder() {
  

        let orderReq = document.getElementById('comments').value;
        let name = document.getElementById('fname').value;
        let fruit1 = document.getElementById('dropdown1').value;
        let fruit2 = document.getElementById('dropdown2').value;
        let fruit3 = document.getElementById('dropdown3').value;

       
        document.getElementById('clickDate').textContent = new Date();
        document.getElementById('firstname').textContent = `${name}`;
        document.getElementById('spcrequests').textContent = `${orderReq}`;
        document.getElementById('fruit1').textContent = `${fruit1}`;
        document.getElementById('fruit2').textContent = `${fruit2}`;
        document.getElementById('fruit3').textContent = `${fruit3}`;
      /*   const fruits = data.filter(fruit => fruit.name === fruit1);
       
        console.log(fruits);
        const carbs = `${fruits.nutritions.carbohzydrates}`;
        console.log(carbs); */
        /* let fruitdata1 = data.filter(fruit.name == fruit1);
        
        /* let fruit1carbs = fruits.filter(function(fruit) {return fruit.name == document.getElementById('dropdown1').value;});
        let fruit2carbs = fruits.filter(function(fruit) {return fruit.name == document.getElementById('dropdown2').value ;});
        let fruit3carbs = fruits.filter(function(fruit) {return fruit.name == document.getElementById('dropdown3').value ;}); */
        /*let carbTotal = fruit1carbs[0].nutritions.carbohydrates + fruit2carbs[0].nutritions.carbohydrates + fruit3carbs[0].nutritions.carbohydrates;

        document.getElementById('totalCarbs').textContent = `${carbTotal}`; */
    }
    

    function displayFruit(selection) {
        let card = document.createElement('ul');
        let fruit = document.createElement('li');
        let carbs = document.createElement('li');
        let protein = document.createElement('li');
        let fat = document.createElement('li');
        let sugar = document.createElement('li');
        let calories = document.createElement('li'); 
        
        fruit.textContent = `Fruit: ${selection[3].name}`;
        carbs.textContent = `Carbs: ${selection[3].nutritions.carbohydrates}`;
        protein.textContent = `Proteins: ${selection[3].nutritions.protein}`;
        fat.textContent = `Fat: ${selection[3].nutritions.fat}`;
        sugar.textContent = `Sugar: ${selection[3].nutritions.sugar}`;
        calories.textContent = `Calories: ${selection[3].nutritions.calories}`; 
        
        card.appendChild(fruit);
        card.appendChild(carbs);
        card.appendChild(protein);
        card.appendChild(fat);
        card.appendChild(sugar);
        card.appendChild(calories); 

        cards.appendChild(card);

    };
  /* remove form and display reponse section when submit button is clicked */
    

    button.addEventListener("click", () => {
        if (response.style.display === 'none') {
        
            response.style.display = 'block';
            form.style.display = 'none';

          } else {
        
            response.style.display = 'none';
          }
    })
 


/* localstorage click counts */
function clickCounter() {
    if (typeof(Storage) !== "undefined") {
      if (localStorage.clickcount) {
        localStorage.clickcount = Number(localStorage.clickcount)+1;
      } else {
        localStorage.clickcount = 1;
      }
      document.getElementById("ordercount").innerHTML =  localStorage.clickcount;
    }
    else {
      document.getElementById("ordercount").innerHTML = "Count Error";
    }
  }
 
  