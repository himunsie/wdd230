const requestURL = "https://brotherblazzard.github.io/canvas-content/fruit.json";
const response = document.querySelector('.response');
const form = document.querySelector('.formbody');
const button = document.querySelector('.submitBtn');
const fruit1 = document.querySelector("#dropdown1");
const fruit2 = document.querySelector("#dropdown2");
const fruit3 = document.querySelector("#dropdown3");
const carbs = document.querySelector("#carbs");
const sugars = document.querySelector("#sugars");
const proteins = document.querySelector("#proteins");
const calories = document.querySelector("#calories");
const fats = document.querySelector("#fats");

let totalCarbs = 0;
let totalProteins = 0;
let totalFats = 0;
let totalCalories = 0;
let totalSugars = 0;

    async function fetchFruitApi() {
    try {
        const response = await fetch(requestURL);
        if (response.ok) {
        const fruitData = await response.json();
        
        console.log(fruitData);

        
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
        
       displayOrder();
      
       

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
        let phone = document.getElementById('tel').value;
        let email = document.getElementById('email').value;
        let fruit1 = document.getElementById('dropdown1').value;
        let fruit2 = document.getElementById('dropdown2').value;
        let fruit3 = document.getElementById('dropdown3').value;

       
        document.getElementById('clickDate').textContent = new Date();
        document.getElementById('firstname').textContent = `${name}`;
        document.getElementById('spcrequests').textContent = `${orderReq}`;
        document.getElementById('gmail').textContent = `${email}`;
        document.getElementById('phone').textContent = `${phone}`;
        document.getElementById('fruit1').textContent = `${fruit1}`;
        document.getElementById('fruit2').textContent = `${fruit2}`;
        document.getElementById('fruit3').textContent = `${fruit3}`;
        document.getElementById('1fruit').textContent = `${fruit1}`;
        document.getElementById('2fruit').textContent = `${fruit2}`;
        document.getElementById('3fruit').textContent = `${fruit3}`;
       
       /*  const fruits = data.filter(fruit => fruit.name === "Banana");
        fruitSelection = fruits.length;
       
        console.log(fruits); */
         /*let carb1 = data.filter(function (fruit) {
          return fruit.name == document.getElementById('dropdown1').value;
        });
        console.log(carb1);
      
        let carb2 = data.filter(function (fruit) {
          return fruit.name == document.getElementById('dropdown2').value;
        });
        let carb3 = data.filter(function (fruit) {
          return fruit.name == document.getElementById('dropdown2').value;
        });
        let carbTotal =
          carb1[0].nutritions.carbohydrates +
          carb2[0].nutritions.carbohydrates +
          carb3[0].nutritions.carbogyhrates;
          document.getElementById('carbs').textContent = `${carbTotal}`;
         */
      }
    
   


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
 
  