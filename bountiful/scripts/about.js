const response = document.querySelector('.contactResponse');
const form = document.querySelector('.formbody');
const button = document.querySelector('.submitBtn');


button.addEventListener("click", () => {
    if (response.style.display === 'none') {
    
        response.style.display = 'block';
        form.style.display = 'none';

      } else {
        
        response.style.display = 'none';
      }
      
})
