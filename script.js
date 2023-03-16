//your JS code here. If required.
const form = document.querySelector('form');
const ageInput = document.querySelector('#age');
const nameInput = document.querySelector('#name');
const submitBtn = document.querySelector('#btn');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  // Check if inputs are empty
  if (ageInput.value === '' || nameInput.value === '') {
    alert('Please fill in all fields');
    return;
  }
  
  // Get age and name from input values
  const age = parseInt(ageInput.value);
  const name = nameInput.value;

	const agePromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (age >= 18) {
        resolve(`Welcome, ${name}. You can vote.`);
      } else {
        reject(`Oh sorry ${name}. You aren't old enough.`);
      }
    }, 4000);
  });
  
  // Handle the promise
  agePromise
    .then((message) => {
      alert(message);
    })
    .catch((error) => {
      alert(error);
    });
  
  // Clear the inputs
  ageInput.value = '';
  nameInput.value = '';
});


